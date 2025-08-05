import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react";
import { carteImages } from "@/lib/carteImages";
import Header from "@/components/Header";

// ...Header ora in un componente a parte...

const HeroSection = () => {
  return (
    <>
      <Header />
      <section
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-26 md:pt-28"
        style={{
          backgroundImage: 'url("/img/hero.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Nessun elemento decorativo o carte nello sfondo */}

        <div className="container mx-auto text-center relative z-10">
          {/* Logo rimosso */}

          {/* Main Title */}
          <h1
            className="font-retro text-5xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-2xl tracking-tight animate-hero-title relative"
            style={{ textShadow: "0 2px 12px #000, 0 1px 0 #fff8" }}
          >
            <span className="inline-block animate-wiggle-slow">M</span>ARAFONE
            <br />
            <span className="text-white animate-wiggle">ROMAGNOLO</span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-game text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto font-semibold animate-fade-in relative"
            style={{ textShadow: "0 2px 8px #000, 0 1px 0 #fff8" }}
          >
            Il gioco di carte della Romagna, <br className="hidden md:block" />
            ora anche sul tuo smartphone!
          </p>
          {/* CTA Buttons - immagini store */}
          <div className="flex flex-col sm:flex-row gap-1 justify-center items-center mb-8 animate-fade-in w-full max-w-lg sm:max-w-2xl mx-auto">
            <a
              href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/img/playstore.png"
                alt="Scarica su Google Play Store"
                className="w-full h-auto max-w-[280px] mx-auto drop-shadow-2xl"
                style={{ minWidth: 180, minHeight: 60 }}
              />
            </a>
            <div className="w-full sm:w-auto flex-1 opacity-50 cursor-not-allowed">
              <img
                src="/img/appstore.png"
                alt="Presto su App Store"
                className="w-full h-auto max-w-[280px] mx-auto drop-shadow-2xl grayscale"
                style={{ minWidth: 180, minHeight: 60 }}
              />
            </div>
          </div>

          {/* ...rimosso bottone Regole dalla Hero, ora solo nell'header... */}

          {/* Scroll indicator */}
          <div
            className="flex justify-center animate-bounce mt-8 cursor-pointer "
            onClick={() => {
              const el = document.getElementById("features");
              if (el) {
                if (window.location.pathname !== "/") {
                  window.location.href = "/#features";
                } else {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              } else {
                window.location.href = "/#features";
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Scorri alla sezione funzionalità"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                const el = document.getElementById("funzionalita");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            <svg
              className="w-8 h-8 text-white"
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
    </>
  );
};

export default HeroSection;
