import fs from 'fs/promises';
import path from 'path';
import ejs from 'ejs';
import { divisions, getProducts, render, routeMap } from './site-data';

const ROOT = process.cwd();
const VIEWS_DIR = path.join(ROOT, 'views');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DIST_DIR = path.join(ROOT, 'dist');
const LOCALES = ['it', 'en'] as const;
type Locale = (typeof LOCALES)[number];

async function ensureDir(dirPath: string) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function writeHtml(filePath: string, html: string) {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, html, 'utf8');
}

async function renderPage(template: string, data: unknown) {
  const templatePath = path.join(VIEWS_DIR, `${template}.ejs`);
  return ejs.renderFile(templatePath, data, { views: [VIEWS_DIR] });
}

async function copyPublicToDist() {
  const entries = await fs.readdir(PUBLIC_DIR);
  for (const entry of entries) {
    await fs.cp(path.join(PUBLIC_DIR, entry), path.join(DIST_DIR, entry), { recursive: true });
  }
}

function localeRoutes(locale: Locale) {
  const r = routeMap[locale];
  return [
    { relPath: `${locale}/index.html`, template: 'pages/home', page: 'home', pathKey: 'home', currentPath: `/${locale}` },
    { relPath: `${locale}/${r.azienda}/index.html`, template: 'pages/company', page: 'azienda', pathKey: 'azienda', currentPath: `/${locale}/${r.azienda}` },
    { relPath: `${locale}/${r.prodotti}/index.html`, template: 'pages/products', page: 'prodotti', pathKey: 'prodotti', currentPath: `/${locale}/${r.prodotti}` },
    { relPath: `${locale}/${r.divisioni}/index.html`, template: 'pages/divisions', page: 'divisioni', pathKey: 'divisioni', currentPath: `/${locale}/${r.divisioni}` },
    { relPath: `${locale}/${r.partners}/index.html`, template: 'pages/partners', page: 'partners', pathKey: 'partners', currentPath: `/${locale}/${r.partners}` },
    { relPath: `${locale}/${r.contatti}/index.html`, template: 'pages/contact', page: 'contatti', pathKey: 'contatti', currentPath: `/${locale}/${r.contatti}` }
  ];
}

async function buildStatic() {
  await fs.rm(DIST_DIR, { recursive: true, force: true });
  await ensureDir(DIST_DIR);
  await copyPublicToDist();

  for (const locale of LOCALES) {
    for (const route of localeRoutes(locale)) {
      const html = await renderPage(route.template, render(locale, route.page, { pathKey: route.pathKey, currentPath: route.currentPath, staticMode: true }));
      await writeHtml(path.join(DIST_DIR, route.relPath), html);
    }

    const divisionSlug = routeMap[locale].divisioni;
    for (const division of divisions) {
      const html = await renderPage(
        'pages/division-detail',
        render(locale, 'divisioni', { division, pathKey: 'divisioni', pathParams: { id: division.id }, currentPath: `/${locale}/${divisionSlug}/${division.id}`, staticMode: true })
      );
      await writeHtml(path.join(DIST_DIR, locale, divisionSlug, division.id, 'index.html'), html);
    }

    const productsSlug = routeMap[locale].prodotti;
    for (const product of getProducts(locale)) {
      const html = await renderPage(
        'pages/product-detail',
        render(locale, 'prodotti', { product, pathKey: 'prodotti', pathParams: { id: product.id }, currentPath: `/${locale}/${productsSlug}/${product.id}`, staticMode: true })
      );
      await writeHtml(path.join(DIST_DIR, locale, productsSlug, product.id, 'index.html'), html);
    }

    const notFound = await renderPage('pages/404', render(locale, '404', { pathKey: 'home', currentPath: `/${locale}/404`, staticMode: true }));
    await writeHtml(path.join(DIST_DIR, locale, '404.html'), notFound);
  }

  const rootIndex = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Redirect</title>
  <script>
    (function redirectToDefaultLocale() {
      var p = window.location.pathname;
      if (!p.endsWith('/')) {
        window.location.replace(p + '/' + window.location.search + window.location.hash);
        return;
      }
      window.location.replace(p + 'it/' + window.location.search + window.location.hash);
    })();
  </script>
</head>
<body></body>
</html>`;
  await writeHtml(path.join(DIST_DIR, 'index.html'), rootIndex);
  await writeHtml(path.join(DIST_DIR, '404.html'), await renderPage('pages/404', render('it', '404', { pathKey: 'home', currentPath: '/', staticMode: true })));
}

buildStatic()
  .then(() => console.log('Static i18n build completed in ./dist'))
  .catch((error) => {
    console.error('Static build failed:', error);
    process.exitCode = 1;
  });
