# React Ticket App — EMIRATE (Single-framework deliverable)

This is the **React** implementation of the Multi-Framework Ticket Web App challenge.
It contains:
- Landing page with wavy hero and decorative circles
- Auth (Login/Signup) simulated using `localStorage` with the key `ticketapp_session`
- Protected Dashboard and Tickets (CRUD) stored in `localStorage`
- Responsive layout, accessible form labels, and status color rules

## Quick start (development)

Requirements:
- Node.js 18+ and npm

1. Install dependencies
```bash
npm install
```

2. Run the dev server
```bash
npm run dev
```

The app will be served by Vite (usually at http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Project structure (important files)
- `index.html` - entry html
- `public/assets/` - shared SVGs (wave-hero.svg)
- `src/` - source code
  - `components/` - Header, Footer, TicketCard, TicketForm, ProtectedRoute
  - `pages/` - Landing, AuthLogin, AuthSignup, Dashboard, Tickets
  - `utils/` - auth.js (session handling), storage.js (tickets localStorage)
  - `index.css` - shared styles and layout rules
  - `main.jsx`, `App.jsx` - router and app root

## Authentication & session
- Authentication is simulated. On login/signup, a session object is stored in `localStorage` under the key **ticketapp_session**.
- Protected routes check for the presence of this key and redirect to `/auth/login` if missing.
- Use the example test user to sign in quickly:
  - Email: `test@emirate.com`
  - Password: `password123`

## Ticket data model
A ticket object looks like:
```json
{ 
  "id":"string",
  "title":"string", 
  "description":"string", 
  "status":"open|in_progress|closed", 
  "priority":"low|medium|high", 
  "createdAt": 1630000000000 
}
```

## UI & Accessibility Notes
- All inputs have labels; forms show inline validation messages.
- Color contrasts chosen for status tags; focus outlines visible for keyboard users.
- Container max-width is enforced (1440px) and layout adapts on mobile/tablet.

## Known limitations
- This is a frontend-only demo using `localStorage`. For production, replace localStorage usage with a secure backend and real token management.
- No third-party toast library included — browser `alert()` used for quick feedback; replace with `react-toastify` for production.

## License & credits
Built for HNG Internship challenge by **EMIRATE**.
