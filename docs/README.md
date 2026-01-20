# Design & Architecture Docs

This directory contains the **canonical design documentation** for the **AI Interactive Story Engine**.

These documents define the *intentional systems*, *mechanics*, and *architectural boundaries* of the project. They are written to guide development decisions, prevent scope drift, and make future contributions (including by future-you) coherent and predictable.

> **Rule of thumb:** If code behavior is unclear, the answer should exist somewhere in `/docs/`.

---

## 📚 Document Index

### 🎮 Core Game Design

#### [`core-game-concepts.md`](./core-game-concepts.md)
Defines the foundational gameplay structure:
- Runs, Acts, and Turns
- Narrative pacing and rest points
- World Model > Memory philosophy
- Resolution types (success, partial, failure, death, retreat)

Read this first if you want to understand *how the game works at a conceptual level*.

---

### ⚡ MOXIE System

#### [`moxie-system.md`](./moxie-system.md)
Formal definition of **MOXIE**, the primary pacing and risk mechanic:
- What MOXIE represents
- MOXIE bands and outcome bias
- Cost, refund, and depletion rules
- How MOXIE ends an Act or Run

This document is critical for implementing turn resolution and balancing gameplay.

---

### 🏗 Architecture

#### [`architecture-overview.md`](./architecture-overview.md)
Explains how the system is structured technically:
- UI, API, Engine, and Persistence layers
- Pure game engine principle
- Data flow from player choice → outcome
- Persistence strategy with Prisma/Postgres

Read this before making large refactors or introducing new subsystems.

---

### 🤖 AI Integration

#### [`ai-integration-strategy.md`](./ai-integration-strategy.md)
Defines how AI is used *and intentionally constrained*:
- AI as narrator, not rules engine
- Context and memory budgeting
- Structured JSON outputs
- Guardrails against hallucination and drift

This document exists to keep AI usage predictable, affordable, and safe.

---

## 🧭 How to Use These Docs

- **Gameplay questions** → start with `core-game-concepts.md`
- **Turn resolution or balance questions** → `moxie-system.md`
- **Code structure or refactor questions** → `architecture-overview.md`
- **Anything involving AI** → `ai-integration-strategy.md`

If a new system is introduced and not documented here, it is considered *incomplete*.

---

## 🚧 Living Documents

These files are expected to evolve.

When making meaningful changes:
- Update the relevant doc
- Prefer clarity over cleverness
- Treat docs as part of the system, not an afterthought

---

## ✨ Design Philosophy (TL;DR)

- Systems over memory
- Determinism over improvisation
- Acts over infinite context
- AI narrates, systems decide

If those principles remain true, the project stays healthy.
