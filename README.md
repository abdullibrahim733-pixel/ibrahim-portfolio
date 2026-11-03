# Ibrahim Abdull Portfolio

Personal portfolio for Ibrahim Abdull, a Tanzanian engineer, developer and technology entrepreneur.

## Stack

- React and TypeScript
- Vite
- CSS with responsive layouts and motion preferences
- Supabase resource catalog
- Vercel deployments from the `main` branch

## Local development

```sh
npm ci
npm run dev
```

Build the production site with `npm run build`.

## Pages

- `/` — portfolio home
- `/work` — selected work
- `/work/:slug` — project detail pages
- `/resources` — searchable resource library

## Resource database

The public `resources` table is hosted in Supabase. Anonymous visitors can read published entries; write access is restricted to trusted project-side administration. Add file URLs in the `resource_url` column when the PDF and video files are ready.

Required client build environment variables are listed in `.env.example`. Never commit actual secrets.
