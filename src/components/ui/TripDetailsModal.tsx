import React, { useEffect, useRef } from 'react';
import { X, Clock, MapPin, Euro, Check, X as XIcon, Calendar, Bus, Shield, Phone } from 'lucide-react';

interface TripDetailsModalProps {
  title: string;
  imageUrl: string;
  description: string;
  detailedDescription?: string;
  duration?: string;
  price?: string;
  includes?: string[];
  excludes?: string[];
  startLocation?: string;
  endLocation?: string;
  onClose: () => void;
}

const TripDetailsModal: React.FC<TripDetailsModalProps> = ({
  title,
  imageUrl,
  description,
  detailedDescription,
  duration,
  price,
  includes,
  excludes,
  startLocation,
  endLocation,
  onClose
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Handle escape key press
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    
    // Handle outside click
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);
  
  // Default values for missing data
  const defaultDuration = "Kontaktirajte nas za točno trajanje";
  const defaultPrice = "Kontaktirajte nas za cijenu";
  
  // Function to render the detailed description with preserved formatting
  const renderFormattedDescription = (text: string) => {
    if (!text) return null;
    
    // Split the text into lines
    const lines = text.split('\n');
    
    return (
      <div className="whitespace-pre-line">
        {lines.map((line, index) => {
          // Skip empty lines but preserve spacing
          if (!line.trim()) {
            return <br key={`br-${index}`} />;
          }
          
          // Headers with emoji (📌, 📍, ✅, ❌, ⚠️)
          if (line.match(/^[📌📍✅❌⚠️💶🗓🚌📞🕑📆🙏⛪🧺🕯️🚍🏠⏰].*/)) {
            return (
              <h3 key={`h-${index}`} className="text-lg font-semibold text-primary-red mt-4 mb-2">
                {line}
              </h3>
            );
          }
          
          // Sub-headers with emoji (🏘, 🔹, 💧, 🌄, 🍽, 🔁, 👉, 🚌, 🏞, 🏰, 🌲, ✝️, ⛵, 🚂, 🛒)
          if (line.match(/^[🏘🔹💧🌄🍽🔁👉🚌🏞🏰🌲✝️⛵🚂🛒🔸🏝🏨🕶☕🍷🕔].*/)) {
            return (
              <h4 key={`subh-${index}`} className="text-base font-semibold text-secondary-gold mt-3 mb-1">
                {line}
              </h4>
            );
          }
          
          // Check marks and includes (✓, ✔)
          if (line.match(/^[✓✔•].*/)) {
            return (
              <div key={`check-${index}`} className="flex items-start ml-4 mb-1">
                <span className="text-secondary-gold mr-2 flex-shrink-0">✓</span>
                <span className="text-neutral-gray">{line.substring(1).trim()}</span>
              </div>
            );
          }
          
          // List items with hyphen/bullet
          if (line.trim().startsWith('-') || line.trim().startsWith('•')) {
            return (
              <div key={`list-${index}`} className="flex items-start ml-4 mb-1">
                <span className="text-secondary-gold mr-2 flex-shrink-0">•</span>
                <span className="text-neutral-gray">{line.trim().substring(1).trim()}</span>
              </div>
            );
          }
          
          // Regular text
          return (
            <p key={`p-${index}`} className="mb-2 text-neutral-gray">
              {line}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div 
        ref={modalRef}
        className="bg-background-white rounded-xl shadow-2xl w-full max-w-4xl animate-[zoomIn_0.3s_ease-out] relative max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header with image */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          
          <div className="absolute bottom-0 left-0 p-6">
            <h2 
              id="modal-title" 
              className="text-2xl md:text-3xl font-bold text-background-white"
            >
              {title}
            </h2>
          </div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-primary-red text-background-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-red/90 transition-all duration-300"
            aria-label="Zatvori detalje"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Key details section - KEEP THESE THREE MAIN FIELDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-light-gray p-4 rounded-lg">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-secondary-gold mr-2 flex-shrink-0" />
              <div>
                <span className="text-sm text-neutral-gray">Trajanje:</span>
                <p className="text-primary-red font-medium">{duration || defaultDuration}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Euro className="w-5 h-5 text-secondary-gold mr-2 flex-shrink-0" />
              <div>
                <span className="text-sm text-neutral-gray">Cijena:</span>
                <p className="text-primary-red font-medium">{price || defaultPrice}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-secondary-gold mr-2 flex-shrink-0" />
              <div>
                <span className="text-sm text-neutral-gray">Polazak:</span>
                <p className="text-primary-red font-medium">{startLocation || "Čazma (Zagreb, Bjelovar)"}</p>
              </div>
            </div>
          </div>
          
          {/* Detailed description with emoji and formatted content support */}
          {detailedDescription ? (
            <div className="mb-8 bg-light-gray/50 p-6 rounded-lg">
              {renderFormattedDescription(detailedDescription)}
            </div>
          ) : (
            <div className="mb-8 bg-light-gray/50 p-6 rounded-lg">
              <p className="text-neutral-gray mb-4">{description}</p>
              <p className="text-neutral-gray">Za detaljniji opis putovanja i program, molimo kontaktirajte nas.</p>
            </div>
          )}
          
          {/* Call to action button */}
          <div className="flex justify-center mt-6">
            <a 
              href="tel:+385976232530"
              className="bg-primary-red text-background-white px-8 py-4 rounded-full font-bold text-lg hover:bg-background-white hover:text-primary-red hover:scale-105 transition-all duration-300 shadow-md border border-primary-red flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Rezerviraj Odmah</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsModal;