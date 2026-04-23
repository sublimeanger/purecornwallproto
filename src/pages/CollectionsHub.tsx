import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import CompactIntro from "@/components/destination/CompactIntro";
import DestinationFAQ from "@/components/destination/DestinationFAQ";
import CollectionFilterChips, { CollectionChipKey } from "@/components/hub/CollectionFilterChips";
import CollectionsGrid from "@/components/hub/CollectionsGrid";
import { collectionsHubData } from "@/data/collectionsHubData";

const CollectionsHub = () => {
  const [activeFilter, setActiveFilter] = useState<CollectionChipKey>("all");
  const data = collectionsHubData;

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
      <CollectionsGrid collections={data.collections} activeFilter={activeFilter} />
      <DestinationFAQ faqs={data.faqs} />
      <Footer />
    </div>
  );
};

export default CollectionsHub;
