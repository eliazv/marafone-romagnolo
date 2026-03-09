import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-element";
import { motion } from "framer-motion";

const OtherAppsSection = () => {
  const apps = [
    {
      name: "Sette e Mezzo",
      description:
        "Gioca al classico gioco di carte italiano online. Sfida la fortuna e arriva a 7.5!",
      link: "https://settemezzo.eliazavatta.it/",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ac/81/47/ac8147ec-b495-8f4f-1b49-c69906b18317/Placeholder.mill/400x400bb-75.webp",
    },
    {
      name: "Segnapunti Carte Italiane",
      description:
        "L'app definitiva per segnare i punti dei tuoi giochi di carte preferiti, inclusa la Maraffa.",
      link: "https://apps.apple.com/it/app/segnapunti-carte-italiane/id6757228737",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/79/17/81/7917817e-f00c-c5cb-e004-7fffcba743a2/Placeholder.mill/400x400bb-75.webp",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-marafone-beige/20 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10 max-w-6xl">
        <FadeInUp delay={0.2}>
          <h2 className="font-retro text-3xl md:text-4xl text-marafone-dark mb-6">
            Altre App
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.35}>
          <p className="font-game text-base mb-10 max-w-2xl mx-auto text-marafone-dark/70">
            Prova queste utility e giochi che completano l'esperienza del
            Marafone Romagnolo
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {apps.map((app, index) => (
            <StaggerItem key={app.name}>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className="h-full cursor-pointer"
              >
                <Card className="h-full bg-white/90 backdrop-blur-sm border-2 border-marafone-yellow/30 hover:border-marafone-red/50 transition-all duration-300 shadow-lg hover:shadow-xl text-left rounded-[32px] overflow-hidden">
                  <CardHeader className="pb-3 pt-6 px-6">
                    <div className="flex items-start gap-4 mb-2">
                      <img
                        src={app.logo}
                        alt={app.name}
                        className="w-20 h-20 object-contain drop-shadow-lg flex-shrink-0 rounded-2xl"
                      />
                      <div className="flex-1">
                        <CardTitle className="font-retro text-base text-marafone-dark line-clamp-2 text-left leading-snug">
                          {app.name}
                        </CardTitle>
                        <CardDescription className="font-game text-sm text-marafone-dark/70 line-clamp-3 text-left mt-2 leading-relaxed">
                          {app.description}
                        </CardDescription>
                        <div className="mt-4">
                          <Button
                            size="sm"
                            asChild
                            className="bg-marafone-red text-white font-game font-bold px-4 py-2 rounded-full shadow-sm hover:bg-marafone-red/90"
                          >
                            <a
                              href={app.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              Prova ora <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default OtherAppsSection;
