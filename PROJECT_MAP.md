# Pure Cornwall — Project Map

> **This is the single source of truth for the Pure Cornwall project.**
> Every session (Claude chat, Claude Code, Lovable context) reads this first and updates it last.
> Never delete from the session log. Update the living sections to reflect reality.

**Repo:** https://github.com/sublimeanger/purecornwallproto
**Raw map URL:** https://raw.githubusercontent.com/sublimeanger/purecornwallproto/main/PROJECT_MAP.md
**Last updated:** 23 April 2026 (v5 — collection page signed off + Claude Design pipeline stage added + SuperControl API doc linked)

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

### SuperControl (write authority — see §3b for architecture, `SUPERCONTROL_API.md` for full endpoint reference)

- **API base:** `https://api.supercontrol.co.uk/v3/`
- **SC-TOKEN:** `aac3f13b-fb87-4f16-9677-8f9955736ff4`
- **IP whitelist:** `134.209.22.220` (Cloudways server — already whitelisted)
- **Role:** **Read-only for us** — we pull property data via API on a cron (see §3b). We never push data to SC. SC's own admin UI remains the owner's workflow for managing properties. Bookings are the only live call path from PC → SC at use time.
- **Key endpoints:** `/Properties/Index`, `/Properties/ContentIndex/{accountId}`, `/Properties/Listing/{propertyId}`, `/Properties/PropertyConfiguration/{propertyId}`, `/Prices/*`, `/Reviews/Index`, `/Reviews/Content/{reviewId}`
- **Test property ID:** `669466` (Compass Point — use for sync development and smoke tests)
- **Status:** Integration ON HOLD until all design/dev sign-off complete. Sync plugin `pc-supercontrol-sync` is the next phase after templates are built and signed off.

---

## §2 — Brand & design tokens

**All tokens defined in `src/index.css` — Lovable repo is the authority.**

### Colour palette (final, sanctioned — use ONLY these)

| Role              | Hex        | HSL                 | Usage                                                                                       |
| ----------------- | ---------- | ------------------- | ------------------------------------------------------------------------------------------- |
| Primary teal      | `#6fb6ae`  | `172 28% 56%`       | **Brand identity & functional accents** — cottage card icons, section eyebrows, location eyebrows, hero eyebrows, breadcrumb separators, map pins, 2px section-transition top borders, "Talk to us" links, nav hovers, testimonial band. Target visual load: 15–25% of colour signals per page. |
| Accent gold       | `#d3a36e`  | `28 52% 63%`        | **Conversion signals & signature accents** — prices, primary CTAs (FILTER, CHECK AVAILABILITY, SEARCH, VIEW PROPERTY, SHOW ALL COTTAGES), the 200×2 gold bar motif under H2s, feature pill Sparkles icon, active filter pills, property names (Cormorant italic), drop caps. |
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

1. Gold = conversion signals (prices, CTAs, signature accents). Teal = brand identity & navigation (icons, eyebrows, section-transition borders). Dark teal = footer only. Decision test: "does clicking or reading this drive a booking?" → gold. "Is it identifying, labelling, or decorating?" → teal.
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

## §3b — Data architecture (locked)

**The core decision: WordPress is the filter engine and SEO surface. SuperControl is the write authority for property data and the booking handshake only.** Sync is unidirectional: SC → WP. Filters query WP's local database via `WP_Query` with `meta_query`. **No filter, listing, or search UI ever hits SuperControl live.** Only the final booking step (availability check + payment) talks live to SuperControl.

### Why

1. SuperControl's V3 API is a **data-fetch** API, not a query API. Endpoints return full records; there is no filter-by-amenities endpoint. Any filtering happens locally.
2. The filter taxonomy (16 filters) is a product decision — includes fields like "EV Charger" that SuperControl does not model in its standard amenity enums. Path A literally cannot deliver these filters.
3. Performance: local filtering is 0ms; live SC calls are 300–800ms per interaction.
4. SEO: collection and destination pages must render server-side with real property listings. Only local data enables this.
5. Resilience: SC downtime leaves filter working; only the booking handshake degrades.
6. SuperControl themselves recommend caching; Path B is the cache.

### Sync schedule (unidirectional SC → WP)

- **Property content (descriptions, images, amenities, room configs):** cron every 6 hours via `/v3/Properties/ContentIndex/{accountId}` for change detection, then `/v3/Properties/Listing/{propertyId}` for changed records only
- **Property configuration (check-in times, occupancy, pets allowed):** cron every 6 hours via `/v3/Properties/PropertyConfiguration/{propertyId}` for changed records
- **Prices:** cron every 30 minutes via `/v3/Prices/*`
- **Availability:** on-demand at the moment of booking (not cached)
- **Reviews:** cron nightly via `/v3/Reviews/*`

### Sync infrastructure

- Runs as WP-Cron on the Cloudways server (IP 134.209.22.220 — already whitelisted by SuperControl)
- Failures log to a `pc_sc_sync_log` DB table
- `wp sc sync` WP-CLI command provides manual trigger
- Idempotent: re-running a sync produces the same DB state
- Implementation lives in a custom plugin `pc-supercontrol-sync` (NOT the theme — keeps sync logic independent of design iterations)

### The 16-filter → ACF field → SuperControl source map

This is the authoritative mapping for Claude Code when building the sync layer. "Auto" = populated by SC sync; "Manual" = owner sets in WP admin; "Manual review" = SC sync provides a best-guess default, owner reviews/corrects.

| Filter         | ACF field (on `cottage` CPT) | Type      | Source                                                             | Strategy       |
| -------------- | ---------------------------- | --------- | ------------------------------------------------------------------ | -------------- |
| Sleeps         | `sleeps`                     | number    | `configuration.maximumOccupancy.guests`                            | Auto           |
| Bedrooms       | `bedrooms_count`             | number    | `property.bedrooms[].length`                                       | Auto           |
| Bathrooms      | `bathrooms_count`            | number    | `property.bathrooms[].length`                                      | Auto           |
| Price per week | `price_from_per_week`        | number    | SC Prices endpoint (base weekly rate, off-peak)                    | Auto           |
| Sea View       | `has_sea_view`               | true/false| Not in SC standard amenities                                       | Manual         |
| Dog Friendly   | `dog_friendly`               | true/false| `configuration.petsAllowed`                                        | Auto           |
| Hot Tub        | `has_hot_tub`                | true/false| amenity enum `POOL_SPA_HOT_TUB`                                    | Auto           |
| Pool           | `has_pool`                   | true/false| amenity enum `POOL_SPA_PRIVATE_POOL` or `POOL_SPA_SHARED_POOL`     | Auto           |
| Parking        | `has_parking`                | true/false| amenity enum `AMENITIES_PARKING`                                   | Auto           |
| Pet Welcome    | `pet_welcome`                | true/false| `configuration.petsAllowed` (same as Dog Friendly — dedupe or alias) | Auto         |
| Wood Burner    | `has_wood_burner`            | true/false| amenity enum `AMENITIES_FIREPLACE`                                 | Manual review  |
| Garden         | `has_garden`                 | true/false| amenity enum `OUTDOORS_GARDEN`                                     | Manual review  |
| EV Charger     | `has_ev_charger`             | true/false| Not in SC standard amenities                                       | Manual         |
| Sauna          | `has_sauna`                  | true/false| amenity enum `POOL_SPA_SAUNA`                                      | Auto           |
| Balcony        | `has_balcony`                | true/false| amenity enum `OUTDOORS_BALCONY`                                    | Manual review  |
| WiFi           | `has_wifi`                   | true/false| amenity enum `AMENITIES_FREE_WIFI`                                 | Auto           |

**Notes for the sync builder:**
- "Pet Welcome" and "Dog Friendly" currently map to the same SC source. Product decision pending: treat as one filter (dedupe) or allow owner to distinguish (e.g. dogs yes, cats no) via a second manual ACF field. For v1, treat as one filter labelled "Dog Friendly".
- "Manual review" fields: sync should populate a best-guess value AND set a meta flag `_pc_amenity_needs_review` so the admin UI can surface "N properties have sync-provided values that may need review."
- Never let the sync overwrite "Manual" fields once they've been set in WP. Sync writes Manual fields on first sync only (if the field is empty), never on subsequent syncs.

### What about the homepage search bar fields?

Homepage search accepts: destination, arrival date, length of stay, guests, additional filters.

- **Destination** — queries `property-locations` taxonomy on WP. No SC involvement.
- **Arrival date + length of stay** — these are availability queries. On submit, redirect to `/search/?loc=X&arrive=Y&nights=Z&guests=N`. The search results page then does a two-step: (1) local filter by `sleeps >= N` + destination, (2) for each candidate, live SC availability check against the date range, and show only those available. Fallback: if SC API unreachable, show all candidates and flag "live availability unavailable — contact for booking."
- **Guests** — maps to `sleeps` filter, local query.
- **Additional filters** — passes state into filter drawer pre-populated.

This means the homepage search IS the only place where SC availability is queried at browse time, and only for a narrow candidate set (maybe 5–30 cottages), not the whole portfolio.

---

## §3c — Design → build pipeline (locked 23 April 2026)

**Pure Cornwall is built via a four-role pipeline. Each role produces a specific artefact. Each role has a clear handoff.**

```
Lovable  →  Claude Design  →  Claude Code  →  Live WordPress
    ↑            ↑                 ↑                 ↑
    └───────────Claude Chat (orchestrator across all stages)───────────┘
```

### Role 1 — Lovable (the designer)
- **Produces:** full visual prototype. All pages, all components, all responsive behaviour. React + TypeScript + Tailwind.
- **Source of truth:** everything downstream consumes Lovable's output; nothing re-invents copy or restyles.
- **Sign-off:** client/Jamie reviews the preview URL directly. Once signed off, that Lovable state is locked.
- **Tool:** Lovable's own editor + preview. Auto-commits to GitHub.

### Role 2 — Claude Design (the 1:1 cloner / WP translator)
- **Produces:** 1:1 HTML/CSS clone of each signed-off Lovable template, rendered as plain semantic HTML + BEM CSS + a `tokens.css` layer. Per-template bundle folder in the repo.
- **Why it exists:**
  1. **Visual checkpoint** — portable static HTML the client can open, screenshot, and approve without needing a dev environment
  2. **WP-friendly spec** — plain HTML + BEM + tokens ports to PHP/ACF far cleaner than React + Tailwind utilities would. Claude Code gets an unambiguous build target instead of interpreting React.
- **Ground rule:** 1:1 with the signed-off Lovable version. No creative reinterpretation, no new design decisions. Any uplift work happens in a fresh bundle (e.g. `-uplift/`) and does not touch the port bundle.
- **Input per template:** Lovable repo + brief from Claude Chat specifying files to read, token rules, responsive requirements, output folder.
- **Output per template:** `bundles/{template-name}/` containing `index.html`, `style.css`, `tokens.css`, and any per-component partials.
- **Tool:** Claude Design (Anthropic Labs, launched 17 April 2026, research preview in Claude Pro/Max/Team/Enterprise).

### Role 3 — Claude Code (the executor)
- **Produces:** live WordPress theme templates + ACF field groups + CPT definitions + seed data, built from the Claude Design bundle and deployed via SSH to Cloudways staging.
- **Ground rule:** matches the Claude Design bundle 1:1. Does not second-guess. If ambiguous, halts and escalates.
- **Also owns:** the `pc-supercontrol-sync` plugin build (separate from the theme — SC integration concerns don't belong in template bundles).
- **Tool:** Claude Code (web, via SSH to `cloudways-jm`).

### Role 4 — Claude Chat (the orchestrator)
- **Runs the pipeline.** Not in it — around it.
- **Per-template sequence:**
  1. Writes the Lovable prompt
  2. Reviews Lovable output by pulling the GitHub repo
  3. Writes the Claude Design brief
  4. Reviews the Claude Design bundle
  5. Writes the Claude Code prompt with phase breakdown + halt conditions
  6. Reviews Claude Code output via MCP between phases
  7. Updates `PROJECT_MAP.md` and `SUPERCONTROL_API.md`
- **Also owns:** architecture decisions, landmine catching, scope adjustments, handover docs, launch runbook.
- **Tool:** Claude chat (claude.ai — this conversation and its successors).

### Current stage-by-stage status

| Template                    | Lovable | Claude Design | Claude Code |
| --------------------------- | :-----: | :-----------: | :---------: |
| Homepage                    | ✅      | ⏳             | ⏳          |
| Single property page        | ✅      | ⏳             | ⏳          |
| Filter drawer               | ✅      | ⏳             | ⏳          |
| Single destination page     | ✅      | ⏳             | ⏳          |
| Single collection page      | ✅      | ⏳             | ⏳          |
| Destinations hub            | ⏳      | ⏳             | ⏳          |
| Collections hub             | ⏳      | ⏳             | ⏳          |
| Region page                 | ⏳      | ⏳             | ⏳          |
| Cottages index              | ⏳      | ⏳             | ⏳          |
| Search results              | ⏳      | ⏳             | ⏳          |
| Journal hub + single post   | ⏳      | ⏳             | ⏳          |
| About + Contact             | ⏳      | ⏳             | ⏳          |

**Claude Design stage doesn't begin until all Lovable templates are signed off AND the Amandine font refactor is applied globally.** Running Claude Design on a moving Lovable target (or on Cormorant-italic templates that'll need re-cloning after the font swap) is wasted effort. The Claude Design wave happens once, across the whole site, on locked typography.

### Precedent: Greenscapes

This pipeline is proven on the Greenscapes build (Isle of Wight tree surgery — Jude Ridley). Greenscapes used Lovable → Claude Design 1:1 clone → Claude Code WordPress port. The 1:1 clone produced a bundle folder per page (e.g. `greenscapes-homepage/`) with `tokens.css` + plain HTML + BEM CSS, which Claude Code then ported to WordPress templates. The client reviewed the static HTML in the bundle before Claude Code touched WordPress.

### What this means for the `PROJECT_MAP.md` build status table (§4)

§4 tracks Lovable status only. Once Claude Design stage begins, §4 gains a "Claude Design status" column per template. For now, all rows are "awaiting Lovable completion + font refactor."

---

## §4 — Build status (LIVING — overwrite each session)

### Design (Lovable)

| Template                      | Status              | Notes                                                              |
| ----------------------------- | ------------------- | ------------------------------------------------------------------ |
| Homepage                      | ✅ Signed off        | Teal refresh applied (card icons teal, location eyebrows teal).    |
| Single property page          | ✅ Signed off        | Treleigh reference at `/properties/treleigh`. Teal refresh applied. |
| Filter drawer component       | ✅ Signed off        | Route: `/filter-drawer-demo`. 16 filters across 3 sections. Teal VIEW toggle post-refresh. Consumed by destination + collection grids. |
| Single destination page       | ✅ Signed off        | Route: `/destinations/st-ives`. Redesigned v2 user-first. 14 components in `src/components/destination/` + `CompactIntro.tsx`. Graceful degradation via optional fields. 14 St-Ives asset images in `src/assets/st-ives/`. Teal refresh applied. |
| Destination minimal proof     | ✅ Signed off        | Route: `/destinations/st-ives-minimal`. Required-fields-only render proves template handles low-content towns. |
| Single collection page        | ✅ Signed off        | Route: `/collections/dog-friendly`. Separate template reusing 8 shared components from `destination/` (each marked with `// Reused across destination + collection pages`) + 3 new collection-specific components in `src/components/collection/` (CollectionDestinationsGrid, CollectionEditorial, CollectionRelated). Data shape mirrors destination with graceful degradation. Mock data: 42 cottages across 6 destinations. Commit `3f069ba`. |
| Collection minimal proof      | ✅ Signed off        | Route: `/collections/dog-friendly-minimal`. Required-fields-only render proves template handles minimal collections. |
| **Amandine font refactor**    | ⏳ Next              | Global pass across all 7 signed-off templates. Replaces Cormorant Garamond italic with Amandine regular non-italic to match Cornish Secrets. Jamie to extend CS Adobe Fonts project to include purecornwall.co.uk before launch. Lock typography before building remaining templates. |
| Destinations hub              | ⏳ After font refactor | 56-town card listing. Reuses signed-off card components.          |
| Collections hub               | ⏳ After font refactor | 12-collection card listing.                                        |
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
| `pc-supercontrol-sync` plugin does not yet exist — required before filter drawer has real data flowing from SC. ACF fields per §3b table must be created and populated. Content already migrated from CS (119 cottages) provides a starting dataset but not synced to live SC state yet. | High     | WordPress      |
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
- **2026-04-20 — Claude chat — Data architecture locked** — Decided: WordPress is the filter/SEO surface; SuperControl is write authority + booking only. Sync is unidirectional SC→WP, via dedicated `pc-supercontrol-sync` plugin. Filters always hit local `WP_Query` + `meta_query`, never live SC. Added §3b to this map with full rationale, sync schedule, and authoritative 16-filter → ACF → SC source mapping table. Lovable filter drawer prompt confirmed unaffected (it's a UI component; data source is orthogonal).
- **2026-04-20 — Lovable + Claude chat — Filter drawer built & signed off** — Lovable generated filter drawer, toolbar, stepper, slider, section wrapper, pill components + demo route (commit `3a216c9`). Claude chat reviewed source code directly via git pull, identified hero gradient violation (dark teal used outside footer) + border-radius audit needed. Refinement prompt applied (commit `7e77104`): hero now cream `#f7f5f2`, all interactive elements have explicit `borderRadius: 0`. Component signed off. All 16 filters working, full accessibility, mobile responsive. Ready to consume in destination/collection/cottages/search templates.
- **2026-04-20 — Lovable + Claude chat — Destination page v1 built & redesigned to v2** — Lovable generated first pass of single destination page for St Ives (4-act structure: Arrival → Sense of place → Choose your cottage → Support content). Initial build landed all 14 components but Jamie flagged UX problem: 2500px of editorial above the cottage grid was wrong for users landing from "holiday cottages st ives" search intent. Redesign prompt 04 applied: hero reduced 70vh→50vh desktop, 60vh→35vh mobile; 3-paragraph drop-cap opening replaced with single-sentence CompactIntro; cottage grid moved above the fold (first cottage visible within ~900px of page top); editorial, stats, map, atmosphere all moved below grid. Graceful degradation architecture locked: required sections (hero, breadcrumb, intro, grid, related, FAQ) always render; optional sections (stats, map, editorial, atmosphere, miniCollections, thingsToDo, travel) only render when data thresholds met. Minimal proof route `/destinations/st-ives-minimal` demonstrates template works with only required fields (supports 55 minimal-content towns at launch). Lovable added 14 real St-Ives-named asset images under `src/assets/st-ives/` replacing the earlier broken Unsplash queries. Jamie refined FAQ accordion directly: Plus-icon 45° rotation with gold border box, open-state background tint, "GOOD TO KNOW" eyebrow, italic tagline, "Talk to us →" CTA. Hero legibility issue fixed with triple-layered text shadows + radial vignette + darker gradient. Both routes signed off.
- **2026-04-20 — Lovable + Claude chat — Teal brand refresh (global)** — Audited colour distribution: Primary teal `#6fb6ae` was being used 4× across entire project; gold `#d3a36e` 135×. Pure Cornwall was visually indistinguishable from Cornish Secrets. Redesigned the colour rule: teal = brand identity & functional accents (icons, eyebrows, breadcrumb separators, hero eyebrows, section-transition 2px top borders, map pins, "Talk to us" links, VIEW toggle active state); gold = conversion signals only (prices, primary CTAs, gold bar motif, feature pill active). Applied across 15 files in one pass, 38 gold→teal swaps with matched symmetric diffs. Result: teal count went 4→42 (10.5× increase, ~24% visual load — slightly over target 15–20% but correct direction). Gold count dropped 135→107 (-21%) with conversion signals 100% preserved. All sign-offs verified: prices still gold, gold bar motif still gold, feature pill Sparkles still gold, all CTAs still gold. Commit `110ca86`. Destination page + homepage + property page + filter drawer demo all now on the new colour rule.
- **2026-04-23 — Lovable + Claude chat — Single collection page built & signed off** — Lovable generated the Dog Friendly collection page (`/collections/dog-friendly`) plus minimal proof route (`/collections/dog-friendly-minimal`). Commit `3f069ba`. Architectural precedent: 8 components from `src/components/destination/*` now marked `// Reused across destination + collection pages` and imported (not duplicated). 3 new collection-specific components added in `src/components/collection/`: `CollectionDestinationsGrid` (the "Dog Friendly in St Ives (8)" hub-and-spoke internal-linking pattern — 2px teal top border, 6-card grid, linking to `/destinations/{slug}/?filter=pet_welcome`), `CollectionEditorial` (left-aligned 80px gold bar, 2-column prose, floated pull quote — distinct rhythm from destination editorial), `CollectionRelated` (3-up related-collection cards, lighter eyebrow-only heading treatment). Data file `src/data/dogFriendlyData.ts` includes `dogFriendlyData` (rich) + `dogFriendlyDataMinimal` (required-fields-only) + `generateDogFriendlyCottages()` (42 mock cottages across 6 destinations: St Ives, Padstow, Falmouth, Fowey, Bude, Newquay). FAQ content covers 7 genuinely-useful questions (fees, dog count limits, beach rules, equipment, leaving dogs alone, seasonality). Graceful degradation working across both routes. This is the first template to genuinely prove the shared-component pattern — future hubs/regions/search templates can freely reuse the 8 shared primitives.
- **2026-04-23 — Claude chat — SuperControl API reference doc committed** — Created `SUPERCONTROL_API.md` in repo root (commit `da553a3`). Documents auth pattern (SC-TOKEN + `134.209.22.220` IP whitelist), four API endpoints (`/Properties/Index`, `/Properties/Listing/{id}`, `/Properties/PropertyConfiguration/{id}`, plus the Prices + Availability surface), exact smoke-test curl commands for future Claude Code sessions (including `-w "HTTP %{http_code}"` error-capture pattern), payload shapes verified against Compass Point (669466), complete WP ACF field mapping per feed, sync strategy restated from §3b for self-containment, error handling for 401/403/404/empty-images, four open questions (reviews population, pet fee modelling, currency handling, EPC rating display). Purpose: any future Claude Code session building the `pc-supercontrol-sync` plugin has the complete build spec without needing to re-explore the API.
- **2026-04-23 — Claude chat — Claude Design stage added to pipeline (§3c)** — Reviewed the Greenscapes build workflow, where Claude Design (launched 17 April 2026, Anthropic Labs research preview) was used as a 1:1 HTML/CSS cloning stage between Lovable sign-off and Claude Code WordPress porting. Decided to adopt the same four-role pipeline for Pure Cornwall: Lovable → Claude Design → Claude Code → Live, with Claude Chat orchestrating. Value: (1) visual checkpoint — portable static HTML the client can review without a dev environment, (2) WP-friendly spec — plain HTML + BEM + tokens ports cleaner to PHP/ACF than React + Tailwind utilities, eliminating translation ambiguity for Claude Code. Timing locked: Claude Design wave does NOT start until ALL Lovable templates are signed off AND Amandine font refactor is applied globally — running Claude Design on a moving target or Cormorant-italic templates is wasted effort. §3c added to this map documenting the full pipeline with role definitions, current stage-by-stage status table, and the Greenscapes precedent. §4 build status table now notes font refactor as the immediate next priority before building more Lovable templates, so the remaining hubs/regions/static pages are built on locked typography.

---

## §8 — File locations & deliverable index

### On Jamie's machine (previous deliverables)

| File                                                | Purpose                                        |
| --------------------------------------------------- | ---------------------------------------------- |
| `pure-cornwall-handover.md`                         | April 16 handover — partially superseded by this map |
| `pure-cornwall-ia-and-urls-v1.md`                   | Full IA detail (longer than §3 above)          |
| `lovable-prompt-01-filter-drawer.md`                | Filter drawer Lovable prompt (shipped, signed off) |
| `lovable-prompt-02-single-destination.md`           | Destination page v1 — 4-act editorial-first structure (shipped, superseded by 04) |
| `lovable-prompt-04-destination-redesign.md`         | Destination page v2 — user-first, cottages above fold, graceful degradation (shipped, signed off) |
| `lovable-prompt-05-teal-brand-refresh.md`           | Global teal brand refresh (shipped, signed off) |
| `lovable-prompt-06-single-collection.md`            | Single collection page Dog Friendly (shipped, signed off — commit `3f069ba`) |
| `lovable-prompt-07-amandine-font-refactor.md`       | Amandine non-italic global refactor (NOT YET WRITTEN — next prompt to author) |
| `SUPERCONTROL_API.md`                               | SC API reference — endpoints, payloads, smoke tests, WP mapping (in repo root) |
| `claude-code-standing-instructions.md`              | Standing instructions for Claude Code sessions to update PROJECT_MAP.md at session end |
| `github-token-setup.md`                             | One-time setup docs for Claude Code GitHub auto-commit |

### In the Lovable repo (source of truth)

```
purecornwallproto/
├── PROJECT_MAP.md              ← this file
├── SUPERCONTROL_API.md         ← SC API reference (endpoints, payloads, smoke tests, WP mapping)
├── src/
│   ├── index.css               ← design tokens (Jost + Cormorant Garamond — Amandine refactor pending)
│   ├── tailwind.config.ts
│   ├── App.tsx                 ← router (7 routes live)
│   ├── assets/
│   │   ├── property-1.jpg..property-6.jpg   ← cottage images used by homepage + mock data
│   │   └── st-ives/            ← 14 real St-Ives-named assets (hero, map, atmos-*, td-*, related-*)
│   ├── pages/
│   │   ├── Index.tsx           ← homepage composition (signed off)
│   │   ├── PropertyPage.tsx    ← single property composition (signed off)
│   │   ├── FilterDrawerDemo.tsx ← filter drawer demo route (signed off)
│   │   ├── DestinationPage.tsx ← destination composition, data-driven (signed off)
│   │   ├── DestinationPageMinimal.tsx ← graceful-degradation proof (signed off)
│   │   ├── CollectionPage.tsx  ← collection composition, data-driven (signed off)
│   │   ├── CollectionPageMinimal.tsx ← collection graceful-degradation proof (signed off)
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Hero.tsx
│   │   ├── BrandIntro.tsx
│   │   ├── FeatureTiles.tsx
│   │   ├── FeaturedProperties.tsx  ← homepage cottage card pattern — canonical, reused by destination + collection grids
│   │   ├── Testimonials.tsx
│   │   ├── Journal.tsx
│   │   ├── Footer.tsx
│   │   ├── PropertyImageCarousel.tsx
│   │   ├── property/           ← 13 property page components
│   │   ├── filters/            ← filter drawer (signed off)
│   │   │   ├── FilterDrawer.tsx
│   │   │   ├── PropertyToolbar.tsx
│   │   │   ├── FilterSection.tsx
│   │   │   ├── NumberStepper.tsx
│   │   │   ├── RangeSlider.tsx
│   │   │   ├── FeaturePill.tsx
│   │   │   └── types.ts        ← FilterState, FeatureKey, ranges, MockCottage, PRICE_MAX, isFilterActive
│   │   ├── destination/        ← destination page (signed off — 14 components, 8 also reused by collection)
│   │   │   ├── DestinationHero.tsx       ← SHARED — 50vh desktop / 35vh mobile, triple-layered legibility shadows
│   │   │   ├── DestinationBreadcrumb.tsx ← SHARED — sticky, teal separators
│   │   │   ├── CompactIntro.tsx          ← SHARED — single-paragraph intro, 2px teal top border
│   │   │   ├── DestinationGrid.tsx       ← SHARED — alternating cottage rows, consumes PropertyToolbar + FilterDrawer
│   │   │   ├── DestinationStats.tsx      ← SHARED — 5-column stats, 2px teal top border
│   │   │   ├── DestinationMap.tsx        ← SHARED — teal pins with white numbers
│   │   │   ├── DestinationAtmosphere.tsx ← SHARED — 3 equal-column town photos
│   │   │   ├── DestinationFAQ.tsx        ← SHARED — accordion, Plus-icon 45° rotation, teal border box, "Talk to us →"
│   │   │   ├── DestinationMiniCollections.tsx ← destination-only — 3-row curated groupings
│   │   │   ├── DestinationEditorial.tsx  ← destination-only — 2-paragraph "Why X" with inline **bold** parser
│   │   │   ├── DestinationThingsToDo.tsx ← destination-only — 6-item grid, teal category eyebrows
│   │   │   ├── DestinationTravel.tsx     ← destination-only — 3 modes with teal icons
│   │   │   ├── DestinationRelated.tsx    ← destination-only — 3-up nearby towns
│   │   │   └── DestinationCottageIntro.tsx (legacy — no longer called, kept for now)
│   │   └── collection/         ← collection page (signed off — 3 NEW components, 8 shared imported from destination/)
│   │       ├── CollectionDestinationsGrid.tsx ← "Dog Friendly in St Ives (8)" hub-and-spoke pattern
│   │       ├── CollectionEditorial.tsx        ← left-aligned 80px gold bar, 2-col prose, floated pull quote
│   │       └── CollectionRelated.tsx          ← 3-up related-collection cards, eyebrow-only heading
│   └── data/
│       ├── treleighData.ts     ← mock data for property page
│       ├── stIvesData.ts       ← DestinationData type + stIvesData (rich) + stIvesDataMinimal
│       └── dogFriendlyData.ts  ← CollectionData type + dogFriendlyData (rich) + dogFriendlyDataMinimal + generateDogFriendlyCottages (42 across 6 destinations)
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
