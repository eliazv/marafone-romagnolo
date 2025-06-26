
import { Gamepad, Brain, award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Gamepad className="h-12 w-12 text-marafone-red" />,
      title: "Gioca offline e online",
      description: "Sfida l'IA o i tuoi amici online da tutto il mondo!"
    },
    {
      icon: <Brain className="h-12 w-12 text-marafone-red" />,
      title: "IA strategica avanzata",
      description: "3 livelli di difficoltà per sfidare le tue abilità"
    },
    {
      icon: <award className="h-12 w-12 text-marafone-red" />,
      title: "Classifiche globali",
      description: "Conquista la vetta e sblocca nuovi livelli!"
    },
    {
      icon: <div className="h-12 w-12 bg-marafone-red rounded-lg flex items-center justify-center text-white font-bold text-xl">🎨</div>,
      title: "Personalizzazione totale",
      description: "Carte, tavoli e avatar unici per il tuo stile"
    }
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
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
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
