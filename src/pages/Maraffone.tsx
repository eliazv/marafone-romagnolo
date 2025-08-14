import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Maraffone = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Maraffone Romagnolo | Forlì, Cesena - Regole e Come Giocare</title>
        <meta
          name="description"
          content="Maraffone (con doppia f) è il nome usato a Forlì, Cesena e Romagna per il tradizionale gioco di carte. Deriva dal dialetto 'marafon' che significa furbacchione."
        />
        <meta
          name="keywords"
          content="maraffone, maraffone forlì, maraffone cesena, maraffone romagna, gioco carte maraffone, regole maraffone, come giocare maraffone, maraffone tradizionale, maraffone dialetto romagnolo"
        />
        <link rel="canonical" href="https://marafone-romagnolo.it/maraffone" />
        <meta property="og:title" content="Maraffone Romagnolo | Il Nome Usato a Forlì e Cesena" />
        <meta property="og:description" content="Scopri il Maraffone, nome tradizionale del gioco di carte usato a Forlì, Cesena e in tutta la Romagna." />
        <meta property="og:url" content="https://marafone-romagnolo.it/maraffone" />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
        <Header />

        <section className="relative py-16 px-4 bg-marafone-red text-white">
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
              Maraffone
            </h1>
            <p className="font-game text-xl opacity-90 max-w-4xl leading-relaxed">
              Il nome tradizionale usato a Forlì, Cesena e in Romagna
            </p>
          </div>
        </section>

        <div className="md:max-w-4xl md:mx-auto px-0 md:px-4 mt-4">
          <main className="py-2">
            <Card className="overflow-hidden border-0 md:border-4 border-amber-800/50 shadow-xl relative bg-gradient-to-br from-amber-50/90 to-orange-100/60">
              <CardContent className="p-4 md:p-8 relative z-10">

                <section className="mb-8 text-center">
                  <div className="bg-blue-50/80 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-blue-800 text-sm">
                      <strong>Nota SEO:</strong> Questa pagina è ottimizzata per le ricerche specifiche del termine "Maraffone" 
                      nelle zone di Forlì, Cesena e Romagna.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-amber-800 mb-6">Dove si chiama Maraffone</h2>
                  
                  <p className="text-lg text-amber-950 leading-relaxed mb-6">
                    <strong>Maraffone</strong> (con doppia "f") è la denominazione tipica usata soprattutto a:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-amber-100/70 to-orange-100/40 rounded-xl p-4 text-center">
                      <MapPin className="w-8 h-8 text-amber-700 mx-auto mb-2" />
                      <h3 className="font-bold text-amber-800">Forlì</h3>
                      <p className="text-sm text-amber-900">Città e provincia</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-100/70 to-orange-100/40 rounded-xl p-4 text-center">
                      <MapPin className="w-8 h-8 text-amber-700 mx-auto mb-2" />
                      <h3 className="font-bold text-amber-800">Cesena</h3>
                      <p className="text-sm text-amber-900">Città e dintorni</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-100/70 to-orange-100/40 rounded-xl p-4 text-center">
                      <MapPin className="w-8 h-8 text-amber-700 mx-auto mb-2" />
                      <h3 className="font-bold text-amber-800">Romagna</h3>
                      <p className="text-sm text-amber-900">Generale</p>
                    </div>
                  </div>

                  <div className="bg-amber-50/80 rounded-lg p-4 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-2">Etimologia</h4>
                    <p className="text-amber-950">
                      La parola deriva dal dialetto romagnolo <em>"marafon"</em>, che significa <strong>"furbacchione"</strong> o <strong>"astuto"</strong>.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="outline" className="bg-amber-100/80 border-amber-400 text-amber-900">
                      Forlì-Cesena
                    </Badge>
                    <Badge variant="outline" className="bg-amber-100/80 border-amber-400 text-amber-900">
                      Romagna
                    </Badge>
                    <Badge variant="outline" className="bg-amber-100/80 border-amber-400 text-amber-900">
                      Dialetto romagnolo
                    </Badge>
                  </div>
                </section>

                <section className="text-center">
                  <div className="bg-gradient-to-br from-marafone-red/10 to-marafone-yellow/20 rounded-xl p-6 border-2 border-marafone-red/20">
                    <h3 className="text-xl font-bold text-marafone-red mb-4">
                      Vuoi imparare le regole del Maraffone?
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        asChild
                        className="bg-marafone-red hover:bg-marafone-red/90 text-white font-game font-bold"
                      >
                        <Link to="/regole">
                          Vai alle Regole
                        </Link>
                      </Button>
                      
                      <Button 
                        asChild
                        variant="outline"
                        className="border-marafone-red text-marafone-red hover:bg-marafone-red hover:text-white font-game font-bold"
                      >
                        <a 
                          href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Scarica l'App
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

export default Maraffone;