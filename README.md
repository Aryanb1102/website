# Cybersecurity Portfolio (Astro)

Professional personal website for a Computer Science student focused on cybersecurity, network infrastructure, data privacy, and tech policy.

## Tech Stack

- Astro + TypeScript
- Tailwind CSS
- React (for interactive animations)
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

1. Update `astro.config.mjs` with your GitHub Pages settings.
   - `PUBLIC_SITE`: `https://YOUR_USERNAME.github.io`
   - `PUBLIC_BASE`: `/<REPO_NAME>/` (for project pages) or `/` (for a user/organization page)

2. Build the site:

```bash
npm run build
```

3. Deploy the contents of the `dist/` folder to the `gh-pages` branch.

If you use GitHub Actions, set the environment variables in the workflow before running the build step.