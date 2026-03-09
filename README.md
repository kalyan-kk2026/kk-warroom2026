# Assembly Constituency War Room Dashboard

A **frontend-only**, clear, real-time-style, data-driven, action-oriented dashboard for an Assembly Constituency War Room.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Log in with any role (Admin / Mandal / Booth) to view the dashboard.

## Features (UI + mock data)

1. **Voter Data Overview** — Total voters, gender split (pie), age breakdown, booth count, newly added/deleted
2. **Booth-Categorisation & Booth Incharges** — Booth list with in-charge, contact, strength, target votes, last result
3. **Volunteer & Cadre** — Active volunteers, mandal-wise bar chart, door-to-door & WhatsApp coverage
4. **Campaign Activity** — Daily schedule, meetings/rallies/star campaigner, social engagement, expenditure bar
5. **Survey & Feedback** — Sentiment pie (Positive/Neutral/Negative), key issues, influential support, swing voters
6. **Opposition Tracking** — Opponent profile, strengths/weaknesses, booth-level comparison bar chart
7. **Complaint & Issue Management** — Total/pending/resolved/critical, recent issues list with priority
8. **Polling Day** — Hourly turnout line chart, strong/weak booth turnout, vehicles, call center follow-up
9. **Data Visualization** — Pie (voter), bar (booth performance), line (campaign trend), heat map (strong/weak areas), live indicator
10. **Access Control** — Role-based login (Admin / Mandal / Booth), secure DB/backup/real-time placeholders
11. **Advanced** — GIS map, win probability bar, WhatsApp/call center/AI sentiment placeholders

## Stack

- **React 18** + **Vite**
- **Tailwind CSS**
- **Recharts** (pie, bar, line)
- **React Router**
- **Lucide React** (icons)

All data is mock; replace with API calls when wiring to a backend.
