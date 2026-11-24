import type { Metadata } from "next";
import Link from "next/link";
import { Utensils, MapPin, Camera } from "lucide-react";
import FoodGallery from "@/components/FoodGallery";
import { RESTAURANT_DATA } from "@/data/restaurantData";

export const metadata: Metadata = {
  title: "Food & Interior Gallery | Warm Rustic Ambiance in Najafgarh, Delhi",
  description:
    "Explore the visual gallery of Salt and Peppers restaurant in Najafgarh, Delhi. See our modern dining rooms, handwoven basket lamps, bar counter, and authentic vegetarian culinary creations.",
  alternates: {
    canonical: `${RESTAURANT_DATA.seo.siteUrl}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-[#F5F0E7] text-[#252522]">
      {/* Header */}
      <section className="bg-[#243D32] text-[#F5F0E7] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#B58A5015_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58A50]">
              VISUAL REPERTOIRE
            </span>
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F0E7]">
            RESTAURANT & FOOD GALLERY
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#E7DCCB]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Step inside Salt and Peppers. A photographic journey showcasing our warm rustic interiors, ambient lighting, and signature vegetarian dishes in Najafgarh, New Delhi.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-[#B58A50]">
            <span className="flex items-center gap-1">
              <Camera className="w-3.5 h-3.5" /> Authentic Restaurant Photos
            </span>
            <span>•</span>
            <span>Interactive Fullscreen Lightbox</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Gallery */}
      <FoodGallery />

      {/* Invitation Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#243D32] text-white rounded-3xl p-8 sm:p-12 text-center border-2 border-[#B58A50]/40 shadow-xl">
          <span className="text-xs uppercase tracking-widest text-[#B58A50] font-semibold block mb-2">
            EXPERIENCE IT IN PERSON
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F0E7]">
            Visit Salt and Peppers in Najafgarh Today
          </h2>
          <p className="text-xs sm:text-sm text-[#E7DCCB]/85 mt-2 max-w-xl mx-auto leading-relaxed">
            Located on Najafgarh Thana Road. Treat your family and friends to an extraordinary vegetarian dining experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/menu"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#B58A50] to-[#A6533C] text-white text-xs sm:text-sm font-semibold shadow-md hover:brightness-110 transition-all flex items-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Our Menu</span>
            </Link>
            <Link
              href="/location"
              className="px-6 py-3 rounded-full bg-[#192b23] text-white border border-[#B58A50]/40 text-xs sm:text-sm font-semibold hover:text-[#B58A50] transition-colors flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#B58A50]" />
              <span>Find Our Location</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
