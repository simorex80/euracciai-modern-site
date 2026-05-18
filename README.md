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
    img/*.svg
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

I dati principali (anagrafica aziendale, divisioni, applicazioni) sono definiti direttamente in `server.js`:

- `site`
- `company`
- `divisions`
- `applications`

Per aggiornare testi/contatti/prodotti è sufficiente modificare questi oggetti.

## Frontend

- CSS unico in `public/css/styles.css`
- Effetti reveal on-scroll in `public/js/main.js` tramite `IntersectionObserver`
- Asset grafici SVG in `public/img`

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

Il progetto è deployabile su qualsiasi piattaforma Node.js (VM, container, PaaS).

Comando di start in produzione:

```bash
npm start
```

Assicurarsi di configurare:

- `NODE_ENV=production`
- `PORT` secondo ambiente

## Licenza

Nessuna licenza specificata nel repository.
