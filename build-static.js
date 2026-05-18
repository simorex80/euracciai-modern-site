const fs = require('fs/promises');
const path = require('path');
const ejs = require('ejs');
const { divisions, render, routeMap } = require('./site-data');

const ROOT = __dirname;
const VIEWS_DIR = path.join(ROOT, 'views');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DIST_DIR = path.join(ROOT, 'dist');
const LOCALES = ['it', 'en'];

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function writeHtml(filePath, html) {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, html, 'utf8');
}

async function renderPage(template, data) {
  const templatePath = path.join(VIEWS_DIR, `${template}.ejs`);
  return ejs.renderFile(templatePath, data, { views: [VIEWS_DIR] });
}

async function copyPublicToDist() {
  const entries = await fs.readdir(PUBLIC_DIR);
  for (const entry of entries) {
    await fs.cp(path.join(PUBLIC_DIR, entry), path.join(DIST_DIR, entry), { recursive: true });
  }
}

function localeRoutes(locale) {
  const r = routeMap[locale];
  return [
    { relPath: `${locale}/index.html`, template: 'pages/home', page: 'home', pathKey: 'home' },
    { relPath: `${locale}/${r.azienda}/index.html`, template: 'pages/company', page: 'azienda', pathKey: 'azienda' },
    { relPath: `${locale}/${r.divisioni}/index.html`, template: 'pages/divisions', page: 'divisioni', pathKey: 'divisioni' },
    { relPath: `${locale}/${r.applicazioni}/index.html`, template: 'pages/applications', page: 'applicazioni', pathKey: 'applicazioni' },
    { relPath: `${locale}/${r.partners}/index.html`, template: 'pages/partners', page: 'partners', pathKey: 'partners' },
    { relPath: `${locale}/${r.contatti}/index.html`, template: 'pages/contact', page: 'contatti', pathKey: 'contatti' }
  ];
}

async function buildStatic() {
  await fs.rm(DIST_DIR, { recursive: true, force: true });
  await ensureDir(DIST_DIR);
  await copyPublicToDist();

  for (const locale of LOCALES) {
    for (const route of localeRoutes(locale)) {
      const html = await renderPage(route.template, render(locale, route.page, { pathKey: route.pathKey }));
      await writeHtml(path.join(DIST_DIR, route.relPath), html);
    }

    const divisionSlug = routeMap[locale].divisioni;
    for (const division of divisions) {
      const html = await renderPage(
        'pages/division-detail',
        render(locale, 'divisioni', { division, pathKey: 'divisioni', pathParams: { id: division.id } })
      );
      await writeHtml(path.join(DIST_DIR, locale, divisionSlug, division.id, 'index.html'), html);
    }

    const notFound = await renderPage('pages/404', render(locale, '404', { pathKey: 'home' }));
    await writeHtml(path.join(DIST_DIR, locale, '404.html'), notFound);
  }

  const rootIndex = '<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=/it/"><title>Redirect</title></head><body></body></html>';
  await writeHtml(path.join(DIST_DIR, 'index.html'), rootIndex);
  await writeHtml(path.join(DIST_DIR, '404.html'), await renderPage('pages/404', render('it', '404', { pathKey: 'home' })));
}

buildStatic()
  .then(() => console.log('Static i18n build completed in ./dist'))
  .catch((error) => {
    console.error('Static build failed:', error);
    process.exitCode = 1;
  });
