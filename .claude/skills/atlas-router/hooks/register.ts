/* Atlas Codex router mod: enforces what .claude/hooks/userPromptSubmit.js can only advise.
 *   tool.call   -> an MCP result over TRIM_AT characters reaches the model as its head plus the path of the
 *                  full text, so a scraped page is not re-sent on every later turn of a long session
 *   agent.spawn -> a general-purpose subagent with no model named runs on Sonnet instead of inheriting Opus
 *   turn.step   -> on a main-loop turn the hook classifies as a chore (git, lookup, small edit), effort is
 *                  lowered to "low"; never raised, and the model is never switched (that would drop the cache)
 * The classifier is the hook's own, run as `node <hook> --explain`, so there is one set of rules. */
import type { Register } from 'claude-code'

const TRIM_AT = 8000
const HOOK = '.claude/hooks/userPromptSubmit.js'
const OUT_DIR = '.claude/tool-output'
const CHORES = ['git', 'light', 'standard']
const EFFORTS = ['low', 'medium', 'high', 'xhigh', 'max']

export const register: Register = on => {
  // The tier of the prompt the current turn answers; module variables reset on reload, which only skips one turn.
  let pendingTier: string | null = null
  let turnId: string | undefined
  let lowered = false

  on('prompt.submit', async ($, e, next) => {
    pendingTier = null
    try {
      const { exitCode, stdout } = await $.process.run(['node', HOOK, '--explain', e.text], { timeoutMs: 3000 })
      if (exitCode === 0) pendingTier = stdout.split(' ')[0]
    } catch (error) {
      $.ui.log(`[atlas-router] classifier failed: ${String(error)}`, { to: 'debug' })
    }
    return next(e)
  })

  on('turn.step', async function* ($, e, next) {
    if (e.agentId) return yield* next(e)
    if (e.turnId !== turnId) {
      turnId = e.turnId
      const current = typeof e.effort === 'string' ? EFFORTS.indexOf(e.effort) : -1
      lowered = pendingTier !== null && CHORES.includes(pendingTier) && current > 0
      pendingTier = null
      if (lowered) $.ui.log(`[atlas-router] chore turn: effort ${e.effort} -> low`)
    }
    return yield* next(lowered ? { ...e, effort: 'low' as const } : e)
  })

  on('agent.spawn', async ($, e, next) => {
    if (e.fork || e.model || e.subagentType !== 'general-purpose') return next(e)
    $.ui.log(`[atlas-router] ${e.description}: general-purpose subagent -> sonnet`)
    return next({ ...e, model: 'sonnet' })
  })

  on('tool.call', async ($, e, next) => {
    const ran = await next(e)
    if (!e.tool.startsWith('mcp__') || ran.deny !== undefined || ran.isError || !ran.text || ran.text.length <= TRIM_AT) return ran
    const path = `${OUT_DIR}/${e.tool_use_id}.txt`
    try {
      await $.fs.write(path, ran.text)
    } catch (error) {
      return ran // never drop text that could not be saved
    }
    $.ui.log(`[atlas-router] ${e.tool}: ${ran.text.length} chars trimmed to ${TRIM_AT}, full text in ${path}`)
    const note = `\n\n[atlas-router: ${ran.text.length - TRIM_AT} more characters trimmed. Full result saved to ${path}; Read it with offset/limit if this part is not enough.]`
    return { result: { content: [{ type: 'text', text: ran.text.slice(0, TRIM_AT) + note }], isError: false } }
  })
}
