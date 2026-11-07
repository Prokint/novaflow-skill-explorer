# AGENTS.md — dsh-skill-explorer (NovaFlow fork)

This repository is a maintained fork of `dsh-skill-explorer` from
https://github.com/zhu1090093659/dsh-web. It exists for NovaFlow's bundled
desktop plugin and for secondary development.

## Invariants

- **No telemetry / no third-party reporting.** Do not add install heartbeats,
  analytics, or any request to `dsh-market.com`. The browser half must not
  make an external network call at boot. Keep the test suite's no-telemetry
  check passing.
- Host routes stay loopback-only; writes use the official skill roots.
- Preserve the upstream BSD-3-Clause `LICENSE` and the `NOTICE` attribution.

## Commands

```sh
pnpm install
pnpm run build
pnpm test
```

## Layout

- `src/index.ts` + `src/routes.ts` + `src/access.ts` + `src/collect.ts` +
  `src/frontmatter.ts` + `src/provider-toggles.ts` + `src/import.ts` — host half
  for `/api/dsh-skill-explorer/*`.
- `src/client/` — browser bundle, panel registration and UI.
- `shared/` — build/test presets derived from the upstream repo root
  (Apache-2.0; see `LICENSES/Apache-2.0.txt`). Do not edit for plugin behavior.
- `tests/` — vitest suite.

## Upstream sync

Keep the upstream remote configured, cherry-pick or merge upstream changes, then
re-run build/test. Record the upstream commit and local changes in
`UPSTREAM.md` (or the NovaFlow `SOURCES.json` when updating the bundled
snapshot).
