# Setup UGC Tornei — Google Sheet + Apps Script

## Stato attuale
- **Lettura Sheet** → funziona già (URL aggiornato nel codice)
- **Scrittura dal form** → manuale per ora (vedi sezione 3)
- **Apps Script** → da configurare per scrittura automatica

---

## 1. Struttura Google Sheet

Riga 1 (intestazioni, da mettere una volta sola):

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Nome | Città | Indirizzo | Giorno e Orario | Quota | Link Maps |

Ogni riga successiva = un locale/torneo che appare sul sito.

---

## 2. Pubblicare il Sheet come CSV (già fatto)

**File → Condividi → Pubblica sul web → Foglio 1 → CSV → Pubblica**

URL già configurato nel codice:
```
https://docs.google.com/spreadsheets/d/e/2PACX-1vShtN2obGjJXHqRjlC4WaSqdd5GV_FA4cHSHK6gsjp4LVlx1OBvuxrNAi1r9L5f1KRZBHcR3goUtCWe/pub?gid=0&single=true&output=csv
```

---

## 3. Modalità manuale (funziona ora)

Quando arriva una segnalazione:
1. Apri il Google Sheet
2. Aggiungi una riga con i dati del locale
3. Il sito la mostra al prossimo caricamento della pagina `/tornei`

Il form sul sito mostra errore silenzioso finché non configuri Apps Script — non rompe nulla.

---

## 4. Apps Script — scrittura automatica dal form

### 4a. Apri Apps Script dal Sheet
**Extensions → Apps Script**

### 4b. Incolla questo codice (cancella quello esistente)

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.nome      || "",
      data.citta     || "",
      data.indirizzo || "",
      data.giorno    || "",
      data.quota     || "",
      data.linkMaps  || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error" }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 4c. Deploy come Web App
1. **Deploy → New deployment**
2. Tipo: **Web App**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Clicca **Deploy**
6. Copia l'URL (`https://script.google.com/macros/s/AKfyc.../exec`)

### 4d. Aggiorna il codice

In `src/pages/Tournaments.tsx`, riga ~50:

```ts
const APPS_SCRIPT_URL = "INCOLLA_QUI_URL_APPS_SCRIPT";
```

---

## Flusso finale (con Apps Script attivo)

```
Utente compila form
  → fetch POST ad Apps Script
  → riga scritta nel Sheet
  → sito rilegge CSV dopo 3 secondi
  → card appare automaticamente
```

Nessun passaggio manuale.
