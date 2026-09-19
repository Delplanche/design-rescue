export type Status = "Onderbouwd" | "Aantijging" | "Betwist" | "Onbevestigd";

export const chapters = [
  { slug: "markt-achter-het-profiel", nr: "01", title: "De markt achter het profiel", deck: "Hoe agencies, verkoopsoftware en uitbesteed werk een tweede laag rond het zichtbare account vormen.", sections: [
    ["Een bedrijfstak achter de etalage", "Rond creatorplatforms is een aantoonbaar ecosysteem ontstaan van managers, chatteams en softwareleveranciers. Publieke productpagina’s beloven segmentatie, geautomatiseerde opvolging en omzetsturing. De precieze omvang van die markt blijft ondoorzichtig."],
    ["Wat dat nog niet bewijst", "Het bestaan van management of software bewijst op zichzelf geen misleiding. De relevante vraag is welke verwachtingen een aanbieder wekt, wie feitelijk communiceert en of een abonnee voldoende informatie krijgt om een keuze te maken."],
    ["Onderzoeksgrens", "Er bestaat geen openbaar, volledig register van agencies of chatdiensten. Dit dossier presenteert daarom geen marktschatting en trekt geen conclusies over iedere creator of ieder bureau."],
  ]},
  { slug: "wie-voert-het-gesprek", nr: "02", title: "Wie voert het gesprek?", deck: "Onderzoek toont dat betaalde chatters en AI-hulpmiddelen uit naam van creators kunnen communiceren.", sections: [
    ["De identiteit achter het venster", "Reuters, BBC en andere redacties documenteerden bureaus waar medewerkers berichten versturen vanuit accounts van creators. In zulke gevallen kan een abonnee denken met één persoon te spreken terwijl een team het gesprek voert."],
    ["Automatisering", "Ook software voor tekstsuggesties, vertaling en geautomatiseerde reacties wordt aangeboden. Dat is niet hetzelfde als bewijs dat elk gesprek door een bot wordt gevoerd. Gebruik en mate van automatisering verschillen per account."],
    ["Waarom transparantie telt", "De identiteit van de gesprekspartner kan onderdeel zijn van wat een consument denkt te kopen. Duidelijke bekendmaking van delegatie of automatisering vermindert die informatie-asymmetrie."],
  ]},
  { slug: "data-crm-profilering", nr: "03", title: "Data, CRM en commerciële profilering", deck: "Gespreksnotities en segmentatie kunnen intimiteit omzetten in een verkoopinstrument.", sections: [
    ["Van gesprek naar klantprofiel", "CRM-producten voor creatorbedrijven adverteren met fansegmenten, notities, bestedingshistorie en massaberichten. Zulke functies maken individuele opvolging op schaal mogelijk."],
    ["Privacyvragen", "Wanneer informatie herleidbaar is tot een persoon, kan de AVG van toepassing zijn. Dan zijn onder meer doelbinding, transparantie, minimale gegevensverwerking en een geldige grondslag relevant."],
    ["Geen bewezen psychologie-machine", "Dat gegevens commercieel worden gebruikt is aannemelijk en deels zichtbaar. Een systematische, sectorbrede psychologische kwetsbaarheidsclassificatie is met de geraadpleegde openbare bronnen niet bewezen."],
  ]},
  { slug: "werk-contracten-afhankelijkheid", nr: "04", title: "Werk, contracten en afhankelijkheid", deck: "Accounttoegang en omzetverdeling kunnen creators afhankelijk maken, maar situaties verschillen sterk.", sections: [
    ["Operationele controle", "Een agency kan planning, prijzen, chat, promotie en accounttoegang beheren. Dat kan professionele ondersteuning zijn, maar ook een sterke afhankelijkheid creëren wanneer vertrek of toegang contractueel wordt beperkt."],
    ["Bewijs zorgvuldig wegen", "Journalistieke getuigenissen beschrijven druk en agressieve contracten. Ze rechtvaardigen nader onderzoek, maar bewijzen niet dat alle bureaus dwang toepassen."],
    ["Minimale waarborgen", "Heldere opzegging, toegang tot eigen data, transparante omzetverdeling en onafhankelijke juridische bijstand zijn concrete waarborgen die de machtsbalans kunnen verbeteren."],
  ]},
  { slug: "recht-privacy-platformen", nr: "05", title: "Recht, privacy en platformverantwoordelijkheid", deck: "AVG, consumentenrecht en de Digital Services Act bieden kaders, maar de toepassing vraagt feiten per geval.", sections: [
    ["Consumenteninformatie", "Europese consumentenregels verbieden misleidende handelspraktijken. Of niet-gemelde ghost chatting daaronder valt, hangt af van de presentatie, de context en de invloed op het besluit van de consument."],
    ["Gegevensbescherming", "De AVG verlangt transparantie over persoonsgegevens. Bij profilering kunnen extra informatieplichten en rechten gelden. Zonder zicht op concrete datastromen kan geen definitief juridisch oordeel worden gegeven."],
    ["Platformplicht", "De Digital Services Act versterkt transparantie- en zorgvuldigheidsplichten voor onlineplatforms. Het kader is relevant, maar maakt een platform niet automatisch aansprakelijk voor iedere handeling van gebruikers of tussenpersonen."],
  ]},
  { slug: "open-vragen-hervormingen", nr: "06", title: "Open vragen en mogelijke hervormingen", deck: "Het sterkste dossier benoemt niet alleen wat bekend is, maar ook wat nog niet kan worden vastgesteld.", sections: [
    ["Wat onbewezen blijft", "Er is geen stevige basis voor een causaal verband tussen deze sector en maatschappelijke eenzaamheid, georganiseerde mensenhandel of systematisch witwassen. Die kwalificaties worden hier niet overgenomen."],
    ["Een transparantielabel", "Platforms zouden zichtbaar kunnen maken of een gesprek door de creator, een gemachtigde medewerker of automatisering wordt gevoerd. Zo’n label moet controleerbaar en begrijpelijk zijn."],
    ["Onderzoek dat nog nodig is", "Onafhankelijke audits, representatieve cijfers, inzage in datastromen en wederhoor bij platforms, creators, bureaus en consumenten zijn nodig voor verdergaande conclusies."],
  ]},
] as const;

export const claims = [
  { id: "CL-01", status: "Onderbouwd", title: "Betaalde chatters communiceren uit naam van creators", chapter: "02", sources: ["BR-01", "BR-02"] },
  { id: "CL-02", status: "Onderbouwd", title: "Commerciële software biedt fansegmentatie en automatisering", chapter: "03", sources: ["BR-03"] },
  { id: "CL-03", status: "Aantijging", title: "Sommige agencycontracten beperken autonomie van creators", chapter: "04", sources: ["BR-01"] },
  { id: "CL-04", status: "Betwist", title: "De gebruiker verwacht altijd exclusief met de creator te spreken", chapter: "02", sources: ["BR-01"] },
  { id: "CL-05", status: "Onbevestigd", title: "De sector classificeert systematisch psychologische kwetsbaarheid", chapter: "03", sources: [] },
  { id: "CL-06", status: "Onbevestigd", title: "Digitale intimiteitsdiensten veroorzaken maatschappelijke eenzaamheid", chapter: "06", sources: [] },
] as const;

export const sources = [
  { id: "BR-01", publisher: "Reuters", date: "30 juli 2024", title: "OnlyFans’ porn juggernaut fueled by a deception", type: "Journalistiek", url: "https://www.reuters.com/investigates/special-report/onlyfans-sex-chatters/" },
  { id: "BR-02", publisher: "BBC News", date: "20 mei 2024", title: "The people pretending to be porn stars online", type: "Journalistiek", url: "https://www.bbc.com/news/articles/c9xx2jwej2jo" },
  { id: "BR-03", publisher: "Infloww", date: "Geraadpleegd 2026", title: "Productinformatie over CRM en automatisering", type: "Platformbron", url: "https://infloww.com/" },
  { id: "BR-04", publisher: "EDPB", date: "2018", title: "Guidelines on Automated individual decision-making and Profiling", type: "Richtlijn", url: "https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/automated-decision-making-and-profiling_en" },
  { id: "BR-05", publisher: "Europese Unie", date: "27 oktober 2022", title: "Digital Services Act — Verordening (EU) 2022/2065", type: "Wetgeving", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
  { id: "BR-06", publisher: "ACM", date: "Geraadpleegd 2026", title: "Bescherming van consumenten tegen misleiding", type: "Toezicht", url: "https://www.acm.nl/nl/verkoop-aan-consumenten/klanten-werven/voorkom-misleiding-van-uw-klanten" },
  { id: "BR-07", publisher: "Autoriteit Persoonsgegevens", date: "Geraadpleegd 2026", title: "Profilering en geautomatiseerde besluitvorming", type: "Toezicht", url: "https://autoriteitpersoonsgegevens.nl/themas/basis-avg/privacyrechten-avg/recht-op-menselijke-blik-bij-besluiten" },
] as const;