import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { TERMS_OF_SERVICE } from "../../legalTexts";

// Funzione per convertire markdown in HTML con stili migliorati
const parseMarkdown = (markdown: string): string => {
  let html = markdown
    // Headers
    .replace(/^# (.*$)/gm, '<h1 class="font-retro text-4xl text-marafone-red mb-6 mt-8 first:mt-0 border-b-2 border-marafone-yellow pb-2">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="font-game font-bold text-2xl text-marafone-dark mt-8 mb-4">📋 $1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="font-game font-bold text-xl text-marafone-dark mt-6 mb-3">▶️ $1</h3>')
    
    // Special version/date blocks
    .replace(/\*\*Versione:\*\*(.*?)\n/g, '<div class="bg-marafone-yellow/10 border border-marafone-yellow rounded-lg p-3 mb-4 font-game"><span class="font-bold text-marafone-red">📄 Versione:</span>$1</div>\n')
    .replace(/\*\*Data di entrata in vigore:\*\*(.*?)\n/g, '<div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4 font-game"><span class="font-bold text-blue-700">🗓️ Data di entrata in vigore:</span>$1</div>\n')
    .replace(/\*\*Ultimo aggiornamento:\*\*(.*?)\n/g, '<div class="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 font-game"><span class="font-bold text-green-700">🔄 Ultimo aggiornamento:</span>$1</div>\n')
    
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-marafone-red bg-marafone-yellow/10 px-1 rounded">$1</strong>')
    
    // Email addresses with special styling
    .replace(/([\w.-]+@[\w.-]+\.\w+)/g, '<a href="mailto:$1" class="inline-flex items-center gap-1 text-marafone-red hover:text-marafone-yellow font-semibold underline bg-gray-50 px-2 py-1 rounded transition-colors">📧 $1</a>')
    
    // Lists
    .replace(/^-\s+(.*$)/gm, '<li class="font-game mb-2 text-marafone-dark leading-relaxed flex items-start gap-2"><span class="text-marafone-red font-bold mt-1">•</span><span>$1</span></li>')
    .replace(/^\d+\.\s+(.*$)/gm, '<li class="font-game mb-2 text-marafone-dark leading-relaxed">$1</li>')
    
    // Paragraphs
    .replace(/^([^<\n#-\d].*)$/gm, '<p class="font-game mb-4 text-marafone-dark leading-relaxed">$1</p>');
  
  // Wrap list items
  html = html.replace(/(<li[^>]*>.*?<\/li>\s*)+/gs, (match) => {
    if (match.includes('flex items-start')) {
      return `<ul class="bg-gray-50/70 rounded-lg p-4 mb-6 border-l-4 border-marafone-yellow space-y-2">${match}</ul>`;
    } else {
      return `<ol class="list-decimal bg-gray-50/70 rounded-lg p-4 mb-6 border-l-4 border-marafone-red space-y-2 ml-4">${match}</ol>`;
    }
  });
  
  return html.replace(/\n+/g, '\n').trim();
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
    <div className="min-h-screen bg-gradient-to-br from-marafone-beige via-white to-marafone-yellow/20 text-marafone-dark py-4 px-4">
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
      <div className="mb-1">
        <Link to="/">
          <Button
            variant="ghost"
            className="text-marafone-dark hover:bg-marafone-yellow/20 mb-2 rounded-xl px-6 py-3 font-game font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-3 border-2 border-transparent hover:border-marafone-yellow/30"
          >
            <ArrowLeft className="w-5 h-5" />
            Torna alla Home
          </Button>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-marafone-yellow">
        <div 
          className="prose prose-lg max-w-none legal-content"
          dangerouslySetInnerHTML={{ 
            __html: parseMarkdown(TERMS_OF_SERVICE)
          }}
        />
        
        {/* Footer con informazioni di contatto */}
        <div className="mt-12 pt-8 border-t-2 border-marafone-yellow/30">
          <div className="bg-gradient-to-r from-marafone-beige to-marafone-yellow/20 rounded-xl p-6">
            <h3 className="font-game font-bold text-lg text-marafone-dark mb-3">
              📋 Hai domande sui termini d'utilizzo?
            </h3>
            <p className="font-game text-marafone-dark mb-3">
              Per chiarimenti sui termini e condizioni d'uso dell'app, contattaci:
            </p>
            <a 
              href="mailto:zavattaelia@gmail.com" 
              className="inline-flex items-center gap-2 bg-marafone-red text-white px-6 py-3 rounded-lg font-game font-semibold hover:bg-marafone-red/90 transition-colors"
            >
              📧 zavattaelia@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default TermsOfService;