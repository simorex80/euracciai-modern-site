# EURACCIAI Modern Site

Sito web Node.js/Express con template EJS, costruito a partire da contenuti pubblici di `euracciai.it` e con layout moderno responsive.

## Requisiti

- Node.js `>= 18`
- npm (incluso con Node.js)

## Installazione

```bash
npm install
```

## Avvio

- Produzione locale:

```bash
npm start
```

- Sviluppo (con reload automatico):

```bash
npm run dev
```

Il server parte su `http://localhost:3000` (oppure sulla porta definita da `PORT`).

## Stack Tecnologico

- `express`: server HTTP e routing
- `ejs`: rendering lato server delle viste
- `helmet`: hardening header HTTP
- `nodemon` (dev): riavvio automatico in sviluppo

## Struttura Progetto

```text
euracciai-modern-site/
  public/
    css/styles.css
    js/main.js
    img/*.png
  views/
    partials/
      head.ejs
      header.ejs
      footer.ejs
    pages/
      home.ejs
      company.ejs
      divisions.ejs
      division-detail.ejs
      applications.ejs
      partners.ejs
      contact.ejs
      404.ejs
  site-data.js
  build-static.js
  server.js
  package.json
```

## Rotte Disponibili

- `GET /` - Home
- `GET /azienda` - Pagina azienda
- `GET /divisioni` - Elenco divisioni
- `GET /divisioni/:id` - Dettaglio divisione (`mdu`, `macsi`, `divmac`)
- `GET /applicazioni` - Applicazioni
- `GET /partners` - Partners
- `GET /contatti` - Contatti
- `POST /contatti` - Render pagina contatti con stato invio (`sent: true`)
- Fallback 404 su qualsiasi rotta non gestita

## Configurazione

Variabili ambiente supportate:

- `PORT`: porta del server (default `3000`)

Esempio (PowerShell):

```powershell
$env:PORT=8080
npm start
```

## Contenuti Dati

I dati principali (anagrafica aziendale, divisioni, applicazioni, partners) sono definiti in `site-data.js`:

- `site`
- `company`
- `divisions`
- `applications`
- `partners`

Per aggiornare testi/contatti/prodotti è sufficiente modificare questi oggetti.

## Frontend

- CSS unico in `public/css/styles.css`
- Effetti reveal on-scroll in `public/js/main.js` tramite `IntersectionObserver`
- Asset grafici PNG in `public/img`

## Build Statica

Per pubblicare su un server statico:

```bash
npm run build:static
```

Viene generata la cartella `dist/` con:

- HTML prerenderizzato per tutte le rotte
- `dist/public` con CSS, JS e immagini
- `dist/404.html` per fallback not found

Pubblica direttamente il contenuto di `dist/`.

## Sicurezza e Note Tecniche

- `helmet` è attivo.
- Al momento la Content Security Policy è disabilitata (`contentSecurityPolicy: false`).
- `POST /contatti` non invia email e non persiste dati: mostra soltanto la pagina con stato di invio.

## Miglioramenti Consigliati

- Abilitare una CSP esplicita compatibile con font/CDN usati.
- Implementare invio reale del form contatti (SMTP/API) con validazione server-side.
- Aggiungere test automatici (unit/integration) e script `npm test`.
- Completare contenuti pagina partners.

## Deploy

- Hosting Node.js dinamico: usa `npm start`
- Hosting statico (Netlify, Vercel static, GitHub Pages, Nginx, Apache): usa `npm run build:static` e carica `dist/`

## Licenza

Nessuna licenza specificata nel repository.
