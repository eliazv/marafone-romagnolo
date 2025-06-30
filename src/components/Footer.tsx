import {
  Smartphone,
  Mail,
  Shield,
  HelpCircle,
  Globe,
  BookOpenText,
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
                className="bg-marafone-red p-3 rounded-lg flex items-center hover:bg-marafone-yellow/80 transition-colors"
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="ml-2 font-game font-semibold">Play Store</span>
              </a>
              <div className="bg-gray-600 p-3 rounded-lg opacity-50 flex items-center">
                {/* Icona App Store stilizzata (SVG) */}
                <span className="h-8 w-8 inline-block align-middle">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="32"
                    height="32"
                  >
                    <path d="M17.564 13.06c-.02-2.14 1.75-3.16 1.83-3.21-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.07 8.56.71 1.03 1.56 2.18 2.68 2.14 1.08-.04 1.49-.69 2.8-.69 1.31 0 1.68.69 2.81.67 1.16-.02 1.89-1.05 2.59-2.08.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.28-3.45zm-2.68-6.3c.6-.73 1-1.75.89-2.77-.86.03-1.89.57-2.5 1.3-.55.65-1.04 1.7-.86 2.7.91.07 1.86-.52 2.47-1.23z" />
                  </svg>
                </span>
                <span className="ml-2 font-game font-semibold">App Store</span>
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
              <li className="hover:text-marafone-yellow cursor-pointer transition-colors">
                <HelpCircle className="inline h-4 w-4 mr-2" />
                Supporto
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-game font-bold text-lg mb-4">Contatti</h4>
            <div className="font-game space-y-2 opacity-80">
              <a
                href="mailto:zavattaelia@gmail.com"
                className="hover:text-marafone-yellow transition-colors flex items-center"
              >
                <Mail className="inline h-4 w-4 mr-2" />
                zavattaelia@gmail.com
              </a>
              <a
                href="https://www.eliazavatta.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-marafone-yellow transition-colors"
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
