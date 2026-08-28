# Real Estate Investment Platform

A platform for real estate investors to showcase and manage investment opportunities with expandable financial details.

## Features

- **Show Opportunities** — Display a list of real estate investment opportunities with key details
- **Show More Money** — Toggle to reveal detailed financial projections, ROI, and cost breakdowns
- Investor-friendly interface for browsing and analyzing opportunities

## Tech Stack

- **Frontend:** React with Vite
- **Backend:** Node.js with Express
- **Database:** MongoDB (or SQLite for development)
- **Language:** JavaScript/TypeScript

## Project Structure

```
.
├── frontend/          # React application
├── backend/           # Express API server
├── package.json       # Root package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies: `npm run install-all`
3. Create `.env` in backend folder
4. Start development: `npm run dev`

## API Endpoints

- `GET /api/opportunities` — Get all investment opportunities
- `GET /api/opportunities/:id` — Get single opportunity with all details
- `POST /api/opportunities` — Create new opportunity (admin)

## Features in Progress

- [ ] Opportunity list component with expandable "Show More" feature
- [ ] Financial details display (ROI, profit projections, costs)
- [ ] User authentication for investors
- [ ] Investment tracking dashboard

## License

MIT License
