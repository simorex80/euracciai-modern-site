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
- `typescript`: tipizzazione e compilazione
- `tsx` (dev): avvio in sviluppo con reload automatico per file TypeScript

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
      products.ejs
      product-detail.ejs
      divisions.ejs
      division-detail.ejs
      partners.ejs
      contact.ejs
      404.ejs
  site-data.ts
  product-details.ts
  build-static.ts
  server.ts
  tsconfig.json
  package.json
```

## Rotte Disponibili

- `GET /` - Redirect a `/it`
- Italiano:
- `GET /it`
- `GET /it/azienda`
- `GET /it/prodotti`
- `GET /it/prodotti/:id`
- `GET /it/divisioni`
- `GET /it/divisioni/:id`
- `GET /it/partners`
- `GET /it/contatti`
- `POST /it/contatti`
- Inglese:
- `GET /en`
- `GET /en/company`
- `GET /en/products`
- `GET /en/products/:id`
- `GET /en/divisions`
- `GET /en/divisions/:id`
- `GET /en/partners`
- `GET /en/contact`
- `POST /en/contact`

## Configurazione

Variabili ambiente supportate:

- `PORT`: porta del server (default `3000`)

Esempio (PowerShell):

```powershell
$env:PORT=8080
npm start
```

## Contenuti Dati

I dati principali (anagrafica aziendale, divisioni, prodotti sintetici, partner e internazionalizzazione) sono definiti in `site-data.ts`:

- `site`
- `company`
- `divisions`
- `partners`
- `i18n`

Le schede prodotto complete, con testi lunghi e immagini importate dal sito originale, sono definite in `product-details.ts`.

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

- HTML prerenderizzato per tutte le rotte IT/EN
- `dist/it/...` e `dist/en/...`
- asset statici in `dist/css`, `dist/js`, `dist/img`
- `dist/index.html` (redirect) e `dist/404.html`

Pubblica direttamente il contenuto di `dist/`.

## Sicurezza e Note Tecniche

- `helmet` è attivo.
- Al momento la Content Security Policy è disabilitata (`contentSecurityPolicy: false`).
- `POST /contatti` non invia email e non persiste dati: mostra soltanto la pagina con stato di invio.

## Miglioramenti Consigliati

- Abilitare una CSP esplicita compatibile con font/CDN usati.
- Implementare invio reale del form contatti (SMTP/API) con validazione server-side.
- Aggiungere test automatici (unit/integration) e script `npm test`.

## Deploy

- Hosting Node.js dinamico: usa `npm start`
- Hosting statico (Netlify, Vercel static, GitHub Pages, Nginx, Apache): usa `npm run build:static` e carica `dist/`

## Licenza

Nessuna licenza specificata nel repository.
