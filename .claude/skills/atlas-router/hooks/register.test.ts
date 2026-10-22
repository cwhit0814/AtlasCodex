import { expect, test } from 'claude-code/testing'

test('a long MCP result is trimmed and saved whole; a short one passes', async ($, on) => {
  const long = 'x'.repeat(20000)
  const written: string[] = []
  on('fs.write', (_, e) => { written.push(e.text); return { value: undefined } })
  on('tool.call', (_, e) => ({ result: {}, text: e.tool === 'mcp__web__scrape' ? long : 'short' }))

  const trimmed = await $.tool.call({ tool: 'mcp__web__scrape', url: 'https://example.com' })
  const text = JSON.stringify(trimmed.result)
  expect(text.length < 9000).toBe(true)
  expect(text.includes('.claude/tool-output/')).toBe(true)
  expect(written).toEqual([long])

  const short = await $.tool.call({ tool: 'mcp__web__other' })
  expect(short.text).toBe('short')
})

test('only an unpinned general-purpose subagent is moved to sonnet', async ($, on) => {
  const models: (string | undefined)[] = []
  on('ui.log', () => ({ value: undefined }))
  on('agent.spawn', (_, e) => { models.push(e.model); return { model: e.model ?? 'inherited' } })

  await $.agent.spawn({ prompt: 'p', description: 'd', subagentType: 'general-purpose' })
  await $.agent.spawn({ prompt: 'p', description: 'd', subagentType: 'general-purpose', model: 'opus' })
  await $.agent.spawn({ prompt: 'p', description: 'd', subagentType: 'atlas-scout' })
  expect(models).toEqual(['sonnet', 'opus', undefined])
})
