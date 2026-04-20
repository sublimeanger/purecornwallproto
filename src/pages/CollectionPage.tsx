import { useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import CompactIntro from "@/components/destination/CompactIntro";
import DestinationGrid from "@/components/destination/DestinationGrid";
import DestinationStats from "@/components/destination/DestinationStats";
import DestinationMap from "@/components/destination/DestinationMap";
import DestinationAtmosphere from "@/components/destination/DestinationAtmosphere";
import DestinationFAQ from "@/components/destination/DestinationFAQ";
import CollectionDestinationsGrid from "@/components/collection/CollectionDestinationsGrid";
import CollectionEditorial from "@/components/collection/CollectionEditorial";
import CollectionRelated from "@/components/collection/CollectionRelated";
import {
  dogFriendlyData,
  generateDogFriendlyCottages,
  CollectionData,
} from "@/data/dogFriendlyData";

interface CollectionPageProps {
  data?: CollectionData;
}

const CollectionPage = ({ data = dogFriendlyData }: CollectionPageProps) => {
  const cottages = useMemo(() => generateDogFriendlyCottages(), []);

  return (
    <div className="bg-background min-h-screen">
      <Header />

      {/* Above-the-fold: arrival → start shopping */}
      <DestinationHero
        image={data.hero.image}
        eyebrow={data.hero.eyebrow}
        name={data.name}
        tagline={data.hero.tagline}
        caption={data.hero.caption}
      />
      <DestinationBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "#" },
          { label: data.name },
        ]}
      />
      <CompactIntro text={data.compactIntro} />

      {/* Primary shopping surface */}
      <DestinationGrid
        name={data.name}
        cottages={cottages}
        totalCount={data.cottagesIntro.totalCount}
      />

      {/* Collection-specific: where these cottages cluster */}
      {data.destinationsGrid && data.destinationsGrid.items.length >= 2 && (
        <CollectionDestinationsGrid
          items={data.destinationsGrid.items}
          collectionName={data.name}
          collectionSlug={data.slug}
          filterKey={data.filterKey}
        />
      )}

      {/* Supporting content — each optional */}
      {data.stats && data.stats.length >= 3 && (
        <DestinationStats name={data.name} stats={data.stats} />
      )}
      {data.map && data.map.pins.length >= 3 && (
        <DestinationMap {...data.map} />
      )}
      {data.editorial && data.editorial.paragraphs.length >= 1 && (
        <CollectionEditorial
          eyebrow={data.editorial.eyebrow}
          heading={data.editorial.heading}
          paragraphs={data.editorial.paragraphs}
          pullQuote={data.editorial.pullQuote}
        />
      )}
      {data.atmosphere && data.atmosphere.images.length === 3 && (
        <DestinationAtmosphere {...data.atmosphere} />
      )}

      {/* Always render */}
      <CollectionRelated items={data.related.items} />
      <DestinationFAQ faqs={data.faqs} />

      <Footer />
    </div>
  );
};

export default CollectionPage;
