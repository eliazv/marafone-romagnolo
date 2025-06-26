
import { Smartphone, Apple, Mail, Shield, HelpCircle } from "lucide-react";

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
              Il gioco di carte tradizionale della Romagna, 
              rivisitato per l'era digitale. Porta con te 
              l'atmosfera autentica dei bar romagnoli!
            </p>
            <div className="flex gap-4">
              <div className="bg-marafone-red p-3 rounded-lg">
                <Smartphone className="h-6 w-6" />
              </div>
              <div className="bg-gray-600 p-3 rounded-lg opacity-50">
                <Apple className="h-6 w-6" />
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-game font-bold text-lg mb-4">Link Utili</h4>
            <ul className="font-game space-y-2 opacity-80">
              <li className="hover:text-marafone-yellow cursor-pointer transition-colors">
                <Shield className="inline h-4 w-4 mr-2" />
                Privacy Policy
              </li>
              <li className="hover:text-marafone-yellow cursor-pointer transition-colors">
                <HelpCircle className="inline h-4 w-4 mr-2" />
                Supporto
              </li>
              <li className="hover:text-marafone-yellow cursor-pointer transition-colors">
                <Mail className="inline h-4 w-4 mr-2" />
                Contatti
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="font-game font-bold text-lg mb-4">Contattaci</h4>
            <div className="font-game space-y-2 opacity-80">
              <p>📧 info@marafone.it</p>
              <p>🌐 www.marafone.it</p>
              <p>📱 Seguici sui social</p>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="font-game opacity-60">
            © 2024 Marafone Romagnolo. Tutti i diritti riservati.
          </p>
          <p className="font-game opacity-60 mt-2 text-sm">
            Made with ❤️ in Romagna
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
