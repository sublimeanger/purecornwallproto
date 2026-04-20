import { useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import CompactIntro from "@/components/destination/CompactIntro";
import DestinationStats from "@/components/destination/DestinationStats";
import DestinationMap from "@/components/destination/DestinationMap";
import DestinationEditorial from "@/components/destination/DestinationEditorial";
import DestinationAtmosphere from "@/components/destination/DestinationAtmosphere";
import DestinationMiniCollections from "@/components/destination/DestinationMiniCollections";
import DestinationGrid from "@/components/destination/DestinationGrid";
import DestinationThingsToDo from "@/components/destination/DestinationThingsToDo";
import DestinationTravel from "@/components/destination/DestinationTravel";
import DestinationRelated from "@/components/destination/DestinationRelated";
import DestinationFAQ from "@/components/destination/DestinationFAQ";
import { stIvesData, generateStIvesCottages, DestinationData } from "@/data/stIvesData";

interface DestinationPageProps {
  data?: DestinationData;
}

const DestinationPage = ({ data = stIvesData }: DestinationPageProps) => {
  const cottages = useMemo(() => generateStIvesCottages(), []);

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
          { label: "Destinations", href: "#" },
          { label: data.region, href: "#" },
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

      {/* Supplementary shopping */}
      {data.miniCollections && data.miniCollections.length >= 1 && (
        <DestinationMiniCollections collections={data.miniCollections} />
      )}

      {/* Supporting content — each optional */}
      {data.stats && data.stats.length >= 3 && (
        <DestinationStats name={data.name} stats={data.stats} />
      )}
      {data.map && data.map.pins.length >= 3 && (
        <DestinationMap {...data.map} />
      )}
      {data.editorial && data.editorial.paragraphs.length >= 1 && (
        <DestinationEditorial name={data.name} {...data.editorial} />
      )}
      {data.atmosphere && data.atmosphere.images.length === 3 && (
        <DestinationAtmosphere {...data.atmosphere} />
      )}
      {data.thingsToDo && data.thingsToDo.length >= 3 && (
        <DestinationThingsToDo items={data.thingsToDo} />
      )}
      {data.travel && data.travel.length >= 1 && (
        <DestinationTravel items={data.travel} />
      )}

      {/* Always render */}
      <DestinationRelated items={data.related} />
      <DestinationFAQ faqs={data.faqs} />

      <Footer />
    </div>
  );
};

export default DestinationPage;
