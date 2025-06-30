import { Gamepad, Brain, Award, Handshake } from "lucide-react";

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
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
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
