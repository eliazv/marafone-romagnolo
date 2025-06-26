
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
