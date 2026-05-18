const express = require('express');
const helmet = require('helmet');
const path = require('path');
const { divisions, render } = require('./site-data');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('pages/home', render('home')));
app.get('/azienda', (req, res) => res.render('pages/company', render('azienda')));
app.get('/divisioni', (req, res) => res.render('pages/divisions', render('divisioni')));
app.get('/divisioni/:id', (req, res) => {
  const division = divisions.find((item) => item.id === req.params.id);
  if (!division) return res.status(404).render('pages/404', render('404'));
  return res.render('pages/division-detail', render('divisioni', { division }));
});
app.get('/applicazioni', (req, res) => res.render('pages/applications', render('applicazioni')));
app.get('/partners', (req, res) => res.render('pages/partners', render('partners')));
app.get('/contatti', (req, res) => res.render('pages/contact', render('contatti')));
app.post('/contatti', (req, res) => res.render('pages/contact', render('contatti', { sent: true })));

app.use((req, res) => res.status(404).render('pages/404', render('404')));

app.listen(PORT, () => {
  console.log(`EURACCIAI site running on http://localhost:${PORT}`);
});
