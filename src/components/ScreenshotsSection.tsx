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
    <section className="py-20 px-4 bg-gradient-to-r from-marafone-yellow to-marafone-beige">
      <div className="container mx-auto">
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
              <h3 className="font-game font-bold text-2xl text-marafone-red mb-2">
                {screenshot.title}
              </h3>
              <p className="font-game text-marafone-dark">
                {screenshot.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
