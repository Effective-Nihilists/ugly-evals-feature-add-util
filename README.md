# feature-add-util

A coding-agent eval task from [ugly-studio](https://github.com/Effective-Nihilists). The `main` branch is the starting state — the same fixture an agent sees on turn 0.

**Kind:** `feature`  •  **Tags:** `ts`, `vitest`

## Prompt

> Read the tests in src/slugify.test.ts. Create src/slugify.ts so the tests pass. Do not modify the test file.

## Success criteria

New file src/slugify.ts exports a named `slugify(input: string): string` that makes every test in src/slugify.test.ts pass (lowercase, trim, non-alnum → "-", collapsed runs, no leading/trailing "-"). Test file unchanged.

## Budget

- Max turns: 12
- Max cost (USD): 0.75
- Timeout: 150s

## Branches

Each eval run pushes a branch named `<model-slug>-<unix-timestamp>` (e.g. `opus-4-7-1745764987`, `auto-1745765012`). Diff any branch against `main` to see what that model produced.

## Local run

```bash
npm install
npm test  # if defined — see package.json
```

## Grading

If `eval/check.ts` exists, the eval harness runs it after the agent finishes. It returns a deterministic pass/fail scorecard.
