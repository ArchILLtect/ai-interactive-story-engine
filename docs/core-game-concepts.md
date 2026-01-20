<!-- docs/core-game-concepts.md -->

## Overview
The AI Interactive Story Engine is a **single-player, run-based narrative game system** inspired by classic Choose Your Own Adventure books, roguelike structure, and modern AI-assisted storytelling.

The game is intentionally designed around **systems, not memory**. Consistency is achieved through deterministic rules and world state, with AI acting as a narrator rather than an authority.

---

## Core Concepts

### Run
A **Run** represents a single playthrough attempt.

- A Run begins when the player starts a new story
- A Run ends when the character dies, retires, or completes the final Act
- Runs may be finite or infinite depending on configuration

Runs are persisted and may later contribute to leaderboards, progression, or meta-systems.

---

### Act
An **Act** is a self-contained narrative segment.

Acts serve as:
- Narrative arcs
- Natural rest points
- Memory boundaries

At the start of an Act, the player may:
- Recover or reset certain resources
- Gain information about upcoming challenges
- Recruit companions or acquire items

Acts are designed to be playable independently in early versions.

---

### Turn
A **Turn** represents a single player decision and its resolution.

Each Turn includes:
- Narrative context
- A set of available choices
- A resolved outcome
- Updated game state

Turns are appended sequentially to a Run.

---

### World Model (System > Memory)
The game world is defined by **systems**, not accumulated prose.

Key components:
- Factions
- Regions
- Encounter tables
- Item tables
- Resolution rules

Because the world is deterministic, the AI does not need to remember long history — it is re-grounded each turn.

---

### Resolution Philosophy
Outcomes are intentionally non-binary:

- Success
- Partial Success
- Failure
- Death
- Retreat / Retirement

This allows for narrative richness without requiring complex combat systems in early versions.

---