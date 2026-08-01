# AI Evaluation Atlas

A public map of how AI systems are tested, judged, audited, and monitored.
Browse evaluation methods, benchmarks, standards, infrastructures, and
institutions — each entry separates what an evaluation measures from what
its results can actually support.

An independent research project by [Monica Kodwani](https://monicakodwani.github.io/).

- **Live site (once deployed):** https://monicakodwani.github.io/ai-evaluation-atlas/
- **Stack:** Astro 5 + TypeScript, static generation, Markdown content with
  build-validated frontmatter, minimal client-side JavaScript, no tracking,
  no runtime APIs.

## Layout

```text
astro.config.mjs          site/base config (base = /ai-evaluation-atlas)
package.json              scripts: dev, build, preview, check
public/                   favicon, social card (static assets)
templates/                copyable frontmatter templates (not built)
src/
├── config.ts             version number, names, URLs  ← edit version here
├── content.config.ts     frontmatter schemas (build fails on bad values)
├── data/
│   ├── vocabularies.ts   ALL controlled vocabularies and labels
│   ├── glossary.ts       glossary terms
│   ├── lifecycle.ts      lifecycle-page editorial content
│   └── taxonomy.ts       taxonomy-page editorial content
├── content/              ← ALL Atlas entries live here as Markdown
│   ├── methods/          evaluation methods
│   ├── benchmarks/       benchmarks and suites
│   ├── infrastructures/  harnesses and eval infrastructure
│   ├── standards/        standards and frameworks
│   ├── institutions/     evaluating institutions
│   ├── observatories/    observatories and registries
│   ├── documentation/    documentation artifacts (model cards, …)
│   ├── concepts/         evaluation-science concepts
│   ├── guides/           long-form guides
│   └── sources/          source records (separate from entries)
├── components/           badges, cards, filters, source lists, …
├── layouts/              page shells (AtlasLayout, EntryLayout, GuideLayout)
└── pages/                routes (home, explore, taxonomy, lifecycle, …)
```

## Public routes

| Route | Page |
|---|---|
| `/ai-evaluation-atlas/` | Homepage |
| `/ai-evaluation-atlas/explore/` | Searchable, filterable directory |
| `/ai-evaluation-atlas/taxonomy/` | Three taxonomy views |
| `/ai-evaluation-atlas/lifecycle/` | Lifecycle map (design → retirement) |
| `/ai-evaluation-atlas/guides/` (+ `/guides/<id>/`) | Editorial guides |
| `/ai-evaluation-atlas/methodology/` | Inclusion, classification, sources |
| `/ai-evaluation-atlas/about/` | About the project |
| `/ai-evaluation-atlas/changelog/` | Version history |
| `/ai-evaluation-atlas/compare/` | Side-by-side entry comparison |
| `/ai-evaluation-atlas/glossary/` | Term definitions with anchors |
| `/ai-evaluation-atlas/<collection>/<id>/` | Entry detail pages |

## Run locally

```bash
npm install
npm run dev
```

Then open the printed URL — the site serves under `/ai-evaluation-atlas/`.

## Build and checks

```bash
npm run build     # static build into dist/ (validates all frontmatter)
npm run check     # astro check: TypeScript + template diagnostics
```

A quick internal-link check over the built output:

```bash
npm run build && npx --yes linkinator "file://$(pwd)/dist/index.html" --recurse --silent
```

## Deploy (GitHub Pages)

1. Create a GitHub repository named **`ai-evaluation-atlas`** under the
   `monicakodwani` account. (The name matters: GitHub serves project sites
   at `https://<user>.github.io/<repo-name>/`, and `base` in
   `astro.config.mjs` is set to `/ai-evaluation-atlas`. If you pick a
   different repo name, change `base` to match.)
2. Push this project to it (`main` branch).
3. In the repository settings, set **Pages → Source → GitHub Actions**.
4. `.github/workflows/deploy.yml` builds and deploys on every push to
   `main`.

The personal website repository is unaffected; if you want an "Atlas" link
in its navigation, add
`<li><a href="/ai-evaluation-atlas/">Atlas</a></li>` to the nav list of its
HTML pages.

## How to add a new entry

1. Copy the matching template from `templates/` (method, benchmark,
   standard) into the right folder under `src/content/`.
2. Name the file `<id>.md`, where `<id>` equals the `id` field (kebab-case).
3. Fill in the frontmatter. Every categorical field takes values from
   `src/data/vocabularies.ts` — anything else fails the build with the file
   and field named.
4. Write the claim boundary first: `appropriate_claims` and
   `inappropriate_claims` are the heart of every entry.
5. Set honest statuses: `status` (source verification) and `content_status`
   (completeness). Draft and needs-verification entries get visible badges
   automatically — that is a feature, not a problem.
6. Run `npm run build` and fix anything it reports.

No component or page edits are needed; the Explore page, search, filters,
compare, and detail pages pick new entries up automatically.

## How to add or verify a source

1. Copy `templates/source-entry.md` into `src/content/sources/` as
   `src-<firstauthor-or-org>-<year>-<keyword>.md`.
2. Record only what you can actually confirm. **Never guess a DOI, URL,
   year, or author list** — omit the field and say in `notes` what still
   needs confirmation.
3. While unconfirmed, keep `verification_status: unverified` (rendered as
   "Needs source verification").
4. To verify: open the original source, confirm title/authors/year/venue,
   add `url` (and `doi` if real), set `accessed` to today, and flip
   `verification_status: verified`.
5. Reference the record from entries via `primary_sources` /
   `secondary_sources` (use the record's `id`).
6. When an entry's key claims are all backed by verified records, upgrade
   the entry's `status` to `partially-verified` or `verified` and update
   `last_reviewed`.

## Evidence classes and statuses

- **Evidence class** (one per entry) describes how formalized and adopted a
  practice is: `formal-standard`, `industry-practice`,
  `research-convention`, `emerging`, `proposed`. It is not a quality
  ranking — see `/methodology/`.
- **Maturity**: `established`, `common-contested`, `emerging`,
  `experimental`, `draft`.
- **Entry status** (source verification): `verified`, `partially-verified`,
  `needs-verification`, `draft`.
- **Content status**: `complete`, `substantive-draft`, `outline`, `stub`.

## How to feature an entry

Set `featured: true` in its frontmatter. The homepage shows up to six
featured entries.

## How to add a guide

Copy `templates/guide-entry.md` into `src/content/guides/`, give it a
unique `order`, and write the body with `##` sections (they populate the
table of contents automatically). Guides with `content_status: outline` or
`stub` are labeled "Draft in progress" on cards.

## How to update the changelog

Edit `src/pages/changelog/index.astro` and add a new `<h2>` block at the
top. When cutting a release, bump `ATLAS_VERSION` in `src/config.ts` —
footer, About, Methodology, and Changelog all read from it.
