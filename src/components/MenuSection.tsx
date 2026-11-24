"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Utensils, ArrowRight, Search } from "lucide-react";
import MenuBookletSlider from "@/components/MenuBookletSlider";
import { RESTAURANT_DATA } from "@/data/restaurantData";

export default function MenuSection() {
  const [searchQuery, setSearchQuery] = useState("");

  // Search filter across all menu items
  const allSubcategories = RESTAURANT_DATA.menuBooklet.flatMap((page) =>
    page.subcategories.map((sub) => ({
      ...sub,
      categoryName: page.category,
      pageNumber: page.pageNumber,
    }))
  );

  const filteredResults = searchQuery.trim()
    ? allSubcategories
        .map((sub) => ({
          ...sub,
          items: sub.items.filter(
            (item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (item.description &&
                item.description.toLowerCase().includes(searchQuery.toLowerCase()))
          ),
        }))
        .filter((sub) => sub.items.length > 0)
    : [];

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#F5F0E7] text-[#252522] relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#85876A15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#A6533C]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#A6533C]">
              OUR CULINARY REPERTOIRE
            </span>
            <span className="w-6 h-0.5 bg-[#A6533C]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#243D32]">
            EXPLORE OUR MENU
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#252522]/85 font-light leading-relaxed">
            Something delicious for every craving.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-[#85876A]">
            Swipe, zoom, or flip through our authentic 12-page restaurant menu booklet.
          </p>
        </motion.div>

        {/* Quick Dish Search Bar with Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <Search className="w-4 h-4 text-[#85876A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Paneer Tikka, Dosa, Momos, Mojito...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/95 border border-[#B58A50]/35 text-sm focus:outline-none focus:ring-2 focus:ring-[#B58A50] placeholder-[#85876A]/60 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#85876A] hover:text-[#252522]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Search Dropdown Results */}
          {searchQuery.trim() && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 bg-white rounded-2xl p-4 border border-[#B58A50]/30 shadow-xl max-h-72 overflow-y-auto"
            >
              {filteredResults.length > 0 ? (
                <div className="space-y-4">
                  <span className="text-[11px] font-semibold text-[#85876A] uppercase tracking-wider block">
                    Found in our authentic menu:
                  </span>
                  {filteredResults.map((sub, sIdx) => (
                    <div key={sIdx} className="border-b border-[#E7DCCB] pb-2 last:border-none">
                      <span className="text-xs font-serif font-bold text-[#A6533C] block mb-1">
                        {sub.title} (Page {sub.pageNumber})
                      </span>
                      <div className="space-y-1">
                        {sub.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-center justify-between text-xs py-1">
                            <span className="font-medium text-[#252522]">{item.name}</span>
                            <span className="font-serif font-bold text-[#243D32] bg-[#FAF7F2] px-2 py-0.5 rounded">
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#85876A] text-center py-2">
                  No direct dish match found. Browse our booklet below to view all items!
                </p>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* The Flagship Feature: Menu Booklet Slider with Embossed Logo embedded right above it */}
        <MenuBookletSlider showEmbossedLogo={true} />

        {/* Bottom CTA to Full Dedicated Menu Page with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#243D32] to-[#192b23] text-white hover:text-[#B58A50] font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all border border-[#B58A50]/30"
          >
            <Utensils className="w-4 h-4 text-[#B58A50]" />
            <span>View Full Menu & Comprehensive Price List</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
