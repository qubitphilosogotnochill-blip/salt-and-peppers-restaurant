import type { Metadata } from "next";
import { Navigation, ExternalLink, Phone, Car, Train, Bus } from "lucide-react";
import LocationSection from "@/components/LocationSection";
import { RESTAURANT_DATA } from "@/data/restaurantData";

export const metadata: Metadata = {
  title: "Location & Google Maps Directions | Salt and Peppers Najafgarh, Delhi",
  description:
    "Visit Salt and Peppers at H.No. 1629, Ground Floor, Pole No. 3, Najafgarh Thana Road, Najafgarh, New Delhi 110043. Get Google Maps directions, transit routes, and opening hours.",
  alternates: {
    canonical: `${RESTAURANT_DATA.seo.siteUrl}/location`,
  },
};

export default function LocationPage() {
  return (
    <div className="bg-[#F5F0E7] text-[#252522]">
      {/* Page Header */}
      <section className="bg-[#243D32] text-[#F5F0E7] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#B58A5015_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58A50]">
              EXACT RESTAURANT COORDINATES
            </span>
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F0E7]">
            COME FIND US IN NAJAFGARH
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#E7DCCB]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Your next delicious experience is waiting. Visit Salt and Peppers on Najafgarh Thana Road, Najafgarh, New Delhi.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
            <a
              href={RESTAURANT_DATA.maps.listingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#B58A50] text-[#192b23] font-bold shadow-md hover:bg-[#d4a96a] transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>VIEW ON GOOGLE MAPS</span>
            </a>
            <a
              href={RESTAURANT_DATA.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#A6533C] text-white font-bold shadow-md hover:bg-[#ba644c] transition-colors flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Interactive Map & Details Component */}
      <LocationSection />

      {/* Local Commute & Transit Guide (High Local SEO Value for Najafgarh) */}
      <section className="py-16 sm:py-20 bg-white/70 border-t border-[#B58A50]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A6533C] block mb-2">
              DIRECTIONS & TRANSIT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#243D32]">
              How to Reach Salt and Peppers
            </h2>
            <p className="mt-3 text-sm text-[#252522]/75">
              Easily accessible from all major points in Najafgarh, Dwarka, and West Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#B58A50]/25 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#243D32] text-[#B58A50] flex items-center justify-center mb-4">
                <Train className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#243D32] mb-2">
                By Delhi Metro (Grey Line)
              </h3>
              <p className="text-xs text-[#252522]/80 leading-relaxed">
                Take the Delhi Metro Grey Line to <strong>Najafgarh Metro Station</strong> (or Dhansa Bus Stand). From the station, take a short 5-minute auto or e-rickshaw ride directly to Najafgarh Thana Road.
              </p>
            </div>

            <div className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#B58A50]/25 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#243D32] text-[#B58A50] flex items-center justify-center mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#243D32] mb-2">
                By Car / Cab
              </h3>
              <p className="text-xs text-[#252522]/80 leading-relaxed">
                Drive towards Najafgarh Main Market or Najafgarh Police Station (Thana). Turn onto Najafgarh Thana Road. We are situated on the Ground Floor at <strong>H.No. 1629, near Pole No. 3</strong>.
              </p>
            </div>

            <div className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#B58A50]/25 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#243D32] text-[#B58A50] flex items-center justify-center mb-4">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#243D32] mb-2">
                By Bus / Local Transit
              </h3>
              <p className="text-xs text-[#252522]/80 leading-relaxed">
                DTC and cluster buses connect from Uttam Nagar, Tilak Nagar, Dwarka Mor, and Gurgaon to Najafgarh Terminal. Walk or take a cycle-rickshaw to Thana Road.
              </p>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="mt-12 p-6 rounded-2xl bg-[#243D32] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#B58A50]" />
              <div>
                <span className="text-xs text-[#E7DCCB]/75 block">Need driving assistance or landmark help?</span>
                <span className="font-serif font-bold text-base text-[#F5F0E7]">
                  Call Us at {RESTAURANT_DATA.contact.phone}
                </span>
              </div>
            </div>
            <a
              href={RESTAURANT_DATA.contact.phoneTel}
              className="px-5 py-2.5 rounded-full bg-[#B58A50] text-[#192b23] text-xs font-bold uppercase tracking-wider hover:bg-[#d4a96a] transition-colors"
            >
              Call Restaurant Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
