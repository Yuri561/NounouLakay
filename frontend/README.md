# NOUNOU LAKAY — Enhanced Frontend v2

A responsive **React 18 + TypeScript + Vite + Tailwind CSS** frontend for a proposed Haitian home-services agency, connecting families with childcare, cleaning and maintenance workers.

## Scope

This is a **frontend demonstration**, not an operating placement agency. Worker profiles are fictional. No worker has been verified, and no booking, payment, contact message, background check or notification is actually sent. The agency area is not access-controlled. **Do not enter real sensitive information.**

## New in v2

- More detailed homepage and navigation
- Family weekly care planner (`/espas-fanmi/plan`): create and remove service schedules
- Worker learning center (`/espas-travayè/fòmasyon`): filters, expandable lessons, progress tracking
- Agency interview planner (`/espas-ajans/entèvyou`): schedule interviews and change demo statuses
- Safety and trust center (`/sekirite`)
- Expandable FAQ (`/kesyon`)
- Transparent pricing/business-model page (`/tarif`) — no invented pricing
- Contact-form preview (`/kontakte`) — does not send messages
- Expanded footer and dashboard navigation

## Existing features

- Public landing page, service categories, worker directory and individual worker profiles
- Family service-request form and worker application form
- Family, worker and agency dashboards
- Favorites, sample application and request status management, CSV exports
- Responsive layout, Haitian Creole copy, sample data
- `vercel.json` SPA rewrite for direct links and reloads

## Run locally

1. Extract the archive to a **new folder outside OneDrive**, such as `C:\Projects\NounouLakay\frontend`.
2. Open that folder (the one containing `package.json`) in VS Code.
3. Run:

```powershell
npm install
npm run dev
```

For a production check:

```powershell
npm run typecheck
npm run build
```

The build has **not** been verified in the artifact environment because npm installation timed out. TypeScript syntax and relative imports were checked separately.

## Troubleshooting multiple React installs

Keep `node_modules` out of source control. If you see `Objects are not valid as a React child` with keys `$$typeof`, `type`, `props`, run `npm ls react react-dom` inside the project. This project pins React and React DOM to `18.3.1` and sets `resolve.dedupe` in `vite.config.ts`. If using a parent folder with an old `node_modules`, move this project into its own clean folder first.

## Connecting your backend later

- Local state and actions: `src/context/AppContext.tsx`
- Models/types: `src/types/index.ts`
- Mock worker records: `src/data/seed.ts`
- Lesson content: `src/data/training.ts`
- Routes: `src/App.tsx`

Replace browser storage actions with authenticated API calls later. Childcare services require screening, privacy controls, safeguarding procedures, and clear responsibility before real operation.
