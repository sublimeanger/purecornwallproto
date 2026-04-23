import { useState, useEffect, useMemo, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import PropertyToolbar from "@/components/filters/PropertyToolbar";
import FilterDrawer from "@/components/filters/FilterDrawer";
import ActiveFilterChips from "@/components/catalogue/ActiveFilterChips";
import CottagesGrid from "@/components/catalogue/CottagesGrid";
import CottagesPagination from "@/components/catalogue/CottagesPagination";
import SearchHero from "@/components/search/SearchHero";
import {
  FilterState,
  initialFilterState,
  isFilterActive,
  SidebarFeatureKey,
  PRICE_MIN,
  PRICE_MAX,
} from "@/components/filters/types";
import {
  CataloguePageState,
  parseUrlToState,
  stateToUrlParams,
  applyFilters,
  applySort,
} from "@/lib/cottagesFilterUrl";
import { applyQuery } from "@/lib/cottagesSearch";
import { cottagesCatalogueData } from "@/data/cottagesCatalogueData";

const PER_PAGE = 24;

interface SearchPageState extends CataloguePageState {
  query: string;
}

const parseSearchUrl = (search: string): SearchPageState => {
  const params = new URLSearchParams(search);
  const query = params.get("q") || "";
  const baseState = parseUrlToState(search);
  return { ...baseState, query };
};

const searchStateToUrlParams = (state: SearchPageState): string => {
  const baseParams = stateToUrlParams(state);
  if (!state.query) return baseParams;
  const prefix = baseParams ? baseParams + "&" : "?";
  return prefix + "q=" + encodeURIComponent(state.query);
};

const SearchResults = () => {
  const [pageState, setPageState] = useState<SearchPageState>(() =>
    parseSearchUrl(typeof window !== "undefined" ? window.location.search : ""),
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const newUrl = window.location.pathname + searchStateToUrlParams(pageState);
    if (window.location.pathname + window.location.search !== newUrl) {
      window.history.replaceState({}, "", newUrl);
    }
  }, [pageState]);

  useEffect(() => {
    const onPop = () => setPageState(parseSearchUrl(window.location.search));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const allCottages = cottagesCatalogueData.cottages;
  const queryFiltered = useMemo(
    () => applyQuery(allCottages, pageState.query),
    [allCottages, pageState.query],
  );
  const structurallyFiltered = useMemo(
    () => applyFilters(queryFiltered, pageState),
    [queryFiltered, pageState],
  );
  const sorted = useMemo(
    () => applySort(structurallyFiltered, pageState.sort),
    [structurallyFiltered, pageState.sort],
  );

  const totalPages = Math.max(1, Math.ceil(sorted.length / PER_PAGE));
  const safePage = Math.min(pageState.page, totalPages);
  const pageStart = (safePage - 1) * PER_PAGE;
  const visible = sorted.slice(pageStart, pageStart + PER_PAGE);

  useEffect(() => {
    if (pageState.page !== safePage) setPageState((s) => ({ ...s, page: safePage }));
  }, [safePage, pageState.page]);

  const updateState = useCallback((patch: Partial<SearchPageState>) => {
    setPageState((s) => {
      const resetPage = !("page" in patch);
      return { ...s, ...patch, page: resetPage ? 1 : (patch.page ?? s.page) };
    });
  }, []);

  const handlePageChange = (page: number) => {
    const newUrl = window.location.pathname + searchStateToUrlParams({ ...pageState, page });
    window.history.pushState({}, "", newUrl);
    setPageState((s) => ({ ...s, page }));
    const grid = document.getElementById("search-grid-top");
    if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clearAllFilters = () => {
    setPageState((s) => ({
      ...initialFilterState,
      sort: s.sort,
      page: 1,
      query: s.query,
    }));
  };

  const clearQueryAndFilters = () => {
    setPageState((s) => ({
      ...initialFilterState,
      sort: s.sort,
      page: 1,
      query: "",
    }));
  };

  const activeFilterCount = isFilterActive(pageState);
  const totalCottages = allCottages.length;

  return (
    <div className="bg-background min-h-screen">
      <Header />

      <SearchHero
        query={pageState.query}
        filteredCount={sorted.length}
        totalCount={totalCottages}
        onQueryChange={(q) => updateState({ query: q })}
        onQueryClear={() => updateState({ query: "" })}
      />

      <DestinationBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Search" },
        ]}
      />

      <PropertyToolbar
        totalCount={totalCottages}
        filteredCount={sorted.length}
        activeFilterCount={activeFilterCount}
        sort={pageState.sort}
        onSortChange={(s) => updateState({ sort: s })}
        onOpenFilter={() => setDrawerOpen(true)}
      />

      <ActiveFilterChips
        state={pageState}
        onRemoveTopBar={() => updateState({ topBarCollection: null })}
        onRemoveRegion={() => updateState({ region: null })}
        onRemoveTown={() => updateState({ townSlug: null })}
        onRemoveSleeps={() => updateState({ sleeps: null })}
        onRemoveBedrooms={() => updateState({ bedrooms: null })}
        onRemoveBathrooms={() => updateState({ bathrooms: null })}
        onRemovePrice={() => updateState({ priceMin: PRICE_MIN, priceMax: PRICE_MAX })}
        onRemoveFeature={(key: SidebarFeatureKey) =>
          updateState({ features: pageState.features.filter((f) => f !== key) })
        }
        onClearAll={clearAllFilters}
      />

      <div id="search-grid-top" />

      {sorted.length === 0 ? (
        <SearchEmptyState
          query={pageState.query}
          hasFilters={activeFilterCount > 0}
          onClearSearch={() => updateState({ query: "" })}
          onClearAll={clearQueryAndFilters}
        />
      ) : (
        <>
          <CottagesGrid cottages={visible} />
          <CottagesPagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        filters={pageState}
        onChange={(next: FilterState) =>
          setPageState((prev) => ({ ...prev, ...next, page: 1 }))
        }
        filteredCount={sorted.length}
      />

      <Footer />
    </div>
  );
};

const SearchEmptyState = ({
  query,
  hasFilters,
  onClearSearch,
  onClearAll,
}: {
  query: string;
  hasFilters: boolean;
  onClearSearch: () => void;
  onClearAll: () => void;
}) => {
  const hasQuery = query.trim().length > 0;
  const heading = hasQuery
    ? `No cottages match "${query}"`
    : "No cottages match these filters";
  const body = hasQuery
    ? hasFilters
      ? "Try broader search terms, or clear your filters to see more results."
      : "Try broader search terms, or browse our full catalogue of 119 cottages."
    : "Try removing a filter or two to see more results.";

  const buttonStyle = {
    padding: "14px 40px",
    background: "transparent",
    border: "1px solid #d3a36e",
    borderRadius: 0,
    color: "#d3a36e",
    fontFamily: "var(--font-body)",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: 3,
    textTransform: "uppercase" as const,
    cursor: "pointer",
    transition: "background 200ms ease, color 200ms ease",
  };

  const onEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "#d3a36e";
    e.currentTarget.style.color = "#ffffff";
  };
  const onLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "#d3a36e";
  };

  return (
    <section style={{ background: "#ffffff", padding: "10vw 0" }}>
      <div className="pc-container" style={{ textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(28px, 2.4vw, 36px)",
            color: "#2f5550",
            margin: 0,
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            fontWeight: 400,
            color: "#7a7a7a",
            marginTop: 16,
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          {body}
        </p>
        <div
          style={{
            marginTop: 32,
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {hasQuery && (
            <button type="button" onClick={onClearSearch} style={buttonStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              Clear Search →
            </button>
          )}
          <button type="button" onClick={onClearAll} style={buttonStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            Clear All →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
