// src/pages/PrivacyPolicy.tsx o .jsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-marafone-beige text-marafone-dark py-4 px-4">
    <div className="mb-1">
      <Link to="/">
        <Button
          variant="ghost"
          className="text-marafone-dark hover:bg-marafone-yellow/20 mb-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Torna indietro
        </Button>
      </Link>
    </div>
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border-2 border-marafone-yellow">
      <h1 className="font-retro text-3xl text-marafone-red mb-2">
        Privacy Policy - Maraffa Romagnola
      </h1>
      <div className="font-game text-base opacity-70 mb-6">
        Versione: 2.0
        <br />
        Data di entrata in vigore: 11 giugno 2025
        <br />
        Ultimo aggiornamento: 11 giugno 2025
      </div>

      <h2 className="font-game font-bold text-xl mt-6 mb-2">1. Introduzione</h2>
      <p className="font-game mb-4">
        Benvenuti in Maraffa Romagnola. La vostra privacy è importante per noi.
        Questa Privacy Policy descrive come raccogliamo, utilizziamo e
        proteggiamo i vostri dati personali quando utilizzate la nostra app
        mobile disponibile su Android e iOS.
      </p>

      <h2 className="font-game font-bold text-xl mt-6 mb-2">
        2. Dati Raccolti
      </h2>
      <ul className="list-disc ml-6 mb-2">
        <li>
          <strong>Autenticazione Google:</strong> Email, nome e ID utente.
        </li>
        <li>
          <strong>Profilo utente:</strong> Nome visualizzato, avatar, livello,
          XP, partite giocate/vinte.
        </li>
        <li>
          <strong>Dati sociali:</strong> Lista amici, richieste di amicizia,
          classifiche globali.
        </li>
        <li>
          <strong>Preferenze personalizzazione:</strong> Scelte estetiche
          (avatar, retro carte).
        </li>
        <li>
          <strong>Dati tecnici:</strong> ID dispositivo (per prevenire abusi),
          dati di gioco anonimi.
        </li>
      </ul>

      <h2 className="font-game font-bold text-xl mt-6 mb-2">
        3. Finalità del Trattamento
      </h2>
      <ul className="list-disc ml-6 mb-2">
        <li>Gestione account e accesso tramite Google</li>
        <li>Salvataggio e sincronizzazione del profilo utente</li>
        <li>Visualizzazione statistiche e classifiche</li>
        <li>Funzionalità sociali (aggiunta amici, sfide, chat futura)</li>
        <li>Personalizzazione grafica</li>
      </ul>

      <h2 className="font-game font-bold text-xl mt-6 mb-2">
        4. Dove vengono salvati i dati
      </h2>
      <p className="font-game mb-2">
        I dati sono archiviati in cloud attraverso <strong>Supabase</strong>, un
        servizio sicuro e compatibile con GDPR, e una parte viene salvata nel
        dispositivo localmente (per performance e uso offline).
      </p>

      <h2 className="font-game font-bold text-xl mt-6 mb-2">5. Sicurezza</h2>
      <ul className="list-disc ml-6 mb-2">
        <li>I dati vengono trasmessi in modo cifrato (HTTPS)</li>
        <li>Accesso controllato tramite token di sessione</li>
        <li>
          Supabase utilizza sistemi di sicurezza compatibili con ISO/IEC 27001
        </li>
      </ul>

      <h2 className="font-game font-bold text-xl mt-6 mb-2">
        6. Condivisione delle Informazioni
      </h2>
      <p className="font-game mb-2">
        I dati NON vengono condivisi con terze parti per scopi commerciali.
        Alcuni dati visibili pubblicamente (es. nickname, livello, vittorie)
        sono mostrati nelle classifiche e nelle sfide tra amici.
      </p>

      <h2 className="font-game font-bold text-xl mt-6 mb-2">
        7. Diritti dell'Utente
      </h2>
      <ul className="list-disc ml-6 mb-2">
        <li>Richiedere modifica o cancellazione del proprio profilo</li>
        <li>Visualizzare i propri dati personali</li>
        <li>Revocare l’accesso Google</li>
        <li>Richiedere la cancellazione dell’account tramite email</li>
      </ul>

      <h2 className="font-game font-bold text-xl mt-6 mb-2">8. Età Minima</h2>
      <p className="font-game mb-2">
        L'app non è pensata per bambini sotto i 13 anni. L'autenticazione Google
        può richiedere un’età minima di 16 anni in alcuni paesi europei secondo
        GDPR.
      </p>

      <h2 className="font-game font-bold text-xl mt-6 mb-2">
        9. Permessi e Accessi Richiesti
      </h2>
      <ul className="list-disc ml-6 mb-2">
        <li>Accesso a Internet: per funzionalità online</li>
        <li>Archiviazione locale: per salvare progressi e preferenze</li>
        <li>Google Login: per l’autenticazione sicura</li>
      </ul>

      <h2 className="font-game font-bold text-xl mt-6 mb-2">
        10. Modifiche a questa Privacy Policy
      </h2>
      <p className="font-game mb-2">
        Questa Privacy Policy potrà essere aggiornata in futuro. Notificheremo
        gli utenti direttamente nell'app ogni volta che verrà modificata in modo
        sostanziale.
      </p>

      <h2 className="font-game font-bold text-xl mt-6 mb-2">11. Contatti</h2>
      <p className="font-game mb-2">
        Per qualsiasi domanda, modifica o cancellazione dei dati:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Email: zavattaelia@gmail.com</li>
      </ul>

      <hr className="my-8 border-marafone-yellow/40" />
      <div className="font-game text-sm opacity-70">
        Ultimo aggiornamento: 11 giugno 2025
        <br />
        Versione app: 2.0
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
