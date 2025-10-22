import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react";
import { carteImages } from "@/lib/carteImages";
import Header from "@/components/Header";
import { FadeInUp, ScaleIn } from "@/components/ui/animated-element";
import { motion } from "framer-motion";

// ...Header ora in un componente a parte...

const HeroSection = () => {
  return (
    <>
      <Header />
      <section
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-32 md:pt-28"
        style={{
          backgroundImage: 'url("/img/hero.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Nessun elemento decorativo o carte nello sfondo */}

        <div className="container px-0 mx-auto text-center relative z-10">
          {/* Logo rimosso */}

          {/* Main Title */}
          <FadeInUp delay={0.2}>
            <h1
              className="font-retro  text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-2xl tracking-tight relative"
              style={{ textShadow: "0 2px 12px #000, 0 1px 0 #fff8" }}
            >
              <span className="whitespace-nowrap">
                <motion.span
                  className="inline-block"
                  animate={{
                    rotate: [0, -5, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                >
                  M
                </motion.span>
                ARAFONE
              </span>
              <br />
              <motion.span
                className="text-white"
                animate={{
                  rotate: [0, 2, -2, 2, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                ROMAGNOLO
              </motion.span>
            </h1>
          </FadeInUp>

          {/* Subtitle */}
          <FadeInUp delay={0.6}>
            <p
              className="font-game text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto font-semibold relative"
              style={{ textShadow: "0 2px 8px #000, 0 1px 0 #fff8" }}
            >
              Il celebre gioco di carte della Romagna,{" "}
              <br className="hidden md:block" />
              ora anche sul tuo smartphone!
            </p>
          </FadeInUp>
          {/* CTA Buttons - immagini store */}
          <FadeInUp delay={1.0}>
            <div className="flex flex-col sm:flex-row gap-1 justify-center items-center mb-8 w-full max-w-lg sm:max-w-2xl mx-auto">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/img/playstore.png"
                  alt="Scarica su Google Play Store"
                  className="w-full h-auto max-w-[280px] mx-auto drop-shadow-2xl"
                  style={{ minWidth: 180, minHeight: 60 }}
                />
              </motion.a>
              <motion.a
                href="https://apps.apple.com/us/app/marafone-beccaccino-romagnolo/id6749573579"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/img/appstore.png"
                  alt="Scarica su App Store"
                  className="w-full h-auto max-w-[280px] mx-auto drop-shadow-2xl"
                  style={{ minWidth: 180, minHeight: 60 }}
                />
              </motion.a>
              <motion.a
                href="https://gioco.marafone-romagnolo.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 md:pb-2 md:pl-3"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/img/web-btn.png"
                  alt="Gioca su web"
                  className="w-full h-auto max-w-[255px] mx-auto drop-shadow-2xl"
                  style={{ minWidth: 140, minHeight: 48 }}
                />
              </motion.a>
            </div>
          </FadeInUp>

          {/* ...rimosso bottone Regole dalla Hero, ora solo nell'header... */}

          {/* Scroll indicator */}
          <FadeInUp delay={1.4}>
            <motion.div
              className="flex justify-center mt-8 cursor-pointer"
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
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
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
            </motion.div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
