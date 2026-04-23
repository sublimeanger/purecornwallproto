import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import CompactIntro from "@/components/destination/CompactIntro";
import TrustStrip from "@/components/seo/TrustStrip";
import FounderStory from "@/components/about/FounderStory";
import ValueCards from "@/components/about/ValueCards";
import TeamGrid from "@/components/about/TeamGrid";
import AboutInlineCTA from "@/components/about/AboutInlineCTA";
import { aboutData } from "@/data/aboutData";

const About = () => {
  const data = aboutData;

  return (
    <main>
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
          { label: "About" },
        ]}
      />
      <TrustStrip stats={data.trustStats} />
      <CompactIntro text={data.compactIntro} />
      <FounderStory subsections={data.founderStory} />
      <ValueCards values={data.values} />
      <TeamGrid members={data.team} />
      <AboutInlineCTA />
      <Footer />
    </main>
  );
};

export default About;
