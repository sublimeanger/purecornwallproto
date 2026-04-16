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
import { useRef, useCallback } from "react";

const PropertyPage = () => {
  const galleryRef = useRef<HTMLElement | null>(null);

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
      <AboutSection paragraphs={treleighData.aboutText} />
      <GallerySection images={treleighData.galleryImages} />
      <VideoFloorplan />
      <FacilitiesSection facilities={treleighData.facilities} />
      <LocationSection />
      <ActivitiesSection paragraphs={treleighData.activitiesText} />
      <PricingSection />
      <GuestReview
        image={treleighData.reviewImage}
        quote={treleighData.reviewQuote}
        body={treleighData.reviewBody}
        attribution={treleighData.reviewAttribution}
      />
      <RelatedProperties properties={treleighData.relatedProperties} />
      <Footer />
    </>
  );
};

export default PropertyPage;
