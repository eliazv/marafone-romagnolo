import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, Home } from "lucide-react";
import { carteImages } from "@/lib/carteImages";
import { FadeInUp } from "@/components/ui/animated-element";
import { motion } from "framer-motion";
import { allArticles } from "@/data/articles";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const article = allArticles.find(art => art.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-retro text-4xl text-marafone-red mb-4">Articolo non trovato</h1>
          <Link to="/blog">
            <Button className="bg-marafone-red hover:bg-marafone-red/90 text-white font-game">
              Torna al Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-marafone-red text-white overflow-hidden">
        {/* Carte decorative animate */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          {carteImages.slice(0, 5).map((src, i) => {
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
              {
                top: "50%",
                left: "5%",
                rotate: "15deg",
                size: 38,
                anim: "animate-bounce-gentle",
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
          <FadeInUp delay={0.2}>
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="secondary"
                className="bg-marafone-yellow text-marafone-dark hover:bg-marafone-yellow/90 font-game font-bold"
                asChild
              >
                <Link to="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Torna al Blog
                </Link>
              </Button>
              <span className="text-xs font-game bg-marafone-yellow/20 text-white px-3 py-1 rounded-full border border-marafone-yellow/50">
                {article.category}
              </span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <h1 className="font-retro text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              {article.title}
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-marafone-yellow">
                <Calendar className="h-5 w-5" />
                <span className="font-game">
                  {new Date(article.date).toLocaleDateString('it-IT', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.8}>
            <p className="font-game text-xl opacity-90 max-w-4xl leading-relaxed">
              {article.description}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center mb-8">
            <motion.img
              src={article.image}
              alt={article.title}
              className="w-24 h-36 object-contain drop-shadow-xl"
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: [1, 1.05, 1],
                transition: { duration: 0.5 }
              }}
            />
          </div>

          <div className="bg-gradient-to-br from-white via-marafone-beige/30 to-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-marafone-yellow/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-marafone-yellow/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-marafone-red/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            
            <div 
              className="prose prose-xl max-w-none relative z-10
                         prose-headings:font-retro prose-headings:mb-8 prose-headings:mt-10 prose-headings:first:mt-0
                         prose-h1:text-4xl prose-h1:text-marafone-red prose-h1:bg-gradient-to-r prose-h1:from-marafone-red prose-h1:to-marafone-red/80 prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:drop-shadow-sm prose-h1:border-b-4 prose-h1:border-marafone-yellow/50 prose-h1:pb-4
                         prose-h2:text-3xl prose-h2:text-marafone-dark prose-h2:bg-gradient-to-br prose-h2:from-marafone-beige/80 prose-h2:to-marafone-yellow/40 prose-h2:p-4 prose-h2:rounded-2xl prose-h2:border-l-4 prose-h2:border-marafone-red prose-h2:shadow-lg prose-h2:relative
                         prose-h3:text-2xl prose-h3:text-marafone-red prose-h3:bg-marafone-yellow/20 prose-h3:px-4 prose-h3:py-2 prose-h3:rounded-xl prose-h3:border-l-2 prose-h3:border-marafone-yellow
                         prose-p:mb-6 prose-p:text-lg prose-p:leading-8 prose-p:text-marafone-dark prose-p:font-game
                         prose-strong:text-white prose-strong:bg-gradient-to-r prose-strong:from-marafone-red prose-strong:to-marafone-red/90 prose-strong:px-2 prose-strong:py-1 prose-strong:rounded-md prose-strong:font-bold prose-strong:shadow-sm prose-strong:border prose-strong:border-marafone-red/20
                         prose-em:text-marafone-red prose-em:bg-marafone-yellow/20 prose-em:px-1 prose-em:rounded prose-em:not-italic prose-em:font-semibold
                         prose-a:text-marafone-red prose-a:font-bold prose-a:bg-gradient-to-r prose-a:from-transparent prose-a:via-marafone-yellow/20 prose-a:to-transparent prose-a:px-2 prose-a:py-1 prose-a:rounded-lg prose-a:no-underline prose-a:border prose-a:border-marafone-yellow/30 prose-a:transition-all prose-a:duration-300
                         hover:prose-a:bg-marafone-yellow/30 hover:prose-a:shadow-lg hover:prose-a:scale-105
                         prose-ul:mb-8 prose-ul:bg-gradient-to-br prose-ul:from-gray-50/80 prose-ul:to-marafone-beige/40 prose-ul:p-6 prose-ul:rounded-2xl prose-ul:border-l-4 prose-ul:border-marafone-yellow prose-ul:shadow-lg
                         prose-li:mb-3 prose-li:text-lg prose-li:text-marafone-dark prose-li:font-game prose-li:leading-7 prose-li:relative prose-li:pl-2
                         prose-ol:mb-8 prose-ol:bg-gradient-to-br prose-ol:from-blue-50/60 prose-ol:to-marafone-beige/30 prose-ol:p-6 prose-ol:rounded-2xl prose-ol:border-l-4 prose-ol:border-marafone-red prose-ol:shadow-lg
                         prose-blockquote:border-l-8 prose-blockquote:border-gradient-to-b prose-blockquote:border-marafone-yellow prose-blockquote:bg-gradient-to-br prose-blockquote:from-marafone-yellow/10 prose-blockquote:via-marafone-beige/20 prose-blockquote:to-marafone-yellow/5
                         prose-blockquote:pl-8 prose-blockquote:pr-6 prose-blockquote:py-6 prose-blockquote:my-8 prose-blockquote:rounded-r-2xl prose-blockquote:shadow-xl
                         prose-blockquote:italic prose-blockquote:text-marafone-dark prose-blockquote:text-xl prose-blockquote:leading-8 prose-blockquote:relative
                         prose-code:bg-gradient-to-r prose-code:from-marafone-yellow/30 prose-code:to-marafone-beige/40 prose-code:text-marafone-dark prose-code:px-3 prose-code:py-1 prose-code:rounded-lg prose-code:font-mono prose-code:font-bold prose-code:border prose-code:border-marafone-yellow/50 prose-code:shadow-sm
                         prose-pre:bg-gradient-to-br prose-pre:from-marafone-dark prose-pre:to-gray-800 prose-pre:text-white prose-pre:rounded-2xl prose-pre:shadow-2xl prose-pre:border-4 prose-pre:border-marafone-yellow/20 prose-pre:p-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Reading progress indicator */}
            <div className="mt-8 flex items-center justify-center">
              <div className="flex items-center gap-2 bg-marafone-yellow/20 px-4 py-2 rounded-full border border-marafone-yellow/30">
                <div className="w-2 h-2 bg-marafone-red rounded-full animate-pulse"></div>
                <span className="text-sm font-game text-marafone-dark font-semibold">Articolo completato</span>
                <div className="w-2 h-2 bg-marafone-red rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t-2 border-marafone-yellow/30">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Button
                variant="outline"
                className="border-marafone-red text-marafone-red hover:bg-marafone-red hover:text-white font-game"
                asChild
              >
                <Link to="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Tutti gli Articoli
                </Link>
              </Button>

              <Button
                className="bg-marafone-red hover:bg-marafone-red/90 text-white font-game"
                asChild
              >
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Torna alla Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogArticle;