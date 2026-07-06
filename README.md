# HealBKK

HealBKK is a Thai-language, mood-based healing-place recommender for Bangkok.
It helps people find calming, restorative places based on their current
mood, budget, available time, preferred area, and preferred type of healing
activity. The entire user-facing UI is in Thai; code, file names, and
comments are in English.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Recharts (analytics dashboard)
- lucide-react (icons)
- Local TypeScript data (`data/places.ts`) — no backend required for v1

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  page.tsx            -> landing page
  find/page.tsx        -> mood quiz + recommendation results
  browse/page.tsx       -> browse all places, filters + search
  places/[id]/page.tsx  -> place detail page
  assistant/page.tsx    -> AI healing assistant (mock, LLM-ready)
  dashboard/page.tsx    -> analytics dashboard
  about/page.tsx        -> platform concept / about page
  layout.tsx, globals.css

components/
  Navbar.tsx, PlaceCard.tsx, MoodSelector.tsx,
  FilterPanel.tsx, ScoreBadge.tsx, DashboardCharts.tsx

data/
  places.ts   -> 20 sample healing places across 5 categories

lib/
  types.ts           -> shared TypeScript types
  recommendation.ts  -> weighted "Healing Fit Score" scoring engine
  aiMock.ts          -> mock AI assistant (keyword parsing, LLM-ready)
  analytics.ts       -> mock analytics/dashboard data helpers
  tagLabels.ts       -> Thai labels for internal English tag keys
```

## Expanding the data

`data/places.ts` currently ships with 20 sample places (4 per category).
The `Place` type in `lib/types.ts` is designed to scale to 100 places —
simply add more objects to the `places` array following the same shape.

## Connecting a real AI model

`lib/aiMock.ts` currently parses simple Thai keywords from user input. To
connect a real LLM (e.g. the Claude API or OpenAI API), replace the body of
`getAiAssistantResponse` with a real API call — the function signature and
return shape (`AiAssistantResult`) can stay the same so the UI in
`app/assistant/page.tsx` needs no changes. An example request shape for the
Claude API is included as a comment in that file.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel will auto-detect **Next.js** as the framework — no extra config
   needed.
4. Click **Deploy**.

No environment variables are required for the base version (mock AI +
local data). If you connect a real LLM API, add the relevant API key as an
environment variable in the Vercel project settings.
