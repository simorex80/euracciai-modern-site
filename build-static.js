const fs = require('fs/promises');
const path = require('path');
const ejs = require('ejs');
const { divisions, render } = require('./site-data');

const ROOT = __dirname;
const VIEWS_DIR = path.join(ROOT, 'views');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DIST_DIR = path.join(ROOT, 'dist');

const baseRoutes = [
  { urlPath: '/', template: 'pages/home', page: 'home' },
  { urlPath: '/azienda', template: 'pages/company', page: 'azienda' },
  { urlPath: '/divisioni', template: 'pages/divisions', page: 'divisioni' },
  { urlPath: '/applicazioni', template: 'pages/applications', page: 'applicazioni' },
  { urlPath: '/partners', template: 'pages/partners', page: 'partners' },
  { urlPath: '/contatti', template: 'pages/contact', page: 'contatti' }
];

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function writeHtml(urlPath, html) {
  const normalized = urlPath === '/' ? '' : urlPath.replace(/^\//, '');
  const outDir = path.join(DIST_DIR, normalized);
  await ensureDir(outDir);
  await fs.writeFile(path.join(outDir, 'index.html'), html, 'utf8');
}

async function renderPage(template, data) {
  const templatePath = path.join(VIEWS_DIR, `${template}.ejs`);
  return ejs.renderFile(templatePath, data, { views: [VIEWS_DIR] });
}

async function buildStatic() {
  await fs.rm(DIST_DIR, { recursive: true, force: true });
  await ensureDir(DIST_DIR);
  const publicEntries = await fs.readdir(PUBLIC_DIR);
  for (const entry of publicEntries) {
    await fs.cp(path.join(PUBLIC_DIR, entry), path.join(DIST_DIR, entry), { recursive: true });
  }

  for (const route of baseRoutes) {
    const html = await renderPage(route.template, render(route.page));
    await writeHtml(route.urlPath, html);
  }

  for (const division of divisions) {
    const html = await renderPage('pages/division-detail', render('divisioni', { division }));
    await writeHtml(`/divisioni/${division.id}`, html);
  }

  const notFound = await renderPage('pages/404', render('404'));
  await fs.writeFile(path.join(DIST_DIR, '404.html'), notFound, 'utf8');
}

buildStatic()
  .then(() => {
    console.log('Static build completed in ./dist');
  })
  .catch((error) => {
    console.error('Static build failed:', error);
    process.exitCode = 1;
  });
