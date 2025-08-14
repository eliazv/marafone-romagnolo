import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Beccaccino = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Beccaccino Romagnolo | Ravenna, Faenza - Regole e Come Giocare</title>
        <meta
          name="description"
          content="Beccaccino è il nome usato a Ravenna e Faenza per il tradizionale gioco di carte romagnolo. Sinonimo regionale di Maraffone con le stesse regole."
        />
        <meta
          name="keywords"
          content="beccaccino, beccaccino ravenna, beccaccino faenza, gioco carte beccaccino, regole beccaccino, come giocare beccaccino, beccaccino romagnolo, beccaccino sinonimo maraffone"
        />
        <link rel="canonical" href="https://marafone-romagnolo.it/beccaccino" />
        <meta property="og:title" content="Beccaccino Romagnolo | Il Nome Usato a Ravenna e Faenza" />
        <meta property="og:description" content="Scopri il Beccaccino, sinonimo regionale usato a Ravenna e Faenza per il gioco di carte romagnolo." />
        <meta property="og:url" content="https://marafone-romagnolo.it/beccaccino" />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
        <Header />

        <section className="relative py-16 px-4 bg-gradient-to-r from-green-800 to-green-600 text-white">
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
              Beccaccino
            </h1>
            <p className="font-game text-xl opacity-90 max-w-4xl leading-relaxed">
              Il nome usato a Ravenna e Faenza per il gioco di carte romagnolo
            </p>
          </div>
        </section>

        <div className="md:max-w-4xl md:mx-auto px-0 md:px-4 mt-4">
          <main className="py-2">
            <Card className="overflow-hidden border-0 md:border-4 border-green-700/50 shadow-xl relative bg-gradient-to-br from-green-50/90 to-amber-100/60">
              <CardContent className="p-4 md:p-8 relative z-10">

                <section className="mb-8 text-center">
                  <div className="bg-blue-50/80 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-blue-800 text-sm">
                      <strong>Nota SEO:</strong> Questa pagina è ottimizzata per le ricerche specifiche del termine "Beccaccino" 
                      nelle zone di Ravenna e Faenza.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-green-800 mb-6">Dove si chiama Beccaccino</h2>
                  
                  <p className="text-lg text-green-950 leading-relaxed mb-6">
                    <strong>Beccaccino</strong> è il nome utilizzato principalmente in:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-green-100/70 to-amber-100/40 rounded-xl p-6 text-center">
                      <MapPin className="w-10 h-10 text-green-700 mx-auto mb-3" />
                      <h3 className="font-bold text-green-800 text-xl">Ravenna</h3>
                      <p className="text-green-900">Città e provincia ravennate</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-100/70 to-amber-100/40 rounded-xl p-6 text-center">
                      <MapPin className="w-10 h-10 text-green-700 mx-auto mb-3" />
                      <h3 className="font-bold text-green-800 text-xl">Faenza</h3>
                      <p className="text-green-900">Città di Faenza e comuni limitrofi</p>
                    </div>
                  </div>

                  <div className="bg-green-50/80 rounded-lg p-4 border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">Definizione</h4>
                    <p className="text-green-950">
                      Il Beccaccino è un <strong>sinonimo regionale</strong> del Maraffone/Marafone. 
                      Si tratta dello stesso gioco di carte tradizionale romagnolo con identiche regole.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="outline" className="bg-green-100/80 border-green-400 text-green-900">
                      Ravenna
                    </Badge>
                    <Badge variant="outline" className="bg-green-100/80 border-green-400 text-green-900">
                      Faenza
                    </Badge>
                    <Badge variant="outline" className="bg-green-100/80 border-green-400 text-green-900">
                      Sinonimo regionale
                    </Badge>
                  </div>
                </section>

                <section className="text-center">
                  <div className="bg-gradient-to-br from-green-600/10 to-amber-400/20 rounded-xl p-6 border-2 border-green-600/20">
                    <h3 className="text-xl font-bold text-green-700 mb-4">
                      Vuoi imparare le regole del Beccaccino?
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        asChild
                        className="bg-green-700 hover:bg-green-600 text-white font-game font-bold"
                      >
                        <Link to="/regole">
                          Vai alle Regole
                        </Link>
                      </Button>
                      
                      <Button 
                        asChild
                        variant="outline"
                        className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-game font-bold"
                      >
                        <a 
                          href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Gioca Ora
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

export default Beccaccino;