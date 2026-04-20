import { useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import DestinationOpening from "@/components/destination/DestinationOpening";
import DestinationStats from "@/components/destination/DestinationStats";
import DestinationMap from "@/components/destination/DestinationMap";
import DestinationEditorial from "@/components/destination/DestinationEditorial";
import DestinationAtmosphere from "@/components/destination/DestinationAtmosphere";
import DestinationCottageIntro from "@/components/destination/DestinationCottageIntro";
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

      {/* Act 1 — Arrival */}
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
      <DestinationOpening
        eyebrow={data.opening.eyebrow}
        paragraphs={data.opening.paragraphs}
      />

      {/* Act 2 — Sense of place */}
      <DestinationStats name={data.name} stats={data.stats} />
      <DestinationMap
        imageUrl={data.map.imageUrl}
        caption={data.map.caption}
        pins={data.map.pins}
      />
      <DestinationEditorial
        name={data.name}
        paragraphs={data.editorial.paragraphs}
        pullQuote={data.editorial.pullQuote}
      />
      <DestinationAtmosphere
        images={data.atmosphere.images}
        caption={data.atmosphere.caption}
      />

      {/* Act 3 — Choose your cottage */}
      <DestinationCottageIntro
        eyebrow={data.cottagesIntro.eyebrow}
        name={data.name}
        leadIn={data.cottagesIntro.leadIn}
      />
      <DestinationMiniCollections collections={data.miniCollections} />
      <DestinationGrid
        name={data.name}
        cottages={cottages}
        totalCount={data.cottagesIntro.totalCount}
      />

      {/* Act 4 — Support content */}
      <DestinationThingsToDo items={data.thingsToDo} />
      <DestinationTravel items={data.travel} />
      <DestinationRelated items={data.related} />
      <DestinationFAQ faqs={data.faqs} />

      <Footer />
    </div>
  );
};

export default DestinationPage;
