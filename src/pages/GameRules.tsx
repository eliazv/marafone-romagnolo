import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import {
  Scroll,
  Diamond,
  Shuffle,
  PlayCircle,
  MessageCircle,
  Trophy,
  Brain,
  Info,
  Star,
  Target,
  Crown,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { carteImages } from "@/lib/carteImages";
import { FadeInUp } from "@/components/ui/animated-element";
import { motion } from "framer-motion";

const SECTIONS = [
  {
    id: "introduzione",
    title: "Introduzione",
    icon: <Scroll className="w-6 h-6 text-amber-700" />,
    color: "from-amber-100/80 to-amber-200/60",
  },
  {
    id: "carte",
    title: "Le Carte",
    icon: <Diamond className="w-6 h-6 text-red-600" />,
    color: "from-red-100/80 to-amber-100/60",
  },
  {
    id: "distribuzione",
    title: "Distribuzione",
    icon: <Shuffle className="w-6 h-6 text-green-600" />,
    color: "from-green-100/80 to-amber-100/60",
  },
  {
    id: "svolgimento",
    title: "Come si Gioca",
    icon: <PlayCircle className="w-6 h-6 text-blue-600" />,
    color: "from-blue-100/80 to-amber-100/60",
  },
  {
    id: "comunicazione",
    title: "Comunicazione",
    icon: <MessageCircle className="w-6 h-6 text-purple-600" />,
    color: "from-purple-100/80 to-amber-100/60",
  },
  {
    id: "punteggi",
    title: "Punteggi",
    icon: <Trophy className="w-6 h-6 text-yellow-600" />,
    color: "from-yellow-100/80 to-amber-100/60",
  },
  {
    id: "strategie",
    title: "Strategie",
    icon: <Brain className="w-6 h-6 text-indigo-600" />,
    color: "from-indigo-100/80 to-amber-100/60",
  },
  {
    id: "faq",
    title: "FAQ",
    icon: <Info className="w-6 h-6 text-sky-600" />,
    color: "from-sky-100/80 to-amber-100/60",
  },
];

const GameRules = () => {
  const [activeSection, setActiveSection] = useState("introduzione");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll e sezione attiva
  useEffect(() => {
    const handler = () => {
      let found = "introduzione";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < 120) found = s.id;
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Regole Marafone Romagnolo: Gioco di Carte Romagnole | Maraffone,
          Beccaccino, Trionfo
        </title>
        <meta
          name="description"
          content="Scopri tutte le regole ufficiali del Marafone Romagnolo (Maraffone, Beccaccino, Maraffa e Trionfo), il gioco di carte tradizionale romagnolo. Punteggi, strategie e FAQ complete."
        />
        <meta
          name="keywords"
          content="regole marafone, regole maraffa, regole maraffone, regole beccaccino, regole trionfo, gioco di carte romagnolo, carte romagnole, briscola, tradizione, bar romagnolo, marafone, maraffa, maraffone, beccaccino, trionfo, punteggi, strategie, faq, come giocare marafone, come giocare maraffone, come giocare beccaccino, come giocare trionfo"
        />
        <link rel="canonical" href="https://marafone-romagnolo.it/regole" />
        <meta
          property="og:title"
          content="Regole Complete Marafone Romagnolo | Maraffone, Beccaccino, Trionfo"
        />
        <meta
          property="og:description"
          content="Guida completa alle regole del Marafone Romagnolo e sue varianti regionali. Impara punteggi, strategie e dichiarazioni per Maraffone, Beccaccino, Maraffa e Trionfo."
        />
        <meta
          property="og:url"
          content="https://marafone-romagnolo.it/regole"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Regole Marafone Romagnolo | Maraffone, Beccaccino, Trionfo"
        />
        <meta
          name="twitter:description"
          content="Scopri tutte le regole ufficiali del Marafone Romagnolo e sue varianti regionali della Romagna."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Come giocare al Marafone Romagnolo",
            description:
              "Regole complete del Marafone Romagnolo (Maraffone, Beccaccino, Maraffa, Trionfo), il tradizionale gioco di carte della Romagna",
            image: "https://marafone-romagnolo.it/img/logo-rosso.jpg",
            totalTime: "PT45M",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "EUR",
              value: "0",
            },
            supply: [
              {
                "@type": "HowToSupply",
                name: "Mazzo da 40 carte romagnole",
              },
              {
                "@type": "HowToSupply",
                name: "4 giocatori",
              },
            ],
            tool: [
              {
                "@type": "HowToTool",
                name: "Tavolo da gioco",
              },
            ],
            step: [
              {
                "@type": "HowToStep",
                name: "Distribuzione carte",
                text: "Distribuire 10 carte per giocatore in senso antiorario",
              },
              {
                "@type": "HowToStep",
                name: "Scelta briscola",
                text: "Chi ha il 4 di denari sceglie la briscola",
              },
              {
                "@type": "HowToStep",
                name: "Gioco delle carte",
                text: "Giocare rispettando l'obbligo di colore",
              },
              {
                "@type": "HowToStep",
                name: "Conteggio punti",
                text: "Raggiungere 41 punti per vincere",
              },
            ],
            about: [
              {
                "@type": "Thing",
                name: "Maraffone",
              },
              {
                "@type": "Thing",
                name: "Beccaccino",
              },
              {
                "@type": "Thing",
                name: "Maraffa",
              },
              {
                "@type": "Thing",
                name: "Trionfo",
              },
            ],
          })}
        </script>
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
                Regole Ufficiali
              </h1>
              <p className="font-game text-xl md:text-2xl opacity-90 max-w-2xl leading-relaxed">
                Dal Beccaccino al Marafone: tutto quello che devi sapere per
                dominare il tavolo.
              </p>
            </FadeInUp>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Indice compatto in cima */}
          <nav className="mb-12 flex flex-wrap gap-4 justify-center">
            {SECTIONS.map((s) => (
              <motion.button
                key={s.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all text-sm border-2 ${
                  activeSection === s.id
                    ? "border-marafone-red bg-marafone-red text-white shadow-lg"
                    : "border-amber-200/60 bg-white/70 hover:bg-white text-amber-900 shadow-sm hover:shadow-md"
                }`}
                onClick={() => scrollToSection(s.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  {React.cloneElement(s.icon, {
                    className: `w-4 h-4 ${
                      activeSection === s.id ? "text-white" : ""
                    }`,
                  })}
                </span>
                <span className="font-game font-bold">{s.title}</span>
              </motion.button>
            ))}
          </nav>

          {/* Main content */}
          <main className="py-2 pb-12">
            <Card className="overflow-hidden border-0 shadow-2xl relative bg-white/80 backdrop-blur-sm rounded-[32px]">
              <CardContent className="p-8 md:p-12 relative z-10">
                {/* Introduzione */}
                <section id="introduzione" className="mb-12 scroll-mt-24">
                  <SectionTitle icon={SECTIONS[0].icon} color="text-amber-800">
                    Introduzione
                  </SectionTitle>
                  <p className="text-lg text-amber-950 leading-relaxed mb-2">
                    Il <b>Marafone Romagnolo</b> (noto anche come{" "}
                    <b>Maraffone</b>, <b>Beccaccino</b>, <b>Maraffa</b> o{" "}
                    <b>Trionfo</b>) è un gioco di carte tradizionale della
                    Romagna, appartenente alla famiglia della briscola. Si gioca
                    in 4, a squadre di 2, con un mazzo da 40 carte.
                  </p>
                  <p className="text-lg text-amber-950 leading-relaxed">
                    L'obiettivo è raggiungere <b>41 punti</b> prima degli
                    avversari, conquistando prese e sperando di avere la{" "}
                    <span className="font-bold text-red-800 italic bg-red-100/50 px-2 py-1 rounded">
                      marafone
                    </span>
                    .
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Badge
                      variant="outline"
                      className="bg-amber-100/50 border-amber-200 text-amber-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      Squadre: 2 da 2 giocatori
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-amber-100/50 border-amber-200 text-amber-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      Mazzo: 40 carte
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-amber-100/50 border-amber-200 text-amber-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      Vince chi arriva a 41 punti
                    </Badge>
                  </div>
                </section>

                {/* Le Carte */}
                <section id="carte" className="mb-12 scroll-mt-24">
                  <SectionTitle icon={SECTIONS[1].icon} color="text-red-700">
                    Le Carte
                  </SectionTitle>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-6 text-lg text-amber-950 mb-2">
                      <li>
                        Si usa un mazzo da 40 carte (romagnolo o spagnolo).
                      </li>
                      <li>
                        <b>Valori decrescenti:</b> 3, 2, asso, re, cavallo,
                        fante, 7, 6, 5, 4.
                      </li>
                      <li>
                        <b>Scartini:</b> 7, 6, 5, 4 (non valgono punti).
                      </li>
                      <li>
                        <b>Figure:</b> re, cavallo, fante.
                      </li>
                      <li>
                        <b>Marafone:</b> hai scelto la briscola e possiedi asso,
                        2 e 3 di briscola.
                      </li>
                    </ul>
                    <div className="flex flex-col gap-2 text-base text-amber-900">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />{" "}
                        <span>
                          <b>Briscola:</b> Determinata a turno da un giocatore.
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Crown className="w-5 h-5 text-amber-700" />{" "}
                        <span>
                          <b>Asso</b> è la carta che vale di più, ma attenzione:
                          3 e 2 vincono sempre su di lui.
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Distribuzione */}
                <section id="distribuzione" className="mb-12 scroll-mt-24">
                  <SectionTitle icon={SECTIONS[2].icon} color="text-green-700">
                    Distribuzione
                  </SectionTitle>
                  <div className="grid gap-4">
                    <ul className="list-decimal pl-6 text-lg text-amber-950 mb-2">
                      <li>
                        Le carte vengono distribuite in senso antiorario, 5 alla
                        volta, fino a 10 carte per giocatore.
                      </li>
                      <li>
                        Chi ha il 4 di denari decide la briscola di quella mano
                        e inizia a giocare.
                      </li>
                      <li>
                        La mano successiva starà al giocatore alla destra di chi
                        ha scelto le briscola la scorsa mano a sceglierle e
                        iniziare il turno.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Svolgimento */}
                <section id="svolgimento" className="mb-12 scroll-mt-24">
                  <SectionTitle icon={SECTIONS[3].icon} color="text-blue-700">
                    Come si Gioca
                  </SectionTitle>
                  <ol className="list-decimal pl-6 text-lg text-amber-950 mb-2 space-y-1">
                    <li>
                      Si gioca in senso <b>antiorario</b>.
                    </li>
                    <li>
                      Si deve <b>sempre rispondere</b> al seme giocato se
                      possibile (<b>obbligo di colore</b>).
                    </li>
                    <li>
                      Se non si ha il seme, si può giocare qualsiasi altro seme.
                    </li>
                    <li>
                      Vince la presa la briscola più alta, altrimenti la carta
                      più alta del seme iniziale.
                    </li>
                    <li>Il vincitore della presa inizia la successiva.</li>
                    <li>
                      Alla fine della <b>mano</b>, ovvero quando tutti
                      esauriscono le carte in mano, la briscola della mano
                      successiva viene scelta dal giocatore successivo al
                      precedente "dichiarante".
                    </li>
                  </ol>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-100/80 border-blue-400 text-blue-900"
                    >
                      Obbligo di rispondere a colore
                    </Badge>
                  </div>
                </section>

                {/* Comunicazione */}
                <section id="comunicazione" className="mb-12 scroll-mt-24">
                  <SectionTitle icon={SECTIONS[4].icon} color="text-purple-700">
                    Comunicazione
                  </SectionTitle>
                  <p className="text-lg text-amber-950 leading-relaxed mb-2">
                    È vietato comunicare col compagno, tranne chi apre il turno
                    che può dichiarare:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <CallCard
                      emoji="👊"
                      title="Busso"
                      desc="Invita il compagno a prendere la mano e continuare con lo stesso seme."
                    />
                    <CallCard
                      emoji="🐍"
                      title="Striscio"
                      desc="Si ha solo una carta rimasta di quel seme."
                    />
                    <CallCard
                      emoji="🕊️"
                      title="Volo"
                      desc="Non si hanno più carte di quel seme: il compagno sa che potrai tagliare."
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/80 border-purple-400 text-purple-900"
                    >
                      Comunicazione solo tramite dichiarazioni ammesse
                    </Badge>
                  </div>
                </section>

                {/* Punteggi */}
                <section id="punteggi" className="mb-12 scroll-mt-24">
                  <SectionTitle icon={SECTIONS[5].icon} color="text-yellow-700">
                    Punteggi
                  </SectionTitle>
                  <div className="grid gap-4">
                    Ogni mano ha un punteggio massimo di 11 punti:
                    <ul className="list-disc pl-6 text-lg text-amber-950 mb-2">
                      <li>
                        Asso: <b>1 punto</b>
                      </li>
                      <li>
                        Tre, due, re, cavallo, fante: <b>1/3 di punto</b>{" "}
                        ciascuna
                      </li>
                      <li>
                        7, 6, 5, 4: <b>0 punti</b>
                      </li>
                      <li>
                        L'ultima presa: <b>1 punto</b>
                      </li>
                      <li>
                        <b>Marafone</b> (hai scelto la briscola e possiedi asso,
                        2 e 3 di briscola): <b>+3 punti extra</b>, vengono
                        aggiunti agli 11 totali
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Strategie */}
                <section id="strategie" className="mb-12 scroll-mt-24">
                  <SectionTitle icon={SECTIONS[6].icon} color="text-indigo-700">
                    Strategie
                  </SectionTitle>
                  <ul className="list-disc pl-6 text-lg text-amber-950 mb-2">
                    <li>
                      Ascolta le dichiarazioni del compagno (busso, striscio,
                      volo).
                    </li>
                    <li>
                      Ricorda le carte già giocate, soprattutto le briscole.
                    </li>
                    <li>Punta a vincere l'ultima presa</li>
                    <li>
                      Comunica solo tramite le carte giocate e le dichiarazioni
                      ammesse.
                    </li>
                  </ul>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-2 scroll-mt-24">
                  <SectionTitle icon={SECTIONS[7].icon} color="text-sky-700">
                    FAQ
                  </SectionTitle>
                  <dl className="divide-y divide-amber-200">
                    <dt className="font-bold mt-2">
                      Quando si dichiara la maraffa?
                    </dt>
                    <dd className="mb-2 text-amber-950">
                      La maraffa va dichiarato subito all'inizio della mano
                      giocando l'asso di briscola come prima carta della
                      partita, questo vale unicamente se hai scelto la briscola
                      e possiedi asso, 2 e 3 di briscola.
                    </dd>
                    <dt className="font-bold mt-2">
                      Cosa succede in caso di parità di punti?
                    </dt>
                    <dd className="mb-2 text-amber-950">
                      Si gioca un'ulteriore mano di spareggio.
                    </dd>
                  </dl>
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

// Componenti di supporto
function SectionTitle({
  icon,
  color,
  children,
}: {
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={`text-3xl font-retro mb-8 flex items-center gap-4 border-b-2 border-amber-100 pb-4 ${color}`}
    >
      <motion.span
        className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-xl border-2 border-amber-100"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.span>
      {children}
    </h2>
  );
}

function CallCard({
  emoji,
  title,
  desc,
}: {
  emoji: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      className="bg-white hover:bg-amber-50/50 rounded-[32px] p-8 border-2 border-amber-100 shadow-xl flex flex-col items-center text-center transition-colors duration-300"
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
    >
      <span className="text-5xl mb-4 p-4 bg-amber-50 rounded-full">
        {emoji}
      </span>
      <span className="font-retro text-2xl text-marafone-red mb-3">
        {title}
      </span>
      <span className="text-amber-900/80 text-lg leading-relaxed">{desc}</span>
    </motion.div>
  );
}

export default GameRules;
