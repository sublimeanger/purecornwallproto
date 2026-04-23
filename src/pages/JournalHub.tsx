import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import JournalHeroFeature from "@/components/journal/JournalHeroFeature";
import JournalCategoryChips, { type JournalChipKey } from "@/components/journal/JournalCategoryChips";
import JournalGrid from "@/components/journal/JournalGrid";
import { journalData } from "@/data/journalData";

const FEATURED_SLUG = "one-perfect-day-in-st-ives";
const COMPANION_SLUGS = [
  "cornwall-in-october-the-quiet-month",
  "what-to-pack-for-cornwall",
];

const JournalHub = () => {
  const [activeCategory, setActiveCategory] = useState<JournalChipKey>("all");

  const hero = journalData.articles.find((a) => a.slug === FEATURED_SLUG);
  const companions = COMPANION_SLUGS
    .map((slug) => journalData.articles.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  const showHero = activeCategory === "all" && hero && companions.length === 2;
  const excludeSlugs = showHero ? [FEATURED_SLUG, ...COMPANION_SLUGS] : [];

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <DestinationHero
        image={journalData.hero.image}
        eyebrow={journalData.hero.eyebrow}
        name={journalData.hero.name}
        tagline={journalData.hero.tagline}
        caption={journalData.hero.caption}
      />
      <DestinationBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Journal" },
        ]}
      />

      {/* Author credit strip */}
      <section
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e0da",
          padding: "16px 0",
        }}
      >
        <div className="pc-container">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 400,
              color: "#7a7a7a",
              margin: 0,
              textAlign: "center",
            }}
          >
            Written by Rebecca Moore, in-house Cornwall writer
          </p>
        </div>
      </section>

      {showHero && hero && (
        <JournalHeroFeature hero={hero} companions={companions} />
      )}

      <JournalCategoryChips active={activeCategory} onChange={setActiveCategory} />
      <JournalGrid
        articles={journalData.articles}
        activeCategory={activeCategory}
        excludeSlugs={excludeSlugs}
      />

      <Footer />
    </div>
  );
};

export default JournalHub;
