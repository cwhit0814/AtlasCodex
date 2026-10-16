/*
 * Atlas Codex: the chemistry behind the structure comparison.
 *
 * Given RDKit (the RDKit.js WebAssembly module) and two SMILES strings, it finds the largest shared
 * skeleton, draws both molecules in one coordinate frame with that skeleton in register, and scores
 * how alike they are. No DOM here: compare.js draws the result. Runs in the browser and in Node.
 */
(function (root) {
  // skeleton: same elements, any bond order, so a moved double bond does not break a shared ring.
  // exact: same elements and bond orders. shape: any atom, any bond, the bare framework.
  const MODES = {
    skeleton: { AtomCompare: "Elements", BondCompare: "Any", RingMatchesRingOnly: true, CompleteRingsOnly: true },
    exact: { AtomCompare: "Elements", BondCompare: "Order", RingMatchesRingOnly: true, CompleteRingsOnly: true },
    shape: { AtomCompare: "Any", BondCompare: "Any", RingMatchesRingOnly: true, CompleteRingsOnly: true }
  };

  // V2000 molblock: fixed columns, so large atom counts never run together.
  function parseMolblock(mb) {
    const L = mb.split("\n");
    const na = +L[3].slice(0, 3), nb = +L[3].slice(3, 6);
    const atoms = L.slice(4, 4 + na).map((l) => ({ x: +l.slice(0, 10), y: +l.slice(10, 20), s: l.slice(31, 34).trim(), chg: 0 }));
    const bonds = L.slice(4 + na, 4 + na + nb).map((l) => ({ a: +l.slice(0, 3) - 1, b: +l.slice(3, 6) - 1, o: +l.slice(6, 9), st: +l.slice(9, 12) }));
    L.slice(4 + na + nb).forEach((l) => {
      if (!l.startsWith("M  CHG")) return;
      const f = l.slice(6).trim().split(/\s+/).map(Number);
      for (let i = 1; i + 1 < f.length; i += 2) if (atoms[f[i] - 1]) atoms[f[i] - 1].chg = f[i + 1];
    });
    return { atoms, bonds };
  }

  const popcount = (u8) => { let n = 0; for (let i = 0; i < u8.length; i++) { let v = u8[i]; while (v) { v &= v - 1; n++; } } return n; };
  function tanimoto(A, B) {
    const opts = JSON.stringify({ radius: 2, nBits: 2048 });
    const fa = A.get_morgan_fp_as_uint8array(opts), fb = B.get_morgan_fp_as_uint8array(opts);
    let both = 0; for (let i = 0; i < fa.length; i++) { let v = fa[i] & fb[i]; while (v) { v &= v - 1; both++; } }
    const u = popcount(fa) + popcount(fb) - both;
    return u ? both / u : 0;
  }

  // Largest deviation between paired atoms; picks the pairing of B that best sits on A's core.
  function bestPairing(PA, PB, ma, mbs) {
    let best = null, dev = Infinity;
    for (const mb of mbs) {
      let d = 0;
      for (let k = 0; k < ma.atoms.length; k++) { const a = PA.atoms[ma.atoms[k]], b = PB.atoms[mb.atoms[k]]; d = Math.max(d, Math.hypot(a.x - b.x, a.y - b.y)); }
      if (d < dev) { dev = d; best = mb; }
    }
    return { mb: best, dev };
  }

  const neighbours = (P) => { const adj = P.atoms.map(() => []); P.bonds.forEach((b) => { adj[b.a].push(b.b); adj[b.b].push(b.a); }); return adj; };

  // Shared atoms take A's positions exactly; every other atom moves with the core atom it hangs from.
  function snap(PA, PB, ma, mb) {
    const shift = new Map();
    mb.atoms.forEach((bi, k) => { const a = PA.atoms[ma.atoms[k]]; shift.set(bi, { x: a.x - PB.atoms[bi].x, y: a.y - PB.atoms[bi].y }); });
    const adj = neighbours(PB), queue = [...shift.keys()];
    while (queue.length) { const i = queue.shift(); for (const j of adj[i]) if (!shift.has(j)) { shift.set(j, shift.get(i)); queue.push(j); } }
    PB.atoms.forEach((a, i) => { const d = shift.get(i) || { x: 0, y: 0 }; a.x += d.x; a.y += d.y; });
    relieve(PB, new Set(mb.atoms));
  }

  // After snapping, a side group can land on top of another atom. Swing each crowded branch about the
  // core atom it hangs from, into the widest free angle there.
  function relieve(P, core) {
    const adj = neighbours(P);
    const branchOf = (anchor, start) => { const seen = new Set([start]), q = [start]; while (q.length) { const i = q.shift(); for (const j of adj[i]) if (j !== anchor && !core.has(j) && !seen.has(j)) { seen.add(j); q.push(j); } } return seen; };
    for (const c of core) {
      for (const n of adj[c]) {
        if (core.has(n)) continue;
        const br = branchOf(c, n);
        const crowded = [...br].some((i) => P.atoms.some((o, j) => !br.has(j) && j !== c && Math.hypot(o.x - P.atoms[i].x, o.y - P.atoms[i].y) < 0.5));
        if (!crowded) continue;
        const ang = (j) => Math.atan2(P.atoms[j].y - P.atoms[c].y, P.atoms[j].x - P.atoms[c].x);
        const others = adj[c].filter((j) => j !== n).map(ang).sort((x, y) => x - y);
        if (!others.length) continue;
        let gap = -1, mid = 0;
        others.forEach((t, k) => { const nxt = k + 1 < others.length ? others[k + 1] : others[0] + 2 * Math.PI; if (nxt - t > gap) { gap = nxt - t; mid = t + (nxt - t) / 2; } });
        const d = mid - ang(n), cs = Math.cos(d), sn = Math.sin(d), o = P.atoms[c];
        br.forEach((i) => { const a = P.atoms[i], x = a.x - o.x, y = a.y - o.y; a.x = o.x + cs * x - sn * y; a.y = o.y + sn * x + cs * y; });
      }
    }
  }

  // Bond lengths stay within a sane range after snapping (RDKit draws bonds at length 1).
  const sane = (P) => P.bonds.every((b) => { const d = Math.hypot(P.atoms[b.a].x - P.atoms[b.b].x, P.atoms[b.a].y - P.atoms[b.b].y); return d > 0.6 && d < 1.45; });
  const clone = (P) => ({ atoms: P.atoms.map((a) => ({ ...a })), bonds: P.bonds });

  // Rigid 2D fit (rotation, optional mirror, translation) of B's own drawing onto A's core, then the
  // shared atoms are snapped exactly into place and every other atom moves with the core atom it hangs from.
  function fitAndSnap(PA, PB, ma, mb) {
    const pa = ma.atoms.map((i) => PA.atoms[i]), pb = mb.atoms.map((i) => PB.atoms[i]);
    const cen = (P) => P.reduce((c, p) => ({ x: c.x + p.x / P.length, y: c.y + p.y / P.length }), { x: 0, y: 0 });
    const ca = cen(pa), cb = cen(pb);
    let best = null;
    for (const mirror of [1, -1]) {
      let sxx = 0, sxy = 0;
      pb.forEach((p, k) => { const bx = (p.x - cb.x) * mirror, by = p.y - cb.y, ax = pa[k].x - ca.x, ay = pa[k].y - ca.y; sxx += bx * ax + by * ay; sxy += bx * ay - by * ax; });
      const th = Math.atan2(sxy, sxx), c = Math.cos(th), s = Math.sin(th);
      const T = (p) => { const x = (p.x - cb.x) * mirror, y = p.y - cb.y; return { x: c * x - s * y + ca.x, y: s * x + c * y + ca.y }; };
      const err = pb.reduce((e, p, k) => { const t = T(p); return e + (t.x - pa[k].x) ** 2 + (t.y - pa[k].y) ** 2; }, 0);
      if (!best || err < best.err) best = { err, T };
    }
    PB.atoms.forEach((a) => { const t = best.T(a); a.x = t.x; a.y = t.y; });
    // When the two cores have different shapes, snapping would stretch bonds; keep the rigid fit instead.
    const worst = mb.atoms.reduce((d, bi, k) => Math.max(d, Math.hypot(PB.atoms[bi].x - PA.atoms[ma.atoms[k]].x, PB.atoms[bi].y - PA.atoms[ma.atoms[k]].y)), 0);
    if (worst > 0.35) return false;
    const trial = clone(PB);
    snap(PA, trial, ma, mb);
    if (!sane(trial)) return false;
    trial.atoms.forEach((a, i) => Object.assign(PB.atoms[i], a));
    return true;
  }

  /**
   * compare(R, smilesA, smilesB, mode) → {
   *   A: { atoms, bonds, core:Set<atom>, coreBonds:Set<bond> }, B: same,
   *   mcs: { atoms, bonds, canceled }, tanimoto, aligned: boolean,
 *   approximate: true when the shared cores differ in shape and are only best-fitted, not snapped
   * }
   */
  function compare(R, smilesA, smilesB, mode = "skeleton", timeout = 2) {
    const A = R.get_mol(smilesA), B = R.get_mol(smilesB);
    if (!A || !B) { A && A.delete(); B && B.delete(); throw new Error("structure could not be read"); }
    const list = new R.MolList(); list.append(A); list.append(B);
    const res = { tanimoto: tanimoto(A, B), aligned: false };
    let q = null;
    try {
      const mcs = JSON.parse(R.get_mcs_as_json(list, JSON.stringify({ ...MODES[mode], Timeout: timeout })));
      res.mcs = { atoms: mcs.numAtoms || 0, bonds: mcs.numBonds || 0, canceled: !!mcs.canceled };
      A.set_new_coords(true); B.set_new_coords(true);
      const PA = parseMolblock(A.get_molblock());
      let PB = parseMolblock(B.get_molblock());
      let ma = null, mb = null;
      if (res.mcs.atoms >= 3 && mcs.smarts) {
        q = R.get_qmol(mcs.smarts);
        ma = JSON.parse(A.get_substruct_match(q));
        if (ma.atoms && ma.atoms.length) {
          const natural = parseMolblock(B.get_molblock());
          // 1) let RDKit lay B out around A's core
          B.generate_aligned_coords(A, JSON.stringify({ useCoordGen: true, acceptFailure: true, referenceSmarts: mcs.smarts }));
          PB = parseMolblock(B.get_molblock());
          const mbs = JSON.parse(B.get_substruct_matches(q));
          const pick = bestPairing(PA, PB, ma, mbs);
          mb = pick.mb;
          // 2) a small drift (a substituent nudging one core atom): snap the core and swing crowded branches clear
          if (mb && pick.dev > 0.05 && pick.dev < 1) {
            const trial = clone(PB);
            snap(PA, trial, ma, mb);
            if (sane(trial)) { PB = trial; pick.dev = 0; }
          }
          // 3) still adrift: fit B's own drawing onto the core and snap
          if (!mb || pick.dev > 0.05) {
            PB = natural;
            const p2 = bestPairing(PA, PB, ma, mbs);
            mb = p2.mb || mbs[0];
            if (mb) res.approximate = !fitAndSnap(PA, PB, ma, mb);
          }
          res.aligned = !!mb;
        }
      }
      const pack = (P, m) => ({ ...P, core: new Set(m ? m.atoms : []), coreBonds: new Set(m ? m.bonds : []) });
      res.A = pack(PA, res.aligned ? ma : null);
      res.B = pack(PB, res.aligned ? mb : null);
      res.counts = { a: PA.atoms.length, b: PB.atoms.length };
    } finally {
      [A, B, list, q].forEach((m) => m && m.delete());
    }
    return res;
  }

  const api = { compare, parseMolblock, tanimoto, MODES };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.ATLAS_CHEM = api;
})(typeof window !== "undefined" ? window : globalThis);
