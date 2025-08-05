import {
  Gamepad,
  Brain,
  Award,
  Handshake,
  Smartphone,
  Users,
  Trophy,
  Heart,
} from "lucide-react";
import { carteImages } from "@/lib/carteImages";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "@/components/ui/animated-element";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Gamepad className="h-12 w-12 text-marafone-red" />,
      title: "Gioca offline con IA",
      description:
        "Sfida l'intelligenza artificiale quando vuoi tu! Nessuna connessione internet richiesta.",
      highlight: "100% Offline",
    },
    {
      icon: <Brain className="h-12 w-12 text-marafone-red" />,
      title: "IA strategica avanzata",
      description:
        "3 livelli di difficoltà per sfidare le tue abilità: Principiante, Esperto e Maestro.",
      highlight: "3 Livelli",
    },
    {
      icon: <Award className="h-12 w-12 text-marafone-red" />,
      title: "Classifiche globali",
      description:
        "Conquista la vetta delle classifiche mondiali e sblocca nuovi livelli e achievement!",
      highlight: "Competizione",
    },
    {
      icon: <Users className="h-12 w-12 text-marafone-red" />,
      title: "Sistema amici",
      description:
        "Aggiungi amici, segui i loro progressi e sfidali nelle classifiche.",
      highlight: "Social",
    },
    // {
    //   icon: <Smartphone className="h-12 w-12 text-marafone-red" />,
    //   title: "Interfaccia intuitiva",
    //   description:
    //     "Design moderno e user-friendly, ottimizzato per smartphone e tablet.",
    //   highlight: "Mobile First",
    // },
    {
      icon: <Trophy className="h-12 w-12 text-marafone-red" />,
      title: "Achievement",
      description:
        "Sblocca trofei e achievement giocando e migliorando le tue abilità.",
      highlight: "Obiettivi",
    },
    // {
    //   icon: <Heart className="h-12 w-12 text-marafone-red" />,
    //   title: "Tradizione romagnola",
    //   description:
    //     "Regole autentiche del Marafone tradizionale, rispettando la cultura locale.",
    //   highlight: "Autentico",
    // },
    {
      icon: <Handshake className="h-12 w-12 text-marafone-red" />,
      title: "Multiplayer in arrivo",
      description:
        "Presto potrai sfidare amici e giocatori di tutto il mondo in tempo reale!",
      highlight: "Coming Soon",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-16 px-4 bg-white overflow-hidden"
    >
      {/* Carte decorative animate */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {carteImages.slice(8, 14).map((src, i) => {
          const positions = [
            {
              top: "10%",
              left: "5%",
              rotate: "-8deg",
              size: 48,
              anim: "animate-float",
            },
            {
              top: "20%",
              right: "8%",
              rotate: "10deg",
              size: 54,
              anim: "animate-bounce-gentle",
            },
            {
              bottom: "18%",
              left: "12%",
              rotate: "6deg",
              size: 44,
              anim: "animate-float-slow",
            },
            {
              bottom: "8%",
              right: "10%",
              rotate: "-12deg",
              size: 60,
              anim: "animate-bounce-gentle",
            },
            {
              top: "50%",
              left: "40%",
              rotate: "4deg",
              size: 52,
              anim: "animate-float",
            },
            {
              bottom: "30%",
              right: "30%",
              rotate: "-6deg",
              size: 50,
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
                ...(pos.top ? { top: pos.top } : {}),
                ...(pos.bottom ? { bottom: pos.bottom } : {}),
                ...(pos.left ? { left: pos.left } : {}),
                ...(pos.right ? { right: pos.right } : {}),
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
      <div className="container mx-auto relative z-10 px-1">
        <FadeInUp delay={0.2}>
          <h2 className="font-retro text-4xl md:text-5xl text-center text-marafone-red mb-4">
            Perché scegliere
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <h3 className="font-retro text-3xl md:text-4xl text-center text-marafone-dark mb-4">
            Marafone Romagnolo?
          </h3>
        </FadeInUp>
        <FadeInUp delay={0.6}>
          <p className="font-game text-lg text-center text-marafone-dark opacity-80 mb-16 max-w-3xl mx-auto">
            L'app che porta la tradizione del Marafone romagnolo nel mondo
            digitale, con funzionalità moderne e rispetto per le regole
            autentiche.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <StaggerItem
              key={index}
              className="bg-gradient-to-br from-marafone-beige to-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-marafone-yellow/50 hover:border-marafone-red/50 group relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Badge highlight */}
              <div className="absolute top-3 right-3 bg-marafone-red text-white text-xs font-game font-bold px-2 py-1 rounded-full">
                {feature.highlight}
              </div>

              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="font-game font-bold text-lg text-marafone-dark mb-3">
                {feature.title}
              </h4>
              <p className="font-game text-sm text-marafone-dark opacity-80 leading-relaxed">
                {feature.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Sezione aggiuntiva con statistiche */}
        <FadeInUp delay={0.8}>
          <div className="mt-10 bg-gradient-to-r from-marafone-red to-marafone-dark rounded-3xl p-8 text-white text-center">
            <h3 className="font-retro text-2xl md:text-3xl mb-6">
              Unisciti alla Comunità Romagnola!
            </h3>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="font-retro text-3xl md:text-4xl text-marafone-yellow mb-2">
                  200+
                </div>
                <div className="font-game">Giocatori Attivi</div>
              </StaggerItem>
              <StaggerItem>
                <div className="font-retro text-3xl md:text-4xl text-marafone-yellow mb-2">
                  2000+
                </div>
                <div className="font-game">Partite Giocate</div>
              </StaggerItem>
              <StaggerItem>
                <div className="font-retro text-3xl md:text-4xl text-marafone-yellow mb-2">
                  4.8★
                </div>
                <div className="font-game">Valutazione Media</div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default FeaturesSection;
