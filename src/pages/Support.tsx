import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, Mail, Bug, FileText, Download, Users, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { carteImages } from "@/lib/carteImages";

const SECTIONS = [
  { id: "contatti", title: "Contatti", icon: <Mail className="w-6 h-6 text-blue-700" />, color: "from-blue-100/80 to-blue-200/60" },
  { id: "faq", title: "FAQ", icon: <HelpCircle className="w-6 h-6 text-green-600" />, color: "from-green-100/80 to-green-200/60" },
  { id: "privacy", title: "Privacy", icon: <FileText className="w-6 h-6 text-purple-600" />, color: "from-purple-100/80 to-purple-200/60" },
  { id: "download", title: "Download", icon: <Download className="w-6 h-6 text-amber-600" />, color: "from-amber-100/80 to-amber-200/60" }
];

const Support = () => {
  const [activeSection, setActiveSection] = useState("contatti");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handler = () => {
      let found = "contatti";
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
        <title>Supporto - Maraffa Romagnola | Assistenza e FAQ</title>
        <meta
          name="description"
          content="Centro assistenza per Maraffa Romagnola. FAQ, contatti per supporto tecnico, segnalazione bug e informazioni sulla privacy."
        />
        <meta
          name="keywords"
          content="supporto maraffa, assistenza tecnica, FAQ, bug report, contatti, privacy, eliminazione account"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
        <Header />
        <section className="relative py-16 px-4 bg-marafone-red text-white overflow-hidden">
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
              🃏 Supporto Maraffa Romagnola
            </h1>

            <p className="font-game text-xl opacity-90 max-w-4xl leading-relaxed">
              Centro assistenza per il gioco di carte tradizionale della Romagna
            </p>
          </div>
        </section>

        <div className="md:max-w-4xl md:mx-auto px-0 md:px-4 mt-4">
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

          <main className="py-2">
            <Card className="overflow-hidden border-0 md:border-4 border-amber-800/50 shadow-xl relative bg-gradient-to-br from-amber-50/90 to-orange-100/60">
              <CardContent className="p-4 md:p-8 relative z-10">
                
                <section id="contatti" className="mb-12 scroll-mt-24">
                  <SectionTitle icon={SECTIONS[0].icon} color="text-blue-800">
                    📧 Contatti
                  </SectionTitle>
                  <div className="bg-blue-50/80 rounded-xl p-6 border border-blue-200/50">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-6 h-6 text-blue-700" />
                        <div>
                          <p className="font-semibold text-blue-900">Email di supporto:</p>
                          <a 
                            href="mailto:marafoneromagnolo@gmail.com?subject=Supporto%20Maraffa%20Romagnola" 
                            className="text-blue-700 hover:text-blue-800 font-medium underline transition-colors"
                          >
                            marafoneromagnolo@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-blue-700" />
                        <div>
                          <p className="font-semibold text-blue-900">Sviluppatore:</p>
                          <p className="text-blue-800">Elia Zavatta</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-6 h-6 text-blue-700" />
                        <div>
                          <p className="font-semibold text-blue-900">Tempo di risposta:</p>
                          <p className="text-blue-800">Entro 48 ore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <SectionTitle icon={SECTIONS[1].icon} color="text-green-700">
                    ❓ Domande Frequenti (FAQ)
                  </SectionTitle>
                  
                  <div className="space-y-4">
                    <FaqItem
                      icon="🐛"
                      question="Come posso segnalare un bug o un problema?"
                      answer="Invia un'email a marafoneromagnolo@gmail.com con una descrizione dettagliata del problema, includendo il modello del dispositivo e la versione dell'app."
                    />
                    
                    <FaqItem
                      icon="🃏"
                      question="Come funziona il gioco della Maraffa?"
                      answer="La Maraffa è un gioco di carte tradizionale romagnolo. Puoi consultare le regole complete direttamente nell'app nella sezione 'Regole' o visitare la pagina regole di questo sito."
                    />
                    
                    <FaqItem
                      icon="📱"
                      question="Posso giocare offline?"
                      answer="Sì! L'app funziona completamente offline. Le funzionalità online (multiplayer, classifiche) richiedono una connessione internet."
                    />
                    
                    <FaqItem
                      icon="🗑️"
                      question="Come posso eliminare il mio account?"
                      answer="Puoi eliminare il tuo account direttamente dall'app: vai su Profilo > Impostazioni (icona ingranaggio) > Elimina Account. Questa azione è irreversibile."
                    />
                    
                    <FaqItem
                      icon="💰"
                      question="L'app è gratuita?"
                      answer="Sì, l'app è completamente gratuita. Sono disponibili acquisti opzionali per rimuovere le pubblicità e supportare lo sviluppo."
                    />
                    
                    <FaqItem
                      icon="📲"
                      question="Su quali dispositivi funziona l'app?"
                      answer="L'app è disponibile per iPhone, iPad e dispositivi Android. Richiede iOS 13.0+ o Android 7.0+."
                    />

                    <FaqItem
                      icon="🔄"
                      question="Come aggiorno l'app?"
                      answer="Puoi aggiornare l'app tramite Google Play Store (Android) o App Store (iOS). Attiva gli aggiornamenti automatici per ricevere sempre l'ultima versione."
                    />
                  </div>
                </section>

                <section id="privacy" className="mb-12 scroll-mt-24">
                  <SectionTitle icon={SECTIONS[2].icon} color="text-purple-700">
                    🔒 Privacy
                  </SectionTitle>
                  <div className="bg-purple-50/80 rounded-xl p-6 border border-purple-200/50">
                    <p className="text-purple-900 mb-4">
                      Rispettiamo la tua privacy. L'app raccoglie solo i dati necessari per il funzionamento del gioco.
                    </p>
                    <div className="space-y-2">
                      <p className="text-purple-800">
                        📋 Per maggiori informazioni, consulta la nostra{" "}
                        <Link to="/privacy-policy" className="text-purple-700 hover:text-purple-800 font-medium underline">
                          Informativa sulla Privacy
                        </Link>
                      </p>
                      <p className="text-purple-800">
                        📜 Consulta anche i nostri{" "}
                        <Link to="/termini-utilizzo" className="text-purple-700 hover:text-purple-800 font-medium underline">
                          Termini d'Utilizzo
                        </Link>
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-purple-100/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Trash2 className="w-5 h-5 text-purple-700" />
                        <span className="font-semibold text-purple-900">Eliminazione Dati</span>
                      </div>
                      <p className="text-purple-800 text-sm">
                        Se desideri eliminare completamente i tuoi dati, puoi farlo direttamente dall'app o contattarci via email. 
                        L'eliminazione è immediata e irreversibile.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="download" className="mb-2 scroll-mt-24">
                  <SectionTitle icon={SECTIONS[3].icon} color="text-amber-700">
                    📱 Download
                  </SectionTitle>
                  <p className="text-amber-950 mb-4">Scarica l'app sui tuoi dispositivi:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50/80 rounded-xl p-6 border border-green-200/50">
                      <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        Android
                      </h4>
                      <p className="text-green-800 mb-4">Disponibile su Google Play Store</p>
                      <a 
                        href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                      >
                        <Download className="w-4 h-4" />
                        Scarica per Android
                      </a>
                    </div>
                    
                    <div className="bg-gray-50/80 rounded-xl p-6 border border-gray-200/50">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        iOS
                      </h4>
                      <p className="text-gray-600 mb-4">Presto disponibile su App Store</p>
                      <div className="inline-flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg font-medium cursor-not-allowed opacity-60">
                        <Download className="w-4 h-4" />
                        Prossimamente
                      </div>
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

function FaqItem({
  icon,
  question,
  answer,
}: {
  icon: string;
  question: string;
  answer: string;
}) {
  return (
    <div className="bg-gradient-to-br from-green-50/80 to-green-100/60 rounded-xl p-4 border border-green-200/50">
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0 mt-1">{icon}</span>
        <div>
          <h4 className="font-semibold text-green-900 mb-2">{question}</h4>
          <p className="text-green-800">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Support;