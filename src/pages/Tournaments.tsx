import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Trophy,
  MapPin,
  Euro,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { carteImages } from "@/lib/carteImages";

// Tipo per i tornei
interface Tournament {
  id: string;
  name: string;
  location: string;
  fee: string;
  registrationLink: string;
  date?: string;
  description?: string;
}

// Lista tornei - da modificare quando necessario
const TOURNAMENTS: Tournament[] = [
  // {
  //   id: "1",
  //   name: "Torneo Primavera 2025",
  //   location: "Rimini, Romagna",
  //   fee: "15€",
  //   registrationLink: "https://example.com/torneo1",
  //   date: "15 Marzo 2025",
  //   description: "Torneo amatoriale aperto a tutti",
  // },
  // {
  //   id: "2",
  //   name: "Campionato Estivo Marafone",
  //   location: "Cesena, Romagna",
  //   fee: "20€",
  //   registrationLink: "https://example.com/torneo2",
  //   date: "20 Giugno 2025",
  //   description: "Campionato ufficiale con premi in palio",
  // },
];

const Tournaments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRequestTournament = () => {
    window.location.href =
      "mailto:marafoneromagnolo@gmail.com?subject=Richiesta Aggiunta Torneo&body=Salve,%0A%0AVorrei proporre l'aggiunta del seguente torneo:%0A%0ANome torneo: %0ALuogo: %0AData: %0AQuota iscrizione: %0ALink registrazione: %0ADescrizione: %0A%0AGrazie";
  };

  return (
    <>
      <Helmet>
        <title>Tornei Marafone Romagnolo | Eventi e Competizioni Locali</title>
        <meta
          name="description"
          content="Scopri tutti i tornei di Marafone Romagnolo (Maraffone, Beccaccino, Trionfo) nella tua zona. Iscriviti agli eventi locali e sfida altri appassionati."
        />
        <meta
          name="keywords"
          content="tornei marafone, tornei maraffone, tornei beccaccino, tornei trionfo, eventi carte romagnole, competizioni marafone, tornei locali romagna"
        />
        <link rel="canonical" href="https://marafone-romagnolo.it/tornei" />
        <meta
          property="og:title"
          content="Tornei Marafone Romagnolo | Eventi Locali"
        />
        <meta
          property="og:description"
          content="Trova e partecipa ai tornei di Marafone nella tua zona. Eventi, competizioni e sfide locali."
        />
        <meta
          property="og:url"
          content="https://marafone-romagnolo.it/tornei"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
        <Header />
        {/* Hero Section */}
        <section className="relative pt-16 pb-8 px-4 bg-marafone-red text-white overflow-hidden">
          {/* Carte decorative animate */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            {carteImages.slice(0, 4).map((src, i) => {
              const positions = [
                {
                  top: "10%",
                  left: "8%",
                  rotate: "-15deg",
                  size: 40,
                  anim: "animate-float-slow",
                },
                {
                  top: "20%",
                  right: "12%",
                  rotate: "10deg",
                  size: 45,
                  anim: "animate-bounce-gentle",
                },
                {
                  bottom: "15%",
                  left: "15%",
                  rotate: "8deg",
                  size: 42,
                  anim: "animate-float",
                },
                {
                  bottom: "25%",
                  right: "10%",
                  rotate: "-12deg",
                  size: 48,
                  anim: "animate-float-slow",
                },
              ];
              const pos = positions[i % positions.length];
              return (
                <img
                  key={src}
                  src={src}
                  alt="Carta da gioco romagnola"
                  className={pos.anim}
                  style={{
                    position: "absolute",
                    ...("top" in pos ? { top: pos.top } : {}),
                    ...("bottom" in pos ? { bottom: pos.bottom } : {}),
                    ...("left" in pos ? { left: pos.left } : {}),
                    ...("right" in pos ? { right: pos.right } : {}),
                    width: pos.size,
                    height: pos.size * 1.5,
                    transform: `rotate(${pos.rotate})`,
                    zIndex: 1,
                    filter: "drop-shadow(0 2px 8px #0003) blur(0.5px)",
                    opacity: 0.6,
                    pointerEvents: "none",
                    userSelect: "none",
                    transition: "transform 0.5s",
                  }}
                  draggable={false}
                />
              );
            })}
          </div>

          <div className="container px-0 md:px-4 mx-auto relative z-10 pt-10">
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
              Tornei di Marafone Romagnolo
            </h1>

            <p className="font-game text-xl opacity-90 max-w-4xl leading-relaxed">
              Scopri i tornei locali e partecipa alle competizioni di carte
              romagnole
            </p>
          </div>
        </section>

        <div className="md:max-w-4xl md:mx-auto px-0 md:px-4 mt-4">
          {/* Main content */}
          <main className="py-2">
            <Card className="overflow-hidden border-0 md:border-4 border-amber-800/50 shadow-xl relative bg-gradient-to-br from-amber-50/90 to-orange-100/60">
              <CardContent className="p-4 md:p-8 relative z-10">
                {/* Lista tornei */}
                <section className="mb-2">
                  <div className="mb-6 border-b-2 pb-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <h2 className="text-2xl font-bold flex items-center gap-3 text-amber-800">
                        <span className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-200 to-amber-400 shadow">
                          <Trophy className="w-6 h-6 text-amber-700" />
                        </span>
                        Tornei in Programma
                      </h2>

                      {/* Button below title on mobile, right-aligned on md+; not full-width */}
                      <div className="flex md:justify-end">
                        <Button
                          onClick={handleRequestTournament}
                          className="bg-marafone-red hover:bg-marafone-red/90 text-white font-game font-bold text-lg px-6 py-3 rounded-xl shadow-lg mx-auto md:mx-0"
                        >
                          <Mail className="h-5 w-5 mr-2" />
                          Proponi il tuo torneo
                        </Button>
                      </div>
                    </div>
                  </div>

                  {TOURNAMENTS.length === 0 ? (
                    <div className="text-center py-12 text-amber-800">
                      <Trophy className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-xl font-game">
                        Nessun torneo in programma al momento.
                      </p>
                      <p className="text-base mt-2">
                        Controlla più tardi o proponi il tuo evento!
                      </p>
                    </div>
                  ) : (
                    <div className="grid gap-6">
                      {TOURNAMENTS.map((tournament) => (
                        <Card
                          key={tournament.id}
                          className="overflow-hidden border-2 border-amber-300/60 shadow-md hover:shadow-xl transition-shadow bg-gradient-to-br from-amber-50 to-orange-50/40"
                        >
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-amber-900 mb-2 flex items-center gap-2">
                                  <Trophy className="w-6 h-6 text-yellow-600" />
                                  {tournament.name}
                                </h3>

                                {tournament.date && (
                                  <Badge
                                    variant="outline"
                                    className="bg-amber-100/80 border-amber-400 text-amber-900 mb-3"
                                  >
                                    {tournament.date}
                                  </Badge>
                                )}

                                {tournament.description && (
                                  <p className="text-amber-900 mb-4">
                                    {tournament.description}
                                  </p>
                                )}

                                <div className="space-y-2">
                                  <div className="flex items-center gap-2 text-amber-900">
                                    <MapPin className="w-5 h-5 text-red-600" />
                                    <span className="font-medium">
                                      {tournament.location}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2 text-amber-900">
                                    <Euro className="w-5 h-5 text-green-600" />
                                    <span className="font-medium">
                                      Quota: {tournament.fee}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex md:flex-col gap-2">
                                <Button
                                  asChild
                                  className="bg-marafone-red hover:bg-marafone-red/90 text-white font-game font-bold"
                                >
                                  <a
                                    href={tournament.registrationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Iscriviti
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
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

export default Tournaments;
