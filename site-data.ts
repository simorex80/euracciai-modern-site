import { productDetails } from './product-details';

const routeMap = {
  it: { home: '', azienda: 'azienda', prodotti: 'prodotti', divisioni: 'divisioni', partners: 'partners', contatti: 'contatti' },
  en: { home: '', azienda: 'company', prodotti: 'products', divisioni: 'divisions', partners: 'partners', contatti: 'contact' }
};

const i18n = {
  it: {
    lang: 'it',
    switchLabel: 'Inglese',
    nav: { azienda: 'Chi siamo', prodotti: 'Prodotti', divisioni: 'Divisioni', partners: 'Partner', contatti: 'Contatti' },
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
      productsEyebrow: 'Prodotti', productsTitle: 'Prodotti', productsSubtitle: 'Prodotti e soluzioni tecniche raggruppati per divisione.',
      productEyebrow: 'Scheda prodotto', productBack: 'Torna ai prodotti', relatedDivision: 'Divisione di riferimento',
      divisionsEyebrow: 'Divisioni', divisionsTitle: 'Divisioni', divisionsSubtitle: 'MDU, MACSI e DIVMAC',
      partnersEyebrow: 'Partner', partnersTitle: 'Partner', partnersSubtitle: 'Collaboriamo con aziende internazionali specializzate in materiali avanzati, componenti tecnici e macchine utensili.',
      divisionEyebrow: 'Divisione', contentEyebrow: 'Prodotti', contentTitle: 'Prodotti e partner indicati per questa divisione',
      notFoundTitle: 'Pagina non trovata.', notFoundText: 'La pagina richiesta non esiste o è stata spostata.'
    },
    metaDescription: 'Euracciai S.r.l. si occupa di utensili speciali, materiali avanzati, macchine utensili con processi innovativi e componenti speciali per diversi settori industriali.'
  },
  en: {
    lang: 'en',
    switchLabel: 'Italiano',
    nav: { azienda: 'Company', prodotti: 'Products', divisioni: 'Divisions', partners: 'Partners', contatti: 'Contact' },
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
      productsEyebrow: 'Products', productsTitle: 'Products', productsSubtitle: 'Technical products and solutions grouped by division.',
      productEyebrow: 'Product sheet', productBack: 'Back to products', relatedDivision: 'Related division',
      divisionsEyebrow: 'Divisions', divisionsTitle: 'Divisions', divisionsSubtitle: 'MDU, MACSI and DIVMAC',
      partnersEyebrow: 'Partners', partnersTitle: 'Partners', partnersSubtitle: 'We cooperate with international companies specialized in advanced materials, technical components, and machine tools.',
      divisionEyebrow: 'Division', contentEyebrow: 'Products', contentTitle: 'Products and partners listed for this division',
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
                  {
                            title: "Attrezzature per curvatubi - Albromet",
                            description: "Anime omnidirezionali, anime snodate e controslitte/tasselli anti-grinze in leghe bronzo-alluminio Albromet per curvatubi CNC."
                  },
                  {
                            title: "Elettrodi per saldatura a resistenza",
                            description: "Elettrodi su disegno, integrali o saldobrasati, con controllo qualità sul materiale in entrata e sul 100% dei pezzi prodotti."
                  },
                  {
                            title: "Lame per troncatura tubi e profilati",
                            description: "Lame verticali e orizzontali New-Form Tools per linee di taglio tubi e profilati, anche in acciai inossidabili ferritici e austenitici."
                  },
                  {
                            title: "Leghe Bronzo-Alluminio Albromet",
                            description: "Leghe bronzo-alluminio con elevate caratteristiche meccaniche, resistenza all’usura, bassi coefficienti di attrito e buona conducibilità termica."
                  },
                  {
                            title: "Leghe di rame ad alta conducibilità - Albromet",
                            description: "Leghe speciali in rame ad alta conducibilità per stampi, inserti difficili da raffreddare ed elettrodi per saldatura a resistenza."
                  },
                  {
                            title: "Marcatura industriale",
                            description: "Stampi incisi, punzoni, caratteri, portacaratteri, numeratori e ruote di marcatura per metalli, tubi e componenti meccanici."
                  },
                  {
                            title: "Ugelli in carburo di tungsteno, boro e silicio",
                            description: "Ugelli standard e speciali in metallo duro, carburo di boro e carburo di silicio, anche con corpi in acciaio zincato o alluminio."
                  },
                  {
                            title: "CCNB (Rame/Cobalto/Nickel/Berillio)",
                            description: "Lega con buone caratteristiche di conducibilità termica ed elettrica, durezza e resistenza alle temperature elevate."
                  },
                  {
                            title: "CCZ (Rame/Cromo/Zirconio)",
                            description: "Lega di rame studiata per incrementare durezza e resistenza alle temperature elevate, indicata anche per saldatura di acciai rivestiti."
                  },
                  {
                            title: "Elconite W/Cu 75/25",
                            description: "Lega rame-tungsteno sinterizzata con buona conducibilità, resistenza alle alte temperature e resistenza alla rottura."
                  },
                  {
                            title: "Molibdeno puro",
                            description: "Metallo duro e duttile con elevato punto di fusione, utilizzato in apparecchiature ad alte temperature e come elettrodo di saldatura."
                  },
                  {
                            title: "Niobio fogli, lamiere, tondi e tubi",
                            description: "Niobio e leghe di niobio con alto punto di fusione, resistenza alla corrosione e buone proprietà di lavorazione a freddo."
                  },
                  {
                            title: "Tantalio fogli, lamiere, tondi e tubi",
                            description: "Tantalio e leghe di tantalio con alto punto di fusione, resistenza alla corrosione e buone caratteristiche di lavorazione a freddo."
                  },
                  {
                            title: "Tungsteno ad alta densità W/Ni/Cu",
                            description: "Leghe ad alta densità con contenuto di tungsteno tra il 90% e il 98%, utilizzate per schermature, bilanciamenti e componenti speciali."
                  },
                  {
                            title: "Tungsteno ad alta densità W/Ni/Fe",
                            description: "Leghe pesanti di tungsteno con nichel e ferro, caratterizzate da alta densità e alto modulo elastico."
                  },
                  {
                            title: "Tungsteno puro (Wolframio)",
                            description: "Metallo grigio ottenuto da sinterizzazione, con alta densità, altissimo punto di fusione e bassa dilatazione termica."
                  },
                  {
                            title: "TZM (Titanio/Zirconio/Molibdeno)",
                            description: "Lega di molibdeno con titanio e zirconio, indicata per parti strutturali che lavorano ad alte temperature."
                  },
                  {
                            title: "Zirconio fogli, lamiere, tondi e tubi",
                            description: "Zirconio e leghe di zirconio resistenti alla corrosione per apparecchiature chimiche e scambiatori di calore."
                  },
                  {
                            title: "Particolari in metallo duro",
                            description: "Particolari speciali in diversi gradi di metallo duro a disegno: boccole, denti, matrici, punzoni e sedi di calibratura."
                  },
                  {
                            title: "Utensili speciali in metallo duro per asportazione di truciolo",
                            description: "Frese, alesatori, allargatori, utensili profilati, inserti e utensili speciali in metallo duro a disegno."
                  }
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
                  {
                            title: "Materiali ceramici tecnici Coorstek",
                            description: "Componenti in materiali ceramici tecnici per applicazioni industriali avanzate, prodotti con tecnologie diverse e materiali specifici."
                  },
                  {
                            title: "STEINHAUS - Griglie e cilindri filtranti di precisione",
                            description: "Griglie e cilindri filtranti di precisione per applicazioni industriali e impiantistiche."
                  },
                  {
                            title: "STEINHAUS - Nastri trasportatori laminati per forni",
                            description: "Nastri trasportatori laminati per forni a tunnel e processi ad alta temperatura."
                  },
                  {
                            title: "ULBRICH - Nastri, fili piani e fili sagomati",
                            description: "Nastri extra sottili, fili piani e fili sagomati di precisione in inox, leghe di nickel, titanio, cobalto e niobio."
                  },
                  {
                            title: "HARALD PIHL - Leghe speciali",
                            description: "Leghe di nickel, titanio, rame e altre leghe disponibili in tubi, tondi, piatti, lamiere, filo e nastri."
                  },
                  {
                            title: "Lamiere ricaricate antiusura",
                            description: "Lamiere con base in acciaio al carbonio e rivestimento antiusura in carburi di cromo ad alta densità."
                  }
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
                  {
                            title: "FELSS GROUP GmbH - Germania",
                            description: "Macchine per componenti di precisione mediante deformazione a freddo da tubo, barra e filo; presse orizzontali, laminatoi e banchi di trafila."
                  },
                  {
                            title: "WEIL-TECHNOLOGY - Germania",
                            description: "Macchine automatiche NC di saldatura longitudinale, calandratura e linee integrate flessibili per componenti tubolari."
                  },
                  {
                            title: "WF MASCHINENBAU UND BLECHFORMTECHNIK - Germania",
                            description: "Macchine di flow forming per pulegge, organi di trasmissione, frizioni, dischi, cerchi, ruote e bombole per gas."
                  },
                  {
                            title: "Spazzole Tecniche - LESSMANN",
                            description: "Spazzole tecniche di alta qualità per sbavatura, finitura, ripresa saldatura, cut back e applicazioni industriali speciali."
                  }
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
                  {
                            title: "Tube bending equipment - Albromet",
                            description: "Omnidirectional mandrels, articulated mandrels, and anti-wrinkle tooling in Albromet aluminum-bronze alloys for CNC tube benders."
                  },
                  {
                            title: "Resistance welding electrodes",
                            description: "Custom electrodes, integral or brazed, with incoming material checks and inspection on 100% of produced parts."
                  },
                  {
                            title: "Tube and profile cut-off blades",
                            description: "New-Form Tools vertical and horizontal blades for tube/profile cutting lines, including stainless ferritic and austenitic steels."
                  },
                  {
                            title: "Albromet aluminum-bronze alloys",
                            description: "Aluminum-bronze alloys with strong mechanical properties, wear resistance, low friction, and good thermal conductivity."
                  },
                  {
                            title: "High-conductivity copper alloys - Albromet",
                            description: "Special high-conductivity copper alloys for molds, hard-to-cool inserts, and resistance welding electrodes."
                  },
                  {
                            title: "Industrial marking",
                            description: "Engraved dies, punches, characters, type holders, numbering units, and marking wheels for metals, tubes, and mechanical components."
                  },
                  {
                            title: "Tungsten carbide, boron, and silicon nozzles",
                            description: "Standard and special nozzles made of carbide, boron carbide, and silicon carbide, also with galvanized steel or aluminum bodies."
                  },
                  {
                            title: "CCNB (Copper/Cobalt/Nickel/Beryllium)",
                            description: "Alloy with good thermal and electrical conductivity, hardness, and resistance to high temperatures."
                  },
                  {
                            title: "CCZ (Copper/Chromium/Zirconium)",
                            description: "Copper alloy designed to increase hardness and resistance to high temperatures, also suitable for welding coated steels."
                  },
                  {
                            title: "Elconite W/Cu 75/25",
                            description: "Sintered copper-tungsten alloy with good conductivity, resistance to high temperatures, and breaking strength."
                  },
                  {
                            title: "Pure molybdenum",
                            description: "Hard and ductile metal with a high melting point, used in high-temperature equipment and welding electrodes."
                  },
                  {
                            title: "Niobium sheets, plates, rounds, and tubes",
                            description: "Niobium and niobium alloys with high melting point, corrosion resistance, and good cold-working properties."
                  },
                  {
                            title: "Tantalum sheets, plates, rounds, and tubes",
                            description: "Tantalum and tantalum alloys with high melting point, corrosion resistance, and good cold-working properties."
                  },
                  {
                            title: "High-density tungsten W/Ni/Cu",
                            description: "High-density alloys with tungsten content between 90% and 98%, used for shielding, balancing, and special components."
                  },
                  {
                            title: "High-density tungsten W/Ni/Fe",
                            description: "Heavy tungsten alloys with nickel and iron, characterized by high density and high elastic modulus."
                  },
                  {
                            title: "Pure tungsten (Wolfram)",
                            description: "Gray sintered metal with high density, extremely high melting point, and low thermal expansion."
                  },
                  {
                            title: "TZM (Titanium/Zirconium/Molybdenum)",
                            description: "Molybdenum alloy with titanium and zirconium, suitable for structural parts working at high temperatures."
                  },
                  {
                            title: "Zirconium sheets, plates, rounds, and tubes",
                            description: "Zirconium and zirconium alloys resistant to corrosion for chemical equipment and heat exchangers."
                  },
                  {
                            title: "Carbide special parts",
                            description: "Custom special parts in different carbide grades: bushings, teeth, dies, punches, and calibration seats."
                  },
                  {
                            title: "Special carbide cutting tools",
                            description: "Custom carbide mills, reamers, enlargers, profiled tools, inserts, and special cutting tools."
                  }
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
                  {
                            title: "Coorstek technical ceramic materials",
                            description: "Technical ceramic components for advanced industrial applications, produced with different technologies and dedicated materials."
                  },
                  {
                            title: "STEINHAUS - Precision filtering grids and cylinders",
                            description: "Precision filtering grids and cylinders for industrial and plant-engineering applications."
                  },
                  {
                            title: "STEINHAUS - Rolled conveyor belts for furnaces",
                            description: "Rolled conveyor belts for tunnel furnaces and high-temperature processes."
                  },
                  {
                            title: "ULBRICH - Strip, flat wire, and shaped wire",
                            description: "Ultra-thin strip, flat wire, and precision shaped wire in stainless steel, nickel, titanium, cobalt, and niobium alloys."
                  },
                  {
                            title: "HARALD PIHL - Special alloys",
                            description: "Nickel, titanium, copper, and other alloys available as tubes, rounds, flats, sheets, wire, and strip."
                  },
                  {
                            title: "Wear-resistant clad plates",
                            description: "Carbon-steel plates with a high-thickness wear-resistant chromium-carbide overlay."
                  }
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
                  {
                            title: "FELSS GROUP GmbH - Germany",
                            description: "Machines for precision components through cold forming from tube, bar, and wire; horizontal presses, rolling mills, and drawing benches."
                  },
                  {
                            title: "WEIL-TECHNOLOGY - Germany",
                            description: "Automatic NC longitudinal welding and rounding machines, plus flexible integrated lines for tubular components."
                  },
                  {
                            title: "WF MASCHINENBAU UND BLECHFORMTECHNIK - Germany",
                            description: "Flow-forming machines for pulleys, transmission parts, clutches, discs, wheels, and gas cylinders."
                  },
                  {
                            title: "Technical brushes - LESSMANN",
                            description: "High-quality technical brushes for deburring, finishing, weld rework, cut back, and special industrial applications."
                  }
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
    division.products.map((item, index) => {
      const productItem = item as any;
      const id = `${division.id}-${index + 1}`;
      const details = productDetails[lang]?.[id] || {};
      return {
        id,
        divisionId: division.id,
        divisionName: division.name,
        divisionTitle: division.title,
        divisionSubtitle: division.subtitle,
        divisionColor: division.color,
        title: typeof item === 'string' ? item : productItem.title,
        description: typeof item === 'string' ? '' : productItem.description,
        url: typeof item === 'string' ? undefined : productItem.url,
        paragraphs: details.paragraphs || [],
        images: details.images || [],
        files: details.files || []
      };
    })
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
