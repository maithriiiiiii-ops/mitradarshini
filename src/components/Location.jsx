import { siteData } from "@/data/site";
import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  const mapUrl = siteData.mapsUrl;

  return (
    <section id="location" className="py-20 bg-brand-cream relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1 relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-xl border border-brand-green/10 bg-brand-bg/50">
            {/* If there is a real Google maps embed URL, use it here, otherwise use a placeholder with a link */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[url('/logo-3.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-brand-bg/90 backdrop-blur-[2px]"></div>
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-brand-gold/20 max-w-sm">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-brand-brown mb-2">
                  {siteData.name}
                </h3>
                <p className="text-brand-text/80 text-sm mb-6">
                  {siteData.address}
                </p>
                <a 
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-brand-green text-white font-medium rounded-lg hover:bg-brand-brown transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Maps
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-brand-gold"></span>
              <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                Find Us
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-green mb-8 leading-tight">
              Visit <span className="text-brand-gold">Mitra Darshini</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-brand-gold/20 p-3 rounded-full text-brand-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-brown mb-2">Address</h4>
                  <p className="text-brand-text/80 leading-relaxed max-w-md">
                    {siteData.address.split(', ').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </p>
                </div>
              </div>

              {siteData.directionsExtra && (
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-gold/20 p-3 rounded-full text-brand-gold">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-brown mb-2">Directions</h4>
                    <p className="text-brand-text/80 leading-relaxed max-w-md italic">
                      {siteData.directionsExtra}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10">
              <a 
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-brand-gold text-brand-text font-bold rounded-full hover:bg-brand-gold-warm transition-transform hover:-translate-y-1 shadow-md"
              >
                Get Directions
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
