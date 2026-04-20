# Pure Cornwall — Project Map

> **This is the single source of truth for the Pure Cornwall project.**
> Every session (Claude chat, Claude Code, Lovable context) reads this first and updates it last.
> Never delete from the session log. Update the living sections to reflect reality.

**Repo:** https://github.com/sublimeanger/purecornwallproto
**Raw map URL:** https://raw.githubusercontent.com/sublimeanger/purecornwallproto/main/PROJECT_MAP.md
**Last updated:** 20 April 2026

---

## How to use this file

**At the start of any AI session**, paste the contents of this file as the first message (or paste the raw URL if the tool can fetch). The AI now has complete context — no guessing, no searching.

**At the end of any AI session**, the AI must:
1. Overwrite the relevant **Living sections** (§4–§6) to reflect the new state of the project
2. Append a dated line to the **Session log** (§7) summarising what happened
3. Output the full updated file for Jamie to commit to git

**Rules:**
- Static sections (§1–§3) change rarely. When they do, the change is a deliberate decision, not an edit in passing.
- Living sections (§4–§6) are the current snapshot — overwrite freely.
- The session log (§7) is append-only. Never delete or rewrite prior entries.

---

## §1 — Access & credentials

### Lovable (design source of truth)

- **Project name:** purecornwallproto
- **Preview URL:** https://purecornwallproto.lovable.app/
- **GitHub repo:** https://github.com/sublimeanger/purecornwallproto
- **Property page preview:** https://purecornwallproto.lovable.app/properties/treleigh
- **Lovable project ID:** 5ec64bae-ddf3-478b-ae98-9a361b48807d
- **Role:** All design work happens here. Lovable auto-commits to GitHub. Claude Code reads this repo as the design spec when porting to WordPress.

### Pure Cornwall WordPress staging (where the actual site is built)

- **URL:** https://wordpress-1346498-6341828.cloudwaysapps.com/
- **WP Admin:** https://wordpress-1346498-6341828.cloudwaysapps.com/wp-admin/
- **SSH:** `ssh cloudways-jm` (server 134.209.22.220)
- **SSH user:** master_yervhvbufn
- **Database name:** qvvpafcczr
- **Cloudways app ID:** qvvpafcczr
- **ACF PRO:** installed, activated
- **Theme:** `pure-cornwall` (custom, v0.1.2 — awaiting rebuild)
- **Theme path:** `wp-content/themes/pure-cornwall/`

### Cornish Secrets (design & content reference — read-only)

- **URL:** https://www.cornishsecrets.co.uk/
- **SSH:** `ssh cloudways-jm` (same server as Pure Cornwall — both apps on 134.209.22.220)
- **Database:** cshhskrtgd
- **MCP in claude.ai:** "cornish mcp use"
- **Role:** Source of content that's been migrated (119 properties, 59 destinations, 12 collections, 3,208 images). No more design lifting from CS — Lovable is the design source of truth from now on.

### Production domain (not yet live)

- **Domain:** purecornwall.co.uk
- **Status:** owned, not yet pointed at staging. Launch is post-design/dev/integration.

### SuperControl (integration — final phase)

- **API base:** `https://api.supercontrol.co.uk/v3/`
- **SC-TOKEN:** `aac3f13b-fb87-4f16-9677-8f9955736ff4`
- **IP whitelist:** `134.209.22.220` (Cloudways server — already whitelisted)
- **API endpoints:** `/Properties/Index`, `/Properties/ContentIndex/{accountId}`, `/Properties/Listing/{propertyId}`, `/Properties/PropertyConfiguration/{propertyId}`, `/Reviews/Index`, etc.
- **Status:** ON HOLD — integrate last, after all design/dev/content is signed off.

---

## §2 — Brand & design tokens

**All tokens defined in `src/index.css` — Lovable repo is the authority.**

### Colour palette (final, sanctioned — use ONLY these)

| Role              | Hex        | HSL                 | Usage                                                                                       |
| ----------------- | ---------- | ------------------- | ------------------------------------------------------------------------------------------- |
| Primary teal      | `#6fb6ae`  | `172 28% 56%`       | Search bar bg, testimonial section bg, interactive hover states, link hovers, nav hover     |
| Accent gold       | `#d3a36e`  | `28 52% 63%`        | Gold bar motif, price, property names, CTAs, badges, decorative accents, star ratings       |
| Dark teal         | `#2f5550`  | `163 28% 25%`       | **FOOTER ONLY** — dark anchor at bottom of page                                             |
| Body text         | `#3a3a3a`  | `0 0% 23%`          | All paragraph body text                                                                     |
| Muted text        | `#7a7a7a`  | `0 0% 48%`          | Meta, captions, secondary info                                                              |
| Light background  | `#f7f5f2`  | `30 18% 96%`        | Alternating section backgrounds                                                             |
| Border            | `#e5e0da`  | `30 14% 87%`        | Card borders, dividers                                                                      |
| White             | `#ffffff`  | `0 0% 100%`         | Page backgrounds, text on teal/dark sections                                                |

**Never use `#2d4a46`** — older build used this. Replaced permanently with `#2f5550`.

### Typography

- **Primary:** Jost (Google Fonts). Weights 300, 400, 500. No bold (600+).
- **Secondary (editorial):** Cormorant Garamond (Google Fonts). Used for property names, H1 intros, drop caps, pull quotes, testimonial quotes, blog titles, editorial captions.
- Body line-height: 1.6–1.7
- Uppercase labels: 3–5px letter-spacing

### Spacing (vw-based)

- `--space-tiny: 1.25vw`
- `--space-sm: 2.5vw`
- `--space-md: 5vw`
- `--space-lg: 7.5vw`
- Section padding: 5–6vw top and bottom
- Container max-width: 1500px

### Breakpoints

1500px, 1200px, 992px, 767px, 500px

### Signature motifs

- **Gold bar:** 200×2px, #d3a36e, margin-top 25px — beneath every section H2
- **Flat buttons:** 2px gold bottom-border only, uppercase, 3px letter-spacing. No pills, no solid fills (except primary conversion CTAs: SEARCH, BOOK NOW, CHECK AVAILABILITY)
- **Property cards:** 755:508 aspect ratio, no border-radius, no shadow at rest, gold bottom border (2px), hover lifts 4px with subtle shadow + 1.04 image scale
- **Drawer backdrop:** dark teal #2f5550 at 40% opacity (filter drawer, future lightboxes)

### Design rules (permanent)

1. Gold is for decoration. Teal is for interaction. Dark teal is for footer only.
2. No bold typography anywhere — elegance over shout.
3. Property cards use image carousels (not single static images).
4. Every content slot editable via ACF from the WP dashboard — nothing hardcoded.
5. Homepage uses FIXED ACF field groups, not flexible content.
6. The word "brochure" does not exist on this site.
7. Lovable is the design source of truth. No backport of design from CS.

---

## §3 — URL structure & IA

**Locked v1.0.** Full spec: `PROJECT_MAP_IA.md` (to be created as a companion doc at repo root, detail below).

### Public indexable URLs

| Pattern                          | Example                                | Notes                                                             |
| -------------------------------- | -------------------------------------- | ----------------------------------------------------------------- |
| `/`                              | `/`                                    | Homepage                                                          |
| `/destinations/`                 | `/destinations/`                       | Destinations hub                                                  |
| `/destinations/{region}/`        | `/destinations/west-cornwall/`         | Region — West, North, South Cornwall                              |
| `/destinations/{slug}/`          | `/destinations/st-ives/`               | Single town (56 towns)                                            |
| `/collections/`                  | `/collections/`                        | Collections hub                                                   |
| `/collections/{slug}/`           | `/collections/dog-friendly/`           | Single collection (12 at launch)                                  |
| `/cottages/`                     | `/cottages/`                           | Indexable catalogue (editorial top, filter grid below)            |
| `/journal/`                      | `/journal/`                            | Blog hub                                                          |
| `/journal/category/{slug}/`      | `/journal/category/guides/`            | Blog category (Guides, Things to Do)                              |
| `/journal/{slug}/`               | `/journal/best-beaches-in-cornwall/`   | Single blog post                                                  |
| `/about/`, `/contact/`           | `/about/`                              | Static pages                                                      |
| `/privacy/`, `/terms/`, `/cookies/` | `/privacy/`                         | Legal                                                             |

### Noindexed URLs

| Pattern                | Example                     | Canonical target                                          |
| ---------------------- | --------------------------- | --------------------------------------------------------- |
| `/cottages/{slug}/`    | `/cottages/treleigh/`       | `https://www.cornishsecrets.co.uk/{matching-cs-slug}/`    |
| `/search/`             | `/search/?loc=st-ives&...`  | `noindex, follow` (no self-canonical)                     |

### Hub-and-spoke linking

- Homepage → Destinations hub, Collections hub, Journal hub, ~6 featured cottages
- Destinations hub → all 3 regions, all 56 towns, Collections hub cross-sell
- Single destination → parent region, 3–5 nearby towns, all cottages in town, relevant collections, journal posts
- Collections hub → all 12 collections
- Single collection → all matching cottages, 3–4 related collections, journal posts
- Journal post → parent category, 2–3 related posts, contextual destination/collection links

### Filter URL sync rule (hybrid)

- **On `/cottages/` and `/search/`**: filters sync to URL params (shareable)
- **On `/destinations/{slug}/` and `/collections/{slug}/`**: filters in memory only (no URL sync — protects SEO canonical). "Share this view" button generates a `/search/` URL instead.

### Schema (JSON-LD per page)

| Page type           | Schema types                                                                       |
| ------------------- | ---------------------------------------------------------------------------------- |
| Homepage            | Organization, WebSite (with SearchAction)                                          |
| Destinations hub    | WebPage, BreadcrumbList, ItemList                                                  |
| Region              | WebPage, BreadcrumbList, Place, ItemList                                           |
| Single destination  | WebPage, BreadcrumbList, Place, ItemList, FAQPage                                  |
| Collections hub     | WebPage, BreadcrumbList, ItemList                                                  |
| Single collection   | WebPage, BreadcrumbList, ItemList, FAQPage                                         |
| Cottages index      | WebPage, BreadcrumbList, ItemList                                                  |
| Single cottage      | BreadcrumbList ONLY (no VacationRental schema — property is noindexed & canonical → CS) |
| Journal hub         | WebPage, Blog, BreadcrumbList                                                      |
| Single journal post | Article, BreadcrumbList                                                            |

---

## §4 — Build status (LIVING — overwrite each session)

### Design (Lovable)

| Template                      | Status              | Notes                                                              |
| ----------------------------- | ------------------- | ------------------------------------------------------------------ |
| Homepage                      | ✅ Signed off        | Current preview URL live. Minor editorial polish still open.       |
| Single property page          | ✅ Signed off        | Treleigh reference at `/properties/treleigh`                       |
| Filter drawer component       | 🟡 Prompt written   | Prompt ready to paste into Lovable (`lovable-prompt-01-filter-drawer.md`). Awaiting generation. Target route: `/filter-drawer-demo`. |
| Single destination page       | ⏳ Not started       | Next after filter drawer signed off. Biggest SEO page.             |
| Single collection page        | ⏳ Not started       | Near-copy of single destination. After that's signed off.          |
| Destinations hub              | ⏳ Not started       |                                                                    |
| Collections hub               | ⏳ Not started       |                                                                    |
| Region page                   | ⏳ Not started       | West / North / South Cornwall                                      |
| Cottages index (`/cottages/`) | ⏳ Not started       | Will reuse filter drawer                                           |
| Search results (`/search/`)   | ⏳ Not started       | Near-copy of `/cottages/`, URL-param driven                        |
| Journal hub                   | ⏳ Not started       |                                                                    |
| Single journal post           | ⏳ Not started       |                                                                    |
| About                         | ⏳ Not started       |                                                                    |
| Contact                       | ⏳ Not started       |                                                                    |

### Development (WordPress theme `pure-cornwall`)

| Template                              | Status                                                     |
| ------------------------------------- | ---------------------------------------------------------- |
| `front-page.php`                      | 🔴 Exists but doesn't match current Lovable — rebuild pending |
| `single-property.php`                 | 🔴 Exists but is a stub — rebuild pending                  |
| `taxonomy-property-collection.php`    | 🔴 Exists, not matched to new Lovable design               |
| `taxonomy-property-locations.php`     | 🔴 Exists, not matched to new Lovable design               |
| `home.php` / `single.php` / blog      | 🟡 Functional but not styled to match new Lovable design   |
| `header.php` / `footer.php`           | 🟡 Functional, need brand refresh                          |
| `single-cottage.php` (new CPT slug)   | ⏳ Not started — CPT slug to change from `property` to `cottage` for URL alignment |
| Filter drawer PHP port                | ⏳ Not started — depends on Lovable component being signed off |

### Content (already in WordPress DB)

- ✅ 119 cottages migrated with full ACF data
- ✅ 59 destinations (3 regions + 56 towns) with hierarchy
- ✅ 12 collections
- ✅ 3,208 images in media library with all sub-sizes regenerated
- ✅ 11 blog posts across 2 categories (Guides, Things to Do)
- ⏳ FAQ content per destination/collection — to be generated by AI, reviewed by Jamie

### Integrations

| Service               | Status                                                                          |
| --------------------- | ------------------------------------------------------------------------------- |
| ACF PRO               | ✅ Installed                                                                     |
| Rank Math SEO         | ⏳ Not configured                                                                |
| WP Rocket             | ⏳ Not installed                                                                 |
| Cloudflare            | ⏳ Not configured                                                                |
| Mapbox                | ⏳ No API token. Static map placeholders in use.                                 |
| SuperControl API      | ⏳ ON HOLD until all design/dev sign-off complete                                |
| GA4                   | ⏳ Property not yet created                                                      |
| Google Search Console | ⏳ Not verified                                                                  |

---

## §5 — Open decisions (LIVING — overwrite each session)

Items waiting on Jamie. When resolved, move the decision into the relevant static section and remove from here.

| # | Question                                                                                                 | Who decides | Status                                                               |
| - | -------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------- |
| 1 | CPT slug change: `property` → `cottage` to align URLs with `/cottages/{slug}/`. Migration path needed.    | Jamie       | Flagged. Claude Code prep needed for migration.                       |
| 2 | Any Pure Cornwall brand assets beyond the logo? (e.g. founder photo, office address, social handles)      | Jamie       | Open                                                                 |
| 3 | Newsletter provider (Mailchimp? Klaviyo? Other?)                                                          | Jamie       | Open                                                                 |
| 4 | Contact form destination email — Pure Cornwall address or forward to Cornish Secrets team?                | Jamie       | Open                                                                 |
| 5 | Launch date target                                                                                       | Jamie       | Open                                                                 |

---

## §6 — Known issues & tech debt (LIVING — overwrite each session)

| Issue                                                                                                   | Severity | Where          |
| ------------------------------------------------------------------------------------------------------- | -------- | -------------- |
| Current WP theme homepage and property templates do not match signed-off Lovable designs                | High     | WordPress      |
| CPT slug is `property` not `cottage` — URL refactor required before any external links are published     | High     | WordPress      |
| Mapbox integration stub only — maps are placeholder images                                              | Medium   | WordPress      |
| No image carousels on cottage cards yet (spec: swipeable carousel with dots)                             | Medium   | WordPress      |
| No Rank Math / SEO plugin installed                                                                      | Medium   | WordPress      |
| No performance tooling (WP Rocket, CF)                                                                   | Medium   | WordPress      |
| Old `#2d4a46` dark teal may still linger in WP theme CSS — replace with `#2f5550` on rebuild             | Low      | WordPress      |

---

## §7 — Session log (APPEND-ONLY — never delete)

Format: `YYYY-MM-DD — [who] — [what]`

- **2026-03-28 — Claude chat — Replicating Cornish Secrets design for Pure Cornwall** — Initial design brief. Workflow decided: MCP audit of CS → Claude Code WordPress build. Prompt pack drafted (phases 1–7).
- **2026-03-30 — Claude chat — Prompt pack v2** — Refined prompts based on CS audit findings. Phase 4 (SuperControl) fenced off pending rollout. Three UX improvements over CS specified: collection page filtering, destination maps with pins, sub-location dropdown enabled.
- **2026-04 (various) — Claude Code + Lovable — Initial build** — WP staging stood up, ACF PRO installed, custom `pure-cornwall` theme scaffolded. All CS content migrated (119 cottages, 59 destinations, 12 collections, 3,208 images). Lovable prototyping begun for homepage.
- **2026-04-16 — Claude chat — Handover document created** — Full handover doc written for cross-session context transfer. Property page flagged as stub requiring rebuild. Homepage and property page Lovable signed off.
- **2026-04-20 — Claude chat — Project reset & IA lock** — Reviewed current state. Confirmed "nuclear" means rebuild theme's template layer only; DB and media library preserved. Locked URL structure (`/destinations/`, `/collections/`, `/cottages/`, `/journal/`). Locked IA per-template content slots. Locked filter drawer as first priority component because it appears on 4 templates. Hybrid URL-sync rule decided (sync on `/cottages/` and `/search/`, no sync on destination/collection pages to protect canonical). Wrote Lovable Prompt 01 (filter drawer). Created this PROJECT_MAP.md as the permanent living context.

---

## §8 — File locations & deliverable index

### On Jamie's machine (previous deliverables)

| File                                                | Purpose                                        |
| --------------------------------------------------- | ---------------------------------------------- |
| `pure-cornwall-handover.md`                         | April 16 handover — partially superseded by this map |
| `pure-cornwall-ia-and-urls-v1.md`                   | Full IA detail (longer than §3 above)          |
| `lovable-prompt-01-filter-drawer.md`                | Filter drawer Lovable prompt — paste ready     |

### In the Lovable repo (source of truth)

```
purecornwallproto/
├── PROJECT_MAP.md              ← this file
├── src/
│   ├── index.css               ← design tokens
│   ├── tailwind.config.ts
│   ├── App.tsx                 ← router
│   ├── pages/
│   │   ├── Index.tsx           ← homepage composition
│   │   ├── PropertyPage.tsx    ← single property composition
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Hero.tsx
│   │   ├── BrandIntro.tsx
│   │   ├── FeatureTiles.tsx
│   │   ├── FeaturedProperties.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Journal.tsx
│   │   ├── Footer.tsx
│   │   ├── PropertyImageCarousel.tsx
│   │   └── property/           ← 13 property page components
│   └── data/
│       └── treleighData.ts     ← mock data for property page
```

### On the Cloudways server

```
~/pure-cornwall/
├── audit/                      ← CS design audit (superseded — Lovable is now the design source)
├── assets-from-cs/             ← extracted CS visual assets
├── docs/content-migration-map.md
├── qa/                         ← previous QA audits
└── theme/migrate-content.php   ← idempotent migration script
wp-content/themes/pure-cornwall/
├── style.css
├── functions.php
├── front-page.php
├── single-property.php         ← stub — pending rebuild
├── taxonomy-property-collection.php
├── taxonomy-property-locations.php
├── template-parts/
├── acf-json/
└── inc/
```

---

## §9 — How to kick off the next session

**For a Claude chat (design direction / prompt writing / project management):**

> "I'm working on Pure Cornwall. Please read the current project map: https://raw.githubusercontent.com/sublimeanger/purecornwallproto/main/PROJECT_MAP.md — then help me with [specific task]."

**For Claude Code (WordPress dev via SSH):**

> "Context: read `PROJECT_MAP.md` at https://raw.githubusercontent.com/sublimeanger/purecornwallproto/main/PROJECT_MAP.md
> SSH: `ssh cloudways-jm`
> Task: [specific task]
> End of session: output the updated PROJECT_MAP.md for me to commit."

**For a new Lovable session (design):**

Paste the target Lovable prompt directly. Lovable doesn't need the whole project map — it needs the prompt plus knowledge of the existing Lovable repo (which it already has).

---

**End of PROJECT_MAP.md**
