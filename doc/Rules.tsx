import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHardwareBackButton } from "@/hooks/useHardwareBackButton";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  shouldShowReviewRequest,
  recordReviewRequestShown,
  showNativeReviewModal,
} from "@/services/reviewTrackingService";
import PageHeader from "@/components/common/PageHeader";
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
import { logger } from "../utils/logger";

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

const Rules = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState("introduzione");
  const [menuOpen, setMenuOpen] = useState(false);

  useHardwareBackButton("/", isMobile);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Controlla se mostrare la recensione quando si visita la pagina regole
    const checkReviewOnRulesPage = async () => {
      logger.debug("🔍 Controllo recensione dalla pagina regole...");

      setTimeout(async () => {
        const shouldShow = shouldShowReviewRequest();
        logger.debug("🎯 Risultato controllo recensione:", shouldShow);

        if (shouldShow) {
          logger.debug("⭐ Mostrando richiesta recensione dalla pagina regole");
          recordReviewRequestShown();
          const result = await showNativeReviewModal();
          logger.debug("📝 Risultato modale recensione:", result);
        } else {
          logger.debug("📝 Recensione non necessaria dalla pagina regole");
        }
      }, 2000); // Delay per permettere il caricamento della pagina
    };

    checkReviewOnRulesPage();
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
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // Scroll affidabile su tutte le piattaforme
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="rules-page min-h-screen bg-gradient-to-br from-yellow-50/80 to-orange-100/60">
      <PageHeader
        title="Regole"
        icon={
          <img
            src="/images/icons/rules 100x100.png"
            alt="Regole"
            className="h-8 w-8 object-contain drop-shadow-md transition-transform duration-200"
          />
        }
        backRoute="/"
      />

      <div className="md:max-w-4xl md:mx-auto px-0 md:px-4 mt-4">
        {/* Indice compatto in cima */}
        <nav className="mb-6 flex flex-wrap gap-1.5 justify-center px-2">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md font-medium transition-all text-sm border border-amber-200/60 bg-amber-50/70 hover:bg-amber-100/80 text-amber-800 shadow-sm hover:shadow-md active:scale-95`}
              onClick={() => scrollToSection(s.id)}
            >
              <span className="w-4 h-4 flex items-center justify-center">
                {React.cloneElement(s.icon, { className: "w-4 h-4" })}
              </span>
              <span className="text-xs font-semibold">{s.title}</span>
            </button>
          ))}
        </nav>

        {/* Main content */}
        <main className="py-2">
          <Card className="overflow-hidden border-0 md:border-4 border-amber-800/50 shadow-xl relative bg-gradient-to-br from-amber-50/90 to-orange-100/60">
            <CardContent className="p-4 md:p-8 relative z-10">
              {/* Introduzione */}
              <section id="introduzione" className="mb-12 scroll-mt-24">
                <SectionTitle icon={SECTIONS[0].icon} color="text-amber-800">
                  Introduzione
                </SectionTitle>
                <p className="text-lg text-amber-950 leading-relaxed mb-2">
                  Il <b>Marafone Romagnolo</b> è un gioco di carte tradizionale
                  della Romagna, appartenente alla famiglia della briscola. Si
                  gioca in 4, a squadre di 2, con un mazzo da 40 carte.
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
                    <li>Si usa un mazzo da 40 carte (romagnolo o spagnolo).</li>
                    <li>
                      <b>Valori decrescenti:</b> 3, 2, asso, re, cavallo, fante,
                      7, 6, 5, 4.
                    </li>
                    <li>
                      <b>Scartini:</b> 7, 6, 5, 4 (non valgono punti).
                    </li>
                    <li>
                      <b>Figure:</b> re, cavallo, fante.
                    </li>
                    <li>
                      <b>Marafone:</b> hai scelto la briscola e possiedi asso, 2
                      e 3 di briscola.
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
                        <b>Asso</b> è la carta che vale di più, ma attenzione: 3
                        e 2 vincono sempre su di lui.
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
                      Chi ha il 4 di denari decide la briscola di quella mano e
                      inizia a giocare.
                    </li>
                    <li>
                      La mano successiva starà al giocarore alla destra di chi
                      ha scelto le briscola la scorsa mano a sceglierle e
                      iniziare il turno.
                    </li>
                  </ul>
                </div>
                {/* <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant="outline"
                    className="bg-green-100/80 border-green-400 text-green-900"
                  >
                    il gioco si svolge in senso antiorario
                  </Badge>
                </div> */}
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
                    Vince la presa la briscola più alta, altrimenti la carta più
                    alta del seme iniziale.
                  </li>
                  <li>Il vincitore della presa inizia la successiva.</li>
                  <li>
                    Alla fine della <b>mano</b>, ovvero quando tutti esauriscono
                    le carte in mano, la briscola della mano successiva viene
                    scelta dal giocatore successivo al precedente "dichiarante".
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
                <div className="grid  gap-4">
                  Ogni mano ha un punteggio massimo di 11 punti:
                  <ul className="list-disc pl-6 text-lg text-amber-950 mb-2">
                    <li>
                      Asso: <b>1 punto</b>
                    </li>
                    <li>
                      Tre, due, re, cavallo, fante: <b>1/3 di punto</b> ciascuna
                    </li>
                    <li>
                      7, 6, 5, 4: <b>0 punti</b>
                    </li>
                    <li>
                      L'ultima presa ("bàga"): <b>1 punto</b>
                    </li>
                    <li>
                      <b>Marafone</b> (hai scelto la briscola e possiedi asso, 2
                      e 3 di briscola): <b>+3 punti extra</b>, vengono aggiunti
                      agli 11 totali
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
                  <li>
                    Punta a vincere l'ultima presa (
                    <span className="inline-flex items-center gap-1">
                      <Target className="w-4 h-4 text-amber-700" />
                      bàga
                    </span>
                    ).
                  </li>
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
                    giocando l'asso di briscola come prima carta della partita,
                    questo vale unicamente se hai scelto la briscola e possiedi
                    asso, 2 e 3 di briscola.
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
    </div>
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
      <span className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-200 to-amber-400 shadow">
        {icon}
      </span>
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
    <div className="bg-gradient-to-br from-amber-100/70 to-orange-100/40 rounded-xl p-4 border-2 border-amber-700/20 flex flex-col items-start shadow">
      <span className="text-3xl mb-2">{emoji}</span>
      <span className="font-bold text-amber-800 text-lg mb-1">{title}</span>
      <span className="text-amber-950 text-base">{desc}</span>
    </div>
  );
}

export default Rules;
