import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react";
import { carteImages } from "@/lib/carteImages";
import Header from "@/components/Header";

// ...Header ora in un componente a parte...

const HeroSection = () => {
  return (
    <>
      <Header />
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-marafone-yellow via-marafone-beige to-marafone-red pt-26 md:pt-28">
        {/* Background decorative elements + carte */}
        <div className="absolute inset-0 opacity-20 pointer-events-none select-none z-0">
          {/* Cerchi colorati */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-marafone-red rounded-full animate-float shadow-2xl blur-sm"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-marafone-yellow rounded-full animate-bounce-gentle shadow-xl blur-sm"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-marafone-red rounded-full animate-pulse shadow-lg blur-sm"></div>
          <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-marafone-yellow/60 rounded-full animate-float-slow shadow-2xl blur-2xl"></div>
          <div className="absolute top-10 right-1/3 w-24 h-24 bg-marafone-red/70 rounded-full animate-bounce-gentle shadow-xl blur"></div>

          {/* Carte decorative randomizzate */}
          {carteImages.slice(0, 8).map((src, i) => {
            // Posizioni e rotazioni predefinite per un effetto "sparso"
            const positions = [
              {
                top: "8%",
                left: "8%",
                rotate: "-12deg",
                size: 60,
                anim: "animate-float",
              },
              {
                top: "15%",
                right: "12%",
                rotate: "8deg",
                size: 64,
                anim: "animate-bounce-gentle",
              },
              {
                bottom: "18%",
                left: "18%",
                rotate: "16deg",
                size: 56,
                anim: "animate-float-slow",
              },
              {
                bottom: "10%",
                right: "10%",
                rotate: "-8deg",
                size: 70,
                anim: "animate-bounce-gentle",
              },
              {
                top: "40%",
                left: "4%",
                rotate: "6deg",
                size: 54,
                anim: "animate-float",
              },
              {
                top: "60%",
                right: "6%",
                rotate: "-14deg",
                size: 62,
                anim: "animate-float-slow",
              },
              {
                bottom: "30%",
                left: "40%",
                rotate: "10deg",
                size: 58,
                anim: "animate-float",
              },
              {
                top: "25%",
                right: "35%",
                rotate: "-6deg",
                size: 66,
                anim: "animate-bounce-gentle",
              },
            ];
            const pos = positions[i % positions.length];
            return (
              <img
                key={src}
                src={src}
                alt="Carta da gioco romagnola"
                className={pos.anim}
                style={{
                  position: "absolute",
                  ...("top" in pos ? { top: pos.top } : {}),
                  ...("bottom" in pos ? { bottom: pos.bottom } : {}),
                  ...("left" in pos ? { left: pos.left } : {}),
                  ...("right" in pos ? { right: pos.right } : {}),
                  width: pos.size,
                  height: pos.size * 1.5,
                  transform: `rotate(${pos.rotate})`,
                  zIndex: 1,
                  filter: "drop-shadow(0 2px 8px #0003) blur(0.5px)",
                  opacity: 0.85,
                  pointerEvents: "none",
                  userSelect: "none",
                  transition: "transform 0.5s",
                }}
                draggable={false}
              />
            );
          })}
        </div>

        <div className="container mx-auto text-center relative z-10">
          {/* Logo/Character */}
          <div className="mb-1 flex justify-center relative">
            <img
              src="/img/logo.png"
              alt="Marafone Romagnolo - Gioco di carte tradizionale della Romagna"
              className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
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

          {/* CTA Buttons - più grandi e verticali */}
          <div className="flex flex-col gap-4 justify-center items-center mb-8 animate-fade-in w-full max-w-md mx-auto">
            <a
              href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                size="sm"
                className="bg-marafone-red hover:bg-marafone-red/90 text-white font-game font-bold text-lg px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center w-full min-h-[3.2rem]"
                style={{ minHeight: "3.2rem", fontSize: "1.1rem" }}
              >
                <svg
                  className="mr-3 h-14 w-14"
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
              className="border-4 border-marafone-dark text-marafone-dark hover:bg-marafone-dark hover:text-white font-game font-bold text-lg px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center w-full min-h-[3.2rem]"
              style={{ minHeight: "3.2rem", fontSize: "1.1rem" }}
            >
              {/* Icona App Store stilizzata (SVG) */}
              <span
                className="mr-3 inline-block align-middle"
                style={{ width: "3.5rem", height: "3.5rem" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="100%"
                  height="100%"
                  style={{ display: "block" }}
                >
                  <path d="M17.564 13.06c-.02-2.14 1.75-3.16 1.83-3.21-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.07 8.56.71 1.03 1.56 2.18 2.68 2.14 1.08-.04 1.49-.69 2.8-.69 1.31 0 1.68.69 2.81.67 1.16-.02 1.89-1.05 2.59-2.08.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.28-3.45zm-2.68-6.3c.6-.73 1-1.75.89-2.77-.86.03-1.89.57-2.5 1.3-.55.65-1.04 1.7-.86 2.7.91.07 1.86-.52 2.47-1.23z" />
                </svg>
              </span>
              Presto su App Store
            </Button>
          </div>

          {/* ...rimosso bottone Regole dalla Hero, ora solo nell'header... */}

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
    </>
  );
};

export default HeroSection;
