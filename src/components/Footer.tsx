import {
  Smartphone,
  Mail,
  Shield,
  HelpCircle,
  Globe,
  BookOpenText,
  FileBadge2,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";
import { carteImages } from "@/lib/carteImages";

const Footer = () => {
  return (
    <footer className="relative bg-marafone-dark text-white py-16 px-4 overflow-hidden">
      {/* Carte decorative animate */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {carteImages.slice(26, 32).map((src, i) => {
          const positions = [
            {
              top: "10%",
              left: "8%",
              rotate: "-8deg",
              size: 38,
              anim: "animate-float",
            },
            {
              top: "18%",
              right: "10%",
              rotate: "10deg",
              size: 44,
              anim: "animate-bounce-gentle",
            },
            {
              bottom: "15%",
              left: "15%",
              rotate: "6deg",
              size: 36,
              anim: "animate-float-slow",
            },
            {
              bottom: "8%",
              right: "12%",
              rotate: "-12deg",
              size: 50,
              anim: "animate-bounce-gentle",
            },
            {
              top: "60%",
              left: "30%",
              rotate: "4deg",
              size: 42,
              anim: "animate-float",
            },
            {
              bottom: "30%",
              right: "25%",
              rotate: "-6deg",
              size: 40,
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
                opacity: 0.5,
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <h3 className="font-retro text-2xl text-marafone-yellow mb-4">
              Marafone Romagnolo
            </h3>
            <p className="font-game opacity-80 mb-6 max-w-md">
              Il gioco di carte tradizionale della Romagna, rivisitato per l'era
              digitale. Porta con te l'atmosfera autentica dei bar romagnoli!
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="/img/playstore.png"
                  alt="Scarica su Google Play Store"
                  className="h-16 w-auto drop-shadow-lg"
                />
              </a>
              <div className="opacity-50 cursor-not-allowed">
                <img
                  src="/img/appstore.png"
                  alt="Presto su App Store"
                  className="h-16 w-auto drop-shadow-lg grayscale"
                />
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-game font-bold text-lg mb-4">Link Utili</h4>
            <ul className="font-game space-y-2 opacity-80">
              <li>
                <Link
                  to="/regole"
                  className="hover:text-marafone-yellow cursor-pointer transition-colors"
                >
                  <BookOpenText className="inline h-4 w-4 mr-2" />
                  Regole del Gioco
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-marafone-yellow cursor-pointer transition-colors flex items-center"
                >
                  <Shield className="inline h-4 w-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/termini-utilizzo"
                  className="hover:text-marafone-yellow cursor-pointer transition-colors flex items-center"
                >
                  <FileBadge2 className="inline h-4 w-4 mr-2" />
                  Termini d'Utilizzo
                </Link>
              </li>
              <li>
                <Link
                  to="/supporto"
                  className="hover:text-marafone-yellow cursor-pointer transition-colors flex items-center"
                >
                  <HelpCircle className="inline h-4 w-4 mr-2" />
                  Supporto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-game font-bold text-lg mb-4">Contatti</h4>
            <div className="font-game space-y-2 opacity-80">
              <a
                href="mailto:marafoneromagnolo@gmail.com"
                className="hover:text-marafone-yellow transition-colors flex items-center"
              >
                <Mail className="inline h-4 w-4 mr-2" />
                marafoneromagnolo@gmail.com
              </a>
              <a
                href="https://www.facebook.com/people/Marafone-romagnolo/61579215599753/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-marafone-yellow transition-colors flex items-center"
              >
                <Facebook className="inline h-4 w-4 mr-2" />
                Segui su Facebook
              </a>
              <a
                href="https://www.eliazavatta.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-marafone-yellow transition-colors flex items-center"
              >
                <Globe className="inline h-4 w-4 mr-2" />
                eliazavatta.it
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="font-game opacity-60">
            © 2025 Marafone Romagnolo. Tutti i diritti riservati.
          </p>
          <p className="font-game opacity-60 mt-2 text-sm">
            Made in Romagna by Elia Zavatta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
