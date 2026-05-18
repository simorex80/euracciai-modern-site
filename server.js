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
  company: 'EURACCIAI S.r.l.',
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
    "L'azienda ha iniziato la sua attività nel 1958.Oggi la terza generazione lavora attivamente in azienda.",
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
    image: '/img/division-mdu.png',
    description: 'EURACCIAI opera nel campo degli utensili da taglio e parti di usura/componenti in carburo di tungsteno da più di cinquanta anni.',
    paragraphs: [
      'Forniamo ad aziende in Italia, in Europa e nel mondo materiali e utensili per i processi di produzione più impegnativi per la asportazione di truciolo, lo stampaggio, la scordonatura di tubi, la marcatura di tubi e di componenti meccanici, la saldatura a resistenza, la sabbiatura con materiali abrasivi, e per le applicazioni che richiedono resistenza all\'usura e alle sollecitazioni meccaniche, bassi attriti e elevate durezze o elevata conduttività.',
      "La nostra esperienza e la nostra approfondita conoscenza tecnica ci permette di fornire l'utensile, il componente o il materiale più adatto a raggiungere gli obiettivi in termini di qualità, costo e produttività.",
      'Euracciai dispone inoltre di materiali a magazzino e di soluzioni su disegno per forniture rapide e progetti personalizzati, con attenzione a continuità produttiva e tracciabilità.'
    ],
    products: [
      {
        title: 'ALBROMET Attrezzature per curvatubi',
        description: 'Le leghe bronzo alluminio Albromet sono prodotte con tecnologie avanzate e severe procedure di controllo; disponibili anime omnidirezionali e modulari per curvatubi CNC.'
      },
      {
        title: 'Elettrodi per saldatura a resistenza',
        description: 'Euracciai produce e fornisce elettrodi su disegno da molti anni, con verifiche sul materiale in entrata e sul 100% dei pezzi prodotti.'
      },
      {
        title: 'Lame per troncatura tubi e profilati',
        description: 'Lame verticali e orizzontali per linee di taglio tubi e profilati, con soluzioni per acciai ferritici e austenitici.'
      },
      {
        title: 'LEGHE BRONZO-ALLUMINIO ALBROMET',
        description: 'Leghe con alta resistenza all\'usura e basse frizioni per componenti di impianto e macchine.'
      },
      {
        title: 'ALBROMET Leghe di rame ad alta conducibilità',
        description: 'Leghe in rame ad alta conducibilità per stampi e costruzione elettrodi, con elevata conducibilità termica e buona resistenza all\'usura.'
      },
      {
        title: 'Marcatura industriale',
        description: 'Stampi incisi, punzoni, caratteri e sistemi di marcatura per metalli e tubi.'
      },
      {
        title: 'Tungsteno, Molibdeno, Rame e leghe',
        description: 'Ampia gamma a magazzino in barre tonde e quadrate, lamiere, piatti e filo, con possibilità di realizzazioni a disegno su richiesta.'
      },
      {
        title: 'Ugelli in carburo di tungsteno - boro - silicio',
        description: 'Ugelli ad alta resistenza per applicazioni abrasive e processi ad alta usura.'
      },
      {
        title: 'Boccole e parti di usura in metallo duro',
        description: 'Componenti antiusura per ambienti severi con elevate sollecitazioni meccaniche.'
      },
      {
        title: 'Utensili speciali in metallo duro per asportazione di truciolo',
        description: 'Utensili personalizzati per incrementare qualità, produttività e durata in esercizio.'
      }
    ]
  },
  {
    id: 'macsi',
    name: 'MACSI',
    title: 'Divisione MACSI',
    subtitle: 'Materiali e componenti speciali per impianti',
    color: 'green',
    email: 'macsi@euracciai.it',
    image: '/img/division-macsi.png',
    description: 'La divisione è specializzata in materiali avanzati per applicazioni industriali, come ceramiche tecniche, leghe resistenti alla corrosione e alle alte temperature, materiali antiusura e componenti speciali per impianti.',
    paragraphs: [
      'Le competenze tecniche relative alla conoscenza delle applicazioni, dei materiali e dei componenti, rendono EURACCIAI un ottimo partner per sviluppare insieme ai nostri clienti le soluzioni più appropriate.',
      'La divisione supporta la scelta del materiale e del componente più idoneo per durata, affidabilità, manutenzione e costi complessivi di esercizio.'
    ],
    products: [
      {
        title: 'COORSTEK - USA',
        description: 'Produttore di riferimento nelle ceramiche tecniche per applicazioni industriali avanzate.',
        url: 'https://www.coorstek.com'
      },
      {
        title: 'STEINHAUS - Germania',
        description: 'Griglie e cilindri filtranti di precisione; nastri trasportatori laminati per forni a tunnel.',
        url: 'https://www.steinhaus-gmbh.de'
      },
      {
        title: 'ULBRICH - USA',
        description: 'Produzione e distribuzione di nastri, fogli e fili di acciai inox e metalli speciali.',
        url: 'https://www.ulbrich.com'
      },
      {
        title: 'HARALD PIHL - Svezia',
        description: 'Ampia disponibilità di leghe speciali e titanio per esigenze industriali ad alta specifica.',
        url: 'https://www.haraldpihl.com'
      },
      {
        title: 'ABREMA - Grecia',
        description: 'Componenti e materiali speciali per applicazioni tecniche e impiantistiche.'
      }
    ]
  },
  {
    id: 'divmac',
    name: 'DIVMAC',
    title: 'Divisione Macchine',
    subtitle: 'Macchine utensili',
    color: 'orange',
    email: 'divmac@euracciai.it',
    image: '/img/division-divmac.png',
    description: 'La conoscenza approfondita dei processi tecnologici ci permette di analizzare le esigenze tecniche e di produzione e quindi di proporre le migliori soluzioni in relazione alle caratteristiche del componente da produrre, e alle esigenze di flessibilità e produttività richieste per il progetto.',
    paragraphs: [
      'La conoscenza approfondita dei processi tecnologici ci permette di analizzare esigenze tecniche e produttive e proporre soluzioni mirate in base al componente da realizzare.',
      'L\'obiettivo è bilanciare flessibilità, produttività e qualità del processo, con configurazioni adatte sia a linee automatiche sia a contesti ad alta variabilità.'
    ],
    products: [
      {
        title: 'FELSS GROUP GmbH - Germania',
        description: 'Macchine per produrre componenti di precisione da tubo, barra e filo; presse orizzontali idrauliche e sistemi di rullatura ad alta precisione.',
        url: 'https://www.felss.com'
      },
      {
        title: 'WEIL-TECHNOLOGY - Germania',
        description: 'Macchine e sistemi per tecniche innovative di formatura, taglio e giunzione, incluse linee turn-key automatizzate.',
        url: 'https://www.weil-engineering.de'
      },
      {
        title: 'WF MASCHINENBAU UND BLECHFORMTECHNIK - Germania',
        description: 'Macchine di flow forming per pulegge, componenti di trasmissione, frizioni, dischi, ruote, bombole gas e altri componenti speciali.',
        url: 'https://www.wf-maschinenbau.com'
      },
      {
        title: 'LESSMANN GmbH - Germania',
        description: 'Spazzole industriali per sbavatura e finitura metalli, pipeline-welding e applicazioni speciali.',
        url: 'https://www.lessmann.com'
      }
    ]
  }
];

const partners = [
  {
    division: 'MDU',
    name: 'ALBROMET',
    country: 'Germania',
    description: 'Leghe bronzo-alluminio e leghe di rame ad alta conducibilità per utensili, stampi e componenti tecnici.',
    url: 'https://www.albromet.de'
  },
  {
    division: 'MDU',
    name: 'NEW-FORM TOOLS',
    country: 'Canada',
    description: 'Lame per troncatura tubi e profilati, con soluzioni dedicate alle linee di taglio ad alta produttività.',
    url: 'https://www.newformtools.com'
  },
  {
    division: 'MACSI',
    name: 'COORSTEK',
    country: 'USA',
    description: 'Materiali ceramici avanzati per applicazioni industriali ad alte prestazioni.',
    url: 'https://www.coorstek.com'
  },
  {
    division: 'MACSI',
    name: 'STEINHAUS',
    country: 'Germania',
    description: 'Soluzioni per filtrazione di precisione e nastri laminati per forni a tunnel.',
    url: 'https://www.steinhaus-gmbh.de'
  },
  {
    division: 'MACSI',
    name: 'ULBRICH',
    country: 'USA',
    description: 'Nastri, fogli e fili di metalli speciali per processi industriali avanzati.',
    url: 'https://www.ulbrich.com'
  },
  {
    division: 'MACSI',
    name: 'HARALD PIHL',
    country: 'Svezia',
    description: 'Ampia disponibilità di leghe speciali e titanio per applicazioni critiche.',
    url: 'https://www.haraldpihl.com'
  },
  {
    division: 'DIVMAC',
    name: 'FELSS GROUP',
    country: 'Germania',
    description: 'Tecnologie di deformazione e lavorazione per componenti tubolari e metallici.',
    url: 'https://www.felss.com'
  },
  {
    division: 'DIVMAC',
    name: 'WEIL-TECHNOLOGY',
    country: 'Germania',
    description: 'Impianti e linee automatiche per formatura, taglio e giunzione.',
    url: 'https://www.weil-engineering.de'
  },
  {
    division: 'DIVMAC',
    name: 'WF MASCHINENBAU',
    country: 'Germania',
    description: 'Macchine flow forming per componenti di trasmissione e deformazione lamiera.',
    url: 'https://www.wf-maschinenbau.com'
  },
  {
    division: 'DIVMAC',
    name: 'LESSMANN',
    country: 'Germania',
    description: 'Spazzole industriali speciali per finitura, sbavatura e processi automatici.',
    url: 'https://www.lessmann.com'
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
  return { site, company, divisions, applications, partners, page, ...data };
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

