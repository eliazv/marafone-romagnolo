import {
  Mail,
  Shield,
  HelpCircle,
  Globe,
  BookOpenText,
  FileBadge2,
  Facebook,
  Instagram,
  Users,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { carteImages } from "@/lib/carteImages";
import QRCode from "react-qr-code";

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
      <div className="container mx-auto relative z-10 px-2 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <h3 className="font-retro text-2xl text-marafone-yellow mb-4">
              Marafone Romagnolo
            </h3>
            <p className="font-game opacity-80 max-w-md">
              Il gioco di carte tradizionale della Romagna, rivisitato per
              l&apos;era digitale. Porta con te l&apos;atmosfera autentica dei
              bar romagnoli!
            </p>
          </div>

          {/* Social and Invitation */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="font-game font-bold text-lg mb-4 flex items-center text-marafone-yellow">
                <Share2 className="mr-2 h-5 w-5" />I Nostri link
              </h4>
              <div className="flex gap-3 flex-wrap items-center">
                <a
                  href="https://www.facebook.com/people/Marafone-romagnolo/61579215599753/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-marafone-yellow hover:text-marafone-dark p-3 rounded-full transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/marafoneromagnolo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-marafone-yellow hover:text-marafone-dark p-3 rounded-full transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                {/* Separatore */}
                <div className="w-px h-8 bg-white/20 mx-1" />
                {/* App Store */}
                <a
                  href="https://apps.apple.com/us/app/marafone-beccaccino-romagnolo/id6749573579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-marafone-yellow hover:text-marafone-dark p-3 rounded-full transition-all duration-300 group"
                  aria-label="App Store"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 group-hover:scale-110 transition-transform"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </a>
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-marafone-yellow hover:text-marafone-dark p-3 rounded-full transition-all duration-300 group"
                  aria-label="Google Play"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 group-hover:scale-110 transition-transform"
                  >
                    <path d="M3.18 23.76c.3.18.67.2 1.02.02l12.5-7.22-2.88-2.88-10.64 10.08zM.5 1.5C.19 1.87 0 2.43 0 3.14v17.72c0 .71.19 1.27.5 1.64l.1.1 9.92-9.92v-.23L.6 2.5.5 1.5zm20.04 10.97-2.8-1.62-3.05 3.05 3.05 3.05 2.82-1.63c.8-.46.8-1.22-.02-1.85zm-17.36 9.29L14.72 12l-2.88-2.88L2.18 19.7c.33.35.8.4 1 .06z" />
                  </svg>
                </a>
              </div>
              <p className="font-game text-sm opacity-60 mt-4">
                Seguici per aggiornamenti, tornei e curiosità dal mondo del
                Marafone.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="font-game font-bold text-lg mb-4 flex items-center text-marafone-yellow">
                <Users className="mr-2 h-5 w-5" />
                Invita gli Amici
              </h4>
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-lg shrink-0">
                  <QRCode
                    value="https://www.marafone-romagnolo.it"
                    size={64}
                    level="L"
                  />
                </div>
                <div className="font-game text-sm opacity-80">
                  Inquadra il codice per condividere il gioco con i tuoi amici!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 border-t border-white/10 pt-12">
          {/* Quick links */}
          <div>
            <h4 className="font-game font-bold text-lg mb-4 text-marafone-yellow">
              Giochi e Regole
            </h4>
            <ul className="font-game space-y-2 opacity-80">
              <li>
                <Link
                  to="/beccaccino"
                  className="hover:text-marafone-yellow transition-colors"
                >
                  Beccaccino Online
                </Link>
              </li>
              <li>
                <Link
                  to="/maraffa"
                  className="hover:text-marafone-yellow transition-colors"
                >
                  Maraffa Gioco
                </Link>
              </li>
              <li>
                <Link
                  to="/trionfo"
                  className="hover:text-marafone-yellow transition-colors"
                >
                  Trionfo Carte
                </Link>
              </li>
              <li>
                <Link
                  to="/regole"
                  className="hover:text-marafone-yellow cursor-pointer transition-colors mt-2 flex items-center"
                >
                  <BookOpenText className="inline h-4 w-4 mr-2" />
                  Regole Complete
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-game font-bold text-lg mb-4 text-marafone-yellow">
              Link Utili
            </h4>
            <ul className="font-game space-y-2 opacity-80">
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
                  Termini d&apos;Utilizzo
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
              <li>
                <Link
                  to="/blog"
                  className="hover:text-marafone-yellow cursor-pointer transition-colors flex items-center"
                >
                  <Globe className="inline h-4 w-4 mr-2" />
                  Blog e Novità
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-game font-bold text-lg mb-4 text-marafone-yellow">
              Contatti
            </h4>
            <div className="font-game space-y-2 opacity-80">
              <a
                href="mailto:marafoneromagnolo@gmail.com"
                className="hover:text-marafone-yellow transition-colors flex items-center"
              >
                <Mail className="inline h-4 w-4 mr-2" />
                marafoneromagnolo@gmail.com
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
            © 2026 Marafone Romagnolo. Tutti i diritti riservati.
          </p>
          <p className="font-game opacity-60 mt-2 text-sm">
            Made in Romagna by{" "}
            <a
              href="https://www.eliazavatta.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-marafone-yellow transition-colors underline underline-offset-4"
            >
              Elia Zavatta
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
