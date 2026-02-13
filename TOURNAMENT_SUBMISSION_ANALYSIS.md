# Analisi Aggiunta Tornei Senza Database

Per implementare l'invio e l'aggiunta di tornei nel modo più rapido e sicuro senza utilizzare un database, ci sono tre approcci principali, ordinati dal più semplice al più strutturato.

## 1. Approccio "Direct Mail" (Implementato Attualmente)

**Come funziona:** Un pulsante `mailto:` apre il client email dell'utente con un oggetto e un corpo precompilati.

- **Pro:** Zero configurazione, zero costi, massima privacy.
- **Contro:** L'utente deve avere un client email configurato; l'inserimento nel sito rimane manuale (bisogna aggiornare `Tournaments.tsx` e fare il deploy).

## 2. Approccio "Serverless Form" (Consigliato per velocità)

**Come funziona:** Si usa un servizio come **Formspree**, **Netlify Forms** o **Getform**. Si crea un form HTML standard e si punta l'azione all'endpoint del servizio.

- **Configurazione (Velocissima):**
  1. Registrazione su [Formspree](https://formspree.io/).
  2. Sostituzione del pulsante "Proponi" con un piccolo `Dialog` (Shadcn UI) contenente il form.
  3. All'invio, ricevi un'email formattata con i dati del torneo.
- **Vantaggi:** Funziona per tutti gli utenti, professionale, filtri spam inclusi.
- **Costo:** Gratis fino a ~50 invii/mese.

## 3. Approccio "GitHub Automation" (Per evitare il database ma automatizzare l'aggiornamento)

**Come funziona:** Un form sul sito invia i dati a una **GitHub Action** tramite un webhook (o via Formspree -> Zapier -> GitHub).

- **Pro:** Può automatizzare la creazione di una Pull Request o l'aggiornamento di un file JSON nel repository, attivando il deploy automatico su Vercel.
- **Contro:** Più complesso da configurare inizialmente.

---

### Raccomandazione Tecnica Rapida

La soluzione migliore per il caso d'uso "Marafone Romagnolo" è l'**Approccio 2 (Serverless Form)**:

1. Sostituire il `mailto:` con un componente `Dialog` di Shadcn UI.
2. Usare **Formspree** per ricevere le notifiche.
3. Continuare ad aggiungere i tornei manualmente in `TOURNAMENTS` in `Tournaments.tsx` una volta verificati (questo garantisce il controllo della qualità dei contenuti).

### Esempio di implementazione rapida (Formspree):

```tsx
const [state, handleSubmit] = useForm("TUO_ID_FORMSPREE");
if (state.succeeded) {
  return <p>Grazie! Verificheremo il torneo a breve.</p>;
}
// ... Form con campi: Nome, Luogo, Data, Link...
```

Questo metodo permette di gestire le proposte senza overhead tecnico di un database, mantenendo il controllo editoriale.
