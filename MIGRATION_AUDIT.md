# Legacy website migration audit

Audit date: 2026-08-14  
Legacy source: `academic-website/` (retained locally, excluded from Git)  
Target: static GitHub Pages site at `https://www.xiaoxingyu2001.com`

## Executive summary

The legacy directory is not suitable for direct publication. It is a 3.3 GB mixed workspace containing an Astro server build, Python services, research prototypes, generated outputs, local environments, nested Git repositories, full-text papers, and environment files. The original Astro source is absent; only compiled client/server output remains. The migration therefore uses a clean Astro + TypeScript static architecture at the project root while preserving the legacy directory unchanged for local reference.

## Current technology stack

- Astro 5.18 server output with `@astrojs/node`.
- Node-based server bundle under `server/` and static assets under `client/`.
- Python analysis services and Streamlit/Flask research tools.
- Nginx and deployment shell configuration tied to a personal server.
- npm with a single legacy `package-lock.json`.
- No Git repository at the requested project root before migration.

## Legacy pages and functions

- `/`: bilingual profile controlled by a `lang` query parameter.
- `/cv`: web CV.
- `/publications/` and publication detail routes.
- `/projects/`, `/projects/insight/`, `/projects/insight/docs/`, and `/projects/smartrisk/`.
- `/blog/`, blog detail routes, and RSS.
- `/api/analyze` and `/api/smartrisk-analyze`: server-side analysis endpoints.
- Standalone project pages for KUREAS, CogTool, and IDHEAS-ECA.

## Reusable public material

- A formal portrait (`client/个人照片.jpg`, 1280 x 1920).
- A WeChat official-account QR image.
- Fifteen publication records recovered from the Astro content data layer.
- Nine local publication PDFs used only for bibliographic verification. Publisher PDFs with unclear redistribution rights are not copied to the new public repository.
- Project descriptions and static pages for Insight-R, KUREAS, CogTool, IDHEAS-ECA, SmartRisk, and related prototypes.
- Public academic email and public profile links already present on the old site.
- Verified education, honors, academic-service, and research text from the compiled web CV.

## Content requiring reconstruction

- The original `src/` directory, Astro configuration, layouts, and content Markdown are missing.
- The old information architecture relies on query-string language switching and mixes biography, CV, tools, and unfinished blog templates.
- The English and Chinese content are incomplete and inconsistent.
- Statistics conflict by date: the old compiled page reports older totals, while the 2026-08 migration brief provides newer approximate totals. The new site labels the brief's figures as approximate and dated 2026-08.
- Some honor names conflict between the old homepage and CV. Ambiguous items are omitted from the public site pending a current formal CV.

## Server dependencies

- Astro SSR with a Node adapter and a persistent server process.
- Python scripts for Insight-R, GenIV, event-tree conversion, and other research tools.
- Server API routes for uploads and model-backed analysis.
- Nginx configuration and deployment scripts referencing the former server and port-based hosting.
- Dynamic tools requiring Python, private models, API keys, or databases cannot run on GitHub Pages. They are represented as archived research prototypes rather than active online tools.

## Sensitive-information check

The audit found sensitive-file risk in:

- `projects/GenIV/self/code/.env` and its deployment copy.
- `知识图谱/LightRAG/.env`.
- Local Claude settings and deployment configuration.
- Nested virtual environments, logs, local model data, and generated research outputs.

No secret values are reproduced in this report. The entire legacy workspace is excluded from the new repository, and the new tree is scanned again before every commit and push.

## Old-link check

References to the former IP address, port 8888, localhost, or backend APIs occur in Nginx files, deployment notes, local settings, compiled server files, and several legacy project tools. Production code in the new repository must contain none of these dependencies. Historical addresses are documented only in `LEGACY_URL_MIGRATION.md` for migration accountability.

## Large and generated files

- Legacy deployment archive: about 80 MB.
- Full ICONE32 proceedings PDF: about 60 MB, 729 pages.
- CogTool Git pack and runtime binaries: tens of megabytes.
- Multiple packaged applications, Python environments, model files, caches, and duplicate generated outputs.
- Legacy `node_modules/` and several `__pycache__/` directories.

None of these are migrated to the public repository.

## Nested Git repositories

- `academic-website/KUREAS/.git`
- `academic-website/cogtool/.git`
- `academic-website/知识图谱/LightRAG/.git`

They remain untouched and are not absorbed into the new repository.

## Git status before migration

The requested project root was not a Git repository. The migration initializes a new repository after adding a deny-by-default ignore boundary around the legacy workspace. This document and `.gitignore` form the safe pre-migration snapshot; no legacy secret, binary bundle, or research dataset is staged.

## Recommended migration route

1. Preserve the mixed legacy workspace locally and exclude it from publication.
2. Rebuild the personal site as a static Astro + TypeScript site with build-time bilingual routes.
3. Keep all profile, publication, project, and honor content in typed data modules.
4. Convert dynamic tools into accurate project/archive pages unless they are fully browser-only.
5. Generate semantic routes, SEO metadata, sitemap, custom 404, and compatibility redirects as ordinary files.
6. Deploy `dist/` through GitHub Actions to the authenticated user's `<username>.github.io` repository.
7. Switch DNS only after the default GitHub Pages URL is verified.

## Migration risks

- No current formal CV PDF exists in the supplied directory, so no CV download is published.
- The 2026-08 output counts are provided by the migration brief but cannot be reconciled with a newer local CV; they remain approximate and dated.
- Several named research systems in the brief have no sufficiently precise local description; they are not presented as completed products.
- Publisher PDFs may not be redistributable. DOI/publisher links are preferred.
- Port-8888 URLs cannot be preserved by GitHub Pages.
- DNS and HTTPS changes must wait until the Pages deployment is healthy.

## Adopted technical route

- Astro static output (`output: "static"`) with TypeScript.
- Chinese routes at `/`; English equivalents under `/en/`.
- CSS custom properties, system fonts, responsive layouts, visible focus states, and reduced-motion support.
- Lightweight progressive enhancement only for navigation, filters, theme, DOI copying, and legacy language-query compatibility.
- GitHub Actions builds and deploys `dist/`; no backend, database, analytics cookie, or runtime secret.

