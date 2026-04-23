import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import CompactIntro from "@/components/destination/CompactIntro";
import DestinationStats from "@/components/destination/DestinationStats";
import DestinationEditorial from "@/components/destination/DestinationEditorial";
import DestinationTravel from "@/components/destination/DestinationTravel";
import DestinationFAQ from "@/components/destination/DestinationFAQ";
import DestinationRelated from "@/components/destination/DestinationRelated";
import RegionTownsGrid from "@/components/region/RegionTownsGrid";
import RegionFeaturedCottages from "@/components/region/RegionFeaturedCottages";
import { westCornwallData, type RegionData } from "@/data/westCornwallData";

const REGION_DATA: Record<string, RegionData> = {
  "west-cornwall": westCornwallData,
  // "north-cornwall": northCornwallData,
  // "south-cornwall": southCornwallData,
};

interface RegionPageProps {
  dataOverride?: RegionData;
}

const SoftFallback = ({ slug }: { slug?: string }) => (
  <div style={{ background: "#ffffff" }}>
    <Header />
    <DestinationBreadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Destinations", href: "/destinations" },
        { label: slug ?? "Region" },
      ]}
    />
    <section style={{ padding: "12vw 0", textAlign: "center", background: "#f7f5f2" }}>
      <div className="pc-container">
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            color: "#6fb6ae",
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          Coming soon
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(32px, 4vw, 56px)",
            color: "#2f5550",
            margin: 0,
          }}
        >
          Region data for {slug} hasn't been added yet.
        </h1>
        <div
          style={{
            width: 200,
            height: 2,
            background: "#d3a36e",
            margin: "30px auto",
          }}
        />
        <a
          href="/destinations"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#d3a36e",
            textDecoration: "none",
          }}
        >
          ← Back to destinations
        </a>
      </div>
    </section>
    <Footer />
  </div>
);

const RegionPage = ({ dataOverride }: RegionPageProps) => {
  const { slug } = useParams<{ slug: string }>();
  const data = dataOverride ?? (slug ? REGION_DATA[slug] : undefined);

  if (!data) {
    return <SoftFallback slug={slug} />;
  }

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
          { label: "Destinations", href: "/destinations" },
          { label: data.hero.name },
        ]}
      />
      <CompactIntro text={data.compactIntro} />
      <DestinationStats name={data.hero.name} stats={data.stats} />
      <DestinationEditorial
        name={data.hero.name}
        paragraphs={data.editorial.paragraphs}
        pullQuote={data.editorial.pullQuote}
      />
      <RegionTownsGrid regionName={data.hero.name} towns={data.towns} />
      <RegionFeaturedCottages
        regionName={data.hero.name}
        regionSlug={data.slug}
        cottages={data.featuredCottages}
        totalCottages={data.totalCottages}
      />
      <DestinationTravel items={data.travel} />
      <DestinationFAQ faqs={data.faqs} />
      <DestinationRelated
        items={data.relatedRegions.map((r) => ({
          slug: `/destinations/${r.slug}`,
          name: r.name,
          image: r.image,
          description: r.shortDescriptor,
        }))}
      />
      <Footer />
    </div>
  );
};

export default RegionPage;
