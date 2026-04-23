import {
  FilterState,
  initialFilterState,
  PRICE_MIN,
  PRICE_MAX,
  SidebarFeatureKey,
  TopBarCollection,
  RegionKey,
  TOP_BAR_FEATURE_COLLECTIONS,
  TOP_BAR_OCCASION_COLLECTIONS,
  REGION_KEYS,
  LOCATION_CHARACTER_KEYS,
  OUTDOOR_SPACE_KEYS,
  INDOOR_FEATURE_KEYS,
  KITCHEN_KEYS,
  FAMILY_FRIENDLY_KEYS,
  ACTIVITY_KEYS,
  ESSENTIAL_KEYS,
  ACCESSIBILITY_KEYS,
  MockCottage,
} from "@/components/filters/types";
import type { SortKey } from "@/components/filters/PropertyToolbar";

export interface CataloguePageState extends FilterState {
  sort: SortKey;
  page: number;
}

const VALID_TOP_BAR: Set<string> = new Set([...TOP_BAR_FEATURE_COLLECTIONS, ...TOP_BAR_OCCASION_COLLECTIONS]);
const VALID_REGIONS: Set<string> = new Set(REGION_KEYS);
const VALID_SIDEBAR_FEATURES: Set<string> = new Set([
  ...LOCATION_CHARACTER_KEYS,
  ...OUTDOOR_SPACE_KEYS,
  ...INDOOR_FEATURE_KEYS,
  ...KITCHEN_KEYS,
  ...FAMILY_FRIENDLY_KEYS,
  ...ACTIVITY_KEYS,
  ...ESSENTIAL_KEYS,
  ...ACCESSIBILITY_KEYS,
]);
const VALID_SORTS: SortKey[] = ["featured", "price-asc", "price-desc", "bedrooms", "name"];

export const parseUrlToState = (search: string): CataloguePageState => {
  const params = new URLSearchParams(search);
  const state: CataloguePageState = {
    ...initialFilterState,
    sort: "featured",
    page: 1,
  };

  const col = params.get("collection");
  if (col && VALID_TOP_BAR.has(col)) state.topBarCollection = col as TopBarCollection;

  const reg = params.get("region");
  if (reg && VALID_REGIONS.has(reg)) state.region = reg as RegionKey;
  const town = params.get("town");
  if (town) state.townSlug = town;

  const nParse = (key: string): number | null => {
    const v = params.get(key);
    if (v === null) return null;
    const n = parseInt(v, 10);
    return Number.isFinite(n) ? n : null;
  };
  state.sleeps = nParse("sleeps");
  state.bedrooms = nParse("bedrooms");
  state.bathrooms = nParse("bathrooms");

  const pMin = nParse("price_min");
  const pMax = nParse("price_max");
  if (pMin !== null) state.priceMin = pMin;
  if (pMax !== null) state.priceMax = pMax;

  const feats = params.get("features");
  if (feats) {
    state.features = feats
      .split(",")
      .filter((k) => VALID_SIDEBAR_FEATURES.has(k)) as SidebarFeatureKey[];
  }

  const sort = params.get("sort");
  if (sort && (VALID_SORTS as string[]).includes(sort)) state.sort = sort as SortKey;

  const page = nParse("page");
  if (page !== null && page >= 1) state.page = page;

  return state;
};

export const stateToUrlParams = (state: CataloguePageState): string => {
  const params = new URLSearchParams();

  if (state.topBarCollection) params.set("collection", state.topBarCollection);
  if (state.region) params.set("region", state.region);
  if (state.townSlug) params.set("town", state.townSlug);
  if (state.sleeps !== null) params.set("sleeps", String(state.sleeps));
  if (state.bedrooms !== null) params.set("bedrooms", String(state.bedrooms));
  if (state.bathrooms !== null) params.set("bathrooms", String(state.bathrooms));
  if (state.priceMin !== PRICE_MIN) params.set("price_min", String(state.priceMin));
  if (state.priceMax !== PRICE_MAX) params.set("price_max", String(state.priceMax));
  if (state.features.length > 0) params.set("features", state.features.join(","));
  if (state.sort !== "featured") params.set("sort", state.sort);
  if (state.page !== 1) params.set("page", String(state.page));

  // URLSearchParams encodes commas as %2C — undo for cleaner URLs
  const s = params.toString().replace(/%2C/g, ",");
  return s ? "?" + s : "";
};

export const applyFilters = (cottages: MockCottage[], state: FilterState): MockCottage[] => {
  return cottages.filter((c) => {
    if (state.topBarCollection && !c.collections.includes(state.topBarCollection)) return false;
    if (state.region && c.region !== state.region) return false;
    if (state.townSlug && c.townSlug !== state.townSlug) return false;
    if (state.sleeps !== null && c.sleeps < state.sleeps) return false;
    if (state.bedrooms !== null && c.bedrooms < state.bedrooms) return false;
    if (state.bathrooms !== null && c.bathrooms < state.bathrooms) return false;
    if (state.priceMin > PRICE_MIN && c.pricePerWeek < state.priceMin) return false;
    if (state.priceMax < PRICE_MAX && c.pricePerWeek > state.priceMax) return false;
    for (const feat of state.features) {
      if (!c.features.includes(feat)) return false;
    }
    return true;
  });
};

export const applySort = (cottages: MockCottage[], sort: SortKey): MockCottage[] => {
  const arr = [...cottages];
  switch (sort) {
    case "price-asc":
      return arr.sort((a, b) => a.pricePerWeek - b.pricePerWeek);
    case "price-desc":
      return arr.sort((a, b) => b.pricePerWeek - a.pricePerWeek);
    case "bedrooms":
      return arr.sort((a, b) => b.bedrooms - a.bedrooms);
    case "name":
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    case "featured":
    default:
      return arr;
  }
};
