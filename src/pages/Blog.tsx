import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Calendar, ArrowRight, Home } from "lucide-react";
import { carteImages } from "@/lib/carteImages";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { allArticles } from "@/data/articles";

const Blog = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-marafone-beige to-marafone-yellow">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-marafone-red text-white overflow-hidden">
        {/* Carte decorative animate */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          {carteImages.slice(15, 20).map((src, i) => {
            const positions = [
              {
                top: "5%",
                left: "10%",
                rotate: "-20deg",
                size: 45,
                anim: "animate-float",
              },
              {
                top: "15%",
                right: "8%",
                rotate: "15deg",
                size: 50,
                anim: "animate-bounce-gentle",
              },
              {
                bottom: "10%",
                left: "12%",
                rotate: "18deg",
                size: 48,
                anim: "animate-float-slow",
              },
              {
                bottom: "20%",
                right: "15%",
                rotate: "-10deg",
                size: 52,
                anim: "animate-bounce-gentle",
              },
              {
                top: "45%",
                left: "3%",
                rotate: "12deg",
                size: 46,
                anim: "animate-float",
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

        <div className="container mx-auto text-center relative z-10 pt-16">
          <FadeInUp delay={0.2}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <BookOpen className="h-12 w-12 text-marafone-yellow" />
              </motion.div>
              <h1 className="font-retro text-5xl md:text-6xl">
                Blog Marafone
              </h1>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="font-game text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Tutto quello che c'è da sapere sul Marafone Romagnolo: storia, strategie, curiosità e molto altro per diventare un vero esperto di questo affascinante gioco di carte della tradizione romagnola.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <Button
              variant="secondary"
              className="bg-marafone-yellow text-marafone-dark hover:bg-marafone-yellow/90 font-game font-bold"
              asChild
            >
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Torna alla Home
              </Link>
            </Button>
          </FadeInUp>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Carte decorative per la sezione articoli */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          {carteImages.slice(25, 30).map((src, i) => {
            const positions = [
              {
                top: "20%",
                right: "5%",
                rotate: "25deg",
                size: 35,
                anim: "animate-float-slow",
              },
              {
                bottom: "30%",
                left: "8%",
                rotate: "-18deg",
                size: 40,
                anim: "animate-bounce-gentle",
              },
              {
                top: "60%",
                right: "12%",
                rotate: "12deg",
                size: 38,
                anim: "animate-float",
              },
              {
                bottom: "10%",
                right: "25%",
                rotate: "-8deg",
                size: 42,
                anim: "animate-float-slow",
              },
              {
                top: "30%",
                left: "5%",
                rotate: "15deg",
                size: 36,
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
                  opacity: 0.25,
                  pointerEvents: "none",
                  userSelect: "none",
                  transition: "transform 0.5s",
                }}
                draggable={false}
              />
            );
          })}
        </div>

        <div className="container mx-auto relative z-10">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArticles.map((article, index) => (
              <StaggerItem key={article.id}>
                <Link to={article.slug === 'regole' ? '/regole' : `/blog/${article.slug}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="h-full cursor-pointer"
                  >
                    <Card className="h-full bg-white/95 backdrop-blur-sm border-2 border-marafone-yellow/30 hover:border-marafone-red/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <CardHeader className="pb-4">
                      <div className="relative mb-4 flex justify-center">
                        <motion.img
                          src={article.image}
                          alt={article.title}
                          className="w-16 h-24 object-contain drop-shadow-lg"
                          whileHover={{
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.5 }
                          }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-game bg-marafone-yellow/20 text-marafone-dark px-3 py-1 rounded-full border border-marafone-yellow/50">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-2 text-marafone-red/70 text-sm">
                          <Calendar className="h-3 w-3" />
                          <span className="font-game">
                            {new Date(article.date).toLocaleDateString('it-IT', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                      
                      <CardTitle className="font-game text-xl text-marafone-dark line-clamp-2 mb-3">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="font-game text-marafone-dark/70 line-clamp-4">
                        {article.description}
                      </CardDescription>
                    </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;