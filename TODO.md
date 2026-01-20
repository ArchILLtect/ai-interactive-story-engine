# AI Interactive Story Engine

This file tracks intentional next steps as the project transitions from
**scaffolded infrastructure** to a **playable story engine**.

---

## Phase 1 — From Scaffold to Playable Core (Current Focus)

### Core Engine
- [ ] TODO(P1): Replace stub logic with Act engine + MOXIE resolution
  - Implement a rules engine that:
    - Tracks MOXIE as a first-class system
    - Resolves choices into outcomes (Success / Partial / Fail / etc.)
    - Ends an Act when MOXIE reaches 0
  - This logic should live outside API routes (pure functions)

- [ ] TODO(P1): Define a static Act seed (hardcoded JSON or TS object)
  - Initial scene text
  - Available choices
  - Choice metadata (risk level, MOXIE cost)
  - Act goal and failure conditions

- [ ] TODO(P1): Wire `POST /api/runs` to:
  - Create a new Run
  - Initialize Act State
  - Set starting MOXIE, stats, and health
  - Return the first scene + choices

---

## Phase 2 — Turn Resolution & UI Wiring

- [ ] TODO(P1): Implement `POST /api/runs/[runId]/turn`
  - Accept a player choice
  - Resolve outcome via rules engine
  - Update MOXIE, health, and state
  - Append Turn record
  - Return next scene + choices

- [ ] TODO(P1): Update `/run/[runId]` page to:
  - Render scene text
  - Display available choices
  - Show MOXIE and Health (descriptive only, not numeric)
  - Handle Act end states gracefully

---

## Phase 3 — Persistence & Progression

- [ ] TODO(P2): Connect Neon PostgreSQL
- [ ] TODO(P2): Run initial Prisma migration
- [ ] TODO(P2): Persist Runs and Turns fully
- [ ] TODO(P2): Allow anonymous runs (optional userId)

---

## Phase 4 — Authentication & Identity

- [ ] TODO(P3): Configure AWS Cognito user pool
- [ ] TODO(P3): Wire Auth.js fully
- [ ] TODO(P3): Associate runs with authenticated users
- [ ] TODO(P3): Protect additional routes as needed

---

## Phase 5 — AI Integration (Future)

- [ ] TODO(P4): Replace static Act narration with AI-assisted generation
- [ ] TODO(P4): Enforce structured JSON outputs
- [ ] TODO(P4): Implement summarization for long runs
- [ ] TODO(P4): Add rate limiting and cost controls

---

## Notes
- Gameplay correctness > polish
- Systems before UI refinement
- Acts before infinite runs
