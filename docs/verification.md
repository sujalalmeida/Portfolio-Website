# Portfolio verification

Verified 21 October 2026, America/New_York.

## Build and dependencies

- `npm run build`: passed, including TypeScript checks for both the application and Vite configuration.
- `npm audit`: zero reported vulnerabilities after removing unused libraries and updating Vite and its React plugin.
- Production output: approximately 168 KB JavaScript / 54 KB gzip and 26 KB CSS / 6 KB gzip. Build output varies with source changes.
- Fonts are locally hosted WOFF2 subsets; the two critical faces are preloaded. Six font files total approximately 63 KB. License texts are shipped with them.
- The repository uses npm and Node 22. Removed the stale Bun lockfile and unused starter assets.

## Browser checks

Native in-app browser, with explicit responsive viewport overrides:

| Width | Horizontal overflow | Project count | Unlabeled buttons |
| --- | --- | --- | --- |
| 320 | None | 6 | 0 |
| 375 / 390 | None | 6 | 0 |
| 768 | None | 6 | 0 |
| 1024 | None | 6 | 0 |
| 1440 | None | 6 | 0 |

- Along, PrivMed and Plan preview tabs switch both visual content and destination links. Arrow keys move selection/focus between tabs.
- AI & privacy filtering shows PrivMed, TruthLens and CivicEcho. Returning to All work restores all six projects.
- Native details disclosures expose project context and implementation details.
- Mobile navigation opens/closes, closes when following a link, and supports Escape with focus returned to its button.
- Email copy shows a confirmation. The direct email link remains available if Clipboard API access fails.
- One main landmark and one h1; named sections, project articles, controls and source links.
- Foreground/background contrast measurements on real reading text passed 4.5:1. Decorative diagrams are excluded from the accessibility tree.
- Reduced-motion CSS is present in the deployed stylesheet. No continuous animation, WebGL renderer, typing loop or auto-rotating content remains. A full assistive-technology audit and OS-level text-scaling test were not performed.

## Production checks

- Production: `https://sujalalmeida.vercel.app/`.
- GitHub Vercel commit status for `e1b827d`: success, “Deployment has completed”.
- Browser rendering verified on the production domain.
- Resume PDF, social preview PNG, SVG favicon, font and sitemap: HTTP 200 with the expected content types.
- Extensionless unknown route renders the styled fallback; its return link loads the home page. Vercel serves the SPA shell with HTTP 200 for these paths.
- Plan's live app and both publication destinations: HTTP 200 following redirects.
- CivicEcho links to the supplied resume because its public repository was not verified. Empty and duplicate repositories are not presented as separate finished projects.

## Follow-up

A final, bounded production review is planned for 9:55 PM Eastern on 21 October 2026. Record actual results here when it runs; this line is not a claim that the future review has already happened.
