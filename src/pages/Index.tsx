import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import FeatureTiles from "@/components/FeatureTiles";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonials from "@/components/Testimonials";
import Journal from "@/components/Journal";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <div className="sticky top-0 z-40">
      <SearchBar />
    </div>
    <Hero />
    <BrandIntro />
    <FeatureTiles />
    <FeaturedProperties />
    <Testimonials />
    <Journal />
    <Footer />
  </>
);

export default Index;
