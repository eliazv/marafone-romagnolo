import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Trophy,
  MapPin,
  Euro,
  ExternalLink,
  Mail,
  Calendar,
  ArrowLeft,
  Info,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { carteImages } from "@/lib/carteImages";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";
import { motion } from "framer-motion";

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
  {
    id: "bar-rita",
    name: "Bar Rita",
    location: "Via Ravegnana 357, Ravenna",
    fee: "10€",
    registrationLink: "https://maps.app.goo.gl/AGs7pc21DxtWokho6",
    date: "Ogni Martedì ore 20:15",
    description: "Torneo settimanale di Marafone Romagnolo presso il Bar Rita",
  },
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
      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4 bg-gradient-to-r from-marafone-red to-red-600 text-white overflow-hidden">
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
                Tornei Romagnoli
              </h1>
              <p className="font-game text-xl md:text-2xl opacity-90 max-w-2xl leading-relaxed">
                Scopri dove sfidare i campioni locali e partecipa alla
                tradizione.
              </p>
            </FadeInUp>
          </div>
        </section>

        <main className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Tornei in Programma */}
              <section id="tornei-list">
                <FadeInUp>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-retro text-amber-900 flex items-center gap-3">
                      <Trophy className="h-8 w-8 text-yellow-600" />
                      Tornei in Programma
                    </h2>
                  </div>
                </FadeInUp>

                {TOURNAMENTS.length === 0 ? (
                  <FadeInUp delay={0.2}>
                    <Card className="border-0 shadow-xl rounded-[32px] p-12 text-center bg-white/50 backdrop-blur-sm">
                      <Trophy className="w-16 h-16 mx-auto mb-4 opacity-20 text-amber-900" />
                      <p className="text-xl font-game text-amber-900/60">
                        Nessun torneo segnalato al momento.
                      </p>
                    </Card>
                  </FadeInUp>
                ) : (
                  <StaggerContainer className="grid gap-6">
                    {TOURNAMENTS.map((tournament) => (
                      <StaggerItem
                        key={tournament.id}
                        className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white rounded-[32px]"
                      >
                        <motion.div whileHover={{ y: -5 }}>
                          <CardContent className="p-8 md:p-10">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                              <div className="flex-1">
                                <h3 className="text-2xl font-retro text-amber-950 mb-4 flex items-center gap-3">
                                  {tournament.name}
                                </h3>

                                {tournament.date && (
                                  <Badge
                                    variant="secondary"
                                    className="bg-marafone-yellow/20 text-amber-900 border-none mb-6 px-4 py-1.5 rounded-full font-bold"
                                  >
                                    <Calendar className="w-4 h-4 mr-2 opacity-50" />
                                    {tournament.date}
                                  </Badge>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="flex items-center gap-3 text-amber-900 bg-amber-50/50 p-3 rounded-2xl border border-amber-100/50">
                                    <MapPin className="w-5 h-5 text-marafone-red flex-shrink-0" />
                                    <span className="font-bold text-sm">
                                      {tournament.location}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-3 text-amber-900 bg-amber-50/50 p-3 rounded-2xl border border-amber-100/50">
                                    <Euro className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="font-bold text-sm">
                                      Quota: {tournament.fee}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex md:flex-col gap-3 md:self-center">
                                <Button
                                  asChild
                                  className="bg-marafone-red hover:bg-marafone-red/90 text-white font-retro text-base px-8 py-6 rounded-full shadow-lg"
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
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                )}
              </section>

              {/* Form di Segnalazione */}
              <section id="segnala-torneo">
                <FadeInUp>
                  <Card className="border-0 shadow-2xl rounded-[32px] overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-marafone-red/5">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                        <div className="bg-marafone-red p-4 rounded-3xl shrink-0 shadow-lg shadow-marafone-red/20">
                          <Mail className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-retro text-amber-900 mb-2">
                            Segnala un Torneo o Evento
                          </h2>
                          <p className="font-game text-amber-900/70 text-lg leading-relaxed">
                            Organizzatore o semplice appassionato? Se sai di un
                            torneo ricorrente o di un evento locale,
                            segnalacelo! Aiutaci a far crescere la community.
                          </p>
                        </div>
                      </div>

                      <form
                        action="https://formspree.io/f/xeelapew"
                        method="POST"
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="tournament-name">
                              Nome del torneo
                            </Label>
                            <Input
                              id="tournament-name"
                              name="nome-torneo"
                              placeholder="es: Bar Rita"
                              required
                              className="rounded-xl border-amber-100 bg-white/50 focus:border-marafone-red"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="location">Località e Via</Label>
                            <Input
                              id="location"
                              name="luogo"
                              placeholder="Ravenna, Via..."
                              required
                              className="rounded-xl border-amber-100 bg-white/50 focus:border-marafone-red"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="date">
                              Quando si gioca? (anche ricorrente)
                            </Label>
                            <Input
                              id="date"
                              name="data"
                              placeholder="es: Ogni Martedì ore 20:30"
                              required
                              className="rounded-xl border-amber-100 bg-white/50 focus:border-marafone-red"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Tua Email (opzionale)</Label>
                            <Input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="tua@email.com"
                              className="rounded-xl border-amber-100 bg-white/50 focus:border-marafone-red"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="details">
                            Dettagli Aggiuntivi (es. quota, premi, contatti)
                          </Label>
                          <Textarea
                            id="details"
                            name="messaggio"
                            placeholder="Raccontaci di più sul torneo..."
                            rows={4}
                            className="rounded-2xl border-amber-100 bg-white/50 focus:border-marafone-red"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-marafone-red hover:bg-red-700 text-white font-retro text-xl py-8 rounded-2xl shadow-xl transition-all hover:scale-[1.01]"
                        >
                          Invia Segnalazione
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </FadeInUp>
              </section>
            </div>

            <div className="space-y-8">
              <aside className="sticky top-24 space-y-6">
                <Card className="border-0 shadow-xl rounded-[32px] bg-marafone-red text-white p-8 overflow-hidden relative">
                  <div className="absolute -right-4 -bottom-4 opacity-10">
                    <Users className="h-32 w-32" />
                  </div>
                  <h3 className="font-retro text-2xl mb-6 flex items-center gap-2">
                    Community
                  </h3>
                  <p className="font-game opacity-90 text-lg leading-relaxed mb-6">
                    Tutti possono segnalare tornei. Non serve essere gli
                    organizzatori: se hai visto un cartello in bar o sai di un
                    ritrovo storico, faccelo sapere!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl">
                      <Info className="h-5 w-5 text-marafone-yellow shrink-0" />
                      <span className="text-sm font-game">
                        Aggiorniamo la lista manualmente dopo ogni verifica.
                      </span>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-xl rounded-[32px] bg-white p-8 border border-amber-100">
                  <h3 className="font-retro text-2xl text-marafone-dark mb-6 flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                    Vantaggi
                  </h3>
                  <ul className="space-y-4 font-game text-marafone-dark/80">
                    <li className="flex gap-3">
                      <div className="h-2 w-2 bg-marafone-red rounded-full mt-2" />
                      <span>
                        Visibilità gratuita per il tuo locale o evento.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-2 w-2 bg-marafone-red rounded-full mt-2" />
                      <span>
                        Aiuta i nuovi giocatori a trovare posti dove giocare.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-2 w-2 bg-marafone-red rounded-full mt-2" />
                      <span>Mantieni viva la tradizione romagnola.</span>
                    </li>
                  </ul>
                </Card>
              </aside>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Tournaments;
