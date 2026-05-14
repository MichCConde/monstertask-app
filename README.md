# Monster Task

Unified communication + task management platform for VAs, Clients, and Agency Admins.

## Stack
- Frontend: Next.js 15 + Tailwind + shadcn/ui + Firebase JS SDK + LiveKit
- Backend: Firebase (Auth, Firestore, Storage, Cloud Functions)
- Desktop: Electron wrapper around Next.js build
- Real-time voice: LiveKit Cloud

## Structure
- `frontend/` — Next.js web app (also serves as Electron renderer)
- `backend/` — Firebase Cloud Functions + security rules
- `desktop/` — Electron shell for Windows/macOS/Linux installers
- `docs/` — Architecture, API contracts, runbooks

## Dev Setup
See `docs/setup.md`. 
May 14, 2026