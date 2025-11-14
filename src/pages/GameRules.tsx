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
} from "lucide-react";
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
            <FadeInUp delay={0.2}>
              <h1 className="font-retro text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Regole del Marafone Romagnolo
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <p className="font-game text-xl opacity-90 max-w-4xl leading-relaxed">
                Impara a giocare al tradizionale gioco di carte romagnolo online
              </p>
            </FadeInUp>
          </div>
        </section>

        <div className="md:max-w-4xl md:mx-auto px-0 md:px-4 mt-4">
          {/* Indice compatto in cima */}
          <nav className="mb-6 flex flex-wrap gap-1.5 justify-center px-2">
            {SECTIONS.map((s) => (
              <motion.button
                key={s.id}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md font-medium transition-all text-sm border border-amber-200/60 bg-amber-50/70 hover:bg-amber-100/80 text-amber-800 shadow-sm hover:shadow-md`}
                onClick={() => scrollToSection(s.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  {React.cloneElement(s.icon, { className: "w-4 h-4" })}
                </span>
                <span className="text-xs font-semibold">{s.title}</span>
              </motion.button>
            ))}
          </nav>

          {/* Main content */}
          <main className="py-2">
            <Card className="overflow-hidden border-0 md:border-4 border-amber-800/50 shadow-xl relative bg-gradient-to-br from-amber-50/90 to-orange-100/60 rounded-3xl">
              <CardContent className="p-6 md:p-10 relative z-10">
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
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-amber-100/80 border-amber-400 text-amber-900"
                    >
                      Squadre: 2 da 2 giocatori
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-amber-100/80 border-amber-400 text-amber-900"
                    >
                      Mazzo: 40 carte
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-amber-100/80 border-amber-400 text-amber-900"
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
      className={`text-2xl font-bold mb-4 flex items-center gap-3 border-b-2 pb-2 ${color}`}
    >
      <motion.span
        className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-amber-200 to-amber-400 shadow-lg"
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
      className="bg-gradient-to-br from-amber-100/70 to-orange-100/40 rounded-xl p-4 border-2 border-amber-700/20 flex flex-col items-start shadow"
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <span className="text-3xl mb-2">{emoji}</span>
      <span className="font-bold text-amber-800 text-lg mb-1">{title}</span>
      <span className="text-amber-950 text-base">{desc}</span>
    </motion.div>
  );
}

export default GameRules;
