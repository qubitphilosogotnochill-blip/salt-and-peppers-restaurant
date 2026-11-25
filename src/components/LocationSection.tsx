import { MapPin, Navigation, ExternalLink, Phone, Clock, Compass, ShieldCheck } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurantData";

export default function LocationSection() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F5F0E7] text-[#252522] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Exact prompt requirements) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#A6533C]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#A6533C]">
              FIND OUR RESTAURANT
            </span>
            <span className="w-6 h-0.5 bg-[#A6533C]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#243D32]">
            COME FIND US.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#252522]/85 font-light leading-relaxed">
            Your next delicious experience is waiting. Visit Salt and Peppers in Najafgarh, Delhi.
          </p>
        </div>

        {/* Two Column Layout: Details Card + Interactive Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#243D32] text-[#F5F0E7] rounded-3xl p-6 sm:p-8 border-2 border-[#B58A50]/40 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B58A50]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#B58A50]/20">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#B58A50] font-semibold block">
                    Verified Business Listing
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#F5F0E7]">
                    {RESTAURANT_DATA.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#192b23] border border-[#B58A50]/50 flex items-center justify-center text-[#B58A50]">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              {/* Exact Address */}
              <div className="mt-6 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#B58A50] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-[#B58A50] uppercase font-bold tracking-wider block mb-1">
                    Complete Address
                  </span>
                  <address className="not-italic text-sm sm:text-base text-[#F5F0E7]/95 font-medium leading-relaxed">
                    {RESTAURANT_DATA.address.full}
                  </address>
                  <p className="text-xs text-[#E7DCCB]/70 mt-1">
                    Landmark: Near Najafgarh Thana, Pole No. 3
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-6 flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#B58A50] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-[#B58A50] uppercase font-bold tracking-wider block mb-1">
                    Official Contact Number
                  </span>
                  <a
                    href={RESTAURANT_DATA.contact.phoneTel}
                    className="text-base sm:text-lg font-bold text-[#F5F0E7] hover:text-[#d4a96a] transition-colors"
                  >
                    {RESTAURANT_DATA.contact.phone}
                  </a>
                  <p className="text-xs text-[#E7DCCB]/70 mt-0.5">
                    Call for reservations, takeaway & inquiries
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-6 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#B58A50] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-[#B58A50] uppercase font-bold tracking-wider block mb-1">
                    Dining Hours
                  </span>
                  <p className="text-sm font-semibold text-[#F5F0E7]">
                    {RESTAURANT_DATA.hours.display}
                  </p>
                  <p className="text-xs text-[#E7DCCB]/70 mt-0.5">
                    Open all 7 days for lunch, snacks & dinner
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons (Exact prompt requirement) */}
            <div className="mt-8 pt-6 border-t border-[#B58A50]/20 flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_DATA.maps.listingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#B58A50] hover:bg-[#d4a96a] text-[#192b23] font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                <span>VIEW ON GOOGLE MAPS</span>
              </a>

              <a
                href={RESTAURANT_DATA.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#A6533C] hover:bg-[#ba644c] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed Container */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl p-3 sm:p-4 border-2 border-[#B58A50]/35 shadow-xl relative min-h-[340px] sm:min-h-[460px] lg:min-h-[500px]">
            {/* Top Bar for Map */}
            <div className="flex items-center justify-between gap-2 px-2 sm:px-3 py-2 border-b border-[#E7DCCB] mb-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 inline-block shrink-0"></span>
                <span className="text-[11px] sm:text-xs font-semibold text-[#243D32] truncate">
                  Live Location: Najafgarh Thana Road
                </span>
              </div>
              <a
                href={RESTAURANT_DATA.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs text-[#A6533C] hover:underline font-medium inline-flex items-center gap-1 shrink-0"
              >
                Open in App
                <Navigation className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Iframe */}
            <div className="flex-1 w-full rounded-2xl overflow-hidden relative border border-[#B58A50]/20 bg-[#FAF7F2]">
              <iframe
                title="Salt and Peppers Restaurant Google Maps Location"
                src={RESTAURANT_DATA.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[440px]"
              />

              {/* Floating Map Badge */}
              <div className="absolute bottom-3 left-3 max-w-[calc(100%-24px)] bg-[#243D32]/95 text-white text-[11px] sm:text-xs px-3 sm:px-3.5 py-2 rounded-xl backdrop-blur-sm border border-[#B58A50]/40 shadow-lg pointer-events-none flex items-center gap-2 truncate">
                <MapPin className="w-3.5 h-3.5 text-[#B58A50] shrink-0" />
                <span className="font-semibold">SALT AND PEPPERS</span>
                <span className="text-[#B58A50]">| Najafgarh</span>
              </div>
            </div>

            {/* Fallback & Verified link notice */}
            <div className="mt-3 px-3 py-2 bg-[#FAF7F2] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#252522]/75 border border-[#E7DCCB]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Exact verified coordinates in Najafgarh, Delhi – 110043
              </span>
              <a
                href={RESTAURANT_DATA.maps.listingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#A6533C] hover:text-[#8c422e] underline flex items-center gap-1"
              >
                Open Official Google Maps Listing →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
