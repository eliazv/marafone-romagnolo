import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const GameRules = () => {
  return (
    <>
      <Helmet>
        <title>Regole Marafone Romagnolo | Gioco di Carte Maraffa</title>
        <meta
          name="description"
          content="Scopri tutte le regole ufficiali del Marafone Romagnolo, il gioco di carte tradizionale della Romagna. Maraffa, briscola, punteggi, strategie e FAQ."
        />
        <meta
          name="keywords"
          content="regole marafone, regole maraffa, gioco di carte romagnolo, carte romagnole, briscola, tradizione, bar romagnolo, marafone, maraffa, punteggi, strategie, faq"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
        {/* Header with back button */}
        <div className="bg-marafone-dark text-white py-4 px-4">
          <div className="container mx-auto">
            <Link to="/">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 mb-4"
              >
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

        {/* Rules content aggiornata */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduzione */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-marafone-yellow">
              <h2 className="font-retro text-2xl text-marafone-red mb-4">
                Introduzione
              </h2>
              <p className="font-game text-marafone-dark leading-relaxed mb-2">
                Il <strong>Marafone Romagnolo</strong> è un gioco di carte
                tradizionale della Romagna, appartenente alla famiglia della
                briscola. Si gioca in 4, a squadre di 2, con un mazzo da 40
                carte.
              </p>
              <ul className="font-game text-marafone-dark list-disc ml-6 mb-2">
                <li>Squadre: 2 da 2 giocatori</li>
                <li>Mazzo: 40 carte</li>
                <li>Vince chi arriva a 41 punti</li>
              </ul>
              <p className="font-game text-marafone-dark leading-relaxed">
                L'obiettivo è raggiungere 41 punti prima degli avversari,
                conquistando prese e sperando di avere la marafone.
              </p>
            </section>

            {/* Le Carte */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-marafone-yellow">
              <h2 className="font-retro text-2xl text-marafone-red mb-4">
                Le Carte
              </h2>
              <ul className="font-game text-marafone-dark space-y-2 list-disc ml-6">
                <li>Si usa un mazzo da 40 carte (romagnolo o spagnolo).</li>
                <li>
                  Valori decrescenti: 3, 2, asso, re, cavallo, fante, 7, 6, 5,
                  4.
                </li>
                <li>Scartini: 7, 6, 5, 4 (non valgono punti).</li>
                <li>Figure: re, cavallo, fante.</li>
                <li>
                  <strong>Marafone</strong>: hai scelto la briscola e possiedi
                  asso, 2 e 3 di briscola.
                </li>
                <li>
                  <strong>Briscola</strong>: Determinata a turno da un
                  giocatore.
                </li>
                <li>
                  Asso è la carta che vale di più, ma attenzione: 3 e 2 vincono
                  sempre su di lui.
                </li>
              </ul>
            </section>

            {/* Distribuzione */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-marafone-yellow">
              <h2 className="font-retro text-2xl text-marafone-red mb-4">
                Distribuzione
              </h2>
              <ul className="font-game text-marafone-dark space-y-2 list-disc ml-6">
                <li>
                  Le carte vengono distribuite in senso antiorario, 5 alla
                  volta, fino a 10 carte per giocatore.
                </li>
                <li>
                  Chi ha il 4 di denari decide la briscola di quella mano e
                  inizia a giocare.
                </li>
                <li>
                  La mano successiva starà al giocatore alla destra di chi ha
                  scelto la briscola la scorsa mano a sceglierle e iniziare il
                  turno.
                </li>
              </ul>
            </section>

            {/* Come si Gioca */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-marafone-yellow">
              <h2 className="font-retro text-2xl text-marafone-red mb-4">
                Come si Gioca
              </h2>
              <ul className="font-game text-marafone-dark space-y-2 list-disc ml-6">
                <li>Si gioca in senso antiorario.</li>
                <li>
                  Si deve sempre rispondere al seme giocato se possibile
                  (obbligo di colore).
                </li>
                <li>
                  Se non si ha il seme, si può giocare qualsiasi altro seme.
                </li>
                <li>
                  Vince la presa la briscola più alta, altrimenti la carta più
                  alta del seme iniziale.
                </li>
                <li>Il vincitore della presa inizia la successiva.</li>
                <li>
                  Alla fine della mano, ovvero quando tutti esauriscono le carte
                  in mano, la briscola della mano successiva viene scelta dal
                  giocatore successivo al precedente "dichiarante".
                </li>
                <li>
                  <strong>Obbligo di rispondere a colore</strong>
                </li>
              </ul>
            </section>

            {/* Comunicazione */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-marafone-yellow">
              <h2 className="font-retro text-2xl text-marafone-red mb-4">
                Comunicazione
              </h2>
              <p className="font-game text-marafone-dark leading-relaxed mb-2">
                È vietato comunicare col compagno, tranne chi apre il turno che
                può dichiarare:
              </p>
              <ul className="font-game text-marafone-dark space-y-2 list-disc ml-6">
                <li>
                  <span className="font-bold">👊 Busso</span>: Invita il
                  compagno a prendere la mano e continuare con lo stesso seme.
                </li>
                <li>
                  <span className="font-bold">🐍 Striscio</span>: Si ha solo una
                  carta rimasta di quel seme.
                </li>
                <li>
                  <span className="font-bold">🕊️ Volo</span>: Non si hanno più
                  carte di quel seme: il compagno sa che potrai tagliare.
                </li>
              </ul>
              <p className="font-game text-marafone-dark leading-relaxed mt-2">
                Comunicazione solo tramite dichiarazioni ammesse
              </p>
            </section>

            {/* Punteggi */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-marafone-yellow">
              <h2 className="font-retro text-2xl text-marafone-red mb-4">
                Punteggi
              </h2>
              <ul className="font-game text-marafone-dark space-y-2 list-disc ml-6">
                <li>Ogni mano ha un punteggio massimo di 11 punti:</li>
                <ul className="ml-6">
                  <li>Asso: 1 punto</li>
                  <li>Tre, due, re, cavallo, fante: 1/3 di punto ciascuna</li>
                  <li>7, 6, 5, 4: 0 punti</li>
                  <li>L'ultima presa ("bàga"): 1 punto</li>
                  <li>
                    <strong>Marafone</strong> (hai scelto la briscola e possiedi
                    asso, 2 e 3 di briscola): +3 punti extra, vengono aggiunti
                    agli 11 totali
                  </li>
                </ul>
              </ul>
            </section>

            {/* Strategie */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-marafone-yellow">
              <h2 className="font-retro text-2xl text-marafone-red mb-4">
                Strategie
              </h2>
              <ul className="font-game text-marafone-dark space-y-2 list-disc ml-6">
                <li>
                  Ascolta le dichiarazioni del compagno (busso, striscio, volo).
                </li>
                <li>Ricorda le carte già giocate, soprattutto le briscole.</li>
                <li>Punta a vincere l'ultima presa (bàga).</li>
                <li>
                  Comunica solo tramite le carte giocate e le dichiarazioni
                  ammesse.
                </li>
              </ul>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border-2 border-marafone-yellow">
              <h2 className="font-retro text-2xl text-marafone-red mb-4">
                FAQ
              </h2>
              <ul className="font-game text-marafone-dark space-y-2 list-disc ml-6">
                <li>
                  <span className="font-bold">
                    Quando si dichiara il marafone?
                  </span>
                  <br />
                  Il marafone va dichiarato subito all'inizio della mano, appena
                  hai scelto la briscola e possiedi asso, 2 e 3 di briscola.
                </li>
                <li>
                  <span className="font-bold">
                    Cosa succede in caso di parità di punti?
                  </span>
                  <br />
                  Si gioca un'ulteriore mano di spareggio.
                </li>
              </ul>
            </section>

            {/* Download CTA */}
            <section className="bg-marafone-red rounded-2xl p-8 text-white text-center">
              <h2 className="font-retro text-3xl mb-4">Pronto a giocare?</h2>
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
    </>
  );
};

export default GameRules;
