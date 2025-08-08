import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";
import { carteImages } from "@/lib/carteImages";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { previewArticles } from "@/data/articles";

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="relative py-20 px-4 bg-gradient-to-b from-marafone-yellow/20 to-marafone-beige/40 overflow-hidden"
    >
      {/* Carte decorative animate */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {carteImages.slice(10, 15).map((src, i) => {
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
                opacity: 0.3,
                pointerEvents: "none",
                userSelect: "none",
                transition: "transform 0.5s",
              }}
              draggable={false}
            />
          );
        })}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <FadeInUp delay={0.2}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <BookOpen className="h-8 w-8 text-marafone-red" />
            </motion.div>
            <h2 className="font-retro text-4xl md:text-5xl text-marafone-dark">
              Il Nostro Blog
            </h2>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <p className="font-game text-xl mb-12 max-w-2xl mx-auto text-marafone-dark/80">
            Approfondimenti, strategie e curiosità sul mondo del Marafone Romagnolo
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewArticles.map((article, index) => (
            <StaggerItem key={article.id}>
              <Link to={article.slug === 'regole' ? '/regole' : `/blog/${article.slug}`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="h-full cursor-pointer"
                >
                  <Card className="h-full bg-white/90 backdrop-blur-sm border-2 border-marafone-yellow/30 hover:border-marafone-red/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="relative mb-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-20 h-30 mx-auto object-contain drop-shadow-lg"
                      />
                    </div>
                    <CardTitle className="font-game text-lg text-marafone-dark line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <div className="flex items-center justify-center gap-2 text-marafone-red/70 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span className="font-game">
                        {new Date(article.date).toLocaleDateString('it-IT', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="font-game text-marafone-dark/70 line-clamp-3">
                      {article.description}
                    </CardDescription>
                  </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-marafone-red hover:bg-marafone-red/90 text-white font-game font-bold text-lg px-8 py-4"
              asChild
            >
              <Link to="/blog">
                Vedi Tutti gli Articoli
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default BlogSection;