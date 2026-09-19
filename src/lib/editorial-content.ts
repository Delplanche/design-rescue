export type EditorialSection = {
  heading: string;
  body: string;
};

export type EssayChapter = {
  slug: string;
  nr: string;
  title: string;
  deck: string;
  sections: readonly EditorialSection[];
};

export const bookChapters: readonly EssayChapter[] = [
  {
    slug: "de-gecommercialiseerde-begroeting",
    nr: "01",
    title: "De gecommercialiseerde begroeting",
    deck: "Een essay over wat er verandert wanneer aandacht wordt gemeten, geprijsd en geoptimaliseerd.",
    sections: [
      { heading: "Voor het gesprek begint", body: "Een begroeting lijkt klein, maar draagt een belofte: iemand ziet iemand anders. Wanneer die opening deel wordt van een verkooptrechter, blijft de taal persoonlijk terwijl de context commercieel is geworden." },
      { heading: "Warmte en meetbaarheid", body: "Digitale systemen kunnen nabijheid organiseren en toegankelijk maken. Tegelijk kunnen meetpunten, scripts en omzetdoelen de betekenis van een gesprek verschuiven. Dit hoofdstuk leest die spanning als een filosofische vraag, niet als een bewezen eigenschap van ieder platform." },
      { heading: "De grens van het essay", body: "De observaties hier zijn auteursduiding. Waar feitelijke uitspraken nodig zijn, verwijst het boek naar het afzonderlijke onderzoeksdossier en zijn bronnenregister." },
    ],
  },
  {
    slug: "de-metriek-van-nabijheid",
    nr: "02",
    title: "De metriek van nabijheid",
    deck: "Over de taal van retentie, segmentatie en waarde in een domein dat zich als persoonlijk presenteert.",
    sections: [
      { heading: "Een taal van optimalisatie", body: "Een metriek beschrijft niet alleen; zij bepaalt ook waarop een organisatie let. Wanneer aandacht in conversie, retentie en besteding wordt vertaald, dreigt relationele taal een instrumentele functie te krijgen." },
      { heading: "Geen eenvoudige tegenstelling", body: "Betaalde intimiteit is niet per definitie onecht, evenmin is onbetaalde aandacht automatisch zuiver. De relevante spanning ligt tussen uitgesproken verwachtingen en de feitelijke organisatie achter een ontmoeting." },
    ],
  },
  {
    slug: "ruimte-zonder-meter",
    nr: "03",
    title: "Ruimte zonder meter",
    deck: "Een slotessay over wederkerigheid, begrenzing en vormen van aandacht die niet onmiddellijk worden afgerekend.",
    sections: [
      { heading: "Niet alles hoeft product te worden", body: "Ontkoppeling begint niet bij een verbod, maar bij het terugvinden van onderscheid: tussen contact en consumptie, tussen verlangen en verkoop, tussen beschikbare aandacht en wederkerigheid." },
      { heading: "Een open einde", body: "Deze uitgave stelt geen universeel herstelprogramma voor. Zij nodigt uit tot traagheid, transparantie en publieke regels die mensen opnieuw ruimte geven om geïnformeerd te kiezen." },
    ],
  },
] as const;

export const legalPillars = [
  ["01", "Identiteitstransparantie", "Maak begrijpelijk bekend of een gesprek door de geprofileerde persoon, een gemachtigde medewerker of automatisering wordt gevoerd."],
  ["02", "Dataminimalisatie", "Beperk intieme klantnotities tot aantoonbaar noodzakelijke gegevens, met heldere bewaartermijnen en inzagerechten."],
  ["03", "Contractuele uitgang", "Borg toegang tot eigen accounts, data en inkomsten bij het beëindigen van een samenwerking."],
  ["04", "Controleerbaar toezicht", "Maak onafhankelijke audits en een toegankelijke klachtenroute mogelijk zonder schuld vooraf vast te stellen."],
] as const;

export const archiveVersions = [
  { date: "19 september 2026", version: "Editie 01", note: "Eerste controleerbare onderzoeksuitgave met claim- en bronnenregister." },
] as const;