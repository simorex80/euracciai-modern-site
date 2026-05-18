const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const site = {
  company: 'EURACCIAI SRL',
  payoff: 'Since 1958',
  phone: '+39 02 48 70 4428',
  phoneExtended: '+39 02 48 70 4428 r.a.',
  fax: '+39 02 48 70 8204',
  email: 'info@euracciai.it',
  address: 'Via Civitali 79 - 20148 Milano (Italy)',
  chamber: 'C.C.I.A.A. Milano 514303',
  capital: 'Capitale Sociale € 46.800',
  registry: 'Trib. Milano Reg. Soc. 102364, Vol. 2742, Fasc. 23',
  vat: 'Codice Fiscale/Partita Iva: 00817960156',
  directions: 'Metro M5 Lilla - Fermata san Siro ippodromo oppure in auto arrivando da qualunque autostrada, immettersi nella Tangenziale Ovest, da questa uscita S. SIRO - fieraminaloncity - CENTRO, percorrere via Novara - via Harar - via dei Rospigliosi. Superato lo STADIO, girare a destra in via Pessano, indi prima a sinistra via Matteo Civitali (angolo via Pessano), al 79 EURACCIAI.'
};

const company = {
  paragraphs: [
    "L'azienda ha iniziato la sua attività nel 1958. Oggi la terza generazione lavora attivamente in azienda.",
    'Ci occupiamo di utensili speciali, materiali avanzati, macchine utensili che operano con processi innovativi, e componenti speciali per diversi settori industriali.',
    "L'attività richiede un elevato livello di competenze tecniche che offriamo ai nostri clienti per trovare la soluzione più adatta per migliorare i loro cicli di produzione, la qualità dei loro prodotti e la loro competitività."
  ]
};

const divisions = [
  {
    id: 'mdu',
    name: 'MDU',
    title: 'Divisione MDU',
    subtitle: 'Metallo duro - utensili - elettrodi - ugelli',
    color: 'blue',
    email: 'mdu@euracciai.it',
    image: '/img/division-mdu.svg',
    description: 'EURACCIAI opera nel campo degli utensili da taglio e parti di usura/componenti in carburo di tungsteno da più di cinquanta anni.',
    paragraphs: [
      'Forniamo ad aziende in Italia, in Europa e nel mondo materiali e utensili per i processi di produzione più impegnativi per la asportazione di truciolo, lo stampaggio, la scordonatura di tubi, la marcatura di tubi e di componenti meccanici, la saldatura a resistenza, la sabbiatura con materiali abrasivi, e per le applicazioni che richiedono resistenza all\'usura e alle sollecitazioni meccaniche, bassi attriti e elevate durezze o elevata conduttività.',
      "La nostra esperienza e la nostra approfondita conoscenza tecnica ci permette di fornire l'utensile, il componente o il materiale più adatto a raggiungere gli obiettivi in termini di qualità, costo e produttività."
    ],
    products: [
      'ALBROMET Attrezzature per curvatubi',
      'Elettrodi per saldatura a resistenza',
      'Lame per troncatura tubi e profilati',
      'LEGHE BRONZO-ALLUMINIO ALBROMET',
      'ALBROMET Leghe di rame ad alta conducibilità',
      'Marcatura industriale',
      'Tungsteno, Molibdeno, Rame e leghe',
      'Ugelli in carburo di tungsteno - boro - silicio',
      'Boccole e parti di usura in metallo duro',
      'Utensili speciali in metallo duro per asportazione di truciolo'
    ]
  },
  {
    id: 'macsi',
    name: 'MACSI',
    title: 'Divisione MACSI',
    subtitle: 'Materiali e componenti speciali per impianti',
    color: 'green',
    email: 'macsi@euracciai.it',
    image: '/img/division-macsi.svg',
    description: 'La divisione è specializzata in materiali avanzati per applicazioni industriali, come ceramiche tecniche, leghe resistenti alla corrosione e alle alte temperature, materiali antiusura e componenti speciali per impianti.',
    paragraphs: [
      'Le competenze tecniche relative alla conoscenza delle applicazioni, dei materiali e dei componenti, rendono EURACCIAI un ottimo partner per sviluppare insieme ai nostri clienti le soluzioni più appropriate.'
    ],
    products: [
      'COORSTEK - USA',
      'STEINHAUS - Germania: griglie e cilindri filtranti di precisione',
      'STEINHAUS - Germania: nastri trasportatori laminati per forni a tunnel',
      'ULBRICH - USA',
      'HARALD PIHL - Svezia',
      'ABREMA - Grecia'
    ]
  },
  {
    id: 'divmac',
    name: 'DIVMAC',
    title: 'Divisione Macchine',
    subtitle: 'Macchine utensili',
    color: 'orange',
    email: 'divmac@euracciai.it',
    image: '/img/division-divmac.svg',
    description: 'La conoscenza approfondita dei processi tecnologici ci permette di analizzare le esigenze tecniche e di produzione e quindi di proporre le migliori soluzioni in relazione alle caratteristiche del componente da produrre, e alle esigenze di flessibilità e produttività richieste per il progetto.',
    paragraphs: [],
    products: [
      'FELSS GROUP GmbH - Germania',
      'WEIL-TECHNOLOGY - Germania',
      'WF MASCHINENBAU UND BLECHFORMTECHNIK - Germania',
      'LESSMANN GmbH - Germania'
    ]
  }
];

const applications = [
  'Asportazione di truciolo',
  'Stampaggio',
  'Scordonatura di tubi',
  'Marcatura di tubi e componenti meccanici',
  'Saldatura a resistenza',
  'Sabbiatura con materiali abrasivi',
  'Applicazioni che richiedono resistenza all\'usura e alle sollecitazioni meccaniche',
  'Applicazioni che richiedono bassi attriti, elevate durezze o elevata conduttività'
];

function render(page, data = {}) {
  return { site, company, divisions, applications, page, ...data };
}

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
