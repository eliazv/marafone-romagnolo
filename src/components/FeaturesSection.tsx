import { Brain, Smartphone, Users, Trophy } from "lucide-react";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
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
      className="relative py-20 px-4 bg-gradient-to-b from-marafone-beige/30 to-white overflow-hidden"
    >
      <div className="container mx-auto relative z-10 max-w-6xl">
        <FadeInUp delay={0.2}>
          <p className="font-game text-base md:text-lg text-center text-marafone-dark/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Benvenuto su <strong>Marafone Romagnolo</strong>, il gioco di carte
            tradizionale romagnolo finalmente disponibile in versione digitale
            per smartphone e tablet. Conosciuto anche come{" "}
            <strong>Maraffone</strong>, <strong>Beccaccino</strong>,{" "}
            <strong>Maraffa</strong> o <strong>Trionfo</strong>, questo gioco è
            una variante del Tressette che ha radici profonde nella cultura e
            nella tradizione romagnola, amata nelle case e nei bar di Forlì,
            Cesena, Ravenna e tutta la Romagna.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <h2 className="font-retro text-3xl md:text-4xl text-center text-marafone-red mb-3">
            Perché scegliere Marafone Romagnolo?
          </h2>
          <p className="font-game text-base text-center text-marafone-dark/60 mb-12 max-w-2xl mx-auto">
            Tutto quello che ti serve per vivere l'esperienza autentica del
            gioco romagnolo
          </p>
        </FadeInUp>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
          {/* Features grid */}
          <StaggerContainer className="flex-1 grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
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
                    <p className="font-game text-sm text-marafone-dark/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Screenshot */}
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
      </div>
    </section>
  );
};

export default FeaturesSection;
