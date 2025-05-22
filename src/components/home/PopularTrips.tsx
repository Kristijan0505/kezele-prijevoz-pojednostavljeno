import React from 'react';
import TripCard from '../ui/TripCard';
import SectionTitle from '../ui/SectionTitle';

const PopularTrips: React.FC = () => {
  const trips = [
    {
      id: 12,
      title: 'Izlet u Krapinu i Trakošćan',
      description: '07:30 – Polazak iz Čazme (moguć ukrcaj i na stajalištima prema Zagrebu uz prethodni dogovor)',
      imageUrl: 'https://scontent.fzag1-2.fna.fbcdn.net/v/t39.30808-6/491592931_656896190432448_1123035946903958349_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zsDyYEJI7IEQ7kNvwE2msN_&_nc_oc=Adkp4TH_XijfQNuaO6OEpGoAqkYAkbjxVDQP90iB2iTBUyoHoLR9vyc3g1j6WSRF0g0&_nc_zt=23&_nc_ht=scontent.fzag1-2.fna&_nc_gid=4lFJRdLBOPn9Cqg5KTK8cg&oh=00_AfJB2xGlcx9CQ6kQtoossa4xYswbCeiIrM1QWD4Jr_oPfg&oe=6824E20E',
      iconName: 'Palmtree',
      width: 800,
      height: 600,
      detailedDescription: `💧 Slap Kozjak 
      
Nakon kraće šetnje kroz šumu i duž korita rijeke, dolazimo do jednog od najljepših slapova Slovenije – Slap Kozjak. Smješten unutar prirodnog kamenog amfiteatra, ovaj 15 metara visok slap djeluje bajkovito. 
 Trajanje šetnje: cca 45 minuta (u oba smjera, lagani uspon) 
 Napomena: Slap je dostupan isključivo pješice, staza je uređena. 
🌄 Tolminska korita ,,,  

xykmklnyvyxmvčym. 
🌄🌄🌄🌄🌄


🌄
🌄

v
🌄

dsv
s
235
25
;::sf,a

Nakon obilaska Kozjaka, putovanje se nastavlja autobusom prema Tolminu, gdje nas očekuje jedna od najpoznatijih prirodnih atrakcija Julijskih Alpa. 
Tolminska korita su duboki klanci koje su izdubile rijeke Tolminka i Zadlaščica. 
Ovdje ćete vidjeti: 
Vražiji most – smješten 60 m iznad rijeke Tolminke 
Medvjeđa glava – ogromni kamen zaglavljen između stijena 
Termalni izvor – rijedak prirodni fenomen unutar korita 
Uređena staza duga cca 2 km nudi siguran i ugodan obilazak. 
Trajanje obilaska: cca 1,5 sat (umjeren tempo) 
🍽 Ručak (opcionalno) 
U prirodnom ambijentu neposredno uz korita, postoji mogućnost organiziranog ručka: 
Menu (18 EUR): 
Juha 
Pire krumpir 
Pohano pileće meso 
Pečena šnicla u umaku od gljiva 
Salata 
Desert 
👉 Ručak nije uključen u cijenu putovanja. Potrebna je najava prilikom prijave. 
🔁 Povratak 
18:00 – Polazak iz Tolmina 
Pauza za okrepu na povratku 
✅ CIJENA: 58,00 EUR 
✅ CIJENA UKLJUČUJE 
Prijevoz turističkim autobusom 
Pratitelj putovanja 
Organizacija i vodstvo od strane agencije 
Ulaznica za Slap Kozjak 
Ulaznica za Tolminska korita 
Osiguranje od odgovornosti 
❌ CIJENA NE UKLJUČUJE 
Organizirani ručak (18 EUR – uz prethodnu najavu) 
Osobna potrošnja 
⚠️ VAŽNE INFORMACIJE `,
      duration: '1 dan',
      price: 'Od 58,00€ po osobi',
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
      title: 'Etno Selo',
      description: 'Nezaboravan Izlet od 21.06.-22.06',
      imageUrl: 'https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/492364208_662115276577206_6878523898477944732_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tFfZi9pIic8Q7kNvwHIsd8L&_nc_oc=AdkHKBYegjTbtoVmOLEHXq0ceRlxewkhbhMIAqegnwFY64RcJlRvl2floKjd-bDuVCE&_nc_zt=23&_nc_ht=scontent.fzag4-1.fna&_nc_gid=6syF7cDYThbbOUcg2nafkA&oh=00_AfFSHp-hTlESh49Cmm8ru86OD5kpL5rcXh_mWAEqXqW2FA&oe=681D8113',
      iconName: 'Palmtree',
      width: 800,
      height: 600,
      detailedDescription: `📌 PLAN I PROGRAM PUTOVANJA
📍 DESTINACIJE I AKTIVNOSTI

🏞 Bled
Smješten između planinskih vrhova i zelenih brežuljaka, Bled je jedno od najljepših mjesta u Sloveniji. Poznat po bajkovitom jezeru i otoku sa crkvom, Bled nudi opuštanje, šetnju i fantastične vidike.

🔹 Bledsko jezero i otočić
Šetnja uz obalu jezera pruža savršen uvod u dan. Želite li, možete se ukrcati na tradicionalnu "pletnu" – drveni čamac koji vas vozi do otočića. Na otoku se nalazi crkva Uznesenja Marijina i poznato zvono želja koje, prema legendi, ispunjava želje onima koji ga zazvone s namjerom.
Vožnja čamcem nije uključena u cijenu (18 EUR).

🏰 Bledski dvorac
Na litici iznad jezera uzdiže se dvorac star više od tisuću godina. S njegovih terasa pogled seže preko cijelog Bleda. U sklopu dvorca nalaze se i mali muzej, vinski podrum, te rekonstrukcija tiskare iz prošlih vremena.
Ulaznica uključena u cijenu putovanja.
Obilazak traje oko sat vremena.

🌲 Vintgar klanac
Nakon pauze, krećemo prema obližnjem kanjonu – Vintgaru. Ovo je jedno od najposebnijih mjesta u Sloveniji. Rijeka Radovna stoljećima je oblikovala stjenovite prolaze i brzace, stvarajući jedinstven krajolik.
Šetnja vodi uređenim drvenim stazama i mostićima kroz divlju prirodu. Na kraju vas očekuje slap Šum.
Trajanje obilaska: oko 90 minuta.
Staza je jednostavna, no preporučuje se udobna obuća.

🍽 Ručak (opcionalno)
U obližnjem restoranu može se organizirati zajednički ručak uz prethodnu najavu.
Predloženi meni (20 EUR):
– Domaća juha
– Njoki s umakom od gljiva
– Pečena teletina
– Miješana salata
– Desert

👉 Ručak se plaća zasebno. Prijava za ručak obavezna prilikom rezervacije.

🔁 Povratak
Planirani povratak je oko 17:30 iz Vintgara. Na povratku stajemo za kraću pauzu i osvježenje.

✅ CIJENA: 62,00 EUR
✅ UKLJUČENO U CIJENU
✔ Prijevoz udobnim turističkim autobusom
✔ Voditelj putovanja
✔ Organizacija izleta
✔ Ulaznica za dvorac
✔ Ulaznica za Vintgar klanac
✔ Osiguranje od odgovornosti

❌ NIJE UKLJUČENO
✖ Vožnja čamcem do otoka (18 EUR)
✖ Ručak (20 EUR – uz najavu)
✖ Osobna potrošnja

⚠️ VAŽNE INFORMACIJE
Putovanje uključuje laganu šetnju u prirodi.
Ponesite udobnu obuću i odjeću prilagođenu vremenskim uvjetima.
Izlet nije preporučen osobama koje imaju poteškoće s hodanjem.
Za prelazak granice potrebna je osobna iskaznica ili putovnica.`,
      duration: '2 dana (21.06.-22.06.)',
      price: 'Od 95€ po osobi',
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
      startLocation: 'Čazma, Bjelovar (po dogovoru)'
    },
    {
      id: 1,
      title: 'Etno Selo Stanišić',
      description: 'Nezaboravan Izlet od 21.06.-22.06',
      imageUrl: 'https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/492538786_662984746490259_4430216144466043393_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tNXPjiBhKG4Q7kNvwGl9SAX&_nc_oc=AdncCX7QA7dGl5O6-XObuQ3Awd2TJDEOesJs5UGdKS0-4TPLu3IJRE6krCoPacmBFSM&_nc_zt=23&_nc_ht=scontent.fzag4-1.fna&_nc_gid=bOwpOWcAq_fOzqp110W5xQ&oh=00_AfHYr5P9PWOp8leh3lk7bkVR5h9dth4_00jyg8ZS1shedw&oe=681DADC4',
      iconName: 'Palmtree',
      width: 800,
      height: 600,
      detailedDescription: `📌 PLAN I PROGRAM PUTOVANJA:  
📍 DESTINACIJE I AKTIVNOSTI 
🏘 Kobarid 
Smješten u srcu doline Soče, Kobarid je mjesto bogate povijesti i nevjerojatne prirode. Grad je poznat po Kobariškoj bitki iz Prvog svjetskog rata, ali i po svojoj jedinstvenoj mješavini prirodnih ljepota i kulturne baštine. 
🔹 Napoleonov most 
Jedan od najpoznatijih simbola Kobarida. Kameni most preko rijeke Soče datira iz doba Napoleona, a danas je omiljena lokacija za fotografiranje zbog pogleda na kristalno čistu rijeku i alpske pejzaže. 
💧 Slap Kozjak 
Nakon kraće šetnje kroz šumu i duž korita rijeke, dolazimo do jednog od najljepših slapova Slovenije – Slap Kozjak. Smješten unutar prirodnog kamenog amfiteatra, ovaj 15 metara visok slap djeluje bajkovito. 
 Trajanje šetnje: cca 45 minuta (u oba smjera, lagani uspon) 
 Napomena: Slap je dostupan isključivo pješice, staza je uređena. 
🌄 Tolminska korita 
Nakon obilaska Kozjaka, putovanje se nastavlja autobusom prema Tolminu, gdje nas očekuje jedna od najpoznatijih prirodnih atrakcija Julijskih Alpa. 
Tolminska korita su duboki klanci koje su izdubile rijeke Tolminka i Zadlaščica. 
Ovdje ćete vidjeti: 
Vražiji most – smješten 60 m iznad rijeke Tolminke 
Medvjeđa glava – ogromni kamen zaglavljen između stijena 
Termalni izvor – rijedak prirodni fenomen unutar korita 
Uređena staza duga cca 2 km nudi siguran i ugodan obilazak. 
Trajanje obilaska: cca 1,5 sat (umjeren tempo) 
🍽 Ručak (opcionalno) 
U prirodnom ambijentu neposredno uz korita, postoji mogućnost organiziranog ručka: 
Menu (18 EUR): 
Juha 
Pire krumpir 
Pohano pileće meso 
Pečena šnicla u umaku od gljiva 
Salata 
Desert 
👉 Ručak nije uključen u cijenu putovanja. Potrebna je najava prilikom prijave. 
🔁 Povratak 
18:00 – Polazak iz Tolmina 
Pauza za okrepu na povratku 
✅ CIJENA: 58,00 EUR 
✅ CIJENA UKLJUČUJE 
Prijevoz turističkim autobusom 
Pratitelj putovanja 
Organizacija i vodstvo od strane agencije 
Ulaznica za Slap Kozjak 
Ulaznica za Tolminska korita 
Osiguranje od odgovornosti 
❌ CIJENA NE UKLJUČUJE 
Organizirani ručak (18 EUR – uz prethodnu najavu) 
Osobna potrošnja 
⚠️ VAŽNE INFORMACIJE 
Putovanje uključuje hodanje po prirodnim terenima, usponima i klancima. 
Obavezna udobna i čvrsta obuća – sportska ili planinarska. 
Izlet nije preporučen osobama slabije pokretljivosti. 
Prelazak granice – ne zaboravite osobnu iskaznicu.`,
      duration: '2 dana (21.06.-22.06.)',
      price: 'Od 120€ po osobi',
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
      startLocation: 'Čazma, Bjelovar (po dogovoru)'
    },
    {
      id: 2,
      title: 'Plitvička Jezera',
      description: 'Jednodnevni izlet do UNESCO-ve svjetske baštine, s vođenim obilaskom i slobodnim vremenom.',
      imageUrl: 'https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=800',
      iconName: 'Palmtree',
      width: 800,
      height: 534,
      detailedDescription: `📌 PLAN I PROGRAM PUTOVANJA
📍 DESTINACIJE I AKTIVNOSTI - PLITVIČKA JEZERA

🌄 POLAZAK
06:30 - Polazak iz Čazme
07:00 - Bjelovar
08:00 - Zagreb (po dogovoru)

Putovanje autobusom kroz predivne krajolike kontinentalne Hrvatske do Nacionalnog parka Plitvička jezera. Putem kraća pauza za osvježenje.

🏞 PLITVIČKA JEZERA - UNESCO SVJETSKA BAŠTINA
Nacionalni park Plitvička jezera najstariji je i najveći nacionalni park u Hrvatskoj, osnovan 1949. godine. Od 1979. nalazi se na UNESCO-vom popisu svjetske prirodne baštine. Park je poznat po svojim kaskadnim jezerima s kristalno čistom vodom, šumovitim padinama i spektakularnim slapovima.

🔹 GORNJA JEZERA
Nakon ulaska u park, krećemo u razgled Gornjih jezera:
- Prošćansko jezero
- Ciginovac
- Okrugljak
- Batinovac
- Veliko jezero
- Malo jezero
- Vir
- Galovac
- Milino jezero
- Gradinsko jezero

Jedinstveni fenomen ovog područja je proces stvaranja sedre - prirodne barijere koja formira slapove i jezera.

🚢 VOŽNJA BRODOM
Nakon obilaska Gornjih jezera, slijedi panoramska vožnja elektrobrodom preko jezera Kozjak - najvećeg jezera u Nacionalnom parku.

🍃 DONJA JEZERA
Nastavak obilaska stazom uz Donja jezera, gdje ćete vidjeti:
- Jezero Milanovac
- Gavanovac
- Kaluđerovac
- Novakovića Brod

Posebna atrakcija je Veliki slap - najviši slap u Hrvatskoj (78 m), koji stvara rječica Plitvica prije spajanja s Crnom rijekom.

🚂 PANORAMSKI VLAKIĆ
Na kraju obilaska vožnja panoramskim vlakom koji vas vodi natrag do izlaza iz parka.

🍽 RUČAK (opcionalno)
Oko 14:30 mogućnost organiziranog ručka u restoranu u blizini parka.
Predloženi menu (15 EUR):
- Juha dana
- Pileći ili svinjski odrezak s prilogom
- Sezonska salata
- Domaći desert

👉 Ručak se plaća dodatno, uz prethodnu najavu.

🔁 POVRATAK
16:30 - Polazak prema mjestu polaska
Pauza na povratku za osvježenje
Očekivani dolazak u večernjim satima

✅ CIJENA: 60,00 EUR po osobi
✅ CIJENA UKLJUČUJE
Prijevoz turističkim autobusom
Stručno vodstvo tijekom putovanja
Ulaznice za Nacionalni park
Vožnja elektrobrodom po jezeru
Vožnja panoramskim vlakom
Osiguranje putnika i organizacije putovanja

❌ CIJENA NE UKLJUČUJE
Ručak (15 EUR - uz prethodnu najavu)
Osobne troškove
Sve što nije navedeno pod "Cijena uključuje"

⚠️ VAŽNE INFORMACIJE
Izlet uključuje oko 5-6 km hodanja po uređenim stazama i mostićima
Preporučuje se udobna obuća i odjeća prilagođena vremenskim uvjetima
Ponijeti dovoljno vode i zaštitu od sunca tijekom ljetnih mjeseci
U slučaju kiše, ponijeti kišobran ili kabanicu`,
      duration: '1 dan',
      price: 'Od 60€ po osobi',
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
      title: 'Međugorje Hodočašće',
      description: 'Duhovno putovanje s molitvama, posjetima svetištima i stručnim vodičem.',
      imageUrl: 'https://images.pexels.com/photos/273822/pexels-photo-273822.jpeg?auto=compress&cs=tinysrgb&w=800',
      iconName: 'Cross',
      width: 800,
      height: 533,
      detailedDescription: `📌 PLAN I PROGRAM PUTOVANJA
📍 DESTINACIJE I AKTIVNOSTI - MEĐUGORJE HODOČAŠĆE

🚌 POLAZAK
05:00 - Polazak iz Čazme
05:30 - Bjelovar
06:30 - Zagreb (po dogovoru)

Vožnja autocestom prema Bosni i Hercegovini s pauzama za osvježenje.

✝️ 1. DAN - DOLAZAK U MEĐUGORJE
Po dolasku u Međugorje (oko 12:30):
- Smještaj u hotel/pansion
- Slobodno vrijeme za ručak i odmor
- 15:00 - Okupljanje i zajednički obilazak župne crkve sv. Jakova
- 16:00 - Razgled spomen parka sv. Franje i klanjanje Kristu u brončanom kipu Uskrslog Krista
- 17:00 - Krunica
- 18:00 - Sveta misa i molitva za ozdravljenje
- 19:30 - Večera u hotelu
- 21:00 - Klanjanje Presvetom oltarskom sakramentu (opcionalno)

🙏 2. DAN - BRDO UKAZANJA I KRIŽEVAC
07:30 - Doručak
08:30 - Odlazak na Brdo Ukazanja (Podbrdo) i molitva krunice
- Ovo je mjesto prvih ukazanja 1981. godine
- Postavljena su brončana reljefna obilježja otajstava krunice
- Uspon traje oko 30-45 minuta (lagani uspon po kamenom terenu)

12:00 - Povratak u hotel i slobodno vrijeme za ručak

14:00 - Križni put na Križevcu
- Brdo na kojem je 1934. godine podignut križ visok 8,5 metara
- Molitva postaja Križnog puta uz brončane reljefe
- Uspon traje oko 45-60 minuta (zahtjevniji uspon)

17:00 - Krunica u župnoj crkvi
18:00 - Sveta misa, blagoslov predmeta i molitva za ozdravljenje
19:30 - Večera

✝️ 3. DAN - POVRATAK
07:30 - Doručak
09:00 - Jutarnja molitva i pakiranje
10:00 - Slobodno vrijeme za osobnu molitvu, kupnju suvenira
11:00 - Polazak prema Hrvatskoj s kraćim stajanjima za odmor
Očekivani povratak u večernjim satima

🍽 SMJEŠTAJ I PREHRANA
- Smještaj u hotelu/pansionu 3* u Međugorju
- Usluga na bazi polupansiona (doručak i večera)
- Ručkovi se organiziraju individualno (mogućnost zajedničkog ručka uz nadoplatu)

🛒 SLOBODNO VRIJEME
Tijekom boravka bit će dovoljno slobodnog vremena za:
- Osobnu molitvu
- Kupovinu suvenira i vjerskih predmeta
- Posjet Zajednici Cenacolo (po želji)
- Odmor i druženje

✅ CIJENA: 120,00 EUR po osobi
✅ CIJENA UKLJUČUJE
Prijevoz turističkim autobusom
2 noćenja s polupansionom u hotelu/pansionu 3*
Duhovno vodstvo
Organizirani program i pratitelj putovanja
Osiguranje putnika i jamčevinu

❌ CIJENA NE UKLJUČUJE
Ručkove tijekom boravka
Osobne troškove
Putno zdravstveno osiguranje (preporučujemo)
Osiguranje od otkaza putovanja (opcionalno)

⚠️ VAŽNE INFORMACIJE
Za prelazak granice potrebna je važeća osobna iskaznica ili putovnica
Ponesite udobnu obuću za hodanje po brdovitom terenu
Rezervacija je potvrđena uplatom akontacije od 30% iznosa
Ovo je hodočašće pa se preporučuje primjereno odijevanje i ponašanje
Moguće su prilagodbe programa ovisno o vremenskim uvjetima i lokalnim okolnostima`,
      duration: '2-3 dana',
      price: 'Od 120€ po osobi',
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
      startLocation: 'Čazma, Bjelovar, Zagreb'
    },
    {
      id: 4,
      title: 'Dubrovnik',
      description: 'Višednevni izlet do bisera Jadrana, s obilaskom povijesnih znamenitosti.',
      imageUrl: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800',
      iconName: 'Castle',
      width: 800,
      height: 533,
      detailedDescription: `📌 PLAN I PROGRAM PUTOVANJA
📍 DESTINACIJE I AKTIVNOSTI - DUBROVNIK: BISER JADRANA

🚌 1. DAN - POLAZAK I PUTOVANJE
06:00 - Polazak iz Čazme
06:30 - Bjelovar
07:30 - Zagreb (po dogovoru)

Putovanje autocestom prema jugu Hrvatske s redovitim pauzama. Ručak u vlastitom aranžmanu na odmorištu.

🏨 Dolazak u Dubrovnik u popodnevnim satima (oko 16:00)
- Smještaj u hotel
- Slobodno vrijeme za odmor i osvježenje
- 19:00 - Večera u hotelu
- Večernja šetnja gradom (opcionalno)

🏰 2. DAN - STARI GRAD DUBROVNIK
07:00-08:30 - Doručak u hotelu
09:00 - Organizirani obilazak Starog grada s lokalnim vodičem:
- Ulazak kroz Pile vrata
- Stradun - glavna ulica i žila kucavica grada
- Onofrijeva fontana
- Franjevački samostan s jednom od najstarijih ljekarni u Europi
- Crkva sv. Vlaha - zaštitnika grada
- Knežev dvor - nekadašnje sjedište Dubrovačke Republike
- Sponza palača
- Katedrala Uznesenja Marijina
- Obilazak traje oko 2 sata

12:00 - Slobodno vrijeme za ručak i samostalno istraživanje grada
15:00 - Fakultativna šetnja dubrovačkim zidinama (uz nadoplatu - 25 EUR)
- Gradske zidine duge 1.940 m obilaze stari grad
- Pružaju spektakularne poglede na grad i Jadransko more
- Obilazak traje oko 1,5-2 sata

19:00 - Večera u hotelu
20:30 - Večernji program ili slobodno vrijeme

⛵ 3. DAN - ELAFITSKI OTOCI (OPCIONALNO) / SLOBODNO VRIJEME
07:00-08:30 - Doručak u hotelu

OPCIJA 1:
09:00-16:00 - Fakultativni izlet brodom na Elafitske otoke (uz nadoplatu - 40 EUR)
- Obilazak 3 naseljena otoka: Koločep, Lopud i Šipan
- Ručak na brodu uključen u cijenu izleta
- Kupanje na pješčanoj plaži Šunj (ovisno o vremenu)

OPCIJA 2:
Slobodno vrijeme za:
- Posjet muzeju Domovinskog rata na Srđu (žičara - 25 EUR povratna karta)
- Kupanje na gradskim plažama (Banje, Danče, Sv. Jakov)
- Samostalno istraživanje skrivenih kutaka grada

19:00 - Večera u hotelu

🚂 4. DAN - CAVTAT I POVRATAK
07:00-08:30 - Doručak u hotelu
09:00 - Odjava iz hotela
10:00 - Posjet obližnjem gradiću Cavtat
- Šetnja uz rivu
- Slobodno vrijeme za kavu
12:00 - Polazak prema mjestima polaska
- Pauze za odmor i ručak po putu
- Očekivani povratak u kasnim večernjim satima

🏨 SMJEŠTAJ
Hotel 3*/4* u Dubrovniku ili okolici (Mlini, Cavtat, Župa dubrovačka)
Usluga na bazi polupansiona (doručak i večera)

✅ CIJENA: 240,00 EUR po osobi
✅ CIJENA UKLJUČUJE
Prijevoz turističkim autobusom
3 noćenja s polupansionom u hotelu 3*/4*
Razgled Dubrovnika s lokalnim vodičem
Organizacija i vodstvo putovanja
Osiguranje od odgovornosti organizatora
Jamčevina

❌ CIJENA NE UKLJUČUJE
Ulaznice za gradske zidine (25 EUR)
Izlet na Elafitske otoke (40 EUR)
Žičaru na Srđ (25 EUR)
Osobne troškove
Putno zdravstveno osiguranje
Osiguranje od otkaza putovanja

⚠️ VAŽNE INFORMACIJE
Ponesite kupaći kostim i opremu za plažu (ovisno o sezoni)
Za obilazak grada preporučujemo udobnu obuću
Boravišna pristojba uključena u cijenu
Rezervacija se potvrđuje uplatom akontacije od 30%
Doplata za jednokrevetnu sobu: 90 EUR
Minimalan broj putnika za realizaciju: 40`,
      duration: '3-4 dana',
      price: 'Od 240€ po osobi',
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
      startLocation: 'Čazma, Bjelovar, Zagreb'
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
