import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import CompactIntro from "@/components/destination/CompactIntro";
import DestinationFAQ from "@/components/destination/DestinationFAQ";
import CollectionFilterChips, { CollectionChipKey } from "@/components/hub/CollectionFilterChips";
import CollectionsGrid, { type CollectionHubCard } from "@/components/hub/CollectionsGrid";
import CollectionHeroFeature from "@/components/hub/CollectionHeroFeature";
import { collectionsHubData } from "@/data/collectionsHubData";

// Featured collection on the hub: swap this slug to change which collection gets the hero treatment
const FEATURED_SLUG = "hot-tubs";
const COMPANION_SLUGS = ["christmas-nye", "dog-friendly"];

const CollectionsHub = () => {
  const [activeFilter, setActiveFilter] = useState<CollectionChipKey>("all");
  const data = collectionsHubData;

  const featured = data.collections.find((c) => c.slug === FEATURED_SLUG);
  const companions = COMPANION_SLUGS
    .map((slug) => data.collections.find((c) => c.slug === slug))
    .filter((c): c is CollectionHubCard => c !== undefined);

  const showHero = activeFilter === "all" && !!featured && companions.length === 2;
  const excludeSlugs = showHero ? [FEATURED_SLUG, ...COMPANION_SLUGS] : [];

  return (
    <div style={{ background: "#ffffff" }}>
      <Header />
      <DestinationHero
        image={data.hero.image}
        eyebrow={data.hero.eyebrow}
        name={data.hero.name}
        tagline={data.hero.tagline}
        caption={data.hero.caption}
      />
      <DestinationBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Collections" },
        ]}
      />
      <CompactIntro text={data.compactIntro} />
      <CollectionFilterChips active={activeFilter} onChange={setActiveFilter} />
      {showHero && featured && (
        <CollectionHeroFeature hero={featured} companions={companions} />
      )}
      <CollectionsGrid
        collections={data.collections}
        activeFilter={activeFilter}
        excludeSlugs={excludeSlugs}
      />
      <DestinationFAQ faqs={data.faqs} />
      <Footer />
    </div>
  );
};

export default CollectionsHub;
