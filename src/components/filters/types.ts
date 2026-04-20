export const FEATURE_KEYS = [
  "Sea View",
  "Dog Friendly",
  "Hot Tub",
  "Pool",
  "Parking",
  "Pet Welcome",
  "Wood Burner",
  "Garden",
  "EV Charger",
  "Sauna",
  "Balcony",
  "WiFi",
] as const;

export type FeatureKey = (typeof FEATURE_KEYS)[number];

export interface FilterState {
  sleeps: number | null; // null = "Any"
  bedrooms: number | null;
  bathrooms: number | null;
  priceMin: number;
  priceMax: number; // 5000 displays as "5000+"
  features: FeatureKey[];
}

export const PRICE_MIN = 0;
export const PRICE_MAX = 5000;
export const PRICE_STEP = 50;

export const SLEEPS_RANGE: [number, number] = [1, 16];
export const BEDROOMS_RANGE: [number, number] = [1, 8];
export const BATHROOMS_RANGE: [number, number] = [1, 6];

export const initialFilterState: FilterState = {
  sleeps: null,
  bedrooms: null,
  bathrooms: null,
  priceMin: PRICE_MIN,
  priceMax: PRICE_MAX,
  features: [],
};

export const isFilterActive = (s: FilterState): number => {
  let count = 0;
  if (s.sleeps !== null) count++;
  if (s.bedrooms !== null) count++;
  if (s.bathrooms !== null) count++;
  if (s.priceMin !== PRICE_MIN || s.priceMax !== PRICE_MAX) count++;
  count += s.features.length;
  return count;
};

export interface MockCottage {
  id: string;
  name: string;
  location: string;
  pricePerWeek: number;
  sleeps: number;
  bedrooms: number;
  bathrooms: number;
  features: FeatureKey[];
  image: string;
}
