
const ScreenshotsSection = () => {
  const screenshots = [
    {
      title: "Sfida i tuoi amici!",
      description: "Partite online in tempo reale"
    },
    {
      title: "Sblocca il tuo rank!",
      description: "Sistema di livelli e achievement"
    },
    {
      title: "Atmosfera autentica!",
      description: "Grafiche che richiamano i bar romagnoli"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-marafone-yellow to-marafone-beige">
      <div className="container mx-auto">
        <h2 className="font-retro text-4xl md:text-5xl text-center text-marafone-red mb-16">
          Guarda il gioco in azione!
        </h2>
        
        {/* Placeholder for screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="text-center">
              <div className="bg-marafone-dark rounded-2xl aspect-[9/16] mb-6 flex items-center justify-center shadow-xl border-4 border-white">
                <div className="text-white font-game text-lg opacity-50">
                  Screenshot {index + 1}
                  <br />
                  <span className="text-sm">In arrivo...</span>
                </div>
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
        
        <div className="text-center">
          <p className="font-game text-lg text-marafone-dark mb-8">
            📱 Screenshot dell'app in arrivo presto!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
