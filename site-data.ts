const routeMap = {
  it: { home: '', azienda: 'azienda', prodotti: 'prodotti', divisioni: 'divisioni', applicazioni: 'applicazioni', partners: 'partners', contatti: 'contatti' },
  en: { home: '', azienda: 'company', prodotti: 'products', divisioni: 'divisions', applicazioni: 'applications', partners: 'partners', contatti: 'contact' }
};

const i18n = {
  it: {
    lang: 'it',
    switchLabel: 'Inglese',
    nav: { azienda: 'Chi siamo', prodotti: 'Prodotti', divisioni: 'Divisioni', applicazioni: 'Applicazioni', partners: 'Partner', contatti: 'Contatti' },
    home: {
      brandEyebrow: 'Euracciai',
      intro: 'Utensili speciali, materiali avanzati, macchine utensili che operano con processi innovativi e componenti speciali per diversi settori industriali.',
      ctaProducts: 'Prodotti',
      ctaCompany: 'Chi siamo',
      startActivity: 'Inizio attività',
      divisionsCount: 'Divisioni',
      divisionsTitle: 'Divisioni',
      divisionsHeadline: 'MDU, MACSI, DIVMAC',
      divisionsLead: "L'attività richiede un elevato livello di competenze tecniche che offriamo ai nostri clienti per trovare la soluzione più adatta per migliorare i loro cicli di produzione, la qualità dei loro prodotti e la loro competitività.",
      cardOpen: 'Apri',
      aboutTitle: 'Chi siamo',
      aboutHeadline: "L'azienda ha iniziato la sua attività nel 1958."
    },
    common: {
      contacts: 'Contatti', phone: 'Telefono', fax: 'Fax', email: 'Email', office: 'Sede', division: 'Divisione',
      directions: 'Come raggiungerci', menu: 'Menu', companyData: 'Dati societari', detail: 'Approfondisci →', backHome: 'Torna alla homepage',
      homeAria: 'Homepage', mainNavAria: 'Navigazione principale', langSelectorAria: 'Selettore lingua',
      mobileMenuLabel: 'Menu', openMenuLabel: 'Apri menu', closeMenuLabel: 'Chiudi menu'
    },
    pages: {
      applicationsEyebrow: 'Applicazioni', applicationsTitle: 'Processi e applicazioni', applicationsSubtitle: 'Applicazioni indicate nella divisione MDU',
      productsEyebrow: 'Prodotti', productsTitle: 'Prodotti', productsSubtitle: 'Prodotti e soluzioni tecniche raggruppati per divisione.',
      productEyebrow: 'Scheda prodotto', productBack: 'Torna ai prodotti', relatedDivision: 'Divisione di riferimento',
      divisionsEyebrow: 'Divisioni', divisionsTitle: 'Divisioni', divisionsSubtitle: 'MDU, MACSI e DIVMAC',
      partnersEyebrow: 'Partner', partnersTitle: 'Partner', partnersSubtitle: 'Collaboriamo con aziende internazionali specializzate in materiali avanzati, componenti tecnici e macchine utensili.',
      divisionEyebrow: 'Divisione', contentEyebrow: 'Contenuti', contentTitle: 'Prodotti e partner indicati per questa divisione',
      notFoundTitle: 'Pagina non trovata.', notFoundText: 'La pagina richiesta non esiste o è stata spostata.'
    },
    metaDescription: 'Euracciai S.r.l. si occupa di utensili speciali, materiali avanzati, macchine utensili con processi innovativi e componenti speciali per diversi settori industriali.'
  },
  en: {
    lang: 'en',
    switchLabel: 'Italiano',
    nav: { azienda: 'Company', prodotti: 'Products', divisioni: 'Divisions', applicazioni: 'Applications', partners: 'Partners', contatti: 'Contact' },
    home: {
      brandEyebrow: 'Euracciai',
      intro: 'Special tools, advanced materials, machine tools with innovative processes, and special components for industrial sectors.',
      ctaProducts: 'Products',
      ctaCompany: 'Company',
      startActivity: 'Business started',
      divisionsCount: 'Divisions',
      divisionsTitle: 'Divisions',
      divisionsHeadline: 'MDU, MACSI, DIVMAC',
      divisionsLead: 'Our activity requires strong technical expertise that we provide to customers to improve production cycles, product quality, and competitiveness.',
      cardOpen: 'Open',
      aboutTitle: 'Company',
      aboutHeadline: 'The company started its business in 1958.'
    },
    common: {
      contacts: 'Contact', phone: 'Phone', fax: 'Fax', email: 'Email', office: 'Office', division: 'Division',
      directions: 'How to reach us', menu: 'Menu', companyData: 'Company details', detail: 'Learn more →', backHome: 'Back to homepage',
      homeAria: 'Home', mainNavAria: 'Main navigation', langSelectorAria: 'Language selector',
      mobileMenuLabel: 'Menu', openMenuLabel: 'Open menu', closeMenuLabel: 'Close menu'
    },
    pages: {
      applicationsEyebrow: 'Applications', applicationsTitle: 'Processes and applications', applicationsSubtitle: 'Applications referenced in the MDU division',
      productsEyebrow: 'Products', productsTitle: 'Products', productsSubtitle: 'Technical products and solutions grouped by division.',
      productEyebrow: 'Product sheet', productBack: 'Back to products', relatedDivision: 'Related division',
      divisionsEyebrow: 'Divisions', divisionsTitle: 'Divisions', divisionsSubtitle: 'MDU, MACSI and DIVMAC',
      partnersEyebrow: 'Partners', partnersTitle: 'Partners', partnersSubtitle: 'We cooperate with international companies specialized in advanced materials, technical components, and machine tools.',
      divisionEyebrow: 'Division', contentEyebrow: 'Contents', contentTitle: 'Products and partners listed for this division',
      notFoundTitle: 'Page not found.', notFoundText: 'The requested page does not exist or has been moved.'
    },
    metaDescription: 'Euracciai S.r.l. provides special tools, advanced materials, innovative machine tools, and special components for multiple industrial sectors.'
  }
};

const site = {
  company: 'EURACCIAI S.r.l.',
  payoff: 'Since 1958',
  phone: '+39 02 48704428',
  phoneExtended: '+39 02 48704428',
  fax: '+39 02 48 70 8204',
  email: 'info@euracciai.it',
  address: 'Via Civitali 79 - 20148 Milano (Italia)',
  chamber: 'C.C.I.A.A. Milano 514303',
  capital: 'Capitale Sociale € 46.800',
  registry: 'Trib. Milano Reg. Soc. 102364, Vol. 2742, Fasc. 23',
  vat: 'Codice Fiscale/Partita Iva: 00817960156',
  directions: {
    it: {
      metroTitle: 'In metropolitana',
      metroText: 'Linea M5 (Lilla), fermata San Siro Ippodromo.',
      carTitle: 'In auto',
      carText: 'Da qualunque autostrada: Tangenziale Ovest, uscita S. SIRO - fieramilanocity - CENTRO, poi via Novara, via Harar e via dei Rospigliosi. Superato lo stadio, girare a destra in via Pessano e subito a sinistra in via Matteo Civitali (angolo via Pessano), al numero 79.'
    },
    en: {
      metroTitle: 'By metro',
      metroText: 'Take Metro line M5 (Lilla), stop at San Siro Ippodromo.',
      carTitle: 'By car',
      carText: 'From any motorway: enter Tangenziale Ovest, take exit S. SIRO - fieramilanocity - CENTRO, then follow via Novara, via Harar, and via dei Rospigliosi. After the stadium, turn right into via Pessano, then first left into via Matteo Civitali (corner with via Pessano), number 79.'
    }
  }
};

const localized = {
  company: {
    it: {
      paragraphs: [
        "L'azienda ha iniziato la sua attività nel 1958. Oggi la terza generazione lavora attivamente in azienda.",
        'Ci occupiamo di utensili speciali, materiali avanzati, macchine utensili che operano con processi innovativi, e componenti speciali per diversi settori industriali.',
        "L'attività richiede un elevato livello di competenze tecniche che offriamo ai nostri clienti per trovare la soluzione più adatta per migliorare i loro cicli di produzione, la qualità dei loro prodotti e la loro competitività."
      ]
    },
    en: {
      paragraphs: [
        'The company started in 1958. Today, the third generation is actively involved in the business.',
        'We specialize in special tools, advanced materials, machine tools based on innovative processes, and special components for multiple industrial sectors.',
        'Our work requires a high level of technical expertise that we provide to help customers improve production cycles, product quality, and competitiveness.'
      ]
    }
  },
  divisions: {
    it: [
      {
        id: 'mdu', name: 'MDU', title: 'Divisione MDU', subtitle: 'Metallo duro - utensili - elettrodi - ugelli', color: 'blue', email: 'mdu@euracciai.it', image: '/img/division-mdu.png',
        description: 'EURACCIAI opera nel campo degli utensili da taglio e parti di usura/componenti in carburo di tungsteno da più di cinquanta anni.',
        paragraphs: [
          "Forniamo ad aziende in Italia, in Europa e nel mondo materiali e utensili per i processi di produzione più impegnativi per la asportazione di truciolo, lo stampaggio, la scordonatura di tubi, la marcatura di tubi e di componenti meccanici, la saldatura a resistenza, la sabbiatura con materiali abrasivi, e per le applicazioni che richiedono resistenza all'usura e alle sollecitazioni meccaniche, bassi attriti e elevate durezze o elevata conduttività.",
          "La nostra esperienza e la nostra approfondita conoscenza tecnica ci permettono di fornire l'utensile, il componente o il materiale più adatto a raggiungere gli obiettivi in termini di qualità, costo e produttività.",
          'Euracciai dispone inoltre di materiali a magazzino e di soluzioni su disegno per forniture rapide e progetti personalizzati, con attenzione a continuità produttiva e tracciabilità.'
        ],
        products: [
          { title: 'ALBROMET Attrezzature per curvatubi', description: 'Le leghe bronzo alluminio Albromet sono prodotte con tecnologie avanzate e severe procedure di controllo; disponibili anime omnidirezionali e modulari per curvatubi CNC.' },
          { title: 'Elettrodi per saldatura a resistenza', description: 'Euracciai produce e fornisce elettrodi su disegno da molti anni, con verifiche sul materiale in entrata e sul 100% dei pezzi prodotti.' },
          { title: 'Lame per troncatura tubi e profilati', description: 'Lame verticali e orizzontali per linee di taglio tubi e profilati, con soluzioni per acciai ferritici e austenitici.' },
          { title: 'LEGHE BRONZO-ALLUMINIO ALBROMET', description: "Leghe con alta resistenza all'usura e basse frizioni per componenti di impianto e macchine." },
          { title: 'ALBROMET Leghe di rame ad alta conducibilità', description: "Leghe in rame ad alta conducibilità per stampi e costruzione elettrodi, con elevata conducibilità termica e buona resistenza all'usura." },
          { title: 'Marcatura industriale', description: 'Stampi incisi, punzoni, caratteri e sistemi di marcatura per metalli e tubi.' },
          { title: 'Tungsteno, Molibdeno, Rame e leghe', description: 'Ampia gamma a magazzino in barre tonde e quadrate, lamiere, piatti e filo, con possibilità di realizzazioni a disegno su richiesta.' },
          { title: 'Ugelli in carburo di tungsteno - boro - silicio', description: 'Ugelli ad alta resistenza per applicazioni abrasive e processi ad alta usura.' },
          { title: 'Boccole e parti di usura in metallo duro', description: 'Componenti antiusura per ambienti severi con elevate sollecitazioni meccaniche.' },
          { title: 'Utensili speciali in metallo duro per asportazione di truciolo', description: 'Utensili personalizzati per incrementare qualità, produttività e durata in esercizio.' }
        ]
      },
      {
        id: 'macsi', name: 'MACSI', title: 'Divisione MACSI', subtitle: 'Materiali e componenti speciali per impianti', color: 'green', email: 'macsi@euracciai.it', image: '/img/division-macsi.png',
        description: 'La divisione è specializzata in materiali avanzati per applicazioni industriali, come ceramiche tecniche, leghe resistenti alla corrosione e alle alte temperature, materiali antiusura e componenti speciali per impianti.',
        paragraphs: [
          'Le competenze tecniche relative alla conoscenza delle applicazioni, dei materiali e dei componenti, rendono EURACCIAI un ottimo partner per sviluppare insieme ai nostri clienti le soluzioni più appropriate.',
          'La divisione supporta la scelta del materiale e del componente più idoneo per durata, affidabilità, manutenzione e costi complessivi di esercizio.'
        ],
        products: [
          { title: 'COORSTEK - USA', description: 'Produttore di riferimento nelle ceramiche tecniche per applicazioni industriali avanzate.', url: 'https://www.coorstek.com' },
          { title: 'STEINHAUS - Germania', description: 'Griglie e cilindri filtranti di precisione; nastri trasportatori laminati per forni a tunnel.', url: 'https://www.steinhaus-gmbh.de' },
          { title: 'ULBRICH - USA', description: 'Produzione e distribuzione di nastri, fogli e fili di acciai inox e metalli speciali.', url: 'https://www.ulbrich.com' },
          { title: 'HARALD PIHL - Svezia', description: 'Ampia disponibilità di leghe speciali e titanio per esigenze industriali ad alta specifica.', url: 'https://www.haraldpihl.com' },
          { title: 'ABREMA - Grecia', description: 'Componenti e materiali speciali per applicazioni tecniche e impiantistiche.' }
        ]
      },
      {
        id: 'divmac', name: 'DIVMAC', title: 'Divisione Macchine', subtitle: 'Macchine utensili', color: 'orange', email: 'divmac@euracciai.it', image: '/img/division-divmac.png',
        description: 'La conoscenza approfondita dei processi tecnologici ci permette di analizzare le esigenze tecniche e di produzione e quindi di proporre le migliori soluzioni in relazione alle caratteristiche del componente da produrre e alle esigenze di flessibilità e produttività richieste per il progetto.',
        paragraphs: [
          'La conoscenza approfondita dei processi tecnologici ci consente di analizzare esigenze tecniche e produttive e proporre soluzioni mirate in base al componente da realizzare.',
          "L'obiettivo è bilanciare flessibilità, produttività e qualità del processo, con configurazioni adatte sia a linee automatiche sia a contesti ad alta variabilità."
        ],
        products: [
          { title: 'FELSS GROUP GmbH - Germania', description: 'Macchine per produrre componenti di precisione da tubo, barra e filo; presse orizzontali idrauliche e sistemi di rullatura ad alta precisione.', url: 'https://www.felss.com' },
          { title: 'WEIL-TECHNOLOGY - Germania', description: 'Macchine e sistemi per tecniche innovative di formatura, taglio e giunzione, incluse linee turn-key automatizzate.', url: 'https://www.weil-engineering.de' },
          { title: 'WF MASCHINENBAU UND BLECHFORMTECHNIK - Germania', description: 'Macchine di flow forming per pulegge, componenti di trasmissione, frizioni, dischi, ruote, bombole gas e altri componenti speciali.', url: 'https://www.wf-maschinenbau.com' },
          { title: 'LESSMANN GmbH - Germania', description: 'Spazzole industriali per sbavatura e finitura metalli, pipeline-welding e applicazioni speciali.', url: 'https://www.lessmann.com' }
        ]
      }
    ],
    en: [
      {
        id: 'mdu', name: 'MDU', title: 'MDU Division', subtitle: 'Carbide - tools - electrodes - nozzles', color: 'blue', email: 'mdu@euracciai.it', image: '/img/division-mdu.png',
        description: 'EURACCIAI has been active in cutting tools and wear parts/components made of tungsten carbide for more than fifty years.',
        paragraphs: [
          'We supply companies in Italy, Europe and worldwide with materials and tools for demanding production processes: chip removal machining, forming, tube scarfing, marking of tubes and mechanical components, resistance welding, abrasive blasting, and applications requiring high wear resistance, mechanical strength, low friction, high hardness, or high conductivity.',
          'Our experience and in-depth technical know-how allow us to provide the tool, component, or material best suited to achieve your quality, cost, and productivity targets.',
          'Euracciai also offers stock materials and custom-made solutions for fast deliveries and tailor-made projects, with focus on production continuity and traceability.'
        ],
        products: [
          { title: 'ALBROMET Tube Bending Equipment', description: 'Albromet aluminum-bronze alloys are produced with advanced technologies and strict controls; omnidirectional and modular mandrels are available for CNC tube benders.' },
          { title: 'Resistance Welding Electrodes', description: 'Euracciai has been producing and supplying custom electrodes for many years, with incoming material checks and 100% inspection of produced parts.' },
          { title: 'Tube and Profile Cut-Off Blades', description: 'Vertical and horizontal blades for tube/profile cutting lines, including solutions for ferritic and austenitic steels.' },
          { title: 'ALBROMET ALUMINUM-BRONZE ALLOYS', description: 'Alloys with high wear resistance and low friction for plant and machinery components.' },
          { title: 'ALBROMET High-Conductivity Copper Alloys', description: 'High-conductivity copper alloys for molds and electrodes, combining thermal conductivity with wear resistance.' },
          { title: 'Industrial Marking', description: 'Engraved dies, punches, characters, and marking systems for metals and tubes.' },
          { title: 'Tungsten, Molybdenum, Copper and Alloys', description: 'Wide stock range in round/square bars, sheets, flats and wire, with custom machining available.' },
          { title: 'Tungsten Carbide - Boron - Silicon Nozzles', description: 'Highly wear-resistant nozzles for abrasive applications and high-wear processes.' },
          { title: 'Carbide Bushings and Wear Parts', description: 'Wear-resistant components for severe environments with high mechanical stress.' },
          { title: 'Special Carbide Cutting Tools', description: 'Custom tools designed to improve quality, productivity, and service life.' }
        ]
      },
      {
        id: 'macsi', name: 'MACSI', title: 'MACSI Division', subtitle: 'Special materials and plant components', color: 'green', email: 'macsi@euracciai.it', image: '/img/division-macsi.png',
        description: 'This division specializes in advanced industrial materials, including technical ceramics, corrosion- and heat-resistant alloys, wear-resistant materials, and special plant components.',
        paragraphs: [
          'Technical expertise in applications, materials, and components makes EURACCIAI a reliable partner to develop the most appropriate solutions together with customers.',
          'The division supports selecting the right material and component for durability, reliability, maintenance, and total operating cost.'
        ],
        products: [
          { title: 'COORSTEK - USA', description: 'Leading manufacturer of technical ceramics for advanced industrial applications.', url: 'https://www.coorstek.com' },
          { title: 'STEINHAUS - Germany', description: 'Precision filtering grids and cylinders; laminated conveyor belts for tunnel furnaces.', url: 'https://www.steinhaus-gmbh.de' },
          { title: 'ULBRICH - USA', description: 'Production and distribution of strips, sheets, and wires in stainless steels and special metals.', url: 'https://www.ulbrich.com' },
          { title: 'HARALD PIHL - Sweden', description: 'Broad availability of special alloys and titanium for critical industrial needs.', url: 'https://www.haraldpihl.com' },
          { title: 'ABREMA - Greece', description: 'Special components and materials for technical and plant-engineering applications.' }
        ]
      },
      {
        id: 'divmac', name: 'DIVMAC', title: 'Machines Division', subtitle: 'Machine tools', color: 'orange', email: 'divmac@euracciai.it', image: '/img/division-divmac.png',
        description: 'Our deep knowledge of manufacturing processes allows us to analyze technical and production needs and propose the best solutions according to part characteristics and required flexibility/productivity.',
        paragraphs: [
          'We assess process requirements in detail and design targeted solutions based on the component to be produced.',
          'The goal is to balance flexibility, productivity, and process quality, with setups suitable for both automated lines and high-variability contexts.'
        ],
        products: [
          { title: 'FELSS GROUP GmbH - Germany', description: 'Machines for precision parts from tube, bar and wire; horizontal hydraulic presses and high-precision rolling systems.', url: 'https://www.felss.com' },
          { title: 'WEIL-TECHNOLOGY - Germany', description: 'Machines and systems for innovative forming, cutting and joining techniques, including automated turn-key lines.', url: 'https://www.weil-engineering.de' },
          { title: 'WF MASCHINENBAU UND BLECHFORMTECHNIK - Germany', description: 'Flow forming machines for pulleys, transmission components, clutches, discs, wheels, gas cylinders and other special parts.', url: 'https://www.wf-maschinenbau.com' },
          { title: 'LESSMANN GmbH - Germany', description: 'Industrial brushes for deburring and metal finishing, pipeline welding and special applications.', url: 'https://www.lessmann.com' }
        ]
      }
    ]
  },
  partners: {
    it: [
      { division: 'MDU', name: 'ALBROMET', country: 'Germania', description: 'Leghe bronzo-alluminio e leghe di rame ad alta conducibilità per utensili, stampi e componenti tecnici.', url: 'https://www.albromet.de' },
      { division: 'MDU', name: 'NEW-FORM TOOLS', country: 'Canada', description: 'Lame per troncatura tubi e profilati, con soluzioni dedicate alle linee di taglio ad alta produttività.', url: 'https://www.newformtools.com' },
      { division: 'MACSI', name: 'COORSTEK', country: 'USA', description: 'Materiali ceramici avanzati per applicazioni industriali ad alte prestazioni.', url: 'https://www.coorstek.com' },
      { division: 'MACSI', name: 'STEINHAUS', country: 'Germania', description: 'Soluzioni per filtrazione di precisione e nastri laminati per forni a tunnel.', url: 'https://www.steinhaus-gmbh.de' },
      { division: 'MACSI', name: 'ULBRICH', country: 'USA', description: 'Nastri, fogli e fili di metalli speciali per processi industriali avanzati.', url: 'https://www.ulbrich.com' },
      { division: 'MACSI', name: 'HARALD PIHL', country: 'Svezia', description: 'Ampia disponibilità di leghe speciali e titanio per applicazioni critiche.', url: 'https://www.haraldpihl.com' },
      { division: 'DIVMAC', name: 'FELSS GROUP', country: 'Germania', description: 'Tecnologie di deformazione e lavorazione per componenti tubolari e metallici.', url: 'https://www.felss.com' },
      { division: 'DIVMAC', name: 'WEIL-TECHNOLOGY', country: 'Germania', description: 'Impianti e linee automatiche per formatura, taglio e giunzione.', url: 'https://www.weil-engineering.de' },
      { division: 'DIVMAC', name: 'WF MASCHINENBAU', country: 'Germania', description: 'Macchine flow forming per componenti di trasmissione e deformazione lamiera.', url: 'https://www.wf-maschinenbau.com' },
      { division: 'DIVMAC', name: 'LESSMANN', country: 'Germania', description: 'Spazzole industriali speciali per finitura, sbavatura e processi automatici.', url: 'https://www.lessmann.com' }
    ],
    en: [
      { division: 'MDU', name: 'ALBROMET', country: 'Germany', description: 'Aluminum-bronze and high-conductivity copper alloys for tools, molds, and technical components.', url: 'https://www.albromet.de' },
      { division: 'MDU', name: 'NEW-FORM TOOLS', country: 'Canada', description: 'Tube/profile cut-off blades with dedicated solutions for high-productivity cutting lines.', url: 'https://www.newformtools.com' },
      { division: 'MACSI', name: 'COORSTEK', country: 'USA', description: 'Advanced ceramic materials for high-performance industrial applications.', url: 'https://www.coorstek.com' },
      { division: 'MACSI', name: 'STEINHAUS', country: 'Germany', description: 'Precision filtration solutions and laminated belts for tunnel furnaces.', url: 'https://www.steinhaus-gmbh.de' },
      { division: 'MACSI', name: 'ULBRICH', country: 'USA', description: 'Strips, sheets and wires in special metals for advanced industrial processes.', url: 'https://www.ulbrich.com' },
      { division: 'MACSI', name: 'HARALD PIHL', country: 'Sweden', description: 'Wide availability of special alloys and titanium for critical applications.', url: 'https://www.haraldpihl.com' },
      { division: 'DIVMAC', name: 'FELSS GROUP', country: 'Germany', description: 'Forming and machining technologies for tubular and metal components.', url: 'https://www.felss.com' },
      { division: 'DIVMAC', name: 'WEIL-TECHNOLOGY', country: 'Germany', description: 'Automated lines and systems for forming, cutting and joining.', url: 'https://www.weil-engineering.de' },
      { division: 'DIVMAC', name: 'WF MASCHINENBAU', country: 'Germany', description: 'Flow-forming machines for transmission components and sheet deformation.', url: 'https://www.wf-maschinenbau.com' },
      { division: 'DIVMAC', name: 'LESSMANN', country: 'Germany', description: 'Special industrial brushes for finishing, deburring, and automated processes.', url: 'https://www.lessmann.com' }
    ]
  },
  applications: {
    it: [
      'Asportazione di truciolo', 'Stampaggio', 'Scordonatura di tubi', 'Marcatura di tubi e componenti meccanici',
      'Saldatura a resistenza', 'Sabbiatura con materiali abrasivi', "Applicazioni che richiedono resistenza all'usura e alle sollecitazioni meccaniche",
      'Applicazioni che richiedono bassi attriti, elevate durezze o elevata conduttività'
    ],
    en: [
      'Chip removal machining', 'Forming', 'Tube scarfing', 'Tube and mechanical component marking',
      'Resistance welding', 'Abrasive blasting', 'Applications requiring wear resistance and mechanical strength',
      'Applications requiring low friction, high hardness, or high conductivity'
    ]
  }
};

function buildPathFor(locale) {
  return (key, params: any = {}) => {
    const map = routeMap[locale] || routeMap.it;
    const slug = map[key];
    if (slug === undefined) return `/${locale}`;
    let url = slug ? `/${locale}/${slug}` : `/${locale}`;
    if (key === 'divisioni' && params.id) url += `/${params.id}`;
    if (key === 'prodotti' && params.id) url += `/${params.id}`;
    return url;
  };
}

function getProducts(locale = 'it') {
  const lang = locale === 'en' ? 'en' : 'it';
  return localized.divisions[lang].flatMap((division) =>
    division.products.map((item, index) => ({
      id: `${division.id}-${index + 1}`,
      divisionId: division.id,
      divisionName: division.name,
      divisionTitle: division.title,
      divisionSubtitle: division.subtitle,
      divisionColor: division.color,
      title: typeof item === 'string' ? item : item.title,
      description: typeof item === 'string' ? '' : item.description,
      url: typeof item === 'string' ? undefined : item.url
    }))
  );
}

function findProduct(locale = 'it', id: string) {
  return getProducts(locale).find((product) => product.id === id);
}

function routeToStaticFilePath(routePath) {
  if (!routePath || routePath === '/') return '/index.html';
  return `${routePath.replace(/\/+$/, '')}/index.html`;
}

function makeRelative(fromPath, toPath) {
  const cleanFrom = (fromPath || '/').replace(/\/+$/, '');
  const fromParts = cleanFrom.split('/').filter(Boolean);
  const fromDirParts = fromParts;
  const toParts = (toPath || '/').split('/').filter(Boolean);

  let same = 0;
  while (same < fromDirParts.length && same < toParts.length && fromDirParts[same] === toParts[same]) same += 1;

  const up = fromDirParts.slice(same).map(() => '..');
  const down = toParts.slice(same);
  const rel = [...up, ...down].join('/');
  return rel || '.';
}

function render(locale = 'it', page: string, data: any = {}) {
  const lang = locale === 'en' ? 'en' : 'it';
  const pathFor = buildPathFor(lang);
  const staticMode = Boolean(data.staticMode);
  const switchLocale = lang === 'it' ? 'en' : 'it';
  const pathKey = data.pathKey || page;
  const pathParams = data.pathParams || {};
  const currentPath = data.currentPath || pathFor(pathKey, pathParams);
  const localePaths = {
    it: buildPathFor('it')(pathKey, pathParams),
    en: buildPathFor('en')(pathKey, pathParams)
  };

  const selectedDivisions = localized.divisions[lang];
  const selectedProducts = getProducts(lang);
  let division = data.division;
  if (division && division.id) {
    division = selectedDivisions.find((d) => d.id === division.id) || division;
  }
  const product = data.product || (pathKey === 'prodotti' && pathParams.id ? findProduct(lang, pathParams.id) : undefined);

  return {
    locale: lang,
    t: i18n[lang],
    site: { ...site, directions: site.directions[lang] },
    company: localized.company[lang],
    divisions: selectedDivisions,
    products: selectedProducts,
    productId: (divisionId: string, index: number) => `${divisionId}-${index + 1}`,
    applications: localized.applications[lang],
    partners: localized.partners[lang],
    page,
    pathFor,
    url: (target) => makeRelative(currentPath, staticMode ? routeToStaticFilePath(target) : target),
    asset: (target) => makeRelative(currentPath, target),
    switchPath: buildPathFor(switchLocale)(pathKey, pathParams),
    localePaths,
    ...data,
    division,
    product
  };
}

const divisions = localized.divisions.it;

export { routeMap, divisions, findProduct, getProducts, render };
