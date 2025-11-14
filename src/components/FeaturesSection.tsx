import {
  Brain,
  Smartphone,
  Users,
  Trophy,
  MapPin,
  Calendar,
  Euro,
} from "lucide-react";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const featuresSet1 = [
    {
      icon: <Smartphone className="h-12 w-12 text-marafone-red" />,
      title: "Gioca ovunque",
      description:
        "Sfida i tuoi amici online o la CPU anche senza connessione. Il divertimento continua sempre, anche offline!",
      highlight: "Gioca!",
    },
    {
      icon: <Brain className="h-12 w-12 text-marafone-red" />,
      title: "IA Romagnola",
      description:
        "Un'intelligenza artificiale veramente romagnola: scegli tra 3 livelli di difficoltà e migliora partita dopo partita.",
      highlight: "3 Livelli",
    },
  ];

  const featuresSet2 = [
    {
      icon: <Users className="h-12 w-12 text-marafone-red" />,
      title: "Gioca online",
      description:
        "Sfida altri giocatori romagnoli, aggiungi amici e scala le classifiche nella modalità online!",
      highlight: "Multiplayer",
    },
    {
      icon: <Trophy className="h-12 w-12 text-marafone-red" />,
      title: "Comunità Romagnola",
      description:
        "Unisciti alla prima community digitale dedicata alla Maraffa: tornei locali, eventi e passione vera per il gioco di carte più amato in Romagna.",
      highlight: "Community",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-10 px-4 bg-gradient-to-b from-marafone-beige/30 to-white overflow-hidden"
    >
      <div className="container mx-auto relative z-10 max-w-6xl">
        <FadeInUp delay={0.2}>
          <p className="font-game text-base md:text-lg text-center text-marafone-dark/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Benvenuto su <strong>Marafone Romagnolo</strong>! Conosciuto anche
            come <strong>Maraffone</strong>, <strong>Beccaccino</strong>,{" "}
            <strong>Maraffa</strong> o <strong>Trionfo</strong>, questo gioco è
            una variante del Tressette che ha radici profonde nella cultura e
            nella tradizione romagnola.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <h2 className="font-retro text-3xl md:text-4xl text-center text-marafone-red mb-8">
            Perché scegliere Marafone Romagnolo?
          </h2>
        </FadeInUp>

        {/* Prima sezione: Prime 2 features + Screenshot */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20">
          <StaggerContainer className="flex-1 grid grid-cols-1 gap-6">
            {featuresSet1.map((feature, index) => (
              <StaggerItem
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-marafone-yellow/20 hover:border-marafone-red/30 group"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-marafone-red/10 to-marafone-yellow/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-game font-bold text-lg text-marafone-dark mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-game text-md text-marafone-dark/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <motion.div
            className="flex-1 max-w-xs md:max-w-sm mx-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-br from-marafone-red/10 to-marafone-yellow/10 rounded-3xl p-4 shadow-2xl border border-marafone-yellow/20"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src="/img/screen-playstore/photo_2025-11-14_15-13-54.jpg"
                alt="Screenshot del gioco Marafone Romagnolo"
                className="object-cover w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Seconda sezione: Altre 2 features + Screenshot */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-20">
          <StaggerContainer className="flex-1 grid grid-cols-1 gap-6">
            {featuresSet2.map((feature, index) => (
              <StaggerItem
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-marafone-yellow/20 hover:border-marafone-red/30 group"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-marafone-red/10 to-marafone-yellow/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-game font-bold text-lg text-marafone-dark mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-game text-md text-marafone-dark/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <motion.div
            className="flex-1 max-w-xs md:max-w-sm mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-br from-marafone-red/10 to-marafone-yellow/10 rounded-3xl p-4 shadow-2xl border border-marafone-yellow/20"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src="/img/screen-playstore/photo_2025-11-14_19-45-39.jpg"
                alt="Partita in corso"
                className="object-cover w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Terza sezione: Statistiche + Screenshot */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20">
          <div className="flex-1">
            <div className="bg-gradient-to-br from-marafone-red/5 to-marafone-yellow/5 rounded-2xl p-8 md:p-12 border border-marafone-red/10">
              <FadeInUp delay={0.6}>
                <h3 className="font-retro text-2xl md:text-3xl text-marafone-dark mb-6">
                  Unisciti a migliaia di giocatori romagnoli
                </h3>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
              </FadeInUp>
            </div>
          </div>

          <motion.div
            className="flex-1 max-w-xs md:max-w-sm mx-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-br from-marafone-red/10 to-marafone-yellow/10 rounded-3xl p-4 shadow-2xl border border-marafone-yellow/20"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src="/img/screen-playstore/Screenshot 2025-11-14 194943.png"
                alt="Screenshot del gioco Marafone Romagnolo"
                className="object-cover w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
