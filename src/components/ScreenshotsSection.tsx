import { carteImages } from "@/lib/carteImages";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";
import { motion } from "framer-motion";

const ScreenshotsSection = () => {
  const screenshots = [
    {
      img: "img/onboarding/gioca-onboarding.png",
      title: "Modalità di gioco",
      description:
        "Scegli tra diverse modalità: classica, veloce, contro l'IA o online!",
    },
    {
      img: "/img/screen gioco.png",
      title: "Partita in corso",
      description:
        "Interfaccia fedele al tavolo da bar romagnolo, carte grandi e leggibili.",
    },
    {
      img: "img/onboarding/profilo-onboarding.png",
      title: "Classifica e progressi",
      description:
        "Scala la classifica, sblocca achievement e confronta i tuoi risultati!",
    },
  ];

  return (
    <section className="relative py-10 px-4 bg-gradient-to-r from-marafone-yellow to-marafone-beige overflow-hidden">
      {/* Carte decorative animate */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {carteImages.slice(14, 20).map((src, i) => {
          const positions = [
            {
              top: "12%",
              left: "10%",
              rotate: "-10deg",
              size: 44,
              delay: 0,
            },
            {
              top: "18%",
              right: "12%",
              rotate: "8deg",
              size: 50,
              delay: 0.5,
            },
            {
              bottom: "20%",
              left: "20%",
              rotate: "12deg",
              size: 46,
              delay: 1.0,
            },
            {
              bottom: "12%",
              right: "14%",
              rotate: "-6deg",
              size: 54,
              delay: 1.5,
            },
            {
              top: "60%",
              left: "30%",
              rotate: "6deg",
              size: 48,
              delay: 2.0,
            },
            {
              bottom: "35%",
              right: "25%",
              rotate: "-8deg",
              size: 52,
              delay: 2.5,
            },
          ];
          const pos = positions[i % positions.length];
          return (
            <motion.img
              key={src}
              src={src}
              alt="Carta da gioco romagnola"
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: parseInt(pos.rotate),
              }}
              animate={{
                opacity: 0.7,
                scale: 1,
                rotate: parseInt(pos.rotate),
                y: [0, -20, 0],
              }}
              transition={{
                duration: 0.8,
                delay: pos.delay,
                y: {
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.1,
                rotate: parseInt(pos.rotate) + (i % 2 === 0 ? 10 : -10),
                transition: { duration: 0.3 },
              }}
              style={{
                position: "absolute",
                ...("top" in pos ? { top: pos.top } : {}),
                ...("bottom" in pos ? { bottom: pos.bottom } : {}),
                ...("left" in pos ? { left: pos.left } : {}),
                ...("right" in pos ? { right: pos.right } : {}),
                width: pos.size,
                height: pos.size * 1.5,
                zIndex: 1,
                filter: "drop-shadow(0 2px 8px #0003) blur(0.5px)",
                pointerEvents: "none",
                userSelect: "none",
              }}
              draggable={false}
            />
          );
        })}
      </div>
      <div className="container mx-auto relative z-10 px-0">
        <FadeInUp delay={0.2}>
          <h2 className="font-retro text-4xl md:text-5xl text-center text-marafone-red mb-16">
            Guarda il gioco in azione!
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {screenshots.map((screenshot, index) => (
            <StaggerItem key={index} className="text-center">
              <motion.div
                className="bg-marafone-dark rounded-2xl aspect-[9/16] mb-6 flex items-center justify-center shadow-xl border-4 border-white overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={screenshot.img}
                  alt={screenshot.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </motion.div>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col items-center justify-center text-center mx-auto">
                <h3 className="font-game font-bold text-2xl text-marafone-red mb-2">
                  {screenshot.title}
                </h3>
                <p className="font-game text-marafone-dark">
                  {screenshot.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
