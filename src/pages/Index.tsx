import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import FeatureTiles from "@/components/FeatureTiles";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonials from "@/components/Testimonials";
import Journal from "@/components/Journal";
import Footer from "@/components/Footer";

const SectionDivider = () => (
  <div className="flex items-center justify-center" style={{ padding: "60px 0" }}>
    <div style={{ width: 200, height: 1, backgroundColor: "#d3a36e", opacity: 0.4 }} />
  </div>
);

const Index = () => (
  <>
    <Header />
    <SearchBar />
    <Hero />
    <BrandIntro />
    <SectionDivider />
    <FeatureTiles />
    <SectionDivider />
    <FeaturedProperties />
    <SectionDivider />
    <Testimonials />
    <SectionDivider />
    <Journal />
    <SectionDivider />
    <Footer />
  </>
);

export default Index;
