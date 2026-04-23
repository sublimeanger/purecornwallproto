

# Filter Architecture Rebuild — Cornish Secrets Spec Alignment

A complete refactor of the filter type system to match the Cornish Secrets spec, designed to map 1:1 to SuperControl API fields and WordPress taxonomies. This replaces the current rough first-pass filter rig (16 generic features) with a proper two-tier architecture: 12 commercial top-bar collections (single-select) + 52 sidebar refinement filters across 8 accordion sections + region/town picker + numeric guest selectors.

## What's changing and why

The existing filter system uses a flat `FEATURE_KEYS` array of 16 strings like "Sea View", "Hot Tub", "Pet Welcome". The new system splits these into two distinct surfaces:

- **Top bar (commercial)** — 12 single-select collection chips in 2 clusters: features (dog-friendly, sea-views, hot-tubs-pools, large-holiday-homes, romantic-retreats, country-cottages) and occasions (2026-collection, late-deals, short-breaks, winter-breaks, easter-breaks, october-half-term). Active state uses dark teal `#2f5550` (navigation, not conversion).
- **Sidebar (refinement)** — 8 collapsible sections totalling 47 unique feature keys, plus Region picker with town autocomplete, plus Stay & Guests numeric selectors, plus Price slider.

The 12 collections-hub cards reconcile to match the 12 top-bar slugs exactly (drops: ev-charger, surfing-escapes, beach-retreats, pools, christmas-nye; adds: 2026-collection, late-deals, easter-breaks, october-half-term; renames: sea-view→sea-views, hot-tubs→hot-tubs-pools, large-cottages→large-holiday-homes). Hub chip filter collapses from 4 groups to 2 (FEATURES · OCCASIONS).

## Files affected

**Rewritten (4):**
- `src/components/filters/types.ts` — new type system (top-bar collections, 8 sidebar key arrays, FilterState with topBarCollection/region/townSlug, MockCottage with townSlug/region/collections, SIDEBAR_SECTIONS metadata, label maps)
- `src/components/filters/FilterDrawer.tsx` — 11-section drawer rendered dynamically from SIDEBAR_SECTIONS
- `src/data/collectionsHubData.ts` — 13 collections → 12 reconciled to CS slugs
- `src/components/hub/CollectionFilterChips.tsx` — 5 chips → 3 (ALL · FEATURES · OCCASIONS)

**Created (1):**
- `src/components/filters/TopBarFilters.tsx` — 12-pill 2-cluster horizontal bar (single-select, dark-teal active state)

**Edited (lighter touch — 6):**
- `src/components/hub/CollectionsGrid.tsx` — `CollectionHubCard.group` narrowed to `"features" | "occasions"`, `slug` typed as `TopBarCollection`
- `src/pages/CollectionsHub.tsx` — `FEATURED_SLUG = "hot-tubs-pools"`, companions = `["october-half-term", "dog-friendly"]`
- `src/components/destination/DestinationGrid.tsx` — feature filter loop uses `SidebarFeatureKey` (no API change otherwise)
- `src/data/stIvesData.ts` — generator updated to new MockCottage shape (region, townSlug, collections, sidebar features)
- `src/data/dogFriendlyData.ts` — same generator update; ensures every cottage has `dog-friendly` in `collections`
- `src/data/westCornwallData.ts` — 12 hand-written cottages updated to new shape; all get `region: "west-cornwall"` and appropriate townSlug/collections
- `src/pages/FilterDrawerDemo.tsx` — updated to new feature key vocabulary in the generator and filter loop

## Step-by-step build order

1. **Rewrite `types.ts`** with the full new type system (top-bar constants/labels, 8 sidebar key arrays, REGION_KEYS, SLEEPS/BEDROOMS/BATHROOMS_OPTIONS, FilterState, isFilterActive, MockCottage, SIDEBAR_SECTIONS, SIDEBAR_FEATURE_LABELS). Old `FEATURE_KEYS`/`FeatureKey`/`SLEEPS_RANGE`/`BEDROOMS_RANGE`/`BATHROOMS_RANGE` removed.
2. **Update mock-data files** to compile against the new MockCottage (stIvesData, dogFriendlyData, westCornwallData). Each cottage gets `region`, `townSlug`, `collections[]`, and a remapped `features[]` using `SidebarFeatureKey` strings.
3. **Update `DestinationGrid.tsx`** filter loop signature (no behavioural change — just the type swap on `f.features`).
4. **Update `FilterDrawerDemo.tsx`** generator + applyFilters to use new keys.
5. **Rewrite `FilterDrawer.tsx`** — 11 sections in order: Stay & Guests (always open, numeric pill rows for sleeps/bedrooms/bathrooms), Region (open by default, 3 region pills + town autocomplete sourced from `destinationsHubData.towns` filtered by selected region), Price, then 8 sidebar sections rendered by mapping over `SIDEBAR_SECTIONS` → each renders `<FilterSection>` wrapping a flex-wrap of `<FeaturePill>`. Sticky footer "Show {count} cottages match · Show results" + "Clear all".
6. **Create `TopBarFilters.tsx`** — two clusters with eyebrow headings (BY FEATURE / BY OCCASION) separated by a 36px vertical divider on desktop. Mobile: stacked clusters with horizontal-scroll pill rows. Single-select; clicking active pill toggles off; dark-teal active state.
7. **Reconcile `collectionsHubData.ts`** — replace the 13-item `collections` array with the 12 specified items (slugs/names/groups/descriptors/counts/themeImageHints exactly as in spec). Update file-level types to import `TopBarCollection`.
8. **Update `CollectionFilterChips.tsx`** — `CollectionChipKey = "all" | "features" | "occasions"`, render 3 chips. Eyebrow text and styling unchanged.
9. **Update `CollectionsGrid.tsx`** — `CollectionHubCard.slug: TopBarCollection`, `group: "features" | "occasions"`, `groupLabel: "FEATURE" | "OCCASION"`. Filter logic unchanged.
10. **Update `CollectionsHub.tsx`** — new `FEATURED_SLUG` and `COMPANION_SLUGS` constants typed as `TopBarCollection[]`.
11. **Verify** all 11 signed-off routes render: `/`, `/properties/treleigh`, `/filter-drawer-demo`, `/destinations`, `/destinations/st-ives`, `/destinations/st-ives-minimal`, `/destinations/west-cornwall`, `/destinations/west-cornwall-minimal`, `/collections`, `/collections/dog-friendly`, `/collections/dog-friendly-minimal`.

## Where TopBarFilters lands

Created as a standalone component but **not wired into any page in this prompt** — the spec calls it out as foundation for the forthcoming `/cottages/` catalogue. It will sit above `PropertyToolbar` on that route when built. For now it's a component with no consumer; the demo page can optionally render it for visual proof, but the prompt does not require this.

## Behavioural details

- **Town autocomplete**: text input below region pills; suggestions from `destinationsHubData.towns`. If a region is selected, suggestions are filtered to towns in that region (`town.region === selectedRegion` once region keys are aligned — `west`/`north`/`south` in HubTown vs `west-cornwall`/`north-cornwall`/`south-cornwall` in new RegionKey; the drawer maps between the two when filtering suggestions). Selecting a suggestion sets `townSlug`; clear-X resets it.
- **enclosed-garden cross-surfacing**: rendered in both Outdoor Space (2.4) and Family Friendly (2.7) sections; both pills bind to the same `state.features` entry, so toggling one updates the other automatically.
- **Numeric pill display**: SLEEPS shows `16+`, BEDROOMS shows `5+`, BATHROOMS shows `4+` for the cap values; all single-select with null = "Any".
- **Top-bar single-select**: clicking an active pill toggles it off; clicking a different pill swaps selection.
- **Active filter count**: `isFilterActive(state)` includes topBarCollection, region, townSlug, sleeps, bedrooms, bathrooms, price-changed flag, and `features.length`.

## Acceptance check

- All 11 routes render
- No `FEATURE_KEYS`/`FeatureKey` references remain anywhere in `src/`
- 47 unique sidebar keys rendered (48 positions counting cross-surfaced enclosed-garden)
- 12 top-bar pills in TopBarFilters, single-select, dark-teal active
- 12 collections in hub data, 3 chip filter, Hot Tubs & Pools featured with October Half Term + Dog Friendly companions
- No italic text, no new colours, no new border-radii, no emojis

## What's explicitly out of scope

- Wiring TopBarFilters into any existing page
- Building `/cottages/` catalogue (next prompt)
- Real cottage counts on filter pills (come from WP at port time)
- Removing the Price section (kept for UX even though not in CS 2.1–2.10)

