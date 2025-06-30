import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-marafone-yellow via-marafone-beige to-marafone-red">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-marafone-red rounded-full animate-float shadow-2xl blur-sm"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-marafone-yellow rounded-full animate-bounce-gentle shadow-xl blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-marafone-red rounded-full animate-pulse shadow-lg blur-sm"></div>
        <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-marafone-yellow/60 rounded-full animate-float-slow shadow-2xl blur-2xl"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-marafone-red/70 rounded-full animate-bounce-gentle shadow-xl blur"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Logo/Character */}
        <div className="mb-1 flex justify-center relative">
          <img
            src="/img/logo.png"
            alt="Marafone Romagnolo - Gioco di carte tradizionale della Romagna"
            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-bounce-gentle drop-shadow-2xl"
          />
        </div>

        {/* Main Title */}
        <h1 className="font-retro text-4xl md:text-6xl lg:text-7xl text-marafone-red mb-4 drop-shadow-lg tracking-tight animate-hero-title">
          <span className="inline-block animate-wiggle-slow">M</span>ARAFONE
          <br />
          <span className="text-marafone-dark animate-wiggle">ROMAGNOLO</span>
        </h1>

        {/* Subtitle */}
        <p className="font-game text-xl md:text-2xl text-marafone-dark mb-8 max-w-2xl mx-auto font-semibold animate-fade-in">
          Il gioco di carte della Romagna, <br className="hidden md:block" />
          ora anche sul tuo smartphone!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in">
          <a
            href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-marafone-red hover:bg-marafone-red/90 text-white font-game font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg
                className="mr-2 h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Gioca ora su Android
            </Button>
          </a>

          <Button
            size="lg"
            disabled
            variant="outline"
            className="border-2 border-marafone-dark text-marafone-dark hover:bg-marafone-dark hover:text-white font-game font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Apple className="mr-2 h-6 w-6" />
            Presto su iOS
          </Button>
        </div>

        {/* TODO tasto gioca online che porta ad un'altra pagina dello stesso sito ma dove c'è il gioco */}

        {/* Rules link */}
        <div className="mb-12 flex justify-center animate-fade-in">
          <Link to="/regole">
            <Button
              size="lg"
              className="bg-marafone-yellow text-marafone-dark border-2 border-marafone-dark hover:bg-marafone-dark hover:text-marafone-yellow font-game font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              style={{ boxShadow: "0 4px 24px 0 rgba(255, 221, 51, 0.15)" }}
            >
              <span className="text-2xl">📖</span>
              <span>Regole del gioco</span>
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce mt-8">
          <svg
            className="w-8 h-8 text-marafone-dark"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m0 0l-6-6m6 6l6-6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
