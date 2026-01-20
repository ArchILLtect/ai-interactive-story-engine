# AI Interactive Story Engine

AI-powered interactive story game engine built around Act-based runs. Players experience branching narratives with meaningful choices, auto-resolved encounters, and roguelike outcomes. Designed to start with static Acts and evolve into fully AI-generated stories with persistent accounts and leaderboards.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Neon) with Prisma ORM
- **Authentication**: Auth.js v5 with AWS Cognito

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (recommended: Neon)
- AWS Cognito user pool (for authentication)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ArchILLtect/ai-interactive-story-engine.git
cd ai-interactive-story-engine
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and configure:
- `DATABASE_URL` - Your Neon PostgreSQL connection string
- `AUTH_SECRET` - Generate with `openssl rand -base64 32`
- `COGNITO_CLIENT_ID`, `COGNITO_CLIENT_SECRET`, `COGNITO_ISSUER` - From AWS Cognito

4. Set up the database:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── auth/[...nextauth]/   # Auth.js authentication
│   │   ├── runs/                 # Story run endpoints
│   │   └── leaderboard/          # Leaderboard endpoint
│   ├── run/[runId]/              # Dynamic story run page
│   ├── profile/                  # User profile (protected)
│   ├── leaderboard/              # Leaderboard page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── lib/                          # Utility libraries
│   ├── auth.ts                   # Auth.js configuration
│   └── prisma.ts                 # Prisma client
├── prisma/
│   └── schema.prisma             # Database schema
└── package.json
```

## API Routes

### Story Runs

- `POST /api/runs` - Create a new story run
  - Body: `{ userId?: string }`
  - Returns: Created run object

- `GET /api/runs/[runId]` - Get run details with all turns
  - Returns: Run object with turns array

- `POST /api/runs/[runId]/turn` - Create a new turn
  - Body: `{ choice: object, outcome: object }`
  - Returns: Created turn object

### Leaderboard

- `GET /api/leaderboard` - Get top 100 leaderboard entries
  - Returns: Array of leaderboard entries sorted by score

## Database Schema

### Run
- Stores story run state and metadata
- JSON `state` field for flexible game state
- Status tracking: active, completed, abandoned

### Turn
- Individual player choices and outcomes
- Links to parent Run with cascade delete
- JSON fields for choice and outcome data

### LeaderboardEntry
- Player rankings and statistics
- Score and run count tracking
- Optional metadata for achievements

### Auth Models
- User, Account, Session, VerificationToken
- Standard Auth.js schema for Cognito integration

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Authentication

The app uses Auth.js (NextAuth v5) with AWS Cognito. Protected routes:
- `/profile` - Requires authentication

To add more protected routes, edit `lib/auth.ts` callback.

## Development Roadmap

- [ ] Implement story content generation
- [ ] Add user registration/login UI
- [ ] Create run management dashboard
- [ ] Build interactive story flow
- [ ] Add achievements system
- [ ] Implement real-time leaderboard updates

## License

MIT
