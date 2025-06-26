
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const GameRules = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
      {/* Header with back button */}
      <div className="bg-marafone-dark text-white py-4 px-4">
        <div className="container mx-auto">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Torna alla Home
            </Button>
          </Link>
          <h1 className="font-retro text-3xl md:text-4xl text-marafone-yellow">
            Regole del Marafone Romagnolo
          </h1>
          <p className="font-game text-lg mt-2 opacity-90">
            Impara a giocare al tradizionale gioco di carte della Romagna
          </p>
        </div>
      </div>

      {/* Rules content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-marafone-yellow">
            <h2 className="font-retro text-2xl text-marafone-red mb-4">
              Cos'è il Marafone?
            </h2>
            <p className="font-game text-marafone-dark mb-4 leading-relaxed">
              Il <strong>Marafone</strong> (anche chiamato <strong>Maraffa</strong>) è un tradizionale gioco di carte della Romagna, 
              tipicamente giocato nei bar e nelle osterie di paese. È un gioco di strategia e fortuna che si tramanda 
              di generazione in generazione.
            </p>
            <p className="font-game text-marafone-dark leading-relaxed">
              La nostra versione digitale mantiene tutte le regole tradizionali, permettendoti di giocare 
              ovunque tu sia con un'esperienza autentica.
            </p>
          </section>

          {/* Basic Rules */}
          <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-marafone-yellow">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-marafone-red mr-3" />
              <h2 className="font-retro text-2xl text-marafone-red">
                Regole Base
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-game font-bold text-xl text-marafone-dark mb-3">
                  🃏 Le Carte
                </h3>
                <ul className="font-game text-marafone-dark space-y-2">
                  <li>• Si gioca con un mazzo di 40 carte italiane</li>
                  <li>• 4 semi: Coppe, Denari, Spade, Bastoni</li>
                  <li>• Ogni seme ha 10 carte (Asso, 2-7, Fante, Cavallo, Re)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-game font-bold text-xl text-marafone-dark mb-3">
                  👥 I Giocatori
                </h3>
                <ul className="font-game text-marafone-dark space-y-2">
                  <li>• Si gioca in 2 o 4 giocatori</li>
                  <li>• Con 4 giocatori si formano 2 coppie</li>
                  <li>• Nell'app puoi sfidare l'IA o aggiungere amici</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Play */}
          <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-marafone-yellow">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-marafone-red mr-3" />
              <h2 className="font-retro text-2xl text-marafone-red">
                Come si Gioca
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-game font-bold text-xl text-marafone-dark mb-3">
                  🎯 Obiettivo
                </h3>
                <p className="font-game text-marafone-dark leading-relaxed">
                  L'obiettivo è conquistare il maggior numero di punti attraverso le prese. 
                  Vince chi per primo raggiunge il punteggio stabilito (solitamente 21 punti).
                </p>
              </div>
              
              <div>
                <h3 className="font-game font-bold text-xl text-marafone-dark mb-3">
                  🎲 Distribuzione
                </h3>
                <ul className="font-game text-marafone-dark space-y-2">
                  <li>• Ogni giocatore riceve 3 carte</li>
                  <li>• 4 carte vengono scoperte sul tavolo</li>
                  <li>• Il resto del mazzo rimane coperto</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-game font-bold text-xl text-marafone-dark mb-3">
                  ⚡ Le Prese
                </h3>
                <ul className="font-game text-marafone-dark space-y-2">
                  <li>• Puoi prendere carte dal tavolo se la somma è uguale alla tua carta</li>
                  <li>• Esempio: con un 7 puoi prendere un 7 o carte che sommano 7 (es: 3+4)</li>
                  <li>• Alcune combinazioni speciali danno punti extra</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Scoring */}
          <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-marafone-yellow">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-marafone-red mr-3" />
              <h2 className="font-retro text-2xl text-marafone-red">
                Punteggi e Classifiche
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="font-game text-marafone-dark leading-relaxed">
                Nell'app Marafone Romagnolo puoi:
              </p>
              <ul className="font-game text-marafone-dark space-y-2 ml-4">
                <li>• <strong>Giocare offline</strong> contro l'IA con 3 livelli di difficoltà</li>
                <li>• <strong>Aggiungere amici</strong> per vedere i loro progressi (multiplayer online in sviluppo)</li>
                <li>• <strong>Scalare le classifiche</strong> globali conquistando punti</li>
                <li>• <strong>Sbloccare achievement</strong> e personalizzazioni</li>
                <li>• <strong>Personalizzare</strong> carte, tavoli e avatar</li>
              </ul>
            </div>
          </section>

          {/* Download CTA */}
          <section className="bg-marafone-red rounded-2xl p-8 text-white text-center">
            <h2 className="font-retro text-3xl mb-4">
              Pronto a giocare?
            </h2>
            <p className="font-game text-xl mb-8 opacity-90">
              Scarica subito Marafone Romagnolo e inizia la tua avventura!
            </p>
            <Link to="/">
              <Button 
                size="lg" 
                className="bg-marafone-yellow text-marafone-dark hover:bg-marafone-yellow/90 font-game font-bold text-lg px-8 py-4 rounded-xl"
              >
                Scarica il Gioco
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GameRules;
