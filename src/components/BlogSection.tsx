import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      className="relative py-16 px-4 bg-gradient-to-b from-white to-marafone-beige/20 overflow-hidden"
    >
      <div className="container mx-auto text-center relative z-10 max-w-6xl">
        <FadeInUp delay={0.2}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <BookOpen className="h-7 w-7 text-marafone-red" />
            <h2 className="font-retro text-3xl md:text-4xl text-marafone-dark">
              Scopri di più
            </h2>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <p className="font-game text-base mb-10 max-w-2xl mx-auto text-marafone-dark/70">
            Approfondimenti, strategie e curiosità sul mondo del Marafone Romagnolo
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {previewArticles.map((article, index) => (
            <StaggerItem key={article.id}>
              <Link
                to={
                  article.slug === "regole"
                    ? "/regole"
                    : article.slug === "tornei"
                    ? "/tornei"
                    : `/blog/${article.slug}`
                }
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="h-full cursor-pointer"
                >
                  <Card className="h-full bg-white/90 backdrop-blur-sm border-2 border-marafone-yellow/30 hover:border-marafone-red/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <CardHeader className="pb-3 pt-4">
                      <div className="relative mb-2">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-16 h-24 mx-auto object-contain drop-shadow-lg"
                        />
                      </div>
                      <CardTitle className="font-game text-base text-marafone-dark line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <div className="flex items-center justify-center gap-1.5 text-marafone-red/70 text-xs">
                        <Calendar className="h-3 w-3" />
                        <span className="font-game">
                          {new Date(article.date).toLocaleDateString("it-IT", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-4">
                      <CardDescription className="font-game text-sm text-marafone-dark/70 line-clamp-2">
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
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="default"
              className="bg-marafone-red hover:bg-marafone-red/90 text-white font-game font-bold px-6 py-3"
              asChild
            >
              <Link to="/blog">
                Vedi Tutti gli Articoli
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default BlogSection;
