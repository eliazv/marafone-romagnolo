import { Gamepad, Brain, Award, Handshake } from "lucide-react";
import { carteImages } from "@/lib/carteImages";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Gamepad className="h-12 w-12 text-marafone-red" />,
      title: "Gioca offline con IA",
      description: "Sfida l'intelligenza artificiale quando vuoi tu!",
    },
    {
      icon: <Brain className="h-12 w-12 text-marafone-red" />,
      title: "IA strategica avanzata",
      description: "3 livelli di difficoltà per sfidare le tue abilità",
    },
    {
      icon: <Award className="h-12 w-12 text-marafone-red" />,
      title: "Classifiche globali",
      description: "Conquista la vetta e sblocca nuovi livelli!",
    },
    {
      icon: <Handshake className="h-12 w-12 text-marafone-red" />,
      title: "Aggiungi amici",
      description:
        "Segui i progressi degli amici nelle classifiche (multiplayer in sviluppo)",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 px-4 bg-white overflow-hidden"
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
      <div className="container mx-auto relative z-10">
        <h2 className="font-retro text-4xl md:text-5xl text-center text-marafone-red mb-4">
          Perché scegliere
        </h2>
        <h3 className="font-retro text-3xl md:text-4xl text-center text-marafone-dark mb-16">
          Marafone Romagnolo?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-marafone-beige rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-marafone-yellow"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h4 className="font-game font-bold text-xl text-marafone-dark mb-4">
                {feature.title}
              </h4>
              <p className="font-game text-marafone-dark opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
