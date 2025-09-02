import { Helmet } from 'react-helmet';
import HeroSection from "@/components/HeroSection";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import BlogSection from "@/components/BlogSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Marafone Romagnolo Online: Gioca a Trionfo, Maraffa, Beccaccino e altre Carte Romagnole</title>
        <meta name="description" content="Scopri il Marafone Romagnolo online! Gioca a Trionfo, Maraffa, Beccaccino e le autentiche carte romagnole. Unisciti alla community e sfida giocatori da tutta Italia." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
        <HeroSection />
        <ScreenshotCarousel />
        <FeaturesSection />
        <ScreenshotsSection />
        <BlogSection />
        <CommunitySection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
