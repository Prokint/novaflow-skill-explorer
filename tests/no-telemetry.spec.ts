import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { expect, it } from 'vitest'

/** Every source file under the given directory, recursively. */
function sources(directory: string): string[] {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    if (statSync(path).isDirectory()) return sources(path)
    return /\.(?:ts|tsx)$/.test(name) && !name.endsWith('.spec.ts') && !name.endsWith('.spec.tsx') ? [path] : []
  })
}

it('ships no install telemetry or third-party reporting endpoint', () => {
  for (const file of [...sources('src'), ...sources('shared')]) {
    const text = readFileSync(file, 'utf8')
    expect(text, file).not.toMatch(/dsh-market\.com|reportDailyHeartbeat|telemetry-visitor|telemetry-opt-out|telemetry-day/)
  }
})
