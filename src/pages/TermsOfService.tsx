import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { TERMS_OF_SERVICE } from "../../legalTexts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { carteImages } from "@/lib/carteImages";

// Funzione per convertire markdown in HTML con stili migliorati
const parseMarkdown = (markdown: string): string => {
  let html = markdown
    // Headers
    .replace(
      /^# (.*$)/gm,
      '<h1 class="font-retro text-4xl text-marafone-red mb-6 mt-8 first:mt-0 border-b-2 border-marafone-yellow pb-2">$1</h1>'
    )
    .replace(
      /^## (.*$)/gm,
      '<h2 class="font-game font-bold text-2xl text-marafone-dark mt-8 mb-4">📋 $1</h2>'
    )
    .replace(
      /^### (.*$)/gm,
      '<h3 class="font-game font-bold text-xl text-marafone-dark mt-6 mb-3">▶️ $1</h3>'
    )

    // Special version/date blocks
    .replace(
      /\*\*Versione:\*\*(.*?)\n/g,
      '<div class="bg-marafone-yellow/10 border border-marafone-yellow rounded-lg p-3 mb-4 font-game"><span class="font-bold text-marafone-red">📄 Versione:</span>$1</div>\n'
    )
    .replace(
      /\*\*Data di entrata in vigore:\*\*(.*?)\n/g,
      '<div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4 font-game"><span class="font-bold text-blue-700">🗓️ Data di entrata in vigore:</span>$1</div>\n'
    )
    .replace(
      /\*\*Ultimo aggiornamento:\*\*(.*?)\n/g,
      '<div class="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 font-game"><span class="font-bold text-green-700">🔄 Ultimo aggiornamento:</span>$1</div>\n'
    )

    // Bold text
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="font-bold text-marafone-red bg-marafone-yellow/10 px-1 rounded">$1</strong>'
    )

    // Email addresses with special styling
    .replace(
      /([\w.-]+@[\w.-]+\.\w+)/g,
      '<a href="mailto:$1" class="inline-flex items-center gap-1 text-marafone-red hover:text-marafone-yellow font-semibold underline bg-gray-50 px-2 py-1 rounded transition-colors">📧 $1</a>'
    )

    // Lists
    .replace(
      /^-\s+(.*$)/gm,
      '<li class="font-game mb-2 text-marafone-dark leading-relaxed flex items-start gap-2"><span class="text-marafone-red font-bold mt-1">•</span><span>$1</span></li>'
    )
    .replace(
      /^\d+\.\s+(.*$)/gm,
      '<li class="font-game mb-2 text-marafone-dark leading-relaxed">$1</li>'
    )

    // Paragraphs
    .replace(
      /^([^<\n#-\d].*)$/gm,
      '<p class="font-game mb-4 text-marafone-dark leading-relaxed">$1</p>'
    );

  // Wrap list items
  html = html.replace(/(<li[^>]*>.*?<\/li>\s*)+/gs, (match) => {
    if (match.includes("flex items-start")) {
      return `<ul class="bg-gray-50/70 rounded-lg p-4 mb-6 border-l-4 border-marafone-yellow space-y-2">${match}</ul>`;
    } else {
      return `<ol class="list-decimal bg-gray-50/70 rounded-lg p-4 mb-6 border-l-4 border-marafone-red space-y-2 ml-4">${match}</ol>`;
    }
  });

  return html.replace(/\n+/g, "\n").trim();
};

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Termini d'Utilizzo | Marafone Romagnolo - Maraffa</title>
        <meta
          name="description"
          content="Leggi i Termini d'Utilizzo di Marafone Romagnolo, il gioco di carte Maraffa. Condizioni d'uso, regole del gioco online e offline, diritti e doveri degli utenti."
        />
        <meta
          name="keywords"
          content="termini utilizzo marafone, terms maraffa, condizioni uso, gioco di carte romagnolo, app mobile, marafone, maraffa, romagna, carte, regolamento"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
        <Header />
        {/* Hero Section */}
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
              Termini d'Utilizzo
            </h1>

            <p className="font-game text-xl opacity-90 max-w-4xl leading-relaxed">
              Leggi i nostri Termini d'Utilizzo per capire le condizioni d'uso
            </p>
          </div>
        </section>

        <div className="py-16 px-4">
          <style jsx>{`
            .legal-content h1 {
              @apply scroll-mt-24 shadow-sm;
            }
            .legal-content h2 {
              @apply scroll-mt-20 bg-gradient-to-r from-marafone-yellow/10 to-transparent p-3 rounded-lg border-l-4 border-marafone-red;
            }
            .legal-content h3 {
              @apply bg-marafone-beige/30 p-2 rounded border-l-2 border-marafone-yellow;
            }
            .legal-content p:first-of-type {
              @apply text-lg font-medium bg-marafone-beige/20 p-4 rounded-lg border border-marafone-yellow/30;
            }
            .legal-content a {
              @apply transition-all duration-200 hover:scale-105;
            }
          `}</style>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-marafone-yellow">
            <div
              className="prose prose-lg max-w-none legal-content"
              dangerouslySetInnerHTML={{
                __html: parseMarkdown(TERMS_OF_SERVICE),
              }}
            />

            {/* Footer con informazioni di contatto */}
            <div className="mt-12 pt-8 border-t-2 border-marafone-yellow/30">
              <div className="bg-gradient-to-r from-marafone-beige to-marafone-yellow/20 rounded-xl p-6">
                <h3 className="font-game font-bold text-lg text-marafone-dark mb-3">
                  📋 Hai domande sui termini d'utilizzo?
                </h3>
                <p className="font-game text-marafone-dark mb-3">
                  Per chiarimenti sui termini e condizioni d'uso dell'app,
                  contattaci:
                </p>
                <a
                  href="mailto:marafoneromagnolo@gmail.com"
                  className="inline-flex items-center gap-2 bg-marafone-red text-white px-6 py-3 rounded-lg font-game font-semibold hover:bg-marafone-red/90 transition-colors"
                >
                  📧 marafoneromagnolo@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
