# Portfolio verification

Verified 21 October 2026, America/New_York.

## Build and dependencies

- `npm run build`: passed, including TypeScript checks for both the application and Vite configuration.
- `npm audit`: zero reported vulnerabilities after removing unused libraries and updating Vite and its React plugin.
- Production output: approximately 168 KB JavaScript / 54 KB gzip and 26 KB CSS / 6 KB gzip. Build output varies with source changes.
- Fonts are locally hosted WOFF2 subsets; the two critical faces are preloaded. Six font files total approximately 68 KiB (69,280 bytes). License texts are shipped with them.
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

## Completed follow-up

Reviewed at 9:55 PM Eastern on 21 October 2026.

- Fetched origin; local `main` and `origin/main` both pointed to `c62caf9`, with no ahead/behind commits and no tracked local changes.
- The five pre-review commits ran from 9:24 PM to 9:39 PM Eastern. This final review and report extend the work beyond the requested 30-minute span.
- Vercel status for `c62caf9`: success, “Deployment has completed”.
- Production home page: HTTP 200, HTML. Resume: HTTP 200, `application/pdf`, 120,664 bytes. Social image: HTTP 200, `image/png`, 33,243 bytes. Favicon: HTTP 200, `image/svg+xml`, 334 bytes. Archivo 500 font: HTTP 200, `font/woff2`, 11,864 bytes. Sitemap: HTTP 200, XML, 167 bytes.
- Focused live browser check: selected the PrivMed project-preview tab; `aria-selected` changed to `true` and the preview link pointed to `https://github.com/sujalalmeida/privmed`. Restored the previously selected Plan preview afterward.
- Recounted all six WOFF2 files: 69,280 bytes. Corrected the earlier approximate font-size total above.
- No concrete regression was found. Only this verification report changed, so the already-passing build was not rerun.
- Unrelated untracked `Test`, `Test.c`, `a.out`, `tcd`, and `tcd.c` files were preserved.
- This completes the single scheduled review; no ongoing maintenance is scheduled by this task.
