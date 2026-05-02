# AQW Ultra Guide

A community-built website design for an AQW (AdventureQuest Worlds) Ultra Boss guide by Aenaen ("Cruel"). It's a single-page React app showcasing strategies, mechanics, and class builds for various Ultra Bosses (Champion Drakath, Ultra Nulgath, Ultra Dage, etc.).

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite 6
- **UI library:** Radix UI primitives + custom components
- **Styling:** Tailwind-style utility classes via custom CSS
- **Icons:** lucide-react

## Project Structure

- `src/main.tsx` — React entry point
- `src/App.tsx` — Main application component
- `src/components/` — Boss guide components and UI primitives
- `src/assets/` — Image assets (referenced via `figma:asset/...` aliases mapped in `vite.config.ts`)
- `src/index.css`, `src/styles/globals.css` — Global styles
- `index.html` — HTML entry point

## Development

- `npm run dev` — Starts Vite dev server on port 5000 (host `0.0.0.0`)
- `npm run build` — Produces a static build in the `build/` directory

## Replit Setup

- A workflow named **"Start application"** runs `npm run dev` and serves on port 5000.
- Vite is configured with `host: '0.0.0.0'`, `port: 5000`, and `allowedHosts: true` to work behind Replit's iframe proxy.
- Deployment is configured as a **static** deployment: build with `npm run build`, publish the `build/` directory.
