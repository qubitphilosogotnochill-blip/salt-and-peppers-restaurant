"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurantData";

export default function FoodGallery() {
  const [activeFilter, setActiveFilter] = useState<"all" | "ambiance" | "dishes">("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems = RESTAURANT_DATA.gallery.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] text-[#252522] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#A6533C]"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#A6533C]">
                VISUAL MOMENTS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#243D32]">
              FOOD & AMBIANCE GALLERY
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#252522]/75 max-w-xl font-light">
              Step inside Salt and Peppers. Explore our warm rustic interiors, ambient dining spaces, and handcrafted vegetarian specialties in Najafgarh, New Delhi.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#E7DCCB]/60 p-1.5 rounded-full self-start md:self-end border border-[#B58A50]/20">
            <button
              onClick={() => setActiveFilter("all")}
              className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-[#243D32] text-white shadow-sm"
                  : "text-[#252522] hover:text-[#243D32]"
              }`}
            >
              All Highlights
            </button>
            <button
              onClick={() => setActiveFilter("ambiance")}
              className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                activeFilter === "ambiance"
                  ? "bg-[#243D32] text-white shadow-sm"
                  : "text-[#252522] hover:text-[#243D32]"
              }`}
            >
              Ambiance & Seating
            </button>
            <button
              onClick={() => setActiveFilter("dishes")}
              className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                activeFilter === "dishes"
                  ? "bg-[#243D32] text-white shadow-sm"
                  : "text-[#252522] hover:text-[#243D32]"
              }`}
            >
              Signature Dishes
            </button>
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Card 1: Dining & Bar - spans 7 cols */}
          <div
            onClick={() => setSelectedItemIndex(0)}
            className="md:col-span-7 group relative rounded-3xl overflow-hidden cursor-pointer border-2 border-[#B58A50]/30 shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#243D32] min-h-[340px] sm:min-h-[420px]"
          >
            <Image
              src="/images/restaurant/salt-peppers-dining-bar.jpg"
              alt="Salt and Peppers Dining Room and Bar Area"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-wider text-[#B58A50] font-semibold block mb-1">
                Ambiance & Interiors
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Modern Dining Tables & Bar Counter
              </h3>
              <p className="text-xs sm:text-sm text-[#E7DCCB]/80 mt-1 line-clamp-2">
                Comfortable chairs, wooden dining tables, ambient wall plates, and modern beverage service.
              </p>
            </div>
            <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Lighting & Woven basket lamps - spans 5 cols */}
          <div
            onClick={() => setSelectedItemIndex(1)}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden cursor-pointer border-2 border-[#B58A50]/30 shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#243D32] min-h-[340px] sm:min-h-[420px]"
          >
            <Image
              src="/images/restaurant/salt-peppers-interior-ambiance.jpg"
              alt="Warm Lighting and Handwoven Wicker Lamps at Salt and Peppers"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-wider text-[#B58A50] font-semibold block mb-1">
                Lighting & Mood
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Artisanal Basket Lighting & Booths
              </h3>
              <p className="text-xs sm:text-sm text-[#E7DCCB]/80 mt-1 line-clamp-2">
                Warm ambient lighting creating an inviting, comfortable family dining space.
              </p>
            </div>
            <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Signature Chaap Platter - spans full width or 12 cols */}
          <div
            onClick={() => setSelectedItemIndex(2)}
            className="md:col-span-12 group relative rounded-3xl overflow-hidden cursor-pointer border-2 border-[#B58A50]/30 shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#243D32] min-h-[280px] sm:min-h-[350px]"
          >
            <Image
              src="/images/restaurant/salt-peppers-signature-chaap-platter.jpg"
              alt="Signature Soya Chaap and Tandoori Tikka Platter"
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 transition-colors" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#B58A50] font-semibold block mb-1">
                  Signature Dish
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  S&P Special Tandoori Chaap Platter
                </h3>
                <p className="text-xs sm:text-sm text-[#E7DCCB]/80 mt-1 max-w-xl">
                  Char-grilled vegetarian soya chaap marinated with royal aromatic spices, fresh lemon slices, and crisp onion salad.
                </p>
              </div>

              <div className="self-start sm:self-auto">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#B58A50] to-[#A6533C] text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  Authentic House Recipe
                </span>
              </div>
            </div>
            <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white animate-fadeIn">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/20 pb-4">
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold">
                {selectedItem.title}
              </h4>
              <p className="text-xs text-[#B58A50]">{selectedItem.description}</p>
            </div>
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#A6533C] text-white transition-colors"
              title="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Middle Image */}
          <div className="flex-1 relative flex items-center justify-center p-2 sm:p-6 my-2">
            <div className="relative max-w-4xl max-h-[75vh] w-full h-[65vh]">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-[#A6533C] text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-[#A6533C] text-white flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between border-t border-white/20 pt-4 text-xs text-white/70">
            <span>
              Image {selectedItemIndex! + 1} of {filteredItems.length}
            </span>
            <span>Salt and Peppers Restaurant • Najafgarh, New Delhi</span>
          </div>
        </div>
      )}
    </section>
  );
}
