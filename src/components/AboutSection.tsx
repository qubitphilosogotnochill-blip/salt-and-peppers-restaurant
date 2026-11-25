import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Utensils } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F5F0E7] text-[#252522] relative overflow-hidden">
      {/* Subtle background paper texture accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#85876A18_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Ambiance Photo with woven basket lights */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#B58A50]/40 shadow-xl bg-[#243D32]">
                <Image
                  src="/images/restaurant/salt-peppers-interior-ambiance.jpg"
                  alt="Salt and Peppers Restaurant Ambiance with Warm Basket Lights and Wall Art"
                  width={600}
                  height={800}
                  className="w-full h-[300px] sm:h-[420px] lg:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#B58A50] font-semibold block mb-1">
                    Warm Rustic & Contemporary
                  </span>
                  <p className="font-serif text-lg font-bold">
                    Designed for memorable dining moments
                  </p>
                </div>
              </div>

              {/* Decorative Frame border accent */}
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full border-2 border-[#A6533C]/40 rounded-3xl hidden sm:block" />

              {/* Floating Highlight Card with Official Logo */}
              <div className="absolute top-3 left-3 sm:-top-6 sm:-left-6 bg-[#243D32] text-white p-2.5 sm:p-4 rounded-2xl border-2 border-[#B58A50]/50 shadow-xl max-w-[220px] sm:max-w-xs">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#B58A50] flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-sm">
                    <Image
                      src="/images/logo.png"
                      alt="Salt and Peppers Logo"
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-serif text-sm sm:text-base font-bold text-[#F5F0E7] block">
                      100% Pure Veg
                    </span>
                    <span className="text-[10px] sm:text-xs text-[#E7DCCB]/80 block leading-snug">
                      Hygiene & Authentic Flavours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#A6533C]"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#A6533C]">
                ABOUT US
              </span>
            </div>

            {/* Exact Required Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#243D32] leading-tight">
              MORE THAN JUST A MEAL.
            </h2>

            {/* Exact Required Description */}
            <p className="mt-6 text-base sm:text-lg text-[#252522]/90 leading-relaxed font-light">
              At Salt and Peppers, we believe great food brings people together. Explore a wide variety of vegetarian flavours, from traditional Indian favourites to exciting Chinese, Italian and South Indian dishes.
            </p>

            {/* Key Pillars */}
            <div className="mt-8 space-y-4 w-full">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#B58A50]/20 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#243D32]">
                    Wholesome Vegetarian Heritage
                  </h4>
                  <p className="text-xs text-[#252522]/75 mt-0.5 leading-relaxed">
                    Dedicated pure vegetarian cuisine made with fresh, hand-selected produce and authentic spice blends.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#B58A50]/20 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#243D32]">
                    Diverse Multi-Cuisine Menu
                  </h4>
                  <p className="text-xs text-[#252522]/75 mt-0.5 leading-relaxed">
                    From North Indian tandoori curries and clay-oven breads to crispy dosas, Chinese combos, pizzas, and artisanal mocktails.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#B58A50]/20 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#243D32]">
                    Welcoming Family Dining Atmosphere
                  </h4>
                  <p className="text-xs text-[#252522]/75 mt-0.5 leading-relaxed">
                    Warm ambient lighting, rustic wooden elements, and hospitable staff ready to host families, friends, and special occasions.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#243D32] text-white hover:bg-[#192b23] text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#B58A50]" />
              </Link>

              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAF7F2] text-[#A6533C] border border-[#A6533C]/40 text-sm font-semibold transition-all"
              >
                <Utensils className="w-4 h-4" />
                <span>Browse The Menu</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
