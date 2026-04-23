import type { MockCottage } from "@/components/filters/types";
import {
  SIDEBAR_FEATURE_LABELS,
  TOP_BAR_COLLECTION_LABELS,
} from "@/components/filters/types";

export const normalizeQuery = (q: string): string => {
  return q.toLowerCase().trim().replace(/\s+/g, " ");
};

export const matchesQuery = (cottage: MockCottage, normalizedQuery: string): boolean => {
  if (!normalizedQuery) return true;

  const haystacks: string[] = [
    cottage.name.toLowerCase(),
    cottage.location.toLowerCase(),
    ...cottage.features.map((f) => SIDEBAR_FEATURE_LABELS[f].toLowerCase()),
    ...cottage.collections.map((c) => TOP_BAR_COLLECTION_LABELS[c].toLowerCase()),
  ];

  return haystacks.some((h) => h.includes(normalizedQuery));
};

export const applyQuery = (cottages: MockCottage[], query: string): MockCottage[] => {
  const normalized = normalizeQuery(query);
  if (!normalized) return cottages;
  return cottages.filter((c) => matchesQuery(c, normalized));
};
