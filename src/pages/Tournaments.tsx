import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Loader2,
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

// URL del Google Sheet pubblicato come CSV (lettura pubblica)
const COMMUNITY_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vShtN2obGjJXHqRjlC4WaSqdd5GV_FA4cHSHK6gsjp4LVlx1OBvuxrNAi1r9L5f1KRZBHcR3goUtCWe/pub?gid=0&single=true&output=csv";

// URL del Google Apps Script Web App (scrittura)
// Vedi istruzioni: Extensions → Apps Script → incolla il codice → Deploy → Web App
const APPS_SCRIPT_URL =
  "INSERISCI_URL_APPS_SCRIPT";

interface CommunityVenue {
  nome: string;
  citta: string;
  indirizzo: string;
  giorno: string;
  quota: string;
  linkMaps: string;
}

function parseCSV(text: string): CommunityVenue[] {
  const lines = text.trim().split("\n");
  if (lines.length < 2) return [];
  return lines.slice(1).map((line) => {
    // gestisce campi con virgola racchiusi tra virgolette
    const cols: string[] = [];
    let cur = "";
    let inQuotes = false;
    for (const ch of line) {
      if (ch === '"') { inQuotes = !inQuotes; }
      else if (ch === "," && !inQuotes) { cols.push(cur.trim()); cur = ""; }
      else { cur += ch; }
    }
    cols.push(cur.trim());
    return {
      nome: cols[0] ?? "",
      citta: cols[1] ?? "",
      indirizzo: cols[2] ?? "",
      giorno: cols[3] ?? "",
      quota: cols[4] ?? "",
      linkMaps: cols[5] ?? "",
    };
  }).filter((v) => v.nome.length > 0);
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

const EMPTY_FORM = {
  nome: "",
  citta: "",
  indirizzo: "",
  giorno: "",
  quota: "",
  linkMaps: "",
};

const Tournaments = () => {
  const [communityVenues, setCommunityVenues] = useState<CommunityVenue[]>([]);
  const [loadingVenues, setLoadingVenues] = useState(true);
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(COMMUNITY_SHEET_URL)
      .then((res) => res.text())
      .then((text) => setCommunityVenues(parseCSV(text)))
      .catch(() => {})
      .finally(() => setLoadingVenues(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitState("idle");
    try {
      // no-cors: il browser non può leggere la risposta ma la richiesta arriva
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(form),
      });
      setSubmitState("success");
      setForm(EMPTY_FORM);
      // ricarica i venues dopo qualche secondo per mostrare la nuova riga
      setTimeout(() => {
        fetch(COMMUNITY_SHEET_URL)
          .then((res) => res.text())
          .then((text) => setCommunityVenues(parseCSV(text)))
          .catch(() => {});
      }, 3000);
    } catch {
      setSubmitState("error");
    } finally {
      setSubmitting(false);
    }
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

              {/* Circoli e Bar segnalati dalla community */}
              {(loadingVenues || communityVenues.length > 0) && (
                <section id="community-venues">
                  <FadeInUp>
                    <div className="flex items-center gap-3 mb-8">
                      <Users className="h-8 w-8 text-amber-600" />
                      <h2 className="text-3xl font-retro text-amber-900">
                        Segnalati dalla Community
                      </h2>
                    </div>
                    <p className="font-game text-amber-900/60 mb-6 -mt-4">
                      Bar e circoli dove si gioca regolarmente, segnalati dagli
                      appassionati.
                    </p>
                  </FadeInUp>

                  {loadingVenues ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
                    </div>
                  ) : (
                    <StaggerContainer className="grid gap-4">
                      {communityVenues.map((venue, i) => (
                        <StaggerItem
                          key={i}
                          className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-[24px]"
                        >
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="text-xl font-retro text-amber-950 mb-2">
                                  {venue.nome}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                  {venue.giorno && (
                                    <Badge
                                      variant="secondary"
                                      className="bg-marafone-yellow/20 text-amber-900 border-none px-3 py-1 rounded-full font-bold text-xs"
                                    >
                                      <Calendar className="w-3 h-3 mr-1 opacity-50" />
                                      {venue.giorno}
                                    </Badge>
                                  )}
                                  <span className="flex items-center gap-1.5 text-sm text-amber-800">
                                    <MapPin className="w-4 h-4 text-marafone-red flex-shrink-0" />
                                    {venue.indirizzo
                                      ? `${venue.indirizzo}, ${venue.citta}`
                                      : venue.citta}
                                  </span>
                                  {venue.quota && (
                                    <span className="flex items-center gap-1.5 text-sm text-amber-800">
                                      <Euro className="w-4 h-4 text-green-600 flex-shrink-0" />
                                      {venue.quota}
                                    </span>
                                  )}
                                </div>
                              </div>
                              {venue.linkMaps && (
                                <Button
                                  asChild
                                  variant="outline"
                                  className="border-amber-200 text-amber-900 hover:bg-amber-50 font-retro rounded-full px-6 shrink-0"
                                >
                                  <a
                                    href={venue.linkMaps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <MapPin className="h-4 w-4 mr-2" />
                                    Mappa
                                  </a>
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  )}
                </section>
              )}

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

                      {submitState === "success" ? (
                        <div className="text-center py-12">
                          <div className="text-5xl mb-4">🎉</div>
                          <h3 className="text-2xl font-retro text-amber-900 mb-2">
                            Grazie per la segnalazione!
                          </h3>
                          <p className="font-game text-amber-900/70">
                            Il tuo locale apparirà nella lista tra pochi secondi.
                          </p>
                          <Button
                            onClick={() => setSubmitState("idle")}
                            variant="outline"
                            className="mt-6 font-retro border-amber-300 text-amber-900 rounded-full"
                          >
                            Segnala un altro
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="nome">Nome del locale / torneo</Label>
                              <Input
                                id="nome"
                                name="nome"
                                value={form.nome}
                                onChange={handleChange}
                                placeholder="es: Bar Rita"
                                required
                                className="rounded-xl border-amber-100 bg-white/50 focus:border-marafone-red"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="citta">Città</Label>
                              <Input
                                id="citta"
                                name="citta"
                                value={form.citta}
                                onChange={handleChange}
                                placeholder="es: Ravenna"
                                required
                                className="rounded-xl border-amber-100 bg-white/50 focus:border-marafone-red"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="indirizzo">Indirizzo</Label>
                              <Input
                                id="indirizzo"
                                name="indirizzo"
                                value={form.indirizzo}
                                onChange={handleChange}
                                placeholder="es: Via Ravegnana 357"
                                className="rounded-xl border-amber-100 bg-white/50 focus:border-marafone-red"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="giorno">Quando si gioca?</Label>
                              <Input
                                id="giorno"
                                name="giorno"
                                value={form.giorno}
                                onChange={handleChange}
                                placeholder="es: Ogni Martedì ore 20:15"
                                required
                                className="rounded-xl border-amber-100 bg-white/50 focus:border-marafone-red"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="quota">Quota iscrizione (opzionale)</Label>
                              <Input
                                id="quota"
                                name="quota"
                                value={form.quota}
                                onChange={handleChange}
                                placeholder="es: 10€ o Gratuito"
                                className="rounded-xl border-amber-100 bg-white/50 focus:border-marafone-red"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="linkMaps">Link Google Maps (opzionale)</Label>
                              <Input
                                id="linkMaps"
                                name="linkMaps"
                                value={form.linkMaps}
                                onChange={handleChange}
                                placeholder="https://maps.app.goo.gl/..."
                                className="rounded-xl border-amber-100 bg-white/50 focus:border-marafone-red"
                              />
                            </div>
                          </div>

                          {submitState === "error" && (
                            <p className="text-red-600 font-game text-sm">
                              Invio fallito. Riprova tra qualche secondo.
                            </p>
                          )}

                          <Button
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-marafone-red hover:bg-red-700 text-white font-retro text-xl py-8 rounded-2xl shadow-xl transition-all hover:scale-[1.01] disabled:opacity-60 disabled:scale-100"
                          >
                            {submitting ? (
                              <>
                                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                                Invio in corso...
                              </>
                            ) : (
                              "Segnala subito"
                            )}
                          </Button>
                        </form>
                      )}
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
