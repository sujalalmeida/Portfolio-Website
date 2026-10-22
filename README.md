# Sujal Almeida — Portfolio

A React + TypeScript portfolio focused on AI, privacy and useful software. Built with Vite and plain CSS, with locally hosted Archivo and Space Grotesk fonts. The design uses UI/UX Pro Max guidance, a paper background, green typography and red accents.

## Development

Use Node.js 22.19+ (Node 22 is recommended).

```sh
npm ci
npm run dev
```

The local preview runs at `http://localhost:8080`.

```sh
npm run build # includes application and Vite-config type checks
npm run check
npm run preview
```

## Updating content

- `src/data/portfolio.ts`: featured projects, technology lists, project details and contact links.
- `src/pages/Index.tsx`: experience, education and publications.
- `public/Sujal-Almeida-Resume.pdf`: the downloadable resume.
- `src/index.css`: design tokens, layouts, project sketches, responsive rules and reduced-motion behavior.
- `docs/portfolio-research.md`: source audit and project selection rationale.

Project drawings are conceptual illustrations, not screenshots of the applications. CivicEcho is supported by the resume and deliberately links there because a matching public repository was not verified.

## Deployment

The existing Vercel project builds with `npm run build` and publishes `dist/` when `main` is pushed. The production domain is https://sujalalmeida.vercel.app/. `vercel.json` rewrites extensionless paths for the client-rendered fallback page and caches hashed assets. No form service, API key or runtime environment variables are needed. Contact opens an email draft; copying the email uses the Clipboard API.

When changing the production domain, update canonical/social URLs, `public/robots.txt`, and `public/sitemap.xml` together. Font licenses are included in `public/fonts/`.
