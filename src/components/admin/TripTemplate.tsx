import React, { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';

const TripTemplate: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  const templateText = `{
  id: "hidden",
  title: "🚌 NASLOV PUTOVANJA",
  description: "Kratak opis (datum, destinacija)",
  imageUrl: "https://example.com/image.jpg",
  iconName: "Palmtree",
  width: 800,
  height: 600,
  detailedDescription: \`📅 Datum: DD.MM.YYYY.

📍 PLAN PUTA:
- Prva stavka
- Druga stavka

✅ CIJENA UKLJUČUJE:
- Stavka 1
- Stavka 2

❌ CIJENA NE UKLJUČUJE:
- Stavka 1
- Stavka 2

⚠️ NAPOMENE:
- Napomena 1
- Napomena 2

📞 Rezervacije: 097/623-2530
E-mail: kezele.prijevoz@gmail.com\`,
  duration: "X dana",
  price: "XX€ po osobi",
  includes: [
    "Stavka 1",
    "Stavka 2"
  ],
  excludes: [
    "Stavka 1",
    "Stavka 2"
  ],
  startLocation: "Polazak iz: Mjesto 1, Mjesto 2, Mjesto 3"
}`;

  const copyTemplate = () => {
    navigator.clipboard.writeText(templateText);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="p-6 bg-background-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-primary-red">Predložak za Novo Putovanje</h2>
        <button
          onClick={copyTemplate}
          className="flex items-center gap-2 bg-secondary-gold text-background-white px-3 py-2 rounded-md hover:bg-secondary-gold/90 transition-colors"
          aria-label="Kopiraj predložak"
        >
          {copied ? (
            <>
              <CheckCircle className="w-5 h-5" />
              <span>Kopirano!</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              <span>Kopiraj</span>
            </>
          )}
        </button>
      </div>
      
      <p className="mb-4 text-neutral-gray">
        Kopirajte predložak ispod, zamijenite primjere svojim podacima, i dodajte u <code className="bg-light-gray px-2 py-1 rounded">src/components/home/PopularTrips.tsx</code> datoteku u listu <code className="bg-light-gray px-2 py-1 rounded">trips</code>. Kada želite objaviti putovanje, promijenite <code className="bg-light-gray px-2 py-1 rounded">id: "hidden"</code> u <code className="bg-light-gray px-2 py-1 rounded">id: 17</code> ili neki drugi brojčani ID.
      </p>
      
      <div className="bg-neutral-gray p-4 rounded-lg overflow-auto">
        <pre className="text-background-white font-mono text-sm whitespace-pre-wrap">
          {templateText}
        </pre>
      </div>
      
      <div className="mt-6 bg-light-gray p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-primary-red mb-2">Upute za korištenje:</h3>
        <ol className="list-decimal list-inside space-y-2 text-neutral-gray">
          <li>Kopirajte predložak koristeći gumb "Kopiraj"</li>
          <li>Zamijenite primjere svojim stvarnim podacima putovanja</li>
          <li>Dodajte ovaj objekt u listu putovanja u <code className="bg-background-white px-2 py-0.5 rounded">PopularTrips.tsx</code> datoteci</li>
          <li>Zadržite <code className="bg-background-white px-2 py-0.5 rounded">id: "hidden"</code> dok putovanje nije spremno za objavu</li>
          <li>Kada želite objaviti putovanje, promijenite <code className="bg-background-white px-2 py-0.5 rounded">id</code> u broj (npr. 17, 18, 19...)</li>
          <li>Sliku putovanja postavite na neki od servisa poput PostImg.cc i kopirajte direktnu poveznicu slike</li>
          <li>Za ikone možete koristiti: "Palmtree", "Cross" ili "Castle"</li>
        </ol>
      </div>
      
      <div className="mt-6 bg-light-gray p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-primary-red mb-2">Savjeti za formatiranje opisa:</h3>
        <ul className="list-disc list-inside space-y-2 text-neutral-gray">
          <li>Koristite <code className="bg-background-white px-2 py-0.5 rounded">\`</code> (backtick) za početak i kraj detaljnog opisa (omogućava višelinijski tekst)</li>
          <li>Koristite emojije za vizualno privlačnije opise (📅, 🚌, ✅, ❌, 📞, itd.)</li>
          <li>Koristite crte (-) za liste</li>
          <li>Koristite prazne linije za razmak između odjeljaka</li>
        </ul>
      </div>
    </div>
  );
};

export default TripTemplate;