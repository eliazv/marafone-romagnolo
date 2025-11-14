import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";
import { motion } from "framer-motion";

const ScreenshotsSection = () => {
  const screenshots = [
    {
      img: "/img/screen-playstore/photo_2025-11-14_19-45-39.jpg",
      title: "Modalità di gioco",
      description:
        "Scegli tra diverse modalità: classica, veloce, contro l'IA o online!",
    },
    {
      img: "/img/screen-playstore/Screenshot 2025-11-14 194943.png",
      title: "Partita in corso",
      description:
        "Interfaccia fedele al tavolo da bar romagnolo, carte grandi e leggibili.",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="space-y-20">
          {screenshots.map((screenshot, index) => (
            <StaggerItem key={index}>
              <div
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  className="flex-1 max-w-xs md:max-w-sm"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div
                    className="bg-gradient-to-br from-marafone-red/10 to-marafone-yellow/10 rounded-3xl p-4 shadow-2xl border border-marafone-yellow/20"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <img
                      src={screenshot.img}
                      alt={screenshot.title}
                      className="object-cover w-full rounded-2xl shadow-lg"
                      loading="lazy"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="font-retro text-3xl text-marafone-dark mb-4">
                    {screenshot.title}
                  </h3>
                  <p className="font-game text-lg text-marafone-dark/70 leading-relaxed">
                    {screenshot.description}
                  </p>
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
