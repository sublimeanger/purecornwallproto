import { useState, useEffect, useMemo, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import PropertyToolbar from "@/components/filters/PropertyToolbar";
import FilterDrawer from "@/components/filters/FilterDrawer";
import TopBarFilters from "@/components/filters/TopBarFilters";
import ActiveFilterChips from "@/components/catalogue/ActiveFilterChips";
import CottagesGrid from "@/components/catalogue/CottagesGrid";
import CottagesPagination from "@/components/catalogue/CottagesPagination";
import CottagesEmptyState from "@/components/catalogue/CottagesEmptyState";
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
import { cottagesCatalogueData } from "@/data/cottagesCatalogueData";
import heroCornwall from "@/assets/coll-popular.jpg";

const PER_PAGE = 24;

const CottagesCatalogue = () => {
  const [pageState, setPageState] = useState<CataloguePageState>(() =>
    parseUrlToState(typeof window !== "undefined" ? window.location.search : ""),
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Sync state → URL via replaceState (pagination uses pushState in its handler).
  useEffect(() => {
    const newUrl = window.location.pathname + stateToUrlParams(pageState);
    if (window.location.pathname + window.location.search !== newUrl) {
      window.history.replaceState({}, "", newUrl);
    }
  }, [pageState]);

  // Browser back/forward
  useEffect(() => {
    const onPop = () => setPageState(parseUrlToState(window.location.search));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const filtered = useMemo(
    () => applyFilters(cottagesCatalogueData.cottages, pageState),
    [pageState],
  );
  const sorted = useMemo(() => applySort(filtered, pageState.sort), [filtered, pageState.sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PER_PAGE));
  const safePage = Math.min(pageState.page, totalPages);
  const pageStart = (safePage - 1) * PER_PAGE;
  const visible = sorted.slice(pageStart, pageStart + PER_PAGE);

  // Clamp page if filter changes shrink the result set
  useEffect(() => {
    if (pageState.page !== safePage) {
      setPageState((s) => ({ ...s, page: safePage }));
    }
  }, [safePage, pageState.page]);

  // Any filter or sort change resets page to 1; pagination handler bypasses this by setting page directly.
  const updateState = useCallback((patch: Partial<CataloguePageState>) => {
    setPageState((s) => ({ ...s, ...patch, page: 1 }));
  }, []);

  const handlePageChange = (page: number) => {
    const newUrl = window.location.pathname + stateToUrlParams({ ...pageState, page });
    window.history.pushState({}, "", newUrl);
    setPageState((s) => ({ ...s, page }));
    const grid = document.getElementById("cottages-grid-top");
    if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clearAllFilters = () => {
    setPageState((s) => ({
      ...initialFilterState,
      sort: s.sort,
      page: 1,
    }));
  };

  const activeFilterCount = isFilterActive(pageState);
  const totalCottages = cottagesCatalogueData.cottages.length;

  return (
    <div className="bg-background min-h-screen">
      <Header />

      <DestinationHero
        image={heroCornwall}
        eyebrow={cottagesCatalogueData.hero.eyebrow}
        name={cottagesCatalogueData.hero.name}
        tagline={cottagesCatalogueData.hero.tagline}
        caption={cottagesCatalogueData.hero.caption}
      />

      <DestinationBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Holiday Cottages", href: "/holiday-cottages" },
          { label: "All Cottages" },
        ]}
      />

      <TopBarFilters
        active={pageState.topBarCollection}
        onChange={(next) => updateState({ topBarCollection: next })}
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

      {sorted.length === 0 ? (
        <CottagesEmptyState onClearAll={clearAllFilters} />
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

export default CottagesCatalogue;
