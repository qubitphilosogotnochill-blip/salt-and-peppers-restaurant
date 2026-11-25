import Link from "next/link";
import Image from "next/image";
import { Utensils, MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#243D32] via-[#1e342a] to-[#243D32] text-[#F5F0E7] py-16 sm:py-24 lg:py-28">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B58A50]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#A6533C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#B58A500d_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Logo and badges */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#B58A50] flex items-center justify-center p-1 shadow-lg overflow-hidden shrink-0 hover:scale-105 transition-transform">
                <Image
                  src="/images/logo.png"
                  alt="Salt and Peppers Restaurant Logo"
                  width={56}
                  height={56}
                  preload={true}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-extrabold text-sm sm:text-base tracking-widest text-[#F5F0E7] uppercase">
                  SALT AND PEPPERS
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-widest text-[#B58A50] uppercase font-semibold">
                  Najafgarh, New Delhi • Pure Veg
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#192b23] text-emerald-400 border border-emerald-500/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                100% Pure Vegetarian
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#192b23] text-[#B58A50] border border-[#B58A50]/30 shadow-sm">
                <MapPin className="w-3 h-3 text-[#B58A50]" />
                Najafgarh, New Delhi
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#A6533C]/20 text-[#E7DCCB] border border-[#A6533C]/30">
                <Sparkles className="w-3 h-3 text-[#d4a96a]" />
                Family Restaurant & Bistro
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[2.15rem] sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#F5F0E7]">
              GOOD FOOD. <br />
              <span className="gold-gradient-text">GREAT MOOD.</span>
            </h1>

            {/* Supporting Text (Exact prompt requirement) */}
            <p className="mt-6 text-base sm:text-lg text-[#E7DCCB]/90 font-light leading-relaxed max-w-2xl">
              Discover a world of flavours at Salt and Peppers. From comforting Indian classics to exciting global favourites, every meal brings something delicious to the table.
            </p>

            {/* Location Subtitle callout */}
            <p className="mt-3 text-xs sm:text-sm text-[#B58A50] font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B58A50]"></span>
              H.No. 1629, Najafgarh Thana Road, Najafgarh, New Delhi – 110043
            </p>

            {/* Action Buttons (Exact prompt requirement) */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#B58A50] to-[#A6533C] text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl hover:brightness-110 active:scale-95 transition-all"
              >
                <Utensils className="w-4 h-4" />
                <span>EXPLORE OUR MENU</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/location"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#192b23] hover:bg-[#192b23]/80 text-[#F5F0E7] hover:text-[#B58A50] font-semibold text-sm tracking-wide border border-[#B58A50]/40 transition-all"
              >
                <MapPin className="w-4 h-4 text-[#B58A50]" />
                <span>FIND OUR LOCATION</span>
              </Link>
            </div>

            {/* Quick Micro-stats / Features */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#B58A50]/20 w-full grid grid-cols-3 gap-3 sm:gap-4 text-left">
              <div>
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#d4a96a] block">
                  150+
                </span>
                <span className="text-[11px] sm:text-xs text-[#E7DCCB]/70 tracking-wide block">
                  Pure Veg Dishes
                </span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#d4a96a] block">
                  10+
                </span>
                <span className="text-[11px] sm:text-xs text-[#E7DCCB]/70 tracking-wide block">
                  Cuisine Categories
                </span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#d4a96a] block">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-[#E7DCCB]/70 tracking-wide block">
                  Family Friendly
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Column — Actual Restaurant Photos */}
          <div className="lg:col-span-5 relative mt-6 sm:mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Restaurant Dining & Bar */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#B58A50]/40 shadow-2xl shadow-black/40 bg-[#192b23]">
                <Image
                  src="/images/restaurant/salt-peppers-dining-bar.jpg"
                  alt="Salt and Peppers Restaurant Dining Area with Bar and Ambient Plates"
                  width={600}
                  height={450}
                  preload={true}
                  className="w-full h-[270px] sm:h-[360px] lg:h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold text-[#B58A50] tracking-wider uppercase block">
                    Authentic Interior
                  </span>
                  <p className="font-serif text-base sm:text-lg font-bold">
                    Warm Rustic Bistro Ambience
                  </p>
                </div>
              </div>

              {/* Overlapping Floating Secondary Image: Signature Chaap Platter */}
              <div className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-6 lg:-left-10 w-44 sm:w-52 lg:w-56 rounded-2xl overflow-hidden border-2 border-[#B58A50] shadow-2xl bg-[#192b23] hidden sm:block hover:-translate-y-1 transition-transform">
                <Image
                  src="/images/restaurant/salt-peppers-signature-chaap-platter.jpg"
                  alt="Signature Tandoori Chaap Platter at Salt and Peppers"
                  width={300}
                  height={200}
                  className="w-full h-28 sm:h-32 lg:h-36 object-cover"
                />
                <div className="p-2.5 bg-[#192b23] text-left">
                  <span className="text-[10px] text-[#B58A50] uppercase font-bold tracking-wider block">
                    Signature Dish
                  </span>
                  <p className="text-xs font-semibold text-[#F5F0E7]">
                    Tandoori Soya Chaap
                  </p>
                </div>
              </div>

              {/* Floating Pure Veg Seal Badge with Official Logo */}
              <div className="absolute top-3 right-3 sm:-top-5 sm:-right-4 lg:-right-6 bg-gradient-to-br from-[#192b23] to-[#243D32] border-2 border-[#B58A50]/60 rounded-2xl p-2 sm:p-3 shadow-2xl flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-[#B58A50] overflow-hidden p-0.5 shrink-0 shadow-sm">
                  <Image
                    src="/images/logo.png"
                    alt="Salt and Peppers Seal Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-emerald-400 font-bold block">
                    Shuddh Shakahari
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">
                    100% Pure Veg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
