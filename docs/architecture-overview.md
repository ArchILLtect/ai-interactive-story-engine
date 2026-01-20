<!-- docs/architecture-overview.md -->

## High-Level Architecture

The project follows a **modular, layered architecture**:

- UI Layer (Next.js App Router)
- API Layer (Route Handlers)
- Game Engine (Pure logic)
- Persistence (Prisma + Postgres)

---

## Key Principle: Pure Game Engine

The game engine:
- Contains no framework logic
- Is deterministic and testable
- Accepts state in, returns state out

This allows:
- Easy AI integration
- Offline simulation
- Future multiplayer or replay systems

---

## Data Flow

1. UI submits a choice
2. API validates and loads state
3. Engine resolves outcome
4. State is persisted
5. UI renders updated scene

---

## Persistence Strategy

- Runs and Turns are stored relationally
- Game state is stored as JSON
- Schema is flexible but controlled

---
