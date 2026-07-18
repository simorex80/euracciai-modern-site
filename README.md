# EURACCIAI Modern Site

Sito corporate bilingue (`it` / `en`) realizzato con Express, EJS e TypeScript. Può essere eseguito come server Node.js oppure esportato integralmente come sito statico, con link relativi compatibili con GitHub Pages e hosting in sottocartella.

## Requisiti

- Node.js `>= 24`
- npm (incluso con Node.js)

## Installazione

```bash
npm ci
```

## Avvio

- Compilazione e avvio del server:

```bash
npm run build
npm start
```

- Sviluppo (con reload automatico):

```bash
npm run dev
```

Il server parte su `http://localhost:3000` (oppure sulla porta definita da `PORT`).

## Comandi

| Comando | Scopo |
| --- | --- |
| `npm run dev` | Server di sviluppo con reload automatico |
| `npm run typecheck` | Controllo TypeScript strict senza generare file |
| `npm run build` | Compilazione in `build/` |
| `npm start` | Avvio del server compilato |
| `npm run build:static` | Generazione completa di `dist/` |
| `npm run check:static` | Verifica pagine, locale, link e asset dell’export esistente |
| `npm run check` | QA completo: tipi, export statico e validazione |

## Struttura Progetto

```text
euracciai-modern-site/
  public/
    css/styles.css
    js/main.js
    js/normalize-path.js
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
  scripts/check-static-build.js
  server.ts
  tsconfig.json
  package.json
```

## Rotte Disponibili

- `GET /` - Redirect a `/it`
- Italiano: `/it`, `/it/azienda`, `/it/prodotti`, `/it/prodotti/:id`, `/it/divisioni`, `/it/divisioni/:id`, `/it/partners`, `/it/contatti`
- Inglese: `/en`, `/en/company`, `/en/products`, `/en/products/:id`, `/en/divisions`, `/en/divisions/:id`, `/en/partners`, `/en/contact`

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

Per generare e verificare ciò che verrà pubblicato:

```bash
npm run check
```

Viene generata la cartella `dist/` con:

- HTML prerenderizzato per tutte le rotte IT/EN
- `dist/it/...` e `dist/en/...`
- asset statici in `dist/css`, `dist/js`, `dist/img`
- `dist/index.html` (redirect) e `dist/404.html`

Pubblica direttamente il contenuto di `dist/`. La cartella è generata e non deve essere modificata o versionata.

## Sicurezza e Note Tecniche

- `helmet` applica gli header di sicurezza, inclusa una Content Security Policy senza script inline nel rendering dinamico.
- Gli asset dinamici usano ETag e cache browser di un’ora.
- Il frontend non dipende da font o script di terze parti.
- La pagina contatti espone recapiti e link `mailto:`; non esiste un form di invio o persistenza dati.
- TypeScript usa modalità `strict` e `noUncheckedIndexedAccess`.
- Il target TypeScript è `ES2024`, coerente con il requisito minimo Node.js 24.

## Aggiornamento Dipendenze

Prima di un aggiornamento, controllare versioni e vulnerabilità:

```bash
npm outdated
npm audit
```

Dopo l’aggiornamento rigenerare `package-lock.json` e lanciare `npm run check`. Gli aggiornamenti major di Express/EJS/Helmet/TypeScript vanno sempre validati sia in modalità dinamica sia statica.

## Deploy

- Hosting Node.js dinamico: usa `npm start`
- Hosting statico (GitHub Pages, Netlify, Nginx, Apache): usa `npm run check` e pubblica `dist/`
- GitHub Pages: il workflow in `.github/workflows/deploy-pages.yml` installa con `npm ci`, esegue il QA completo e pubblica l’artefatto

## Licenza

Nessuna licenza specificata nel repository.
