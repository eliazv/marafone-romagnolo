
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="py-20 px-4 bg-marafone-red text-white">
      <div className="container mx-auto text-center">
        <h2 className="font-retro text-4xl md:text-5xl mb-8">
          Unisciti alla Community!
        </h2>
        
        <p className="font-game text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Segui gli aggiornamenti, partecipa ai tornei e condividi le tue vittorie 
          con altri appassionati del Marafone!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-game font-bold text-2xl mb-4">Seguici sui Social</h3>
            <p className="font-game mb-6 opacity-80">
              News, tips e sfide quotidiane su Instagram e TikTok
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                variant="secondary" 
                className="bg-white text-marafone-red hover:bg-white/90 font-game font-bold"
              >
                Instagram
              </Button>
              <Button 
                variant="secondary" 
                className="bg-white text-marafone-red hover:bg-white/90 font-game font-bold"
              >
                TikTok
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="font-game font-bold text-2xl mb-4">Invita gli Amici</h3>
            <p className="font-game mb-6 opacity-80">
              Più siete, più ci si diverte! Condividi il gioco con un click
            </p>
            <Button 
              variant="secondary" 
              className="bg-marafone-yellow text-marafone-dark hover:bg-marafone-yellow/90 font-game font-bold"
            >
              Condividi il Gioco
            </Button>
          </div>
        </div>
        
        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-md mx-auto">
          <h4 className="font-game font-bold text-xl mb-4">Codice QR per Download</h4>
          <div className="bg-white w-32 h-32 mx-auto rounded-lg flex items-center justify-center">
            <span className="text-marafone-dark font-game text-sm">QR Code</span>
          </div>
          <p className="font-game text-sm mt-4 opacity-80">
            Scansiona per scaricare subito!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
