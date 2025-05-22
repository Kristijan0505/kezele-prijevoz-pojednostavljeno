import React from 'react';
import TripCard from '../ui/TripCard';
import SectionTitle from '../ui/SectionTitle';

const PopularTrips: React.FC = () => {
  const trips = [
    {
      id: 12,
      title: '🕊️ PLAN PUTA – HODOČAŠĆE SV. IVI U PODMILAČJE',
      description: '24.06.2025. (utorak)',
      imageUrl: 'https://i.postimg.cc/rs8cRDfR/hodocasce-sc-ivi-u-podmilacje.jpg',
      iconName: 'Palmtree',
      width: 800,
      height: 600,
      detailedDescription: `🚌 PLAN PUTA
⏰ 03:00 – Polazak iz Čazme
Okupljanje sudionika i polazak iz Čazme prema Ivanić-Gradu, uz mogućnosti ulaska putnika po dogovoru u Ivanić-Gradu, Kutini, Novskoj.
☕ 06:30 – Pauza za kavu i doručak iz ruksaka
Kraća pauza na odmorištu (benzinska postaja ili restoran na ruti) radi okrepe.
🙏 09:30 – Dolazak u Podmilačje
Dolazak u svetište sv. Ive u Podmilačju, smješteno uz rijeku Vrbas. Slobodno vrijeme za osobnu molitvu, ispovijed i pripremu za svetu misu.
⛪ 11:00 – Sudjelovanje u svetoj misi
Zajedničko sudjelovanje u središnjoj hodočasničkoj misi na blagdan sv. Ivana Krstitelja.
🧺 13:00 – Pauza za ručak
Slobodno vrijeme za ručak – mogućnost vlastite hrane ili kupnje kod lokalnih ugostitelja i štandova.
🕯️ 14:30 – Slobodno vrijeme za osobnu pobožnost
Mogućnost paljenja svijeća, obilaska crkve i okoline, posjete rijeci Vrbas, trgovina s religijskim suvenirima.
🚍 16:00 – Polazak za Čazmu
Povratak prema Hrvatskoj uz usputne pauze prema potrebi.
🏠 22:00 – Dolazak u Čazmu
Očekivani dolazak kući u večernjim satima.
✅ U CIJENU UKLJUČENO:
Prijevoz turističkim autobusom
Pratitelj putovanja
Osiguranje od odgovornosti
Organizacija putovanja od strane turističke agencije
❌ U CIJENU NIJE UKLJUČENO:
Osobna potrošnja
Fakultativne ulaznice za muzeje i eventualne dodatne sadržaje
Rezervacije: 097/623-2530
E mail: kezele.prijevoz@gmail.com`,
      duration: '1 dan',
      price: 'Od 43€ po osobi',
      includes: [
        'Autobusni prijevoz turističkim autobusom',
        'Stručno vodstvo tijekom putovanja',
        'Ulaznice za Muzej krapinskih neandertalaca',
        'Ulaznice za dvorac Trakošćan',
        'Osiguranje putnika i organizacije putovanja'
      ],
      excludes: [
        'Ručak (mogućnost dogovora)',
        'Osobne troškove',
        'Dodatne sadržaje koji nisu navedeni u programu'
      ],
      startLocation: 'Čazma (07:30), moguć ukrcaj prema Zagrebu'
    },
    {
      id: 11,
      title: 'PROGRAM PUTOVANJA: SARAJEVO & BISERI BOSNE ',
      description: 'Nezaboravan Izlet od 15.08.-17.08',
      imageUrl: 'https://i.postimg.cc/Y9LLDs7z/sarajevo-i-biseri-bosne.jpg',
      iconName: 'Palmtree',
      width: 800,
      height: 600,
      detailedDescription: `PROGRAM PUTOVANJA: SARAJEVO & BISERI BOSNE 
🚌 DAN 1: ČAZMA – JAJCE – TRAVNIK – SARAJEVO 
Polazak iz Čazme u 5:00 sati ujutro. Mogućnost ukrcaja putnika na usputnim stajalištima: Križ, Graberje, Ivanić Grad, Popovača, Kutina, Novska, Nova Gradiška. Slijedi ugodna vožnja modernim turističkim autobusom uz kraće pauze za odmor. 
Prva destinacija je Jajce, povijesni biser smješten na ušću rijeke Plive u Vrbas. Ovaj srednjovjekovni kraljevski grad poznat je kao posljednje utočište bosanskog kraljevstva pod vladavinom kralja Stjepana Tomaševića. Posebna atrakcija Jajca je njegov spektakularni vodopad u samom centru grada, jedan od rijetkih takve vrste u svijetu, koji se nalazi na popisu 12 najljepših vodopada na svijetu. Uz povijest i prirodu, posjetitelji će osjetiti poseban duh grada koji objedinjuje elemente različitih epoha i kultura. 
Nastavak putovanja prema Travniku, smještenom u srcu Bosne. Grad je poznat kao prijestolnica bosanskih vezira iz osmanskog razdoblja, a čuvaju ga planine Vlašić i Vilenica. Obilazak obuhvaća šetnju starom jezgrom, posjet tvrđavi i znamenitostima koje dočaravaju spoj islamske i europske arhitekture. Ne propustite kušati čuvene travničke ćevape ili prošetati do Plave vode, jednog od najfotogeničnijih mjesta u regiji. 
U večernjim satima dolazak u Sarajevo. Smještaj u hotelu u centru grada. Slobodno vrijeme za vlastito istraživanje. 
Noćenje. 
🎥 DAN 2: SARAJEVO U DOBA FILMSKOG FESTIVALA 
Nakon doručka slijedi organizirani razgled grada uz stručnog vodiča. Sarajevo je grad s dušom, mješavina Istoka i Zapada, vjekovno raskrižje kultura, religija i povijesnih previranja. 
U obilasku su uključene glavne atrakcije: 
Baščaršija – povijesno središte Sarajeva, prepoznatljivo po orijentalnoj atmosferi i zanatskim radionicama 
Gradska vijećnica – simbol austro-ugarske arhitekture 
Narodno kazalište 
Inat kuća – primjer bosanskog ponosa i upornosti 
Katedrala Srca Isusova – najveća katolička crkva u Bosni i Hercegovini 
Stari židovski hram i židovska četvrt 
Kazandžijska ulica – ulica starih obrta 
Latinska ćuprija (Principov most) – povijesno mjesto atentata na Franza Ferdinanda 
Saborna crkva Rođenja Presvete Bogorodice 
Sebilj – poznata drvena fontana na Baščaršiji 
Svrzina kuća – tradicionalna bosanska kuća iz otomanskog razdoblja 
Nakon razgleda, slobodno vrijeme za vlastite aktivnosti. Preporučujemo kušanje lokalnih specijaliteta: sarajevski ćevapi, bosanska kava iz fildžana, baklava i drugi slatkiši orijentalnog porijekla. 
Zanimljivost: Sarajevo je 1895. godine postalo prvi grad u Europi s električnom tramvajskom mrežom. Danas je poznat i kao jedan od 18 svjetskih gradova filma. Tijekom kolovoza u Sarajevu se održava Sarajevo Film Festival (16. – 23. kolovoza), međunarodni filmski spektakl koji grad pretvara u žarište kulturnih događanja. 
Noćenje. 
🏡 DAN 3: SARAJEVO – POVRATAK 
Doručak i odjava iz hotela. Slobodno vrijeme za kupovinu suvenira, dodatne razglede ili jutarnju kavu uz Miljacku. 
Polazak prema Hrvatskoj u 17:00 sati. 
Vožnja uz kraća usputna stajanja prema mjestima iskrcaja: Nova Gradiška, Novska, Kutina, Popovača, Ivanić Grad, Graberje, Križ, Čazma. 
Dolazak kući u kasnijim večernjim satima. 
UKLJUČENO U CIJENU: 
Prijevoz turističkim autobusom 
Pratitelj putovanja 
2 noćenja s doručkom u hotelu *** u centru Sarajeva 
Razgled Sarajeva uz lokalnog vodiča 
Osiguranje od odgovornosti i jamčevine 
NIJE UKLJUČENO U CIJENU: 
Osobna potrošnja 
Boravišna pristojba (2,30 € po osobi/noćenju) 
Doplata za jednokrevetnu sobu 
CIJENA ARANŽMANA: 125,00 EUR 
NAČINI PLAĆANJA: 
Gotovinom u agenciji 
Općom uplatnicom / Internet bankarstvom 
Karticama – mogućnost obročne otplate `,
      duration: '2 dana (15.08.-17.08.)',
      price: 'Od 125€ po osobi',
      includes: [
        'Autobusni prijevoz turističkim autobusom',
        'Smještaj u tradicionalnim kućama (1 noćenje)',
        'Puni pansion (doručak, ručak, večera)',
        'Sudjelovanje u svim radionicama',
        'Stručno vodstvo',
        'Osiguranje putnika i organizacije putovanja'
      ],
      excludes: [
        'Osobne troškove',
        'Dodatne aktivnosti izvan programa',
        'Putno zdravstveno osiguranje'
      ],
      startLocation: 'Polazak iz Čazme prema Ivanić-Gradu, uz mogućnosti ulaska putnika po dogovoru u Ivanić-Gradu, Kutini, Novskoj.'
    },
    {
      id: 1,
      title: '🏞 JEDNODNEVNI IZLET – NACIONALNI PARK PLITVIČKA JEZERA ',
      description: 'Datum: Petak, 30. svibnja 2025. ',
      imageUrl: 'https://i.postimg.cc/3RqWgCD0/plitvicka-jezera.jpg',
      iconName: 'Palmtree',
      width: 800,
      height: 600,
      detailedDescription: `🗓 Datum: Petak, 30. svibnja 2025. 
 🚌 Prijevoz turističkim autobusom 
 💶 Cijena aranžmana: 21,00 EUR po osobi 
PLAN PUTOVANJA: 
Polazak u 07:00 sati iz Čazme, s usputnim zaustavljanjima i ukrcajima putnika na sljedećim lokacijama: 
-Graberje 
-Križ 
-Ivanić Grad 
-Supernova Zagreb (Buzin) 
-Lučko (naplatna postaja) 
Slijedi vožnja autocestom i lokalnim cestama prema Nacionalnom parku Plitvička jezera, uz pauze za odmor. 
BORAVAK U NP PLITVIČKA JEZERA 
Po dolasku, slobodno vrijeme za obilazak parka.  
 Mogući su različiti programi obilaska, uključujući: 
Šetnju uz i preko jezera po drvenim mostićima , razgled Velikog slapa ,vožnju električnim brodom po jezeru Kozjak , panoramski vlakić kroz gornja jezera 
Park je UNESCO-v zaštićeni lokalitet, iznimne ljepote, idealan za ljubitelje prirode, fotografije i mirnog odmora. 
POVRATAK: 
Povratak prema mjestima polaska u dogovoru s pratiteljem putovanja, ovisno o tempu obilaska grupe. Dolazak u večernjim satima. 
CIJENA IZLETA: 21,00 EUR PO OSOBI 
Cijena uključuje:  
-Prijevoz turističkim autobusom 
-Pratitelja putovanja 
-Osiguranje od odgovornosti  
-Agencijsku organizaciju  
Cijena ne uključuje:  
-Ulaznicu u Nacionalni park Plitvička jezera: Odrasli – grupe (15+): 21,00 €,  €, Djeca 7–18 – grupe: 5,00 €, osobe s invaliditetom preko 50 % : GRATIS 
-Osobnu potrošnju  
ℹ️ NAPOMENE: 
Preporuča se udobna sportska obuća.
Mogućnost vlastitog ručka ili obroka u restoranu unutar parka. 
Izlet se održava neovisno o vremenskim uvjetima – u slučaju kiše, prilagođen program`,
      duration: '1 dan',
      price: 'Od 21€ po osobi',
      includes: [
        'Autobusni prijevoz turističkim autobusom',
        'Smještaj u etno selu (1 noćenje)',
        'Puni pansion s tradicionalnom kuhinjom',
        'Obilazak sela uz stručno vodstvo',
        'Sudjelovanje u tradicionalnim običajima',
        'Osiguranje putnika i organizacije putovanja'
      ],
      excludes: [
        'Osobne troškove',
        'Dodatne aktivnosti po želji',
        'Putno zdravstveno osiguranje'
      ],
      startLocation: '- Čazma - Graberje - Križ - Ivanić Grad - Supernova Zagreb (Buzin) - Lučko (naplatna postaja) '
    },
    {
      id: 2,
      title: '🚌 Izlet u Krapinu i Trakošćan',
      description: 'Datum putovanja: 7. lipnja 2025. (subota)',
      imageUrl: 'https://i.postimg.cc/h43VrVqr/krapina-i-trakoscan.jpg',
      iconName: 'Palmtree',
      width: 800,
      height: 534,
      detailedDescription: `📌 Plan putovanja:
07:30 – Polazak iz Čazme (moguć ukrcaj i na stajalištima prema Zagrebu uz prethodni dogovor)
Dolazak u Krapinu i posjet Muzeju krapinskih neandertalaca – jednom od najmodernijih muzeja u Hrvatskoj, smještenom uz svjetski poznato nalazište Hušnjakovo. Muzej nudi jedinstveno iskustvo putovanja kroz evoluciju čovjeka uz pomoć interaktivnih sadržaja, atraktivnih izložaka i multimedije.
Nakon razgleda, nastavak puta prema Dvorcu Trakošćan – jednom od najljepših i najromantičnijih dvoraca u Hrvatskoj. Dvorac se uzdiže iznad slikovitog jezera i okružen je prekrasnim parkom. Unutrašnjost dvorca prikazuje plemićki život kroz stoljeća s originalnim namještajem, oružjem i umjetninama.
Slobodno vrijeme za razgled i uživanje u prirodi.
Povratak u Čazmu u večernjim satima.
✅ U cijenu izleta (25,00 €) uključeno je:
Prijevoz turističkim autobusom
Pratitelj putovanja
Organizacija putovanja od strane turističke agencije
Osiguranje jamčevine
❌ U cijenu nije uključeno:
Ulaznica za Muzej krapinskih neandertalaca – 10,00 €
Ulaznica za Dvorac Trakošćan – 10,00 €
Cijene ulaznica su izrađene na bazi odraslih osoba. Djeca, studenti i umirovljenici mogu ostvariti popuste prema pravilima objekata.
📞 Prijave i informacije:
Kezele prijevoz i turistička agencija
📱 097/623-2530
🎒 Ponesite udobnu obuću, bocu vode i fotoaparat – čeka nas dan pun povijesti, prirode i zanimljivosti!
VAŽNE INFORMACIJE:  
-Putnička agencija nije odgovorna za povećanje cijena ulaznica, fakultativnih izleta navedenih u programu na dan formiranja programa  
Za otkaze putovanja od strane putnika vrijede otkazni rokovi navedeni u Uvjetima ugovora putovanja  
-U slučaju kiše ili snijega putovanje će se realizirati ukoliko se ostvario dovoljan broj putnika  
-Tijekom putovanja agencija zadržava pravo promjene itinerara ukoliko dođe do potrebe, ali se obvezuje program ispuniti u cijelosti  
-Putnička agencija prilikom organizacije i realizacije putovanja poštuje pravila i propise “Zakona o vremenu, obveznim odmorima mobilnih radnika i uređajima za bilježenje u cestovnom prometu “kojima je između ostalog definirano vremensko zaustavljanje na odmorištima, dnevni odmor vozača, kao i maksimalno zauzeće autobusa u danu, te Vas molimo na razumijevanje i suradnju”`,
      duration: '1 dan',
      price: 'Od 25€ po osobi',
      includes: [
        'Autobusni prijevoz turističkim autobusom',
        'Ulaznice za Nacionalni park',
        'Stručno vodstvo',
        'Vožnja elektrobrodom po jezeru',
        'Vožnja panoramskim vlakom',
        'Osiguranje putnika'
      ],
      excludes: [
        'Ručak (mogućnost dogovora)',
        'Osobne troškove',
        'Dodatne sadržaje koji nisu navedeni u programu'
      ],
      startLocation: 'Čazma (06:00), Bjelovar (06:30), Zagreb (07:30)'
    },
    {
      id: 3,
      title: '🌞 LJETOVANJE U NEUMU – “Ništa do Neuma” 🌊',
      description: '30. lipnja – 3. srpnja 2025.',
      imageUrl: 'https://i.postimg.cc/KjcQMbB8/ljetovanje-neum.jpg',
      iconName: 'Cross',
      width: 800,
      height: 533,
      detailedDescription: `
🏝 NEUM – dragulj Jadrana!
Neum je jedini grad u Bosni i Hercegovini koji izlazi na Jadransko more. Poznat po svojoj dugoj obali, toplom i mirnom moru, povoljnim cijenama te opuštenoj atmosferi, Neum je savršena destinacija za ljetni odmor bez gužvi. Uživajte u prelijepim zalascima sunca, bogatoj gastronomskoj ponudi, svježim morskim specijalitetima i srdačnim domaćinima.
🚍 POLAZAK:
🕑 30.06.2025. u 02:00 sati
📍 Polazne stanice: Bjelovar – Čazma – Ivanić Grad – Zagreb (Buzin)
🕗 Dolazak u Neum u jutarnjim satima
🏨 SMJEŠTAJ:
Boravak u hotelu s 4★ na samoj obali mora
✔ Privatna plaža dostupna gostima hotela
✔ Smještaj u sobe od 14:00 sati
✔ Usluga: buffet doručak
🕶 BORAVAK U NEUMU:
Slobodno vrijeme za:
• Uživanje na uređenim plažama s blagim ulazom u more
• Opuštene šetnje uz obalnu promenadu
• Istraživanje lokalnih konoba, kafića i restorana s odličnom ponudom domaće kuhinje
• Kupovinu suvenira i lokalnih proizvoda po povoljnim cijenama
• Mogućnost fakultativnih izleta u okolicu (Dubrovnik, Ston, Mostar...)
🚌 POVRATAK:
03.07.2025. u 18:00 sati – maksimalno iskorišten dan!
💶 CIJENA ARANŽMANA UKLJUČUJE:
✔ Prijevoz turističkim autobusom
✔ Smještaj u hotelu 4★ (3 noćenja)
✔ Buffet doručak
✔ Pratitelja putovanja
✔ Osiguranje jamčevine
❌ U cijenu nije uključeno:
• Osobna potrošnja
• Fakultativni izleti
• Najam ležaljke (5 € po danu)
• Najam suncobrana (5 € po danu) 
• boravišna pristojba 1 Eur/po danu po osobi
📌 VAŽNO:
• Cijena formirana na bazi 40 putnika
• U slučaju manjeg broja putnika, agencija zadržava pravo povećanja cijene ili otkazivanja putovanja
• Agencija ne odgovara za promjene cijena fakultativnih izleta ili ulaznica
• U slučaju nepovoljnih vremenskih uvjeta, putovanje se realizira ako se skupi dovoljan broj putnika
• Tijekom putovanja moguće su promjene u itineraru uz obavezno ispunjenje programa
• Agencija poštuje zakonske propise o radu i odmoru vozača
📞 REZERVACIJE I INFORMACIJE:
Kezele prijevoz i turistička agencija
📱 097/623-2530
NIŠTA DO NEUMA – Pridružite nam se i uživajte u ljepotama jedinog bh. bisera na Jadranu! 🌞🌊`,
      duration: '5 dana',
      price: 'Od 236€ po osobi',
      includes: [
        'Autobusni prijevoz turističkim autobusom',
        'Smještaj u hotelu/pansionu s doručkom',
        'Duhovno vodstvo',
        'Posjet svim značajnim mjestima u Međugorju',
        'Osiguranje putnika i organizacije putovanja'
      ],
      excludes: [
        'Obroke koji nisu navedeni u programu',
        'Osobne troškove',
        'Putno zdravstveno osiguranje'
      ],
      startLocation: 'Polazne stanice: Bjelovar – Čazma – Ivanić Grad – Zagreb (Buzin)'
    },
    {
      id: 4,
      title: 'Etno Selo Stanišić',
      description: '🌿 Vrijeme je za wellness vikend i opuštanje prije ljeta! 🌞',
      imageUrl: 'https://i.postimg.cc/FFJHMSLG/etno-selo-stanisici.jpg',
      iconName: 'Castle',
      width: 800,
      height: 533,
      detailedDescription: `🌿 Vrijeme je za wellness vikend i opuštanje prije ljeta! 🌞
21. – 22. lipnja 2025. | Etno Selo Stanišić
Pridružite nam se na opuštajućem vikend izletu gdje ćete zaboraviti na svakodnevicu i napuniti baterije za ljeto koje dolazi! Uživajte u čarima wellnessa, prirode i mira – sve to u jedinstvenom ambijentu Etno sela Stanišić!
🚌 PLAN PUTA:
📍Subota, 21. lipnja 2025.
Polazak iz Čazme u 06:00 sati
Vožnja u smjeru Ivanić Grada – Popovače – Kutine uz kratke pauze po potrebi.
Dolazak u Etno Selo Stanišić u jutarnjim satima
Slobodno vrijeme za istraživanje sela, fotografiranje, kavicu i uživanje u idiličnom krajoliku.
Mogućnost korištenja wellness centra (uz doplatu 10 € – uključuje zatvoreni bazen, fitness salu, bio i finsku saunu, parno i tursko kupatilo, tepidarium, kneipp, bure s ledom, ogrtač, papuče i ručnike).
Večera u restoranu sela i noćenje u dvokrevetnim sobama.
📍Nedjelja, 22. lipnja 2025.
Doručak
Slobodno vrijeme za dodatno opuštanje, šetnje, kavu ili ponovnu posjetu wellnessu.
Povratak prema Čazmi u večernjim satima.
🌾 O ETNO SELU STANIŠIĆ
Smješteno u blizini Bijeljine, Etno Selo Stanišić pravo je malo carstvo mira i tradicije koje izgleda kao da je izašlo iz bajke. Kombinacija autentične arhitekture, prirode, domaće hrane i vrhunske wellness ponude čini ga idealnim mjestom za bijeg od užurbane svakodnevice. Svaka kućica, most, mlin i crkvica pažljivo su rekonstruirani kako bi dočarali duh prošlih vremena i slavenske tradicije.
💰 CIJENA UKLJUČUJE:
✔️ Prijevoz turističkim autobusom
✔️ Smještaj u dvokrevetnim sobama
✔️ Večeru (21.6.) i doručak (22.6.)
✔️ Boravišnu pristojbu
✔️ Osiguranje jamčevine
✔️ Organizaciju i vodstvo putovanja
❗CIJENA NE UKLJUČUJE:
🔹 Cjelodnevna ulaznica u wellness centar – 10,00 € (plaćanje na licu mjesta)
🔹Osobnu potrošnju 
📞 Prijave i informacije:
Kezele prijevoz i turistička agencija
📍 Čazma, Braće Radića 2 | Bjelovar, Ul. Josipa Jelačića 11a
📱 097/623-2530
🎒 Rezervirajte svoje mjesto na vrijeme i poklonite si vikend koji vraća energiju!`,
      duration: '2 dana',
      price: 'Od 110€ po osobi',
      includes: [
        'Autobusni prijevoz turističkim autobusom',
        'Smještaj u hotelu s 3-4* (2-3 noćenja)',
        'Polupansion (doručak i večera)',
        'Stručno vodstvo tijekom putovanja',
        'Razgled Dubrovnika s lokalnim vodičem',
        'Osiguranje putnika i organizacije putovanja'
      ],
      excludes: [
        'Ulaznice za znamenitosti (gradske zidine i sl.)',
        'Ručkove i piće uz obroke',
        'Osobne troškove',
        'Putno zdravstveno osiguranje'
      ],
      startLocation: 'Polazak iz Čazme u 06:00 sati. Vožnja u smjeru Ivanić Grada – Popovače – Kutine'
    }
  ];

  return (
    <section className="bg-neutral-gray py-16 animate-[wave_15s_ease-in-out_infinite]" id="popular-trips">
      <SectionTitle 
        title="Najpopularnija Putovanja" 
        description="Otkrijte omiljene destinacije naših putnika, od prirodnih ljepota Hrvatske do duhovnih hodočašća i sunčanih obala."
        lightMode={true}
      />
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 mt-8">
        {trips.map((trip, index) => (
          <TripCard 
            key={trip.id}
            title={trip.title}
            description={trip.description}
            imageUrl={trip.imageUrl}
            iconName={trip.iconName}
            delay={index * 100}
            imageWidth={trip.width}
            imageHeight={trip.height}
            tripId={trip.id}
            detailedDescription={trip.detailedDescription}
            duration={trip.duration}
            price={trip.price}
            includes={trip.includes}
            excludes={trip.excludes}
            startLocation={trip.startLocation}
            endLocation={trip.endLocation}
          />
        ))}
      </div>

      {/* Structured data for trips */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "TouristTrip",
                "name": "Izlet u Krapinu i Trakošćan",
                "description": "07:30 – Polazak iz Čazme (moguć ukrcaj i na stajalištima prema Zagrebu uz prethodni dogovor)",
                "touristType": ["Cultural", "Historical"],
                "image": "https://scontent.fzag1-2.fna.fbcdn.net/v/t39.30808-6/491592931_656896190432448_1123035946903958349_n.jpg",
                "url": "https://kezeletaiprijevoz.hr#popular-trips",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "TouristTrip",
                "name": "Etno Selo",
                "description": "Nezaboravan Izlet od 21.06.-22.06",
                "touristType": ["Cultural", "Heritage"],
                "image": "https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/492364208_662115276577206_6878523898477944732_n.jpg",
                "url": "https://kezeletaiprijevoz.hr#popular-trips",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "TouristTrip",
                "name": "Etno Selo Stanišić",
                "description": "Nezaboravan Izlet od 21.06.-22.06",
                "touristType": ["Cultural", "Heritage"],
                "image": "https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/492538786_662984746490259_4430216144466043393_n.jpg",
                "url": "https://kezeletaiprijevoz.hr#popular-trips",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "TouristTrip",
                "name": "Plitvička Jezera",
                "description": "Jednodnevni izlet do UNESCO-ve svjetske baštine, s vođenim obilaskom i slobodnim vremenom.",
                "touristType": ["Nature", "UNESCO"],
                "image": "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg",
                "url": "https://kezeletaiprijevoz.hr#popular-trips",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "350.00",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "TouristTrip",
                "name": "Međugorje Hodočašće",
                "description": "Duhovno putovanje s molitvama, posjetima svetištima i stručnim vodičem.",
                "touristType": ["Religious", "Pilgrimage"],
                "image": "https://images.pexels.com/photos/273822/pexels-photo-273822.jpeg",
                "url": "https://kezeletaiprijevoz.hr#popular-trips",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "275.00",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                "@type": "TouristTrip",
                "name": "Dubrovnik",
                "description": "Višednevni izlet do bisera Jadrana, s obilaskom povijesnih znamenitosti.",
                "touristType": ["City", "Cultural", "Historical"],
                "image": "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
                "url": "https://kezeletaiprijevoz.hr#popular-trips",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "460.00",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                }
              }
            }
          ]
        }
      `}} />
    </section>
  );
};

export default PopularTrips;
