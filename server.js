const express = require('express');
const helmet = require('helmet');
const path = require('path');
const { divisions, render, routeMap } = require('./site-data');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

function registerLocaleRoutes(locale) {
  const r = routeMap[locale];
  const prefix = `/${locale}`;

  app.get(prefix, (req, res) => res.render('pages/home', render(locale, 'home', { pathKey: 'home', currentPath: req.path })));
  app.get(`${prefix}/${r.azienda}`, (req, res) => res.render('pages/company', render(locale, 'azienda', { pathKey: 'azienda', currentPath: req.path })));
  app.get(`${prefix}/${r.divisioni}`, (req, res) => res.render('pages/divisions', render(locale, 'divisioni', { pathKey: 'divisioni', currentPath: req.path })));
  app.get(`${prefix}/${r.divisioni}/:id`, (req, res) => {
    const division = divisions.find((item) => item.id === req.params.id);
    if (!division) return res.status(404).render('pages/404', render(locale, '404', { pathKey: 'home', currentPath: req.path }));
    return res.render('pages/division-detail', render(locale, 'divisioni', { division, pathKey: 'divisioni', pathParams: { id: division.id }, currentPath: req.path }));
  });
  app.get(`${prefix}/${r.applicazioni}`, (req, res) => res.render('pages/applications', render(locale, 'applicazioni', { pathKey: 'applicazioni', currentPath: req.path })));
  app.get(`${prefix}/${r.partners}`, (req, res) => res.render('pages/partners', render(locale, 'partners', { pathKey: 'partners', currentPath: req.path })));
  app.get(`${prefix}/${r.contatti}`, (req, res) => res.render('pages/contact', render(locale, 'contatti', { pathKey: 'contatti', currentPath: req.path })));
  app.post(`${prefix}/${r.contatti}`, (req, res) => res.render('pages/contact', render(locale, 'contatti', { sent: true, pathKey: 'contatti', currentPath: req.path })));
}

registerLocaleRoutes('it');
registerLocaleRoutes('en');

app.get('/', (req, res) => res.redirect('/it'));
app.use((req, res) => res.status(404).render('pages/404', render('it', '404', { pathKey: 'home', currentPath: req.path })));

app.listen(PORT, () => {
  console.log(`EURACCIAI site running on http://localhost:${PORT}`);
});
