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
                  <a
                    href="https://chat.whatsapp.com/BoCwvxzhpU7Hvczyi65GAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center hover:underline"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 mr-2"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
                <div className="font-game">Unisciti al Gruppo</div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default FeaturesSection;
