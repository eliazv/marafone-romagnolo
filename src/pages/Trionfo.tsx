import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Crown, MapPin, History, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";

const Trionfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Trionfo: Storia e Tradizione del Gioco Romagnolo | Ferrara e Imola
        </title>
        <meta
          name="description"
          content="Scopri le origini del Trionfo, la variante del Marafone tipica del ferrarese e delle zone tra Ferrara e Imola. Tradizione, storia e varianti a 5 giocatori."
        />
        <link
          rel="canonical"
          href="https://www.marafone-romagnolo.it/trionfo"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-white">
        <Header />

        <section className="relative pt-32 pb-16 px-4 bg-gradient-to-r from-purple-800 to-indigo-700 text-white overflow-hidden">
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
                Trionfo
              </h1>
              <p className="font-game text-xl md:text-2xl opacity-90 max-w-2xl leading-relaxed">
                Il nome storico del Marafone nelle province di Ferrara e zone
                limitrofe.
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
                      Cos'è il Trionfo?
                    </h2>
                    <p>
                      Il <strong>Trionfo</strong> è la denominazione classica
                      utilizzata per il Marafone nel <strong>ferrarese</strong>{" "}
                      e nelle province limitrofe, tra cui Imola. È un gioco che
                      respira la storia della pianura padana e delle sue
                      tradizioni rurali.
                    </p>
                    <p>
                      Sebbene segua le regole base del Marafone (Tressette con
                      briscola per 4 giocatori a coppie), il Trionfo a volte
                      presenta varianti locali affascinanti, come il{" "}
                      <strong>Trionfino</strong>, una versione adattata per 5
                      giocatori che aggiunge un ulteriore livello di complessità
                      e strategia.
                    </p>

                    <div className="my-12 p-8 bg-purple-50 rounded-[24px] border border-purple-100 italic quotes">
                      "Nel ferrarese si gioca a Trionfo da secoli, unendo la
                      precisione del Tressette alla passione per la briscola."
                    </div>

                    <h2 className="font-retro text-3xl text-marafone-red mb-6 uppercase tracking-tight">
                      Storia e Origini
                    </h2>
                    <p>
                      Il termine "Trionfo" richiama direttamente il seme
                      prevalente dei giochi di carte rinascimentali italiani dei
                      secoli XV-XVI. È il diretto antenato di molti giochi di
                      presa europei, influenzando persino lo sviluppo del Bridge
                      moderno.
                    </p>
                    <p>
                      Legato alla diffusione delle carte romagnole di origine
                      spagnola, il Trionfo ha trovato nel ferrarese una terra
                      d'elezione dove la tradizione è rimasta immutata. Ancora
                      oggi, il nome risuona nei circoli storici come sinonimo di
                      abilità, memoria e feeling con il compagno di gioco.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem className="space-y-6">
              <Card className="border-0 shadow-xl rounded-[32px] bg-indigo-900 text-white p-8">
                <h3 className="font-retro text-2xl mb-6 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-marafone-yellow" />
                  Zone Tipiche
                </h3>
                <ul className="space-y-4 font-game opacity-90 text-lg">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-marafone-yellow rounded-full" />
                    Ferrara e provincia
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-marafone-yellow rounded-full" />
                    Imola
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-marafone-yellow rounded-full" />
                    Basso Ferrarese
                  </li>
                </ul>
              </Card>

              <Card className="border-0 shadow-xl rounded-[32px] bg-white p-8">
                <h3 className="font-retro text-2xl text-marafone-dark mb-6 flex items-center gap-2">
                  <Users className="h-6 w-6 text-marafone-red" />
                  Varianti Locali
                </h3>
                <p className="font-game text-marafone-dark/80 leading-relaxed mb-6">
                  Esiste una versione speciale chiamata{" "}
                  <strong>Trionfino</strong>, concepita per essere giocata in 5
                  persone, molto popolare in alcune zone della provincia
                  ferrarese.
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

export default Trionfo;
