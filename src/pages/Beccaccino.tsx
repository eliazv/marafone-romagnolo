import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, History, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";

const Beccaccino = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Beccaccino: Storia e Tradizione del Gioco Romagnolo | Ravenna e Faenza
        </title>
        <meta
          name="description"
          content="Scopri le origini e la storia del Beccaccino, la variante del Marafone tipica di Ravenna e Faenza. Un tuffo nella tradizione delle carte romagnole."
        />
        <link
          rel="canonical"
          href="https://www.marafone-romagnolo.it/beccaccino"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-white">
        <Header />

        <section className="relative pt-32 pb-16 px-4 bg-gradient-to-r from-green-800 to-green-600 text-white overflow-hidden">
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
                Beccaccino
              </h1>
              <p className="font-game text-xl md:text-2xl opacity-90 max-w-2xl leading-relaxed">
                Il nome della tradizione ravennate e faentina per il gioco del
                Marafone.
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
                      Cos'è il Beccaccino?
                    </h2>
                    <p>
                      Il <strong>Beccaccino</strong> è il nome con cui è
                      universalmente conosciuto il gioco del Marafone nelle zone
                      di <strong>Ravenna e Faenza</strong>. Si tratta di una
                      variante locale del Tressette con briscola, un pilastro
                      della cultura ludica romagnola che unisce generazioni nei
                      bar e nei circoli della provincia.
                    </p>
                    <p>
                      Il gioco si disputa in 4 giocatori divisi a coppie,
                      utilizzando un mazzo da 40 carte romagnole (di derivazione
                      spagnola-araba). La particolarità che lo distingue dal
                      Tressette classico è proprio la presenza della briscola,
                      chiamata localmente "trionfa".
                    </p>

                    <div className="my-12 p-8 bg-green-50 rounded-[24px] border border-green-100 italic quotes">
                      "Il Beccaccino non è solo un gioco, è un rito sociale che
                      scandisce il tempo nelle osterie romagnole da secoli."
                    </div>

                    <h2 className="font-retro text-3xl text-marafone-red mb-6 uppercase tracking-tight">
                      Storia e Origini
                    </h2>
                    <p>
                      Le radici del Beccaccino affondano nella storia della
                      Romagna. Probabilmente nato agli inizi dell'800, è
                      strettamente legato alle carte romagnole tradizionali.
                      Deriva dal "Trionfo" rinascimentale italiano (XV-XVI
                      sec.), gioco affine alla briscola e antenato di giochi
                      moderni come il Whist o il Bridge.
                    </p>
                    <p>
                      Il termine "trionfo" indicava originariamente il seme
                      prevalente. Diffuso oralmente tra le province di Ravenna e
                      Faenza, il Beccaccino è sopravvissuto indenne ai secoli,
                      mantenendo intatto il suo fascino grazie a tornei locali
                      leggendari che si tengono ancora oggi in luoghi storici
                      come Villa Torlonia.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem className="space-y-6">
              <Card className="border-0 shadow-xl rounded-[32px] bg-marafone-red text-white p-8">
                <h3 className="font-retro text-2xl mb-6 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-marafone-yellow" />
                  Dove si gioca
                </h3>
                <ul className="space-y-4 font-game opacity-90 text-lg">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-marafone-yellow rounded-full" />
                    Ravenna
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-marafone-yellow rounded-full" />
                    Faenza
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-marafone-yellow rounded-full" />
                    Bassa Romagna
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-marafone-yellow rounded-full" />
                    Litorale Ravennate
                  </li>
                </ul>
              </Card>

              <Card className="border-0 shadow-xl rounded-[32px] bg-white p-8">
                <h3 className="font-retro text-2xl text-marafone-dark mb-6 flex items-center gap-2">
                  <History className="h-6 w-6 text-marafone-red" />
                  Lo sapevi?
                </h3>
                <p className="font-game text-marafone-dark/80 leading-relaxed mb-6">
                  Il mazzo di carte romagnole utilizzato ha un'origine
                  antichissima, influenzata dai commerci con la Spagna e il
                  mondo arabo, come dimostrano i simboli dei bastoni e delle
                  spade.
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

export default Beccaccino;
