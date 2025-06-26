
import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-marafone-red rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-marafone-yellow rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-marafone-red rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Logo/Character */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/6dd8a649-d872-4963-8149-c33ebbce875b.png" 
            alt="Marafone Romagnolo - Gioco di carte tradizionale della Romagna" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-bounce-gentle"
          />
        </div>

        {/* Main Title */}
        <h1 className="font-retro text-4xl md:text-6xl lg:text-7xl text-marafone-red mb-4 drop-shadow-lg">
          MARAFONE
          <br />
          <span className="text-marafone-dark">ROMAGNOLO</span>
        </h1>

        {/* Subtitle */}
        <p className="font-game text-xl md:text-2xl text-marafone-dark mb-8 max-w-2xl mx-auto font-semibold">
          Il gioco di carte della Romagna, <br className="hidden md:block" />
          ora anche sul tuo smartphone!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-marafone-red hover:bg-marafone-red/90 text-white font-game font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Gioca ora su Android
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-marafone-dark text-marafone-dark hover:bg-marafone-dark hover:text-white font-game font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Apple className="mr-2 h-6 w-6" />
            Presto su iOS
          </Button>
        </div>

        {/* Rules link */}
        <div className="mb-12">
          <Link to="/regole">
            <Button 
              variant="ghost"
              className="text-marafone-dark hover:bg-marafone-dark/10 font-game font-semibold underline"
            >
              📖 Scopri le regole del gioco
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-marafone-dark rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-marafone-dark rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
