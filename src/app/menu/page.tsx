import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import MenuBookletSlider from "@/components/MenuBookletSlider";
import { RESTAURANT_DATA } from "@/data/restaurantData";

export const metadata: Metadata = {
  title: "Explore Our Menu & Prices | Pure Vegetarian Food in Najafgarh, Delhi",
  description:
    "Explore the complete menu and authentic prices at Salt and Peppers, Najafgarh. Featuring North Indian gravies, Chinese noodles, South Indian dosas, Italian pizzas, Kathi rolls, momos, mocktails, and shakes.",
  alternates: {
    canonical: `${RESTAURANT_DATA.seo.siteUrl}/menu`,
  },
};

export default function MenuPage() {
  return (
    <div className="bg-[#F5F0E7] text-[#252522]">
      {/* Page Header */}
      <section className="bg-[#243D32] text-[#F5F0E7] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#B58A5015_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58A50]">
              AUTHENTIC ORIGINAL MENU & PRICES
            </span>
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F0E7]">
            EXPLORE OUR MENU
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#E7DCCB]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Something delicious for every craving.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-[#B58A50]">
            Browse our official 12-page restaurant menu booklet with genuine pricing below.
          </p>
        </div>
      </section>

      {/* Main Booklet Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MenuBookletSlider />
      </section>

      {/* Structured Category Overview for Technical and Local SEO */}
      <section className="py-16 sm:py-20 bg-white/70 border-t border-[#B58A50]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A6533C] block mb-2">
              COMPREHENSIVE CUISINES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#243D32]">
              Menu Categories at Salt and Peppers
            </h2>
            <p className="mt-3 text-sm text-[#252522]/75">
              Every section is freshly prepared with genuine pure vegetarian ingredients in Najafgarh, New Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {RESTAURANT_DATA.navCategories.map((cat, idx) => (
              <div
                key={cat.name}
                className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#B58A50]/25 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#A6533C] tracking-wider uppercase">
                      Category 0{idx + 1}
                    </span>
                    <span className="text-[10px] bg-[#243D32] text-white px-2 py-0.5 rounded-full font-mono">
                      Pure Veg
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#243D32] mb-2">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-[#252522]/80 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E7DCCB]">
                    {cat.subItems.map((subItem) => (
                      <span
                        key={subItem}
                        className="text-[11px] bg-white px-2.5 py-1 rounded-lg text-[#252522] border border-[#B58A50]/20 font-medium"
                      >
                        {subItem}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 text-xs text-[#85876A]">
                  Pages {cat.pageIndices.map((i) => i + 1).join(", ")} in booklet
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice & Reservation Card */}
          <div className="mt-14 bg-[#243D32] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#B58A50]/40">
            <div>
              <span className="text-xs font-semibold text-[#B58A50] uppercase tracking-wider block mb-1">
                Table Reservation & Takeaway
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F5F0E7]">
                Ready to Order or Dine With Us?
              </h3>
              <p className="text-xs sm:text-sm text-[#E7DCCB]/80 mt-1 max-w-lg">
                Call directly for table bookings, birthday gatherings, or takeaway pickups on Najafgarh Thana Road.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={RESTAURANT_DATA.contact.phoneTel}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#B58A50] to-[#A6533C] text-white font-semibold text-xs sm:text-sm shadow-md hover:brightness-110 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {RESTAURANT_DATA.contact.phone}</span>
              </a>

              <Link
                href="/location"
                className="px-6 py-3 rounded-full bg-[#192b23] text-white border border-[#B58A50]/40 font-semibold text-xs sm:text-sm hover:text-[#B58A50] transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#B58A50]" />
                <span>Find Our Location</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
