# Upstream

- Repository: https://github.com/zhu1090093659/dsh-web
- Base commit: d9058cd0f635c91413962ffc43b1b0f728e20a12 (main)
- Upstream package: `packages/dsh-skill-explorer`, version 0.4.15
- Upstream package license: BSD-3-Clause (`LICENSE`)
- Upstream repository license: Apache-2.0; `shared/` build/test presets are copied from the repository root and remain Apache-2.0 (`LICENSES/Apache-2.0.txt`).

## Local changes

- Package renamed to `dsh-skill-explorer`; version restarted at 0.1.0.
- Anonymous install heartbeat and every `dsh-market.com` telemetry path removed
  (`src/client/telemetry.ts` deleted; no reporter call; no version baking for it).
- Standalone root layout (package files at the repository root) so the build
  does not need the full upstream monorepo.
- NovaFlow branding in the README; telemetry documentation removed.
- Added a regression test that fails if telemetry code or endpoints return.

## Sync procedure

```sh
git remote add upstream https://github.com/zhu1090093659/dsh-web.git
git fetch upstream
# inspect upstream packages/dsh-skill-explorer changes
# cherry-pick or copy the relevant source, then:
pnpm install
pnpm test
pnpm run build
```

When the built snapshot changes in NovaFlow, update
`apps/desktop/third-party/dsh-skill-explorer/`, `SOURCES.json`, and the bundled
plugin version in `apps/desktop/src/novaflow/bundled-plugins.ts`.
