
import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react";

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
            alt="Marafone Romagnolo Logo" 
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-marafone-red hover:bg-marafone-red/90 text-white font-game font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Smartphone className="mr-2 h-6 w-6" />
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
