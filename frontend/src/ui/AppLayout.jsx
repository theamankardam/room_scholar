import Divider from "./Divider";
import FeaturedProperty from "./FeaturedProperty";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import PromoBanner from "./PromoBanner";
import TopUniversities from "./TopUniversities";
import WhyChooseCard from "./WhyChooseCard";

export default function AppLayout() {
  return (
    <div className="bg-[#f7f7fb] ">
      <Navbar />
      <HeroSection />
      <TopUniversities />
      <Divider />
      <FeaturedProperty />
      <Divider />
      <FeaturedProperty popular={true} />
      <WhyChooseCard />
      <PromoBanner />
      <Footer />
    </div>
  );
}
