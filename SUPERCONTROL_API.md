# SuperControl API — Reference notes

> **Status:** Live API surface verified 20 April 2026 against Cornish Secrets account (25156), test property Compass Point (669466).
> **Purpose:** Reference doc for the `pc-supercontrol-sync` plugin build. Documents the v3 `Properties/*` endpoints, payload shapes, sync strategy, and exact access commands.
> **Role:** SuperControl is the **write authority** for property data and the **booking handshake**. Pure Cornwall consumes all data via these endpoints on a cron — no live calls from filter/browse UI.

---

## Architecture reminder (see `PROJECT_MAP.md` §3b)

- **WordPress is the filter/SEO surface.** All filtering, sorting, and listing queries hit the local WP database via `WP_Query` + `meta_query`.
- **SuperControl is the source of truth.** Sync is unidirectional: SC → WP, via the `pc-supercontrol-sync` plugin (not the theme).
- **No browse-time calls to SC.** The only live call from a user-facing request is the final availability check at booking time.

---

## §1 — Authentication & endpoints

- **API base:** `https://api.supercontrol.co.uk/v3/`
- **Auth header:** `SC-TOKEN: aac3f13b-fb87-4f16-9677-8f9955736ff4`
- **Account:** 25156 (Cornish Secrets — shared with Pure Cornwall)
- **IP whitelist:** `134.209.22.220` (Cloudways server for both CS and Pure Cornwall — already whitelisted)
- **Accept header:** `Accept: application/json`

### Four top-level index feeds

Each index feed lists every property with a `lastUpdated` timestamp + a per-property detail URL. The sync plugin diffs `lastUpdated` against the last successful sync state and only fetches changed records.

| Feed            | Index endpoint                                      | Per-property detail endpoint                        | Returns                                                   |
| --------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------------- |
| Content         | `/v3/Properties/Index`                              | `/v3/Properties/Listing/{propertyId}`               | Full marketing content                                    |
| Configuration   | *(list via Content index)*                          | `/v3/Properties/PropertyConfiguration/{propertyId}` | Booking rules + account-level defaults                    |
| Prices          | `/v3/Prices/PricesIndex/{accountId}`                | `/v3/Prices/Properties/{propertyId}`                | Pricing grid + fees + payment schedule                    |
| Availability    | `/v3/Availability/AvailabilityIndex/{accountId}`    | `/v3/Availability/Properties/{propertyId}`          | Calendar + stay rules                                     |

**Also available (not on critical path):**

- `/v3/Reviews/Index` + `/v3/Reviews/Content/{reviewId}` — review content. Worth exploring for cottage page enrichment; confirm populated for CS account before depending on.
- Enquiries, bookings list, guest data, owner/housekeeping info — **NOT exposed** on the v3 `Properties/*` surface. This surface is read-only content + pricing + availability.

---

## §2 — Smoke test (exact commands)

**Use this when:**
- Onboarding a new Claude Code session to verify the API is reachable
- Diagnosing sync failures
- Exploring new endpoints before building against them

**SSH first:**

```bash
ssh cloudways-jm
```

**Then run:**

```bash
mkdir -p ~/sc-test

curl -s -H "SC-TOKEN: aac3f13b-fb87-4f16-9677-8f9955736ff4" \
     -H "Accept: application/json" \
     https://api.supercontrol.co.uk/v3/Properties/Index \
     | python3 -m json.tool > ~/sc-test/01-index.json

curl -s -H "SC-TOKEN: aac3f13b-fb87-4f16-9677-8f9955736ff4" \
     -H "Accept: application/json" \
     https://api.supercontrol.co.uk/v3/Properties/Listing/669466 \
     | python3 -m json.tool > ~/sc-test/02-compass-point-listing.json

curl -s -H "SC-TOKEN: aac3f13b-fb87-4f16-9677-8f9955736ff4" \
     -H "Accept: application/json" \
     https://api.supercontrol.co.uk/v3/Properties/PropertyConfiguration/669466 \
     | python3 -m json.tool > ~/sc-test/03-compass-point-config.json
```

**To capture HTTP status alongside the body (useful when a curl fails silently):**

```bash
curl -s -w "\nHTTP %{http_code}\n" \
     -H "SC-TOKEN: aac3f13b-fb87-4f16-9677-8f9955736ff4" \
     -H "Accept: application/json" \
     https://api.supercontrol.co.uk/v3/Properties/Index \
     -o ~/sc-test/01-index.json
```

**Inspect:**

```bash
cd ~/sc-test
ls -la                                                     # file sizes
for f in *.json; do echo "=== $f ==="; jq 'keys' "$f" 2>/dev/null || head -5 "$f"; done   # top-level keys
jq '.images | length' 02-compass-point-listing.json        # image count
jq '.property.amenities' 02-compass-point-listing.json     # amenity list
jq '.adContent | {propertyName, hasDescription: (.description | length > 0)}' 02-compass-point-listing.json
```

**Test property:** `669466` (Compass Point). Use this same ID for sync development and smoke tests — the payload shape is representative and has been verified.

---

## §3 — Payload shapes (verified against Compass Point 669466)

### 3a — Listing (`/v3/Properties/Listing/{id}`) — ~28 KB

```json
{
  "adContent": {
    "propertyName": "Compass Point",
    "subcaption": "Short tagline",
    "description": "Full long-form property description (HTML)",
    "accommodationsSummary": "Short accommodation summary",
    "location": "Free-text location blurb",
    "changeover": "Changeover day copy",
    "second": "Linen / policy copy"
  },
  "location": {
    "address": { "line1": "...", "city": "...", "postcode": "...", "country": "GB" },
    "description": "Location context prose",
    "geoCode": { "latitude": 50.xxxx, "longitude": -5.xxxx }
  },
  "images": [
    { "photoId": 123456, "url": "https://scimages.supercontrol.co.uk/.../file.jpg" },
    …84 images for Compass Point
  ],
  "property": {
    "area": 120,
    "areaUnit": "sqm",
    "bathrooms": [ { "type": "ENSUITE", "hasBath": true, "hasShower": true }, … ],
    "bedrooms": [ { "type": "DOUBLE", "bedType": "KING" }, … ],
    "rooms": [ { "name": "Living room", "beds": [ … ] }, … ],
    "amenities": [ "AMENITIES_FREE_WIFI", "LOCATION_TYPE_OCEAN_FRONT", "POOL_SPA_HOT_TUB", … ],
    "propertyType": "COTTAGE",
    "registrationNumber": "…",
    "epcRating": "B"
  }
}
```

**Key fields for the WP mapping:**

| SC field                                    | Maps to WP                                |
| ------------------------------------------- | ----------------------------------------- |
| `adContent.propertyName`                    | `post_title`                              |
| `adContent.description`                     | `post_content` (main body)                |
| `adContent.subcaption`                      | `acf: subcaption`                         |
| `adContent.accommodationsSummary`           | `acf: accommodation_summary`              |
| `location.address.*`                        | `acf: address_*` fields                   |
| `location.geoCode.{latitude,longitude}`     | `acf: lat`, `acf: lng` (Mapbox input)     |
| `images[]`                                  | WP media library + gallery ACF repeater   |
| `property.amenities[]` (enum array)         | 16 per-amenity boolean ACF fields (see PROJECT_MAP.md §3b table for the full mapping) |
| `property.bedrooms.length`                  | `acf: bedrooms` (integer)                 |
| `property.bathrooms.length`                 | `acf: bathrooms` (integer)                |
| `property.area` + `areaUnit`                | `acf: area`, `acf: area_unit`             |
| `property.propertyType`                     | `acf: property_type`                      |
| `property.epcRating`                        | `acf: epc_rating`                         |

### 3b — Configuration (`/v3/Properties/PropertyConfiguration/{id}`) — small payload

```json
{
  "checkInTime": "16:00",
  "checkOutTime": "10:00",
  "maximumOccupancy": { "adults": 4, "guests": 6, "children": 2 },
  "petsAllowed": true,
  "childrenAllowed": true,
  "smokingAllowed": false,
  "cancellationPolicy": "STANDARD_…",
  "acceptedPaymentForms": [ "CARD", "BANK_TRANSFER" ],
  "allowBookings": true,
  "allowEnquiries": true
}
```

Account-level defaults (rental agreement PDF, merchant name, minimum guest age) also surface here when the property inherits them rather than overriding — worth parsing for but not blocking.

**WP mapping:**

| SC field                                   | Maps to WP                                  |
| ------------------------------------------ | ------------------------------------------- |
| `checkInTime`, `checkOutTime`              | `acf: check_in_time`, `acf: check_out_time` |
| `maximumOccupancy.guests`                  | `acf: sleeps` (drives filter)               |
| `maximumOccupancy.children`                | `acf: max_children`                         |
| `petsAllowed`                              | `acf: pet_welcome` (drives filter)          |
| `cancellationPolicy`                       | `acf: cancellation_policy`                  |
| `allowBookings`                            | `acf: allow_bookings`                       |

### 3c — Prices (`/v3/Prices/Properties/{id}`) — ~64 KB per property

```json
{
  "currency": "Gbp",
  "fees": [
    { "feeId": 1, "name": "Cleaning", "type": "PER_STAY", "price": 45, "vat": 9,
      "feePayableWith": "BALANCE", "refundable": false, "hidden": false }
  ],
  "priceLos": [
    "2026-04-21,0,0,0,0,0,0,680,0,0,0,0,0,0,950",
    …731 daily rows (2-year horizon)
  ],
  "paymentSchedule": {
    "deposit": { "type": "PERCENT", "value": 25 },
    "balanceDueDays": 42
  }
}
```

**The `priceLos` format matters:** each row is `YYYY-MM-DD` followed by comma-separated prices indexed by length-of-stay. Position 0 is "1-night stay price", position 1 is "2-night stay", etc. A `0` means not bookable at that LOS. The array covers ~731 days (today → +2y).

**WP mapping:** denormalise into a `_pc_prices` child table (custom DB table, not postmeta — postmeta would balloon the DB). Each row: `property_id, date, los, price`. The filter layer only needs the "cheapest weekly price" (LOS=6 for a Sat-Sat week) for the price-range slider — compute this at sync time into a simple `acf: price_from_weekly` field for fast filter queries.

### 3d — Availability (`/v3/Availability/Properties/{id}`) — ~5 KB per property

```json
{
  "startDate": "2026-04-21",
  "endDate": "2028-04-20",
  "availability": "YYYYYNNNNYYYY…",
  "changeOver": "IIICXXXXXXXOO…",
  "minStay": "7,7,7,7,3,3,3…",
  "maxStay": "14,14,14,14,…",
  "minPriorNotify": 2
}
```

- `availability` — 731-char string, `Y` = available, `N` = unavailable
- `changeOver` — 731-char codes: `I` = in-only (arrivals), `O` = out-only (departures), `C` = change day (both), `X` = no change permitted
- `minStay` / `maxStay` — comma-separated per-day values
- `minPriorNotify` — integer days

**WP mapping:** denormalise into a `_pc_availability` child table. For the filter layer, this data doesn't feed filters — it's only consumed at booking time on the `/search/` page (date-availability check against the candidate set).

---

## §4 — Sync strategy

Per PROJECT_MAP.md §3b — restated here for convenience:

| Feed           | Frequency        | Mechanism                                                     |
| -------------- | ---------------- | ------------------------------------------------------------- |
| Content        | Every 6 hours    | Index → diff `lastUpdated` → fetch changed Listings only      |
| Configuration  | Every 6 hours    | Same diff strategy; Configuration payload is smaller          |
| Prices         | Every 30 minutes | Same diff strategy. Compute `price_from_weekly` on write.     |
| Availability   | On-demand only   | Candidate-set lookup at booking time; not cached/synced       |
| Reviews        | Nightly          | Index → fetch changed reviews only                            |

**Infrastructure:**

- Runs as WP-Cron on the Cloudways server (IP 134.209.22.220 — whitelisted)
- All sync logic lives in a dedicated plugin `pc-supercontrol-sync` (NOT the theme)
- Failures log to a `pc_sc_sync_log` custom DB table
- `wp sc sync` WP-CLI command for manual triggers (useful during development)
- Idempotent: re-running a sync produces the same DB state
- Never overwrites "Manual" ACF fields (per PROJECT_MAP.md §3b) — sync writes Manual fields on first-import only; subsequent syncs skip them

---

## §5 — Error handling & rate limits

- No documented rate limits observed during exploration (as of 20 April 2026). Conservative approach: cap bulk fetches at 2 requests/second. Revisit if 429s appear.
- HTTP 401 → SC-TOKEN invalid or revoked. Check token in SuperControl admin; fail loudly.
- HTTP 403 → IP not whitelisted. Confirm `134.209.22.220` is still on the whitelist (SC admin can revoke).
- HTTP 404 on per-property fetch → property deleted from SC. Sync plugin should flag these for owner review rather than auto-unpublishing the WP post.
- Empty `images[]` array → property is in SC but hasn't had content added yet. Treat as "pending" — don't publish to public WP.

---

## §6 — Open questions

- **Reviews endpoint population** — confirm whether the CS account has reviews populated before designing the WP review surface. If empty, skip reviews for v1 and revisit.
- **Pets supplement fee modelling** — `fees[]` can include per-pet supplements. Needs a clear rule: surface on the filter drawer ("+£25/pet/stay") or bury in booking flow? Product decision.
- **Currency handling** — `currency: "Gbp"` throughout for CS. If Pure Cornwall ever expands to multi-currency, this is where it lives. No-op for v1.
- **EPC rating display** — SC returns it; do we show it on the cottage page? SEO-friendly for UK searches ("energy efficient holiday cottage"). Product decision.

---

## §7 — Version history

| Date        | Change                                                                |
| ----------- | --------------------------------------------------------------------- |
| 2026-04-20  | Initial doc — endpoints verified against Compass Point (669466)       |

---

**End of SUPERCONTROL_API.md**
