7. Linea guida 1.5 - Creare pagina di supporto sul sito web
   Analisi: Apple richiede che l'URL di supporto fornito in App Store Connect (https://www.marafone-romagnolo.it) indirizzi a una pagina web funzionale con informazioni di supporto.

Soluzione: Dato che non posso modificare direttamente il sito web, ti fornirò le istruzioni per creare una pagina di supporto semplice e conforme.

Ecco cosa dovresti aggiungere al tuo sito web:

Pagina di Supporto per https://www.marafone-romagnolo.it
Crea una pagina /supporto.html o /support.html con il seguente contenuto:

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supporto - Maraffa Romagnola</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #d97706;
            text-align: center;
            margin-bottom: 30px;
        }
        h2 {
            color: #92400e;
            border-bottom: 2px solid #fbbf24;
            padding-bottom: 5px;
        }
        .contact-info {
            background: #fef3c7;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .faq-item {
            margin-bottom: 20px;
            padding: 15px;
            background: #f9fafb;
            border-left: 4px solid #d97706;
            border-radius: 4px;
        }
        .faq-question {
            font-weight: bold;
            color: #92400e;
            margin-bottom: 8px;
        }
        .email-link {
            color: #d97706;
            text-decoration: none;
            font-weight: bold;
        }
        .email-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🃏 Supporto Maraffa Romagnola</h1>
        
        <div class="contact-info">
            <h2>📧 Contatti</h2>
            <p><strong>Email di supporto:</strong> <a href="mailto:marafoneromagnolo@gmail.com?subject=Supporto%20Maraffa%20Romagnola" class="email-link">marafoneromagnolo@gmail.com</a></p>
            <p><strong>Sviluppatore:</strong> Elia Zavatta</p>
            <p><strong>Tempo di risposta:</strong> Entro 48 ore</p>
        </div>

        <h2>❓ Domande Frequenti (FAQ)</h2>

        <div class="faq-item">
            <div class="faq-question">Come posso segnalare un bug o un problema?</div>
            <div>Invia un'email a marafoneromagnolo@gmail.com con una descrizione dettagliata del problema, includendo il modello del dispositivo e la versione dell'app.</div>
        </div>

        <div class="faq-item">
            <div class="faq-question">Come funziona il gioco della Maraffa?</div>
            <div>La Maraffa è un gioco di carte tradizionale romagnolo. Puoi consultare le regole complete direttamente nell'app nella sezione "Regole".</div>
        </div>

        <div class="faq-item">
            <div class="faq-question">Posso giocare offline?</div>
            <div>Sì! L'app funziona completamente offline. Le funzionalità online (multiplayer, classifiche) richiedono una connessione internet.</div>
        </div>

        <div class="faq-item">
            <div class="faq-question">Come posso eliminare il mio account?</div>
            <div>Puoi eliminare il tuo account direttamente dall'app: vai su Profilo > Impostazioni (icona ingranaggio) > Elimina Account.</div>
        </div>

        <div class="faq-item">
            <div class="faq-question">L'app è gratuita?</div>
            <div>Sì, l'app è completamente gratuita. Sono disponibili acquisti opzionali per rimuovere le pubblicità e supportare lo sviluppo.</div>
        </div>

        <div class="faq-item">
            <div class="faq-question">Su quali dispositivi funziona l'app?</div>
            <div>L'app è disponibile per iPhone, iPad e dispositivi Android. Richiede iOS 13.0+ o Android 7.0+.</div>
        </div>

        <h2>🔒 Privacy</h2>
        <p>Rispettiamo la tua privacy. L'app raccoglie solo i dati necessari per il funzionamento del gioco. Per maggiori informazioni, consulta la nostra <a href="/privacy-policy.html" class="email-link">Informativa sulla Privacy</a>.</p>

        <h2>📱 Download</h2>
        <p>Scarica l'app:</p>
        <ul>
            <li><strong>iOS:</strong> <a href="https://apps.apple.com/app/maraffa-romagnola" class="email-link">App Store</a></li>
            <li><strong>Android:</strong> <a href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa" class="email-link">Google Play Store</a></li>
        </ul>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="text-align: center; color: #6b7280; font-size: 14px;">
            © 2024 Elia Zavatta - Maraffa Romagnola<br>
            Preservando la tradizione romagnola nel mondo digitale
        </p>
    </div>

</body>
</html>
Istruzioni per l'implementazione:
Carica il file sul tuo server web come /supporto.html o /support.html
Aggiorna l'URL in App Store Connect da https://www.marafone-romagnolo.it a https://www.marafone-romagnolo.it/supporto.html
Testa il link per assicurarti che funzioni correttamente
