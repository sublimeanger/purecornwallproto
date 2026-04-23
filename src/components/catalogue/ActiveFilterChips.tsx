import { X } from "lucide-react";
import {
  FilterState,
  SidebarFeatureKey,
  TOP_BAR_COLLECTION_LABELS,
  REGION_LABELS,
  SIDEBAR_FEATURE_LABELS,
  PRICE_MIN,
  PRICE_MAX,
  isFilterActive,
} from "@/components/filters/types";
import { destinationsHubData } from "@/data/destinationsHubData";

interface ActiveFilterChipsProps {
  state: FilterState;
  onRemoveTopBar: () => void;
  onRemoveRegion: () => void;
  onRemoveTown: () => void;
  onRemoveSleeps: () => void;
  onRemoveBedrooms: () => void;
  onRemoveBathrooms: () => void;
  onRemovePrice: () => void;
  onRemoveFeature: (key: SidebarFeatureKey) => void;
  onClearAll: () => void;
}

const Chip = ({ label, onRemove }: { label: string; onRemove: () => void }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      background: "#f7f5f2",
      border: "none",
      borderRadius: 0,
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 500,
      color: "#2f5550",
      letterSpacing: 2,
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    }}
  >
    {label}
    <button
      type="button"
      onClick={onRemove}
      aria-label={`Remove ${label}`}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "#7a7a7a",
        padding: 2,
        marginLeft: 4,
        display: "inline-flex",
        alignItems: "center",
        transition: "color 200ms ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#2f5550")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#7a7a7a")}
    >
      <X size={14} />
    </button>
  </span>
);

const ActiveFilterChips = ({
  state,
  onRemoveTopBar,
  onRemoveRegion,
  onRemoveTown,
  onRemoveSleeps,
  onRemoveBedrooms,
  onRemoveBathrooms,
  onRemovePrice,
  onRemoveFeature,
  onClearAll,
}: ActiveFilterChipsProps) => {
  const count = isFilterActive(state);
  if (count === 0) return null;

  const chips: { label: string; onRemove: () => void; key: string }[] = [];

  if (state.topBarCollection) {
    chips.push({
      key: "topBar",
      label: TOP_BAR_COLLECTION_LABELS[state.topBarCollection],
      onRemove: onRemoveTopBar,
    });
  }
  if (state.region) {
    chips.push({ key: "region", label: REGION_LABELS[state.region], onRemove: onRemoveRegion });
  }
  if (state.townSlug) {
    const town = destinationsHubData.towns.find((t) => t.slug === state.townSlug);
    chips.push({
      key: "town",
      label: town ? town.name : state.townSlug,
      onRemove: onRemoveTown,
    });
  }
  if (state.sleeps !== null) {
    chips.push({ key: "sleeps", label: `Sleeps ${state.sleeps}+`, onRemove: onRemoveSleeps });
  }
  if (state.bedrooms !== null) {
    chips.push({
      key: "bedrooms",
      label: `${state.bedrooms}+ Bedrooms`,
      onRemove: onRemoveBedrooms,
    });
  }
  if (state.bathrooms !== null) {
    chips.push({
      key: "bathrooms",
      label: `${state.bathrooms}+ Bathrooms`,
      onRemove: onRemoveBathrooms,
    });
  }
  if (state.priceMin !== PRICE_MIN || state.priceMax !== PRICE_MAX) {
    let label: string;
    if (state.priceMin === PRICE_MIN) {
      label = `Up to £${state.priceMax.toLocaleString()}`;
    } else if (state.priceMax === PRICE_MAX) {
      label = `£${state.priceMin.toLocaleString()}+`;
    } else {
      label = `£${state.priceMin.toLocaleString()} – £${state.priceMax.toLocaleString()}`;
    }
    chips.push({ key: "price", label, onRemove: onRemovePrice });
  }
  for (const feat of state.features) {
    chips.push({
      key: `feat-${feat}`,
      label: SIDEBAR_FEATURE_LABELS[feat],
      onRemove: () => onRemoveFeature(feat),
    });
  }

  return (
    <div
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e5e0da",
        borderBottom: "1px solid #e5e0da",
        padding: "14px 0",
      }}
    >
      <div className="pc-container">
        <div
          className="afc-row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
              flex: 1,
              minWidth: 0,
            }}
          >
            {chips.map((c) => (
              <Chip key={c.key} label={c.label} onRemove={c.onRemove} />
            ))}
          </div>
          {chips.length >= 2 && (
            <button
              type="button"
              onClick={onClearAll}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#d3a36e",
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: 3,
                textTransform: "uppercase",
                padding: "4px 0",
                marginLeft: "auto",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Clear all
            </button>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .afc-row > div:first-child {
            flex-wrap: nowrap !important;
            overflow-x: auto;
            scrollbar-width: none;
          }
          .afc-row > div:first-child::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </div>
  );
};

export default ActiveFilterChips;
