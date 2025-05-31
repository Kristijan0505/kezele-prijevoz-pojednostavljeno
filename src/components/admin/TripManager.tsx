import React, { useState } from 'react';
import TripTemplate from './TripTemplate';

const TripManager: React.FC = () => {
  const [tab, setTab] = useState<'add' | 'guide'>('add');
  
  return (
    <div className="bg-background-white rounded-lg shadow-lg p-6">
      <div className="flex mb-6 border-b border-light-gray">
        <button
          className={`px-4 py-2 font-medium ${tab === 'add' ? 'text-primary-red border-b-2 border-primary-red' : 'text-neutral-gray hover:text-secondary-gold'}`}
          onClick={() => setTab('add')}
        >
          Dodavanje putovanja
        </button>
        <button
          className={`px-4 py-2 font-medium ${tab === 'guide' ? 'text-primary-red border-b-2 border-primary-red' : 'text-neutral-gray hover:text-secondary-gold'}`}
          onClick={() => setTab('guide')}
        >
          Vodič za formatiranje
        </button>
      </div>
      
      {tab === 'add' && (
        <TripTemplate />
      )}
      
      {tab === 'guide' && (
        <div className="bg-light-gray p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-primary-red mb-4">Vodič za formatiranje opisa putovanja</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary-gold mb-2">Struktura detaljnog opisa</h3>
              <p className="mb-2 text-neutral-gray">Detaljni opis putovanja trebao bi sadržavati sljedeće elemente:</p>
              <ul className="list-disc list-inside space-y-1 text-neutral-gray">
                <li>Datum i osnovne informacije o putovanju</li>
                <li>Plan puta s vremenskim okvirom</li>
                <li>Destinacije i aktivnosti</li>
                <li>Cijenu i što je uključeno</li>
                <li>Što nije uključeno u cijenu</li>
                <li>Važne napomene i dodatne informacije</li>
                <li>Kontakt za rezervacije</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-secondary-gold mb-2">Korištenje emojija</h3>
              <p className="mb-2 text-neutral-gray">Emojiji čine opise vizualno atraktivnijima i olakšavaju snalaženje:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-neutral-gray">
                <div>📅 - Za datume</div>
                <div>🚌 - Za prijevoz</div>
                <div>🏨 - Za smještaj</div>
                <div>🍽 - Za obroke</div>
                <div>✅ - Za uključene stavke</div>
                <div>❌ - Za stavke koje nisu uključene</div>
                <div>⚠️ - Za važne napomene</div>
                <div>📞 - Za kontakt informacije</div>
                <div>🔹 - Za važne točke</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-secondary-gold mb-2">Formatiranje liste</h3>
              <p className="mb-2 text-neutral-gray">Za liste koristite crtu ili točku:</p>
              <div className="bg-background-white p-4 rounded-md">
                <pre className="text-neutral-gray text-sm">
{`- Prva stavka
- Druga stavka
- Treća stavka

ili

• Prva stavka
• Druga stavka
• Treća stavka`}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-secondary-gold mb-2">Primjer dobro formatiranog opisa</h3>
              <div className="bg-background-white p-4 rounded-md">
                <pre className="text-neutral-gray text-sm whitespace-pre-wrap">
{`📅 21. – 22. lipnja 2025.

🚌 PLAN PUTA:

📍 Dan 1 (21.6.2025.):
- Polazak iz Čazme u 06:00 sati
- Dolazak na destinaciju oko 11:00
- Slobodno vrijeme za ručak i razgled

🍽 Večera i noćenje:
- Večera u lokalnom restoranu
- Smještaj u hotelu s 4 zvjezdice

📍 Dan 2 (22.6.2025.):
- Doručak u hotelu
- Razgled okolice i slobodno vrijeme
- Polazak za Hrvatsku u 17:00

✅ CIJENA UKLJUČUJE:
- Prijevoz turističkim autobusom
- Smještaj u dvokrevetnim sobama
- Večeru i doručak
- Pratitelja putovanja

❌ CIJENA NE UKLJUČUJE:
- Osobnu potrošnju
- Ulaznice za fakultativne sadržaje

⚠️ NAPOMENE:
- Ponesite udobnu obuću i odjeću
- Putovnica ili osobna iskaznica obavezna

📞 Rezervacije: 097/623-2530`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripManager;