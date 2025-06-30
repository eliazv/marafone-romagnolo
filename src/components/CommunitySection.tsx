import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-20 px-4 bg-marafone-red text-white">
      <div className="container mx-auto text-center">
        <h2 className="font-retro text-4xl md:text-5xl mb-8">
          Unisciti alla Community!
        </h2>

        <p className="font-game text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Segui gli aggiornamenti, partecipa ai tornei e condividi le tue
          vittorie con altri appassionati del Marafone!
        </p>

        <div className="flex flex-col md:flex-row gap-8 mb-12 items-center justify-center">
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm w-full md:w-1/2 max-w-xl flex flex-col items-center text-center">
            <Handshake className="h-12 w-12 text-white mb-2" />
            <h3 className="font-game font-bold text-2xl mb-4">
              Invita gli Amici
            </h3>
            <p className="font-game mb-6 opacity-80">
              Più siete, più ci si diverte! Condividi il gioco con un click
            </p>
            <Button
              variant="secondary"
              className="bg-marafone-yellow text-marafone-dark hover:bg-marafone-yellow/90 font-game font-bold"
              onClick={async () => {
                const shareData = {
                  title: "Marafone Romagnolo",
                  text: "Scarica Marafone Romagnolo!",
                  url: "https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa",
                };
                if (navigator.share) {
                  try {
                    await navigator.share(shareData);
                  } catch (err) {
                    // Optionally handle error
                  }
                } else {
                  await navigator.clipboard.writeText(shareData.url);
                  alert("Link copiato negli appunti!");
                }
              }}
            >
              Condividi il Gioco
            </Button>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col items-center w-full md:w-1/2 max-w-xl">
            <h4 className="font-game font-bold text-xl mb-4">
              Codice QR per Download
            </h4>
            <a
              href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="QR Play Store"
              className="block bg-white rounded-lg p-2 shadow-lg border-2 border-marafone-yellow hover:scale-105 transition-transform"
              style={{ width: "180px", height: "180px" }}
            >
              <img
                src="https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
                alt="QR code Play Store Marafone Romagnolo"
                className="w-full h-full object-contain"
                style={{ minWidth: "150px", minHeight: "150px" }}
              />
            </a>
            <p className="font-game text-sm mt-4 opacity-80">
              Scansiona per scaricare subito!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
