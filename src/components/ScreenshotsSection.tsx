import { carteImages } from "@/lib/carteImages";

const ScreenshotsSection = () => {
  const screenshots = [
    {
      img: "/img/screen modalit.png",
      title: "Modalità di gioco",
      description:
        "Scegli tra diverse modalità: classica, veloce, contro l'IA o online!",
    },
    {
      img: "/img/screen gioco.png",
      title: "Partita in corso",
      description:
        "Interfaccia fedele al tavolo da bar romagnolo, carte grandi e leggibili.",
    },
    {
      img: "/img/screen classifica.png",
      title: "Classifica e progressi",
      description:
        "Scala la classifica, sblocca achievement e confronta i tuoi risultati!",
    },
  ];

  return (
    <section className="relative py-10 px-4 bg-gradient-to-r from-marafone-yellow to-marafone-beige overflow-hidden">
      {/* Carte decorative animate */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {carteImages.slice(14, 20).map((src, i) => {
          const positions = [
            {
              top: "12%",
              left: "10%",
              rotate: "-10deg",
              size: 44,
              anim: "animate-float",
            },
            {
              top: "18%",
              right: "12%",
              rotate: "8deg",
              size: 50,
              anim: "animate-bounce-gentle",
            },
            {
              bottom: "20%",
              left: "20%",
              rotate: "12deg",
              size: 46,
              anim: "animate-float-slow",
            },
            {
              bottom: "12%",
              right: "14%",
              rotate: "-6deg",
              size: 54,
              anim: "animate-bounce-gentle",
            },
            {
              top: "60%",
              left: "30%",
              rotate: "6deg",
              size: 48,
              anim: "animate-float",
            },
            {
              bottom: "35%",
              right: "25%",
              rotate: "-8deg",
              size: 52,
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
                ...("top" in pos ? { top: pos.top } : {}),
                ...("bottom" in pos ? { bottom: pos.bottom } : {}),
                ...("left" in pos ? { left: pos.left } : {}),
                ...("right" in pos ? { right: pos.right } : {}),
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
        <h2 className="font-retro text-4xl md:text-5xl text-center text-marafone-red mb-16">
          Guarda il gioco in azione!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="text-center">
              <div className="bg-marafone-dark rounded-2xl aspect-[9/16] mb-6 flex items-center justify-center shadow-xl border-4 border-white overflow-hidden">
                <img
                  src={screenshot.img}
                  alt={screenshot.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col items-center justify-center text-center mx-auto">
                <h3 className="font-game font-bold text-2xl text-marafone-red mb-2">
                  {screenshot.title}
                </h3>
                <p className="font-game text-marafone-dark">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
