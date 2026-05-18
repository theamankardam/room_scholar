import FeaturedProperty from "./FeaturedProperty";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import PromoBanner from "./PromoBanner";
import TopUniversities from "./TopUniversities";
import WhyChooseCard from "./WhyChooseCard";

;

export default function AppLayout() {
  return (
    <div className="bg-[#f7f7fb] ">
      <Navbar />
      <HeroSection />
      <TopUniversities />
      <div className="px-10 xl:px-14">
        <div className="mt-10 border-t-2 border-gray-300 w-full"></div>
      </div>
      <FeaturedProperty />
     
        
        <WhyChooseCard/>
   <PromoBanner/>
   <Footer/>
    </div>
  );
}
