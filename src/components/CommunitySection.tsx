import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";
import QRCode from "react-qr-code";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch justify-center">
          {/* QR Code Card */}
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col items-center justify-center text-center md:col-span-1 order-2 md:order-1 mx-auto">
            <h4 className="font-game font-bold text-xl mb-4 text-marafone-yellow drop-shadow">
              Scarica l'app
            </h4>
            <div className="flex justify-center w-full">
              <a
                href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="QR Play Store"
                className="block bg-white rounded-xl p-3 shadow-xl border-4 border-marafone-yellow hover:scale-105 transition-transform mx-auto"
                style={{ width: "200px", height: "200px" }}
              >
                <QRCode
                  value="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  className="w-full h-full object-contain"
                  style={{ width: "170px", height: "170px" }}
                />
              </a>
            </div>
            <p className="font-game text-base mt-4 opacity-80">
              Scansiona per scaricare subito!
            </p>
          </div>
          {/* Divider or Icon */}
          <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2">
            <div className="w-1 h-32 bg-marafone-yellow rounded-full opacity-60"></div>
            <span className="text-5xl mt-4 animate-bounce">🃏</span>
          </div>
          {/* Invite Card */}
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col items-center justify-center text-center md:col-span-1 order-3">
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
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
