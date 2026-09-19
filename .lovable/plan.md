# Complete herbouw: De Marktplaats van de Ziel

## Doel
De site wordt een gezaghebbende, meerdelige onderzoeks- en archiefpublicatie onder de titel **De Marktplaats van de Ziel**, met **Achter het profiel** als feitelijke dossierlijn. De naam van Jona Zeno De Smet (Delplanche) wordt als auteursvermelding opgenomen. De vorm combineert een gedrukt essay, onderzoeksjournalistiek en een sober digitaal archief.

## 1. Redactionele identiteit en bewijsgrenzen
- Maak overal duidelijk onderscheid tussen:
  - **Onderzoek / Achter het profiel**: controleerbare feiten, bronnen, claimstatussen en beperkingen.
  - **Essay / De Marktplaats van de Ziel**: filosofische interpretatie, waaronder VHEMT en maatschappelijke hypotheses.
  - **Voorstellen**: juridische en praktische ideeën die nadrukkelijk geen geldend recht of bewezen oplossing zijn.
- Behoud het bestaande claimregister met **Onderbouwd**, **Aantijging**, **Betwist** en **Onbevestigd**.
- Publiceer witwas-, manipulatie-, demografische en causale verbanden niet als feiten zonder voldoende bewijs. Zulke onderwerpen worden óf als onderzoeksvraag gemarkeerd óf uitsluitend in de essaylaag besproken.
- Gebruik geen verzonnen interne handleidingen, gelekte scripts, cijfers, wederhoor of auteursbiografie.

## 2. Visueel systeem: redactionele hybride
- Gebruik een warme papierbasis rond `#F7F4EE`, diepe inkt rond `#202224`, oxblood `#7A1F2B` voor bewijsmarkeringen en koelgrijze lijnen rond `#BFC5C7`; vertaal alles naar semantische OKLCH-tokens.
- Gebruik **Instrument Serif** voor titels en **Work Sans** voor lopende tekst; behoud een monospace voor claim-ID’s, broncodes en metadata.
- Vervang ronde app-kaarten en zachte schaduwen door scherpe regels, tabelstructuren, ruime marges en callouts met een oxblood zijlijn.
- Behoud alleen subtiele koele transparantie in navigatie, beeldlagen en dossierdetails, zodat het geen nostalgische papierimitatie wordt.
- Maak de startpagina redactioneel asymmetrisch; maak lees- en registerpagina’s rustiger met een smalle tekstkolom en functionele zij-index.
- Gebruik korte, rustige overgangen en respecteer verminderde beweging.

## 3. Nieuwe navigatie en pagina-architectuur
Bouw echte deelbare pagina’s met een vaste kop, mobiel menu en uitgebreide archiefvoeter:

- `/` — **Manifest**: titel en subtitel, kernthese, duidelijke scheiding onderzoek/essay en ingangen naar dossier, boek en publicaties.
- `/dossier` — onderzoeksindex met zes bestaande hoofdstukken, claimstatus en methodologische waarschuwingen.
- `/dossier/$slug` — nieuwe URL voor elk feitelijk hoofdstuk, met inhoudsopgave, bronnen, claims en vorige/volgende navigatie.
- `/boek` — boekplan en literaire inhoudsopgave.
- `/boek/$slug` — afzonderlijke essayhoofdstukken, visueel en tekstueel gemarkeerd als auteursduiding.
- `/filosofie` — filosofische synthese en hypothesen, inclusief een zorgvuldig begrensde VHEMT-bespreking.
- `/juridisch` — huidige rechtskaders, beperkingen en beleidsvoorstellen.
- `/juridisch/lex-humanitas` — modelvoorstellen, duidelijk aangeduid als voorstel en niet als geldend recht.
- `/ontkoppeling` — niet-klinische, praktische reflecties en verwijzingen; geen onbewezen behandelingsclaims.
- `/archief` — publicaties, bronregister, claimregister, methodologie, versies en correcties.
- `/claims`, `/bronnen` en `/methodologie` blijven als gespecialiseerde registers beschikbaar en worden vanuit het archief ontsloten.
- Bestaande hoofdstuk-URL’s blijven werken via een permanente doorverwijzing naar de nieuwe dossier-URL’s.

## 4. Inhoud en onderhoudbaarheid
- Splits hoofdstukken, essays, juridische voorstellen, bronnen en claims in afzonderlijke gestructureerde inhoudsmodules.
- Geef iedere publiceerbare stelling een type, status, bronverwijzing, datum en relatie met een hoofdstuk.
- Voeg een zichtbaar wijzigingslog en correctiebeleid toe; de online versie blijft leidend.
- Maak tabellen bruikbaar op mobiel via compacte rijen of horizontaal scrollbare tabellen met duidelijke koppen.
- Schrijf compacte webteksten als ingang naar de diepere publicaties, zonder de website tot een reeks downloadknoppen te reduceren.

## 5. Publicaties en downloads
- Herontwerp het downloadportaal met drie duidelijke categorieën:
  1. een korte executive summary;
  2. het integrale onderzoeksdossier;
  3. losse thematische readers.
- Bouw de documenten vanuit dezelfde gecontroleerde inhoud en claim-ID’s als de website.
- Geef elk document titelblad, versie, inhoud, bronnen, methodologische afbakening en verwijzing naar actuele online correcties.
- Presenteer alleen documenten die werkelijk zijn aangemaakt; geen fictieve paginatallen of loze downloadlinks.

## 6. Technische uitvoering
- Blijf bij de bestaande TanStack-routering en maak voor iedere nieuwe URL een eigen routebestand met unieke metadata.
- Werk de gedeelde kop en voeter centraal bij en gebruik bestaande projectcomponenten voor interacties.
- Voeg de gekozen lettertypes via de documentkop toe en leg alle kleuren, lijnen en statussen vast als semantische ontwerptokens.
- Voeg geen account, betalingen of gegevensopslag toe; deze herbouw blijft een openbare publicatiesite.

## 7. Controle
- Controleer alle pagina’s op telefoon en desktop op leesbaarheid, overloop, navigatie, focusstatus en voldoende contrast.
- Test alle interne routes, oude doorverwijzingen, bronlinks en downloads.
- Controleer dat onderzoek, hypothese en voorstel nergens visueel of tekstueel door elkaar lopen.
- Render iedere nieuwe PDF pagina voor pagina, herstel afgebroken tekst, overlap, slechte marges en bronfouten, en herhaal de visuele controle.
- Controleer unieke titels, beschrijvingen en deelmetadata voor iedere inhoudelijke route.

## Afbakening
De herbouw versterkt de auteursstem zonder speculatie als bewijs te presenteren. Gericht wederhoor, niet-beschikbare interne documenten en nog onbewezen sectorclaims worden zichtbaar als open onderzoek vermeld, niet ingevuld of gesimuleerd.
