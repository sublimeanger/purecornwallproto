// ============================================================================
// Pure Cornwall filter types
// Matches Cornish Secrets filter specification (Jan 2026 revision).
// Source: SuperControl API fields + WordPress property-collections taxonomy +
// property-locations taxonomy + property-size taxonomy.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. Top-bar filters — 12 items in 2 clusters (Feature/Collection + Occasion).
// ----------------------------------------------------------------------------

export const TOP_BAR_FEATURE_COLLECTIONS = [
  "dog-friendly",
  "sea-views",
  "hot-tubs-pools",
  "large-holiday-homes",
  "romantic-retreats",
  "country-cottages",
] as const;

export const TOP_BAR_OCCASION_COLLECTIONS = [
  "2026-collection",
  "late-deals",
  "short-breaks",
  "winter-breaks",
  "easter-breaks",
  "october-half-term",
] as const;

export type TopBarFeatureCollection = (typeof TOP_BAR_FEATURE_COLLECTIONS)[number];
export type TopBarOccasionCollection = (typeof TOP_BAR_OCCASION_COLLECTIONS)[number];
export type TopBarCollection = TopBarFeatureCollection | TopBarOccasionCollection;

export const TOP_BAR_COLLECTION_LABELS: Record<TopBarCollection, string> = {
  "dog-friendly": "Dog Friendly",
  "sea-views": "Sea Views",
  "hot-tubs-pools": "Hot Tubs & Pools",
  "large-holiday-homes": "Large Holiday Homes",
  "romantic-retreats": "Romantic Retreats",
  "country-cottages": "Country Cottages",
  "2026-collection": "2026 Collection",
  "late-deals": "Late Deals",
  "short-breaks": "Short Breaks",
  "winter-breaks": "Winter Breaks",
  "easter-breaks": "Easter Breaks",
  "october-half-term": "October Half Term",
};

// ----------------------------------------------------------------------------
// 2. Sidebar filters — 8 sections, 47 unique keys (48 positions w/ cross-surfaced enclosed-garden).
// ----------------------------------------------------------------------------

// Location Character (2.3) — 7
export const LOCATION_CHARACTER_KEYS = [
  "beachfront-waterfront",
  "near-the-beach",
  "near-coast-path",
  "harbour-marina",
  "rural-countryside",
  "village-setting",
  "town-setting",
] as const;
export type LocationCharacterKey = (typeof LOCATION_CHARACTER_KEYS)[number];

// Outdoor Space (2.4) — 10
export const OUTDOOR_SPACE_KEYS = [
  "hot-tub",
  "private-pool",
  "shared-pool",
  "sauna",
  "garden",
  "enclosed-garden",
  "patio-decking",
  "balcony",
  "bbq",
  "fire-pit",
] as const;
export type OutdoorSpaceKey = (typeof OUTDOOR_SPACE_KEYS)[number];

// Indoor Features (2.5) — 3
export const INDOOR_FEATURE_KEYS = [
  "log-burner-open-fire",
  "games-room",
  "home-office-workspace",
] as const;
export type IndoorFeatureKey = (typeof INDOOR_FEATURE_KEYS)[number];

// Kitchen (2.6) — 2
export const KITCHEN_KEYS = [
  "dishwasher",
  "coffee-machine",
] as const;
export type KitchenKey = (typeof KITCHEN_KEYS)[number];

// Family Friendly (2.7) — 4 (enclosed-garden cross-surfaced)
export const FAMILY_FRIENDLY_KEYS = [
  "family-friendly",
  "cot-travel-crib",
  "highchair",
  "enclosed-garden",
] as const;
export type FamilyFriendlyKey = (typeof FAMILY_FRIENDLY_KEYS)[number];

// Activities Nearby (2.8) — 11
export const ACTIVITY_KEYS = [
  "surfing",
  "walking-coast-path",
  "cycling",
  "fishing",
  "sailing-watersports",
  "rock-climbing",
  "golf",
  "near-historic-sites",
  "near-vineyards",
  "wildlife-nature",
  "spa-wellness",
] as const;
export type ActivityKey = (typeof ACTIVITY_KEYS)[number];

// Essentials (2.9) — 8
export const ESSENTIAL_KEYS = [
  "parking",
  "ev-charging",
  "wifi",
  "washing-machine",
  "tumble-dryer",
  "linen-towels-included",
  "self-checkin",
  "no-car-needed",
] as const;
export type EssentialKey = (typeof ESSENTIAL_KEYS)[number];

// Accessibility (2.10) — 2
export const ACCESSIBILITY_KEYS = [
  "wheelchair-accessible",
  "ground-floor-bedroom",
] as const;
export type AccessibilityKey = (typeof ACCESSIBILITY_KEYS)[number];

export type SidebarFeatureKey =
  | LocationCharacterKey
  | OutdoorSpaceKey
  | IndoorFeatureKey
  | KitchenKey
  | FamilyFriendlyKey
  | ActivityKey
  | EssentialKey
  | AccessibilityKey;

// ----------------------------------------------------------------------------
// 3. Region (2.2)
// ----------------------------------------------------------------------------

export const REGION_KEYS = [
  "west-cornwall",
  "north-cornwall",
  "south-cornwall",
] as const;
export type RegionKey = (typeof REGION_KEYS)[number];

export const REGION_LABELS: Record<RegionKey, string> = {
  "west-cornwall": "West Cornwall",
  "north-cornwall": "North Cornwall",
  "south-cornwall": "South Cornwall",
};

// ----------------------------------------------------------------------------
// 4. Stay & Guests (2.1)
// ----------------------------------------------------------------------------

export const SLEEPS_OPTIONS = [2, 4, 5, 6, 7, 8, 10, 12, 14, 16] as const;
export const BEDROOMS_OPTIONS = [1, 2, 3, 4, 5] as const;
export const BATHROOMS_OPTIONS = [1, 2, 3, 4] as const;

export const SLEEPS_MAX = 16;
export const BEDROOMS_MAX = 5;
export const BATHROOMS_MAX = 4;

export const PRICE_MIN = 0;
export const PRICE_MAX = 5000;
export const PRICE_STEP = 50;

// ----------------------------------------------------------------------------
// 5. FilterState
// ----------------------------------------------------------------------------

export interface FilterState {
  topBarCollection: TopBarCollection | null;

  sleeps: number | null;
  bedrooms: number | null;
  bathrooms: number | null;

  region: RegionKey | null;
  townSlug: string | null;

  features: SidebarFeatureKey[];

  priceMin: number;
  priceMax: number;
}

export const initialFilterState: FilterState = {
  topBarCollection: null,
  sleeps: null,
  bedrooms: null,
  bathrooms: null,
  region: null,
  townSlug: null,
  features: [],
  priceMin: PRICE_MIN,
  priceMax: PRICE_MAX,
};

export const isFilterActive = (s: FilterState): number => {
  let count = 0;
  if (s.topBarCollection !== null) count++;
  if (s.sleeps !== null) count++;
  if (s.bedrooms !== null) count++;
  if (s.bathrooms !== null) count++;
  if (s.region !== null) count++;
  if (s.townSlug !== null) count++;
  if (s.priceMin !== PRICE_MIN || s.priceMax !== PRICE_MAX) count++;
  count += s.features.length;
  return count;
};

// ----------------------------------------------------------------------------
// 6. MockCottage
// ----------------------------------------------------------------------------

export interface MockCottage {
  id: string;
  name: string;
  location: string;
  townSlug: string;
  region: RegionKey;
  pricePerWeek: number;
  sleeps: number;
  bedrooms: number;
  bathrooms: number;
  features: SidebarFeatureKey[];
  collections: TopBarCollection[];
  image: string;
}

// ----------------------------------------------------------------------------
// 7. Sidebar metadata + labels
// ----------------------------------------------------------------------------

export interface SidebarSection {
  id: string;
  title: string;
  keys: readonly SidebarFeatureKey[];
}

export const SIDEBAR_FEATURE_LABELS: Record<SidebarFeatureKey, string> = {
  // Location Character
  "beachfront-waterfront": "Beachfront / Waterfront",
  "near-the-beach": "Near the Beach",
  "near-coast-path": "Near the Coast Path",
  "harbour-marina": "Harbour / Marina",
  "rural-countryside": "Rural / Countryside",
  "village-setting": "Village",
  "town-setting": "Town",
  // Outdoor Space
  "hot-tub": "Hot Tub",
  "private-pool": "Private Pool",
  "shared-pool": "Shared Pool",
  "sauna": "Sauna",
  "garden": "Garden",
  "enclosed-garden": "Enclosed Garden",
  "patio-decking": "Patio / Decking",
  "balcony": "Balcony",
  "bbq": "BBQ",
  "fire-pit": "Fire Pit",
  // Indoor Features
  "log-burner-open-fire": "Log Burner / Open Fire",
  "games-room": "Games Room",
  "home-office-workspace": "Home Office / Workspace",
  // Kitchen
  "dishwasher": "Dishwasher",
  "coffee-machine": "Coffee Machine",
  // Family Friendly
  "family-friendly": "Family-Friendly",
  "cot-travel-crib": "Cot / Travel Crib",
  "highchair": "Highchair",
  // Activities Nearby
  "surfing": "Surfing",
  "walking-coast-path": "Walking & Coast Path",
  "cycling": "Cycling",
  "fishing": "Fishing",
  "sailing-watersports": "Sailing & Watersports",
  "rock-climbing": "Rock Climbing",
  "golf": "Golf",
  "near-historic-sites": "Near Historic Sites",
  "near-vineyards": "Near Vineyards",
  "wildlife-nature": "Wildlife & Nature",
  "spa-wellness": "Spa / Wellness",
  // Essentials
  "parking": "Parking",
  "ev-charging": "EV Charging",
  "wifi": "WiFi",
  "washing-machine": "Washing Machine",
  "tumble-dryer": "Tumble Dryer",
  "linen-towels-included": "Linen & Towels Included",
  "self-checkin": "Self Check-in",
  "no-car-needed": "No Car Needed",
  // Accessibility
  "wheelchair-accessible": "Wheelchair Accessible",
  "ground-floor-bedroom": "Ground Floor Bedroom",
};

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  { id: "location-character", title: "Location character", keys: LOCATION_CHARACTER_KEYS },
  { id: "outdoor-space", title: "Outdoor space", keys: OUTDOOR_SPACE_KEYS },
  { id: "indoor-features", title: "Indoor features", keys: INDOOR_FEATURE_KEYS },
  { id: "kitchen", title: "Kitchen", keys: KITCHEN_KEYS },
  { id: "family-friendly", title: "Family friendly", keys: FAMILY_FRIENDLY_KEYS },
  { id: "activities-nearby", title: "Activities nearby", keys: ACTIVITY_KEYS },
  { id: "essentials", title: "Essentials", keys: ESSENTIAL_KEYS },
  { id: "accessibility", title: "Accessibility", keys: ACCESSIBILITY_KEYS },
];
