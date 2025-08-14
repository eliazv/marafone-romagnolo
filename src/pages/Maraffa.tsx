import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Maraffa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Maraffa Romagnola | Combinazione Asso, 2 e 3 di Briscola</title>
        <meta
          name="description"
          content="Maraffa è il nome della combinazione di asso, due e tre del seme di briscola nel gioco romagnolo. Usato anche come sinonimo del gioco stesso."
        />
        <meta
          name="keywords"
          content="maraffa, maraffa romagnola, combinazione maraffa, asso due tre briscola, maraffa gioco carte, maraffa romagna, regole maraffa, come fare maraffa"
        />
        <link rel="canonical" href="https://marafone-romagnolo.it/maraffa" />
        <meta property="og:title" content="Maraffa Romagnola | La Combinazione Speciale di Briscola" />
        <meta property="og:description" content="Scopri la Maraffa, la combinazione di asso, due e tre di briscola che caratterizza il gioco romagnolo." />
        <meta property="og:url" content="https://marafone-romagnolo.it/maraffa" />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
        <Header />

        <section className="relative py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
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
              Maraffa
            </h1>
            <p className="font-game text-xl opacity-90 max-w-4xl leading-relaxed">
              La combinazione speciale del gioco romagnolo
            </p>
          </div>
        </section>

        <div className="md:max-w-4xl md:mx-auto px-0 md:px-4 mt-4">
          <main className="py-2">
            <Card className="overflow-hidden border-0 md:border-4 border-orange-600/50 shadow-xl relative bg-gradient-to-br from-orange-50/90 to-red-100/60">
              <CardContent className="p-4 md:p-8 relative z-10">

                <section className="mb-8 text-center">
                  <div className="bg-blue-50/80 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-blue-800 text-sm">
                      <strong>Nota SEO:</strong> Questa pagina è ottimizzata per le ricerche specifiche del termine "Maraffa" 
                      come combinazione di carte e sinonimo del gioco.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-orange-800 mb-6">Cos'è la Maraffa</h2>
                  
                  <div className="bg-gradient-to-br from-orange-100/70 to-red-100/40 rounded-xl p-6 mb-6 border-2 border-orange-300/30">
                    <div className="flex items-center gap-3 mb-4">
                      <Crown className="w-8 h-8 text-orange-700" />
                      <h3 className="text-2xl font-bold text-orange-800">Definizione</h3>
                    </div>
                    <p className="text-lg text-orange-950 leading-relaxed">
                      <strong>Maraffa</strong> è il nome dato alla <strong>combinazione particolare di carte</strong> 
                      composta da <strong>asso, due e tre del seme di briscola</strong> nel gioco romagnolo.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50/80 rounded-lg p-4 border border-red-200">
                      <h4 className="font-bold text-red-800 mb-3">🃏 Come Combinazione</h4>
                      <p className="text-red-950 text-sm">
                        La Maraffa è la combinazione vincente di <strong>asso, 2 e 3 dello stesso seme di briscola</strong> 
                        che un giocatore può possedere quando ha scelto la briscola.
                      </p>
                    </div>

                    <div className="bg-orange-50/80 rounded-lg p-4 border border-orange-200">
                      <h4 className="font-bold text-orange-800 mb-3">🎯 Come Sinonimo</h4>
                      <p className="text-orange-950 text-sm">
                        Il termine <strong>Maraffa</strong> viene anche usato talvolta come 
                        <strong> sinonimo dell'intero gioco</strong>, specialmente in Romagna.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="outline" className="bg-orange-100/80 border-orange-400 text-orange-900">
                      Asso, 2 e 3 di briscola
                    </Badge>
                    <Badge variant="outline" className="bg-orange-100/80 border-orange-400 text-orange-900">
                      Romagna
                    </Badge>
                    <Badge variant="outline" className="bg-orange-100/80 border-orange-400 text-orange-900">
                      Combinazione vincente
                    </Badge>
                  </div>
                </section>

                <section className="text-center">
                  <div className="bg-gradient-to-br from-orange-600/10 to-red-400/20 rounded-xl p-6 border-2 border-orange-600/20">
                    <h3 className="text-xl font-bold text-orange-700 mb-4">
                      Vuoi sapere come fare la Maraffa?
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        asChild
                        className="bg-orange-600 hover:bg-orange-500 text-white font-game font-bold"
                      >
                        <Link to="/regole">
                          Scopri le Regole
                        </Link>
                      </Button>
                      
                      <Button 
                        asChild
                        variant="outline"
                        className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-game font-bold"
                      >
                        <a 
                          href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Gioca Subito
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

export default Maraffa;