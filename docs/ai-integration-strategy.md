<!-- docs/ai-integration-strategy.md -->

## AI’s Role

AI is used as a **narrator and scene generator**, not as a rules engine.

The engine always decides:
- Valid choices
- Outcomes
- State transitions

AI only:
- Renders prose
- Adds flavor
- Expands descriptions

---

## Memory Strategy

AI context is intentionally limited:

- Act Bible (static)
- Current Act State
- Player State
- Last Turn summary

This keeps token usage predictable and cheap.

---

## Structured Output

All AI outputs must:
- Be valid JSON
- Follow predefined schemas
- Avoid introducing new facts

---

## Future Extensions

- AI-generated Acts
- Dynamic factions
- Personalized narration styles
- Difficulty scaling

---
