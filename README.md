# Xingyu Xiao — academic website

Bilingual academic portfolio for 萧星宇 / Xingyu Xiao, focused on nuclear human reliability, digital main control rooms, intelligent decision support, and high-autonomy nuclear operations.

- Canonical URL: `https://www.xiaoxingyu2001.com`
- Chinese site: `/`
- English site: `/en/`
- Hosting: GitHub Pages through GitHub Actions
- Runtime services: none

## Technology

- Astro with fully static output
- TypeScript with strict checking
- CSS custom properties and system fonts
- Small progressive-enhancement script for language compatibility, filtering, DOI copying, mobile navigation, and theme preference
- GitHub Actions using the official Pages actions

The generated `dist/` directory contains ordinary HTML, CSS, JavaScript, images, metadata, and redirect files. The site does not require Node, Python, a database, a private server, or an API key after deployment.

## Local development

Requirements: Node.js 20.19 or newer and npm.

```bash
npm install
npm run dev
```

Astro prints the local preview address. Open that address in a browser.

## Quality and build commands

```bash
npm run lint
npm run typecheck
npm run build
npm run verify:build
npm run check
npm run preview
```

`npm run check` is the release gate. It lints, type-checks, builds, validates internal links and metadata, checks required routes, and scans generated files for prohibited server references.

## Project structure

```text
src/
  components/       Page sections and reusable cards
  data/             Profile, publications, projects, honors, service
  i18n/             Shared Chinese and English interface text
  layouts/          SEO, structured data, navigation, global behavior
  pages/            Static Chinese, English, project, and 404 routes
  styles/           Design system and responsive layout
public/
  images/           Optimized public portrait and WeChat image
  projects/         Legacy static redirect entries
  CNAME             Canonical custom domain
  robots.txt
  sitemap.xml
scripts/
  check-build.mjs   Generated-site validation
.github/workflows/
  deploy-pages.yml  CI and GitHub Pages deployment
```

The original 3.3 GB mixed workspace remains under `academic-website/` on the local machine and is intentionally ignored. It contains secrets, nested repositories, research data, full-text papers, build products, and backend services and must never be staged.

## Updating the biography

Edit `profile.shortBio`, `profile.role`, and the relevant copy in `src/data/site.ts`. Each public statement has separate `zh` and `en` text. Run `npm run check` before publishing.

## Updating statistics

Edit `profile.stats` in `src/data/site.ts`. Keep the visible date note accurate, use approximate signs for estimates, and reconcile figures against the newest formal CV.

## Adding a publication

Add one typed record to `publications` in `src/data/site.ts`. Required fields include title, full author order, venue, year, status, and topics. Add a DOI only after verifying it on the publisher page or the paper front matter. Do not add live citation counts or redistribute a publisher PDF without permission.

## Adding a project

Add a record to `projects` in `src/data/site.ts`. The static Chinese and English detail pages are generated automatically. State whether the item is published research, a research prototype, an archived demo, or a published dataset. Do not imply deployment or individual ownership of team results without evidence.

## Replacing the portrait

Replace both:

- `public/images/xingyu-xiao.jpg`
- `public/images/xingyu-xiao.webp`

Keep a 2:3 aspect ratio, remove private metadata if present, and preserve the width/height used by the page to avoid layout shift. Update `public/apple-touch-icon.png` if desired.

## Updating the CV

No public CV PDF is included because no current, privacy-reviewed formal PDF was found in the supplied directory. When one is available:

1. remove private phone numbers, addresses, IDs, private plans, and restricted research;
2. save it as `public/cv/xingyu-xiao-cv.pdf`;
3. add a download link only after checking the final PDF visually;
4. update `src/data/site.ts` and the August 2026 statistics note where needed.

## Bilingual content

The Chinese site is the default. English routes are generated under `/en/`. Shared interface labels live in `src/i18n/`; substantive Chinese and English profile text lives together in `src/data/site.ts` to make mismatches visible during review.

Legacy `?lang=zh` and `?lang=en` links are handled in the browser and redirect to the equivalent static route. The selected language and theme are stored only on the visitor's device.

## GitHub Pages deployment

Every pull request runs lint, type-check, build, and generated-site validation. A push to `main`, or a manual workflow dispatch, additionally uploads `dist/` and deploys through the `github-pages` environment.

Repository Settings → Pages must use **GitHub Actions** as the source. The custom domain must be registered as `www.xiaoxingyu2001.com`. See `DNS_MIGRATION.md` before changing DNS.

## Common issues

- **A deep link returns 404:** confirm the page exists in `dist/<route>/index.html` and that the repository is using Actions deployment.
- **CSS or images are missing:** this is a user-site build and assets use root-relative URLs. Do not add a repository subpath to Astro's base configuration.
- **The custom domain warns about DNS:** remove conflicting `www` A/AAAA records, create the required CNAME, wait for propagation, then re-check Pages settings.
- **The old interactive tool no longer runs:** GitHub Pages has no Python or Node backend. Preserve it as an archived description or migrate the computation to a fully browser-only implementation.
- **A publication count differs:** update the typed data only after checking the newest formal CV and public publication records.

## Documentation

- `MIGRATION_AUDIT.md`: legacy inventory and adopted route
- `LEGACY_URL_MIGRATION.md`: old-to-new URL mapping
- `DNS_MIGRATION.md`: exact DNS change and rollback procedure
- `SECURITY_CHECK.md`: release security boundary and scan results
- `CONTENT_UPDATE_GUIDE.md`: nontechnical content-maintenance guide

## License

Source code is available under the MIT License in `LICENSE`. Personal photographs, biography, publication metadata, and research content remain © Xingyu Xiao unless their original source states otherwise. Third-party paper titles and venue names are used as bibliographic facts; no publisher PDF is redistributed by this repository.

