import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyHero from "@/components/property/PropertyHero";
import PropertyHeaderSection from "@/components/property/PropertyHeaderSection";
import PropertyStickyNav from "@/components/property/PropertyStickyNav";
import AtAGlance from "@/components/property/AtAGlance";
import GalleryRow from "@/components/property/GalleryRow";
import AboutSection from "@/components/property/AboutSection";
import GallerySection from "@/components/property/GallerySection";
import VideoFloorplan from "@/components/property/VideoFloorplan";
import FacilitiesSection from "@/components/property/FacilitiesSection";
import LocationSection from "@/components/property/LocationSection";
import ActivitiesSection from "@/components/property/ActivitiesSection";
import PricingSection from "@/components/property/PricingSection";
import GuestReview from "@/components/property/GuestReview";
import RelatedProperties from "@/components/property/RelatedProperties";
import { treleighData } from "@/data/treleighData";
import { useCallback } from "react";

/* Decorative section divider — thin gold line centred with gradient blend */
const SectionDivider = ({ from = "#ffffff", to = "#f7f5f2" }: { from?: string; to?: string }) => (
  <div
    className="flex items-center justify-center"
    style={{
      height: 40,
      background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`,
    }}
  >
    <div style={{ width: 200, height: 1, backgroundColor: "#d3a36e", opacity: 0.4 }} />
  </div>
);

const PropertyPage = () => {
  const scrollToGallery = useCallback(() => {
    const el = document.getElementById("gallery");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header />
      <PropertyHero
        image={treleighData.heroImage}
        tagline={treleighData.tagline}
        onViewGallery={scrollToGallery}
      />
      <PropertyHeaderSection
        name={treleighData.name}
        region={treleighData.region}
        priceFrom={treleighData.priceFrom}
        stats={treleighData.stats}
      />
      <PropertyStickyNav />
      <AtAGlance columns={treleighData.atAGlance} />
      <GalleryRow images={treleighData.galleryRowImages} />
      <SectionDivider from="#ffffff" to="#f7f5f2" />
      <AboutSection paragraphs={treleighData.aboutText} />
      <SectionDivider from="#f7f5f2" to="#ffffff" />
      <GallerySection images={treleighData.galleryImages} />
      <SectionDivider from="#ffffff" to="#f7f5f2" />
      <VideoFloorplan />
      <SectionDivider from="#f7f5f2" to="#ffffff" />
      <FacilitiesSection facilities={treleighData.facilities} />
      <SectionDivider from="#ffffff" to="#f7f5f2" />
      <LocationSection />
      <SectionDivider from="#f7f5f2" to="#ffffff" />
      <ActivitiesSection paragraphs={treleighData.activitiesText} />
      <SectionDivider from="#ffffff" to="#f7f5f2" />
      <PricingSection />
      <SectionDivider from="#f7f5f2" to="#ffffff" />
      <GuestReview
        image={treleighData.reviewImage}
        quote={treleighData.reviewQuote}
        body={treleighData.reviewBody}
        attribution={treleighData.reviewAttribution}
      />
      <SectionDivider from="#ffffff" to="#f7f5f2" />
      <RelatedProperties properties={treleighData.relatedProperties} />
      <Footer />
    </>
  );
};

export default PropertyPage;
