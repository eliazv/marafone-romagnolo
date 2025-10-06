import { Brain, Smartphone, Users, Trophy } from "lucide-react";
import { carteImages } from "@/lib/carteImages";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";

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
          <p className="font-game text-lg text-center text-marafone-dark mb-8 max-w-4xl mx-auto leading-relaxed">
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
          <h2 className="font-retro text-4xl md:text-5xl text-center text-marafone-red mb-12">
            Perché scegliere Marafone Romagnolo?
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* CTA Section */}
        <FadeInUp delay={0.8}>
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <h3 className="font-retro text-3xl md:text-4xl text-marafone-red mb-6">
              Scarica ora l'app e diventa campione di Marafone!
            </h3>
            <p className="font-game text-lg text-marafone-dark mb-8 leading-relaxed">
              Unisciti a migliaia di giocatori che ogni giorno si sfidano nel
              gioco più amato della Romagna.
            </p>
          </div>
        </FadeInUp>

        {/* Sezione aggiuntiva con statistiche */}
        <FadeInUp delay={1.0}>
          <div className="mt-10 bg-gradient-to-r from-marafone-red to-marafone-dark rounded-3xl p-8 text-white text-center">
            <h3 className="font-retro text-2xl md:text-3xl mb-6">
              Unisciti alla Comunità Romagnola!
            </h3>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="font-retro text-3xl md:text-4xl text-marafone-yellow mb-2">
                  2000+
                </div>
                <div className="font-game">Giocatori Attivi</div>
              </StaggerItem>
              <StaggerItem>
                <div className="font-retro text-3xl md:text-4xl text-marafone-yellow mb-2">
                  20K+
                </div>
                <div className="font-game">Partite Giocate</div>
              </StaggerItem>
              <StaggerItem>
                <div className="font-retro text-3xl md:text-4xl text-marafone-yellow mb-2">
                  4.4★
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
