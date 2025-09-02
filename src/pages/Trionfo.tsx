import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Crown, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Trionfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Trionfo Carte Online: Gioco Romagnolo con Carte Romagnole | Regole Gratis</title>
        <meta
          name="description"
          content="Trionfo carte online: scopri il gioco romagnolo tradizionale con carte romagnole. Regole complete e come giocare a Trionfo gratis."
        />
        <meta
          name="keywords"
          content="trionfo carte, trionfo gioco, trionfo ferrara, trionfo provincia ferrara, gioco carte trionfo gratis, regole trionfo online, come giocare trionfo, trionfo app gratis, trionfo carte romagnole, trionfo 5 giocatori"
        />
        <link rel="canonical" href="https://marafone-romagnolo.it/trionfo" />
        <meta property="og:title" content="Trionfo Carte - Gioco Romagnolo Ferrara | Regole Trionfo Gratis" />
        <meta property="og:description" content="Trionfo carte: gioco romagnolo gratis della provincia di Ferrara. Regole complete del Trionfo gioco tradizionale con carte romagnole online." />
        <meta property="og:url" content="https://marafone-romagnolo.it/trionfo" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Game",
            "name": "Trionfo",
            "alternateName": ["Trionfo Carte", "Trionfo Gioco", "Marafone Romagnolo Variante Ferrara"],
            "description": "Il Trionfo è una variante del Marafone/Beccaccino giocata nella provincia di Ferrara, caratterizzata dalla possibilità di giocare anche in cinque giocatori. Scopri le sue regole e peculiarità.",
            "url": "https://marafone-romagnolo.it/trionfo",
            "genre": ["Card Game", "Traditional Game", "Italian Game"],
            "gamePlatform": ["Web Browser", "Android", "Mobile"],
            "numberOfPlayers": "4-5",
            "playMode": "MultiPlayer",
            "image": "https://marafone-romagnolo.it/img/logo-rosso.jpg", // Or a specific image for Trionfo
            "author": {
              "@type": "Person",
              "name": "Elia Zavatta"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Marafone Team",
              "url": "https://marafone-romagnolo.it/"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
        <Header />

        <section className="relative py-16 px-4 bg-gradient-to-r from-purple-800 to-indigo-700 text-white">
          <div className="container mx-auto relative z-10 pt-16">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="secondary"
                className="bg-marafone-yellow text-marafone-dark hover:bg-marafone-yellow/90 font-game font-bold"
                asChild
              >
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Torna alla Home
                </Link>
              </Button>
            </div>

            <h1 className="font-retro text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Trionfo: Il Gioco di Carte Romagnolo Online
            </h1>
            <p className="font-game text-xl opacity-90 max-w-4xl leading-relaxed">
              Il nome tradizionale del gioco di carte romagnolo, ora disponibile online.
            </p>
          </div>
        </section>

        <div className="md:max-w-4xl md:mx-auto px-0 md:px-4 mt-4">
          <main className="py-2">
            <Card className="overflow-hidden border-0 md:border-4 border-purple-700/50 shadow-xl relative bg-gradient-to-br from-purple-50/90 to-indigo-100/60">
              <CardContent className="p-4 md:p-8 relative z-10">

                <section className="mb-8 text-center">
                  <div className="bg-blue-50/80 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-blue-800 text-sm">
                      <strong>Nota SEO:</strong> Questa pagina è ottimizzata per le ricerche specifiche del termine "Trionfo" 
                      nella provincia di Ferrara.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-purple-800 mb-6">Dove si chiama Trionfo</h2>
                  
                  <div className="bg-gradient-to-br from-purple-100/70 to-indigo-100/40 rounded-xl p-6 mb-6 text-center">
                    <MapPin className="w-12 h-12 text-purple-700 mx-auto mb-3" />
                    <h3 className="font-bold text-purple-800 text-2xl mb-2">Provincia di Ferrara</h3>
                    <p className="text-purple-900">Il nome "Trionfo" è utilizzato principalmente nella provincia di Ferrara</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50/80 rounded-lg p-4 border border-purple-200">
                      <h4 className="font-bold text-purple-800 mb-3">📖 Definizione</h4>
                      <p className="text-purple-950 text-sm">
                        Il <strong>Trionfo</strong> è il nome usato nella provincia di Ferrara per una 
                        <strong> variante del Marafone/Beccaccino</strong>. Il nome deriva dalla funzione 
                        di <strong>"trionfo"</strong> del seme di briscola nel gioco.
                      </p>
                    </div>

                    <div className="bg-indigo-50/80 rounded-lg p-4 border border-indigo-200">
                      <h4 className="font-bold text-indigo-800 mb-3">🎯 Caratteristiche</h4>
                      <p className="text-indigo-950 text-sm">
                        È un gioco affine al tressette e alla briscola che si gioca tradizionalmente in quattro, 
                        ma nella provincia di Ferrara può essere giocato anche in <strong>cinque giocatori</strong> 
                        con regole di dichiarazione specifiche.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50/80 rounded-lg p-4 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-2">Etimologia</h4>
                    <p className="text-amber-950">
                      Il nome deriva dalla funzione di <strong>"trionfo"</strong> del seme di briscola, 
                      sottolineando il ruolo dominante che questo seme assume durante le partite.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="outline" className="bg-purple-100/80 border-purple-400 text-purple-900">
                      Provincia di Ferrara
                    </Badge>
                    <Badge variant="outline" className="bg-purple-100/80 border-purple-400 text-purple-900">
                      4 o 5 giocatori
                    </Badge>
                    <Badge variant="outline" className="bg-purple-100/80 border-purple-400 text-purple-900">
                      Briscola = Trionfo
                    </Badge>
                  </div>
                </section>

                <section className="text-center">
                  <div className="bg-gradient-to-br from-purple-600/10 to-indigo-400/20 rounded-xl p-6 border-2 border-purple-600/20">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">
                      Vuoi imparare le regole del Trionfo?
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        asChild
                        className="bg-purple-700 hover:bg-purple-600 text-white font-game font-bold"
                      >
                        <Link to="/regole">
                          Scopri le Regole
                        </Link>
                      </Button>
                      
                      <Button 
                        asChild
                        variant="outline"
                        className="border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white font-game font-bold"
                      >
                        <a 
                          href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Gioca al Trionfo
                        </a>
                      </Button>
                    </div>
                  </div>
                </section>

              </CardContent>
            </Card>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Trionfo;