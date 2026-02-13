import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Crown, History, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";

const Maraffa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Maraffa: Storia e Tradizione del Gioco Romagnolo | Cesena e Forlì
        </title>
        <meta
          name="description"
          content="Scopri le origini della Maraffa, il nome generale e locale per il Marafone Romagnolo. Storia, origini e nomi per località di questo gioco tradizionale."
        />
        <link
          rel="canonical"
          href="https://www.marafone-romagnolo.it/maraffa"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-white">
        <Header />

        <section className="relative pt-32 pb-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/img/hero.webp')] bg-cover bg-center" />
          <div className="container mx-auto relative z-10">
            <FadeInUp>
              <Link
                to="/"
                className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors font-game"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Torna alla Home
              </Link>
              <h1 className="font-retro text-5xl md:text-7xl mb-6 leading-tight drop-shadow-lg">
                Maraffa
              </h1>
              <p className="font-game text-xl md:text-2xl opacity-90 max-w-2xl leading-relaxed">
                Il cuore pulsante del Marafone nelle province di Cesena e Forlì.
              </p>
            </FadeInUp>
          </div>
        </section>

        <main className="container mx-auto px-4 py-16">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <StaggerItem className="lg:col-span-2 space-y-8">
              <Card className="border-0 shadow-2xl rounded-[32px] overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none font-game text-marafone-dark">
                    <h2 className="font-retro text-3xl text-marafone-red mb-6 uppercase tracking-tight">
                      Cos'è la Maraffa?
                    </h2>
                    <p>
                      La <strong>Maraffa</strong> (o Marafone) è il nome
                      generale per il gioco di carte più amato della Romagna.
                      Più specificamente, il termine indica spesso la
                      combinazione base di{" "}
                      <strong>Asso, Due e Tre di briscola</strong>,
                      colloquialmente chiamata anche "cricca".
                    </p>
                    <p>
                      È il gioco tipico dell'area romagnola centrale, un
                      pilastro delle domeniche e delle serate invernali. Si
                      gioca in 4 a coppie, con l'immancabile mazzo da 40 carte
                      romagnole.
                    </p>

                    <div className="my-12 p-8 bg-orange-50 rounded-[24px] border border-orange-100 italic quotes">
                      "La Maraffa è l'anima dei bar della Romagna, un rito che
                      fonde strategia, fortuna e goliardia."
                    </div>

                    <h2 className="font-retro text-3xl text-marafone-red mb-6 uppercase tracking-tight">
                      Etimologia e Varianti
                    </h2>
                    <p>Il nome varia sensibilmente a seconda della località:</p>
                    <ul>
                      <li>
                        <strong>Maraffone o Marafone:</strong> Termine
                        prevalente a Cesena, Forlì e aree limitrofe come San
                        Mauro Pascoli.
                      </li>
                      <li>
                        <strong>Beccaccino:</strong> Nome d'uso a Ravenna e
                        Faenza.
                      </li>
                      <li>
                        <strong>Trionfo:</strong> Utilizzato nel ferrarese, a
                        Imola e persino ad Ancona (come "Tronfo").
                      </li>
                    </ul>
                    <p>
                      Esistono anche nomi meno comuni come "tresette con
                      taglio", "pirucco" o "Pastorino" (nella zona di Fanano).
                    </p>

                    <h2 className="font-retro text-3xl text-marafone-red mb-6 uppercase tracking-tight">
                      Storia e Origini
                    </h2>
                    <p>
                      La leggenda vuole che il gioco sia nato agli inizi del XIX
                      secolo a <strong>San Varano</strong>, una piccola frazione
                      di Forlì. Le carte stesse raccontano storie di secoli di
                      scambi commerciali, portando simboli arrivati dalla Spagna
                      e dal mondo arabo.
                    </p>
                    <p>
                      Derivando dal "Trionfo" dei secoli XV-XVI, la Maraffa ha
                      saputo adattarsi alla vivacità romagnola, trasformandosi
                      da gioco di corte a gioco popolare, mantenendo però una
                      disciplina e una strategia degne dei migliori tornei
                      internazionali.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem className="space-y-6">
              <Card className="border-0 shadow-xl rounded-[32px] bg-orange-600 text-white p-8">
                <h3 className="font-retro text-2xl mb-6 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-marafone-yellow" />
                  Luoghi del Cuore
                </h3>
                <ul className="space-y-4 font-game opacity-90 text-lg">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-marafone-yellow rounded-full" />
                    Cesena e dintorni
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-marafone-yellow rounded-full" />
                    Forlì e San Varano
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-marafone-yellow rounded-full" />
                    San Mauro Pascoli
                  </li>
                </ul>
              </Card>

              <Card className="border-0 shadow-xl rounded-[32px] bg-white p-8">
                <h3 className="font-retro text-2xl text-marafone-dark mb-6 flex items-center gap-2">
                  <History className="h-6 w-6 text-marafone-red" />
                  Curiosità Storica
                </h3>
                <p className="font-game text-marafone-dark/80 leading-relaxed mb-6">
                  Il Marafone è citato in numerosi racconti popolari come la
                  prova suprema di abilità mnemonica per i giocatori romagnoli,
                  capaci di ricordare ogni singola carta calata durante la
                  smazzata.
                </p>
                <Button
                  className="w-full bg-marafone-red hover:bg-marafone-red/90 rounded-full h-12 font-game font-bold text-lg"
                  asChild
                >
                  <Link to="/regole">Scopri le Regole</Link>
                </Button>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Maraffa;
