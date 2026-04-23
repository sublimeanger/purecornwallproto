import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import CompactIntro from "@/components/destination/CompactIntro";
import DestinationFAQ from "@/components/destination/DestinationFAQ";
import RegionCardsGrid from "@/components/hub/RegionCardsGrid";
import TownsDirectory from "@/components/hub/TownsDirectory";
import { destinationsHubData } from "@/data/destinationsHubData";

const DestinationsHub = () => {
  const data = destinationsHubData;

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
          { label: "Destinations" },
        ]}
      />
      <CompactIntro text={data.compactIntro} />
      <RegionCardsGrid regions={data.regions} />
      <TownsDirectory towns={data.towns} />
      <DestinationFAQ faqs={data.faqs} />
      <Footer />
    </div>
  );
};

export default DestinationsHub;
