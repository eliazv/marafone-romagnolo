import { Smartphone, Apple, Mail, Shield, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-marafone-dark text-white py-16 px-4">
      <div className="container mx-auto">
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
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="ml-2 font-game font-semibold">Play Store</span>
              </a>
              <div className="bg-gray-600 p-3 rounded-lg opacity-50 flex items-center">
                <Apple className="h-6 w-6" />
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
                  📖 Regole del Gioco
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
              <p>👨‍💻 Sviluppatore: Elia Zavatta</p>
              <p>📧 zavattaelia@gmail.com</p>
              <p>🌐 www.eliazavatta.it</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="font-game opacity-60">
            © 2025 Marafone Romagnolo. Tutti i diritti riservati.
          </p>
          <p className="font-game opacity-60 mt-2 text-sm">
            Made with ❤️ in Romagna by Elia Zavatta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
