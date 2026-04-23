import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import CompactIntro from "@/components/destination/CompactIntro";
import DestinationFAQ from "@/components/destination/DestinationFAQ";
import RegionCardsGrid from "@/components/hub/RegionCardsGrid";
import TrustStrip from "@/components/seo/TrustStrip";
import CollectionFeatureRow from "@/components/seo/CollectionFeatureRow";
import HandpickedCottages from "@/components/seo/HandpickedCottages";
import EditorialLongform from "@/components/seo/EditorialLongform";
import ReviewCards from "@/components/seo/ReviewCards";
import OccasionLinks from "@/components/seo/OccasionLinks";
import { holidayCottagesData } from "@/data/holidayCottagesData";
import { collectionsHubData } from "@/data/collectionsHubData";
import { destinationsHubData } from "@/data/destinationsHubData";

const HolidayCottages = () => {
  const data = holidayCottagesData;
  const featureCollections = collectionsHubData.collections.filter(
    (c) => c.group === "features",
  );
  const occasionCollections = collectionsHubData.collections.filter(
    (c) => c.group === "occasions",
  );

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
          { label: "Holiday Cottages" },
        ]}
      />
      <TrustStrip stats={data.trustStats} />
      <CompactIntro text={data.compactIntro} />
      <RegionCardsGrid regions={destinationsHubData.regions} />
      <CollectionFeatureRow collections={featureCollections} />
      <HandpickedCottages
        cottages={data.handpickedCottages}
        totalCottages={data.totalCottages}
      />
      <EditorialLongform
        eyebrow={data.longform.eyebrow}
        heading={data.longform.heading}
        subsections={data.longform.subsections}
      />
      <ReviewCards reviews={data.reviews} />
      <DestinationFAQ faqs={data.faqs} />
      <OccasionLinks occasions={occasionCollections} />
      <Footer />
    </div>
  );
};

export default HolidayCottages;
