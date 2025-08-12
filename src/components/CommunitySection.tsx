import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";
import { carteImages } from "@/lib/carteImages";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";
import { motion } from "framer-motion";

const CommunitySection = () => {
  return (
    <section
      id="community"
      className="relative py-20 px-4 bg-marafone-red text-white overflow-hidden"
    >
      {/* Carte decorative animate */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {carteImages.slice(20, 26).map((src, i) => {
          const positions = [
            {
              top: "8%",
              left: "12%",
              rotate: "-10deg",
              size: 44,
              anim: "animate-float",
            },
            {
              top: "22%",
              right: "10%",
              rotate: "8deg",
              size: 50,
              anim: "animate-bounce-gentle",
            },
            {
              bottom: "18%",
              left: "18%",
              rotate: "12deg",
              size: 46,
              anim: "animate-float-slow",
            },
            {
              bottom: "10%",
              right: "8%",
              rotate: "-6deg",
              size: 54,
              anim: "animate-bounce-gentle",
            },
            {
              top: "55%",
              left: "35%",
              rotate: "6deg",
              size: 48,
              anim: "animate-float",
            },
            {
              bottom: "32%",
              right: "28%",
              rotate: "-8deg",
              size: 52,
              anim: "animate-float-slow",
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
                opacity: 0.7,
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
        <FadeInUp delay={0.2}>
          <h2 className="font-retro text-4xl md:text-5xl mb-8">
            Unisciti alla Community!
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <p className="font-game text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Segui gli aggiornamenti, partecipa ai tornei e condividi le tue
            vittorie con altri appassionati del Marafone!
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch justify-center">
          {/* Facebook Card */}
          <StaggerItem className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col items-center justify-center text-center md:col-span-1 order-2 md:order-1 mx-auto">
            <h4 className="font-game font-bold text-xl mb-4 text-marafone-yellow drop-shadow">
              Pagina Facebook per rimanere aggiornato
            </h4>
            <div className="flex justify-center w-full">
              <motion.a
                href="https://www.facebook.com/people/Marafone-romagnolo/61579215599753/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pagina Facebook Marafone Romagnolo"
                className="block bg-white rounded-xl p-6 shadow-xl border-4 border-marafone-yellow mx-auto hover:shadow-2xl transition-shadow"
                style={{ width: "200px", height: "200px" }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <svg
                    className="w-16 h-16 mb-3"
                    fill="#1877F2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="font-game font-bold text-sm text-gray-800 text-center leading-tight">
                    Seguici su Facebook
                  </span>
                </div>
              </motion.a>
            </div>
          </StaggerItem>
          {/* galletto */}
          <StaggerItem className="flex flex-col items-center justify-center order-1 md:order-2 relative">
            <motion.img
              src="/img/vieni a giocare.png"
              alt="Gallo stratega"
              className="w-40 h-40 md:w-48 md:h-48 mb-2 drop-shadow-lg"
              draggable={false}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            />
          </StaggerItem>
          {/* Invite Card */}
          <StaggerItem className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col items-center justify-center text-center md:col-span-1 order-3">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Handshake className="h-12 w-12 text-white mb-2" />
            </motion.div>
            <h3 className="font-game font-bold text-2xl mb-4">
              Invita gli Amici
            </h3>
            <p className="font-game mb-6 opacity-80">
              Più siete, più ci si diverte! Condividi il gioco con un click
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="secondary"
                className="bg-marafone-yellow text-marafone-dark hover:bg-marafone-yellow/90 font-game font-bold"
                onClick={async () => {
                  const shareData = {
                    title: "Marafone Romagnolo",
                    text: "Scarica Marafone Romagnolo!",
                    url: "https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa",
                  };
                  if (navigator.share) {
                    try {
                      await navigator.share(shareData);
                    } catch (err) {
                      // Optionally handle error
                    }
                  } else {
                    await navigator.clipboard.writeText(shareData.url);
                    alert("Link copiato negli appunti!");
                  }
                }}
              >
                Condividi il Gioco
              </Button>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CommunitySection;
