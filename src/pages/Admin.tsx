import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import TripManager from '../components/admin/TripManager';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Set a simple password for this demo - in production, use a more secure method
  const correctPassword = 'kezele2025';
  
  useEffect(() => {
    // Check if the user is already authenticated (using sessionStorage for simplicity)
    const authStatus = sessionStorage.getItem('isAdminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    
    document.title = 'Kezele Prijevoz | Admin';
  }, []);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      setError('');
    } else {
      setError('Neispravna lozinka');
    }
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAdminAuthenticated');
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Admin Područje | Kezele Prijevoz</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Navigation />
      
      <div className="pt-32 pb-16 bg-light-gray min-h-[calc(100vh-200px)]">
        <div className="container mx-auto px-4 md:px-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-red text-center mb-8">
            Admin Područje
          </h1>
          
          {!isAuthenticated ? (
            <div className="bg-background-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-primary-red mb-4">Prijava</h2>
              
              <form onSubmit={handleLogin}>
                {error && (
                  <div className="bg-primary-red/10 text-primary-red p-3 rounded-md mb-4">
                    {error}
                  </div>
                )}
                
                <div className="mb-4">
                  <label htmlFor="password" className="block text-neutral-gray mb-2">Lozinka</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-neutral-gray/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="bg-primary-red text-background-white px-6 py-2 rounded-md hover:bg-primary-red/90 transition-colors"
                >
                  Prijava
                </button>
              </form>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-primary-red">
                  Dobrodošli u admin područje
                </h2>
                <button 
                  onClick={handleLogout}
                  className="bg-primary-red text-background-white px-4 py-2 rounded-md text-sm hover:bg-primary-red/90 transition-colors"
                >
                  Odjava
                </button>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-secondary-gold mb-4">
                  Upravljanje Putovanjima
                </h3>
                <div className="bg-background-white rounded-lg shadow-md p-6">
                  <p className="mb-4">
                    Dobrodošli u područje za upravljanje putovanjima. Ovdje možete pronaći predložak za lako dodavanje novih putovanja na vašu web stranicu.
                  </p>
                  
                  <h4 className="font-semibold text-primary-red mb-2">Kako upravljati putovanjima:</h4>
                  <ol className="list-decimal list-inside mb-4 space-y-2">
                    <li>
                      <strong>Dodavanje novog putovanja:</strong> Koristite predložak ispod za kreiranje novog putovanja i dodajte ga u <code className="bg-light-gray px-2 py-1 rounded">src/components/home/PopularTrips.tsx</code> datoteku.
                    </li>
                    <li>
                      <strong>Skrivanje putovanja:</strong> Postavite <code className="bg-light-gray px-2 py-1 rounded">id: "hidden"</code> za putovanja koja još ne želite prikazati.
                    </li>
                    <li>
                      <strong>Prikazivanje putovanja:</strong> Promijenite <code className="bg-light-gray px-2 py-1 rounded">id: "hidden"</code> u <code className="bg-light-gray px-2 py-1 rounded">id: 17</code> (ili neki drugi broj) za putovanja koja želite prikazati.
                    </li>
                    <li>
                      <strong>Uređivanje putovanja:</strong> Uredite postojeće putovanje promjenom podataka u objektu putovanja.
                    </li>
                    <li>
                      <strong>Brisanje putovanja:</strong> Uklonite objekt putovanja ili postavite <code className="bg-light-gray px-2 py-1 rounded">id: "hidden"</code> da biste ga sakrili.
                    </li>
                  </ol>
                </div>
              </div>
              
              <TripManager />
              
              <div className="mt-8 bg-light-gray p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-red mb-2">Tehnički savjet:</h3>
                <p className="text-neutral-gray">
                  Za brzi pristup admin stranici, dodajte <code className="bg-background-white px-2 py-1 rounded">/admin</code> na kraj URL-a vaše web stranice. Primjer: <code className="bg-background-white px-2 py-1 rounded">https://kezeletaiprijevoz.hr/admin</code>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;