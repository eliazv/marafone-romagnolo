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
            className="font-retro text-4xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-2xl tracking-tight animate-hero-title relative"
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

          {/* CTA Buttons - più grandi e verticali */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in w-full max-w-xs sm:max-w-md mx-auto">
            <a
              href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1"
            >
              <Button
                size="sm"
                className="bg-white/90 hover:bg-white text-marafone-dark font-game font-bold text-lg px-6 py-3 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center justify-center w-full min-h-[3rem] border-2 border-marafone-dark/60 backdrop-blur-sm"
                style={{
                  minHeight: "3rem",
                  fontSize: "1.2rem",
                  boxShadow: "0 4px 32px #0007, 0 1.5px 0 #fff8",
                }}
              >
                <svg
                  className="mr-2 h-8 w-8 sm:h-10 sm:w-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Scarica su Play Store
              </Button>
            </a>
            <Button
              size="sm"
              disabled
              variant="outline"
              className="w-full sm:w-auto flex-1 border-2 border-marafone-dark/60 text-marafone-dark font-game font-bold text-lg px-6 py-3 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center min-h-[3rem] bg-white/70 backdrop-blur-sm"
              style={{
                minHeight: "3rem",
                fontSize: "1.2rem",
                boxShadow: "0 4px 32px #0007, 0 1.5px 0 #fff8",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="100%"
                height="100%"
                className="mr-2 h-8 w-8 sm:h-10 sm:w-10"
                style={{ display: "block" }}
              >
                <path d="M17.564 13.06c-.02-2.14 1.75-3.16 1.83-3.21-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.07 8.56.71 1.03 1.56 2.18 2.68 2.14 1.08-.04 1.49-.69 2.8-.69 1.31 0 1.68.69 2.81.67 1.16-.02 1.89-1.05 2.59-2.08.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.28-3.45zm-2.68-6.3c.6-.73 1-1.75.89-2.77-.86.03-1.89.57-2.5 1.3-.55.65-1.04 1.7-.86 2.7.91.07 1.86-.52 2.47-1.23z" />
              </svg>
              Presto su App Store
            </Button>
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
