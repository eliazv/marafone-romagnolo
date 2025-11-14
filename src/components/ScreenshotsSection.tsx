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
        'Scegli come giocare: affronta la CPU con 3 livelli di difficoltà per allenarti, sfida amici e giocatori da tutta la Romagna nella modalità online, oppure gioca offline ovunque tu sia. Ogni partita è personalizzabile: puoi scegliere il punteggio di vittoria, attivare o disattivare le regole opzionali come il "busso" e il "volo", e giocare sia in coppia che in singolo.',
    },
    {
      img: "/img/screen-playstore/Screenshot 2025-11-14 194943.png",
      title: " ",
      description: " ",
    },
  ];

  return (
    <section className="relative py-10 px-4 bg-white overflow-hidden">
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
                  {index === 1 && (
                    <>
                      <h3 className="font-retro text-2xl md:text-3xl text-marafone-dark text-center mb-8">
                        Unisciti a migliaia di giocatori romagnoli
                      </h3>
                      <StaggerContainer className="grid grid-cols-1 gap-6 text-center">
                        <StaggerItem>
                          <div className="font-retro text-4xl md:text-5xl text-marafone-red mb-2">
                            2000+
                          </div>
                          <div className="font-game text-marafone-dark/70">
                            Giocatori Attivi
                          </div>
                        </StaggerItem>
                        <StaggerItem>
                          <div className="font-retro text-4xl md:text-5xl text-marafone-red mb-2">
                            20K+
                          </div>
                          <div className="font-game text-marafone-dark/70">
                            Partite Giocate
                          </div>
                        </StaggerItem>
                        <StaggerItem>
                          <div className="font-retro text-4xl md:text-5xl text-marafone-red mb-2">
                            <a
                              href="https://chat.whatsapp.com/BoCwvxzhpU7Hvczyi65GAJ"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10"
                              >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                              </svg>
                            </a>
                          </div>
                          <div className="font-game text-marafone-dark/70">
                            Unisciti al Gruppo WhatsApp
                          </div>
                        </StaggerItem>
                      </StaggerContainer>
                    </>
                  )}
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
