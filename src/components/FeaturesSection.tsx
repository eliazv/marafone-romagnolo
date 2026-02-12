import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";
import { motion, AnimatePresence } from "framer-motion";

const FeaturesSection = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    "/img/screen-playstore/photo_2025-11-14_15-13-54.jpg",
    "/img/screen-playstore/photo_2025-11-14_19-45-39.jpg",
    // "/img/screen-playstore/Screenshot 2025-11-14 194449.png",
    // "/img/screen-playstore/Screenshot 2025-11-14 194523.png",
    "/img/screen-playstore/Screenshot 2025-11-14 194943.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const allFeatures = [
    {
      icon: "/img/vittorie icon.png",
      title: "Gioca ovunque",
      description:
        "Sfida i tuoi amici online o la CPU anche senza connessione.",
    },
    {
      icon: "/img/cpu-mode.png",
      title: "IA Romagnola",
      description:
        "3 livelli di difficoltà per migliorare partita dopo partita.",
    },
    {
      icon: "/img/multi-mode.png",
      title: "Gioca online",
      description:
        "Sfida altri giocatori romagnoli e scala le classifiche mondiali.",
    },
    {
      icon: "/img/classifica (100x100).png",
      title: "Comunità",
      description:
        "Unisciti alla prima community digitale dedicata alla Maraffa.",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-12 md:py-20 px-4 bg-gradient-to-b from-marafone-beige/30 to-white overflow-hidden"
    >
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Colonna Sinistra: Intro + Features + Stats */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <FadeInUp delay={0.2}>
                <p className="font-game text-md md:text-base text-marafone-dark/80 mb-6 max-w-2xl leading-relaxed">
                  Benvenuto su <strong>Marafone Romagnolo</strong>! Conosciuto
                  anche come <strong>Maraffone</strong>,{" "}
                  <strong>Beccaccino</strong>, <strong>Maraffa</strong> o{" "}
                  <strong>Trionfo</strong>, questo gioco è una variante del
                  Tressette radicata nella cultura romagnola.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <h2 className="font-retro text-2xl md:text-4xl text-marafone-red mb-10">
                  Perché scegliere <br className="hidden md:block" /> Marafone
                  Romagnolo?
                </h2>
              </FadeInUp>

              {/* Griglia Features 2x2 */}
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {allFeatures.map((feature, index) => (
                  <StaggerItem key={index} className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-game font-bold text-lg md:text-xl text-marafone-dark">
                        {feature.title}
                      </h4>
                      <p className="font-game text-sm text-marafone-dark/70 leading-relaxed max-w-xs">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Sezione Statistiche compatta */}
            <FadeInUp
              delay={0.6}
              className="bg-gradient-to-br from-marafone-red/5 to-marafone-yellow/5 rounded-3xl p-6 md:p-8 border border-marafone-red/10 shadow-sm inline-block w-full"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="font-retro text-lg md:text-xl text-marafone-dark mb-4">
                    Unisciti a migliaia di giocatori
                  </h3>
                  <div className="flex gap-8 justify-center md:justify-start">
                    <div>
                      <div className="font-retro text-2xl text-marafone-red">
                        2000+
                      </div>
                      <div className="font-game text-[10px] uppercase text-marafone-dark/60 tracking-wider">
                        Attivi
                      </div>
                    </div>
                    <div>
                      <div className="font-retro text-2xl text-marafone-red">
                        40 000+
                      </div>
                      <div className="font-game text-[10px] uppercase text-marafone-dark/60 tracking-wider">
                        Partite
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <a
                    href="https://chat.whatsapp.com/BoCwvxzhpU7Hvczyi65GAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group ring-4 ring-green-600/10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-green-600"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </a>
                  <span className="font-game text-[10px] text-marafone-dark/60 uppercase tracking-widest">
                    Gruppo WhatsApp
                  </span>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Colonna Destra: Screenshot Carousel */}
          <div className="lg:col-span-2 relative h-full flex items-center justify-center ">
            <div className="relative w-full max-w-[320px] md:max-w-md aspect-[9/19] bg-marafone-dark/5 rounded-[3rem] p-4 shadow-2xl border border-marafone-red/10 overflow-hidden ring-8 ring-marafone-dark/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentScreen}
                  src={screens[currentScreen]}
                  alt={`Screenshot ${currentScreen + 1}`}
                  className="w-full h-full object-cover rounded-[2rem]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>

              {/* Frecce Navigazione */}
              <button
                onClick={prevScreen}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-marafone-red hover:text-white transition-all duration-300 z-20 group"
              >
                <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={nextScreen}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-marafone-red hover:text-white transition-all duration-300 z-20 group"
              >
                <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Indicatori Punti */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {screens.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      i === currentScreen
                        ? "w-6 bg-marafone-red"
                        : "w-1.5 bg-marafone-red/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorazioni decorative */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-marafone-yellow/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-marafone-red/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
