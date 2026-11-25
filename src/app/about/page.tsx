import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, ShieldCheck, ArrowRight } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurantData";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us | Pure Vegetarian Bistro & Family Restaurant in Najafgarh",
  description:
    "Discover Salt and Peppers in Najafgarh, Delhi. A warm, rustic, and contemporary pure vegetarian restaurant serving North Indian, Chinese, South Indian, and Italian cuisine.",
  alternates: {
    canonical: `${RESTAURANT_DATA.seo.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#F5F0E7] text-[#252522]">
      {/* Page Hero Header */}
      <section className="bg-[#243D32] text-[#F5F0E7] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#B58A5015_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58A50]">
              OUR PHILOSOPHY & STORY
            </span>
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F0E7]">
            ABOUT SALT AND PEPPERS
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#E7DCCB]/90 max-w-2xl mx-auto font-light leading-relaxed">
            More than just a meal — a gathering place in Najafgarh, New Delhi dedicated to authentic pure vegetarian flavours, warm hospitality, and memorable family moments.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-[#B58A50]">
            <span>🌿 100% Pure Vegetarian</span>
            <span>•</span>
            <span>Family Bistro Dining</span>
            <span>•</span>
            <span>Najafgarh Thana Road</span>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A6533C] font-bold block mb-1">
                OUR CULINARY COMMITMENT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#243D32] leading-tight">
                MORE THAN JUST A MEAL.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#252522]/90 leading-relaxed font-light">
              At Salt and Peppers, we believe great food brings people together. Explore a wide variety of vegetarian flavours, from traditional Indian favourites to exciting Chinese, Italian and South Indian dishes.
            </p>

            <p className="text-sm sm:text-base text-[#252522]/80 leading-relaxed">
              Located on Najafgarh Thana Road in New Delhi, our restaurant was envisioned as a sanctuary for food lovers who cherish authentic taste without compromising on pure vegetarian ethics. Every dish that leaves our kitchen is prepared using fresh ingredients, traditional spices, and the highest standards of culinary hygiene.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-[#B58A50]/30 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#243D32]">100% Shuddh Shakahari</h4>
                <p className="text-xs text-[#85876A] mt-1 leading-relaxed">
                  Strictly vegetarian kitchen with uncompromising quality checks and fresh vegetable sourcing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#B58A50]/30 shadow-sm">
                <Users className="w-6 h-6 text-[#A6533C] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#243D32]">Family-Centric Comfort</h4>
                <p className="text-xs text-[#85876A] mt-1 leading-relaxed">
                  Spacious seating, welcoming music, and attentive service tailored for families and large groups.
                </p>
              </div>
            </div>
          </div>

          {/* Right Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#B58A50]/40 shadow-xl bg-[#243D32]">
              <Image
                src="/images/restaurant/salt-peppers-dining-bar.jpg"
                alt="Salt and Peppers Dining Room"
                width={550}
                height={400}
                className="w-full h-[360px] object-cover"
              />
              <div className="p-5 bg-[#243D32] text-white">
                <span className="text-xs font-semibold text-[#B58A50] uppercase tracking-wider block">
                  Atmospheric Setting
                </span>
                <p className="font-serif text-lg font-bold">
                  Contemporary Indian Bistro Interior
                </p>
                <p className="text-xs text-[#E7DCCB]/80 mt-1">
                  Warm lighting, rustic wooden textures, and comfortable seating in the heart of Najafgarh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Pillars Component */}
      <WhyChooseUs />

      {/* Culinary Highlights Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A6533C] block mb-2">
            WHAT WE SERVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#243D32]">
            A World of Vegetarian Flavours
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#252522]/75">
            Discover our diverse kitchen sections, each crafted by experienced chefs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-6 border border-[#B58A50]/20 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#A6533C] uppercase tracking-wider block mb-1">
                North Indian & Tandoor
              </span>
              <h3 className="font-serif text-xl font-bold text-[#243D32] mb-3">
                Royal Curries & Clay-Oven Breads
              </h3>
              <p className="text-xs text-[#252522]/80 leading-relaxed">
                Slow-cooked Dal Makhani, Shahi Paneer, S&P Village Handi Paneer, Dum Aloo Banarasi, and fresh tandoori naans and stuffed parathas.
              </p>
            </div>
            <Link
              href="/menu"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#A6533C] hover:text-[#243D32] transition-colors"
            >
              Explore Indian Curries <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#B58A50]/20 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#A6533C] uppercase tracking-wider block mb-1">
                Chinese & Fast Food
              </span>
              <h3 className="font-serif text-xl font-bold text-[#243D32] mb-3">
                Wok Noodles, Momos & Pizzas
              </h3>
              <p className="text-xs text-[#252522]/80 leading-relaxed">
                Hakka noodles, Manchurian gravy, steaming dimsum momos, kurkure momos, Kathi rolls, stone-baked pizzas, and juicy burgers.
              </p>
            </div>
            <Link
              href="/menu"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#A6533C] hover:text-[#243D32] transition-colors"
            >
              Explore Chinese & Fast Food <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#B58A50]/20 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#A6533C] uppercase tracking-wider block mb-1">
                South Indian & Refreshments
              </span>
              <h3 className="font-serif text-xl font-bold text-[#243D32] mb-3">
                Crispy Dosas, Shakes & Mocktails
              </h3>
              <p className="text-xs text-[#252522]/80 leading-relaxed">
                Golden butter dosas, fluffy idlis with sambar, handcrafted mojitos, thick Oreo & Kitkat milkshakes, and 18 flavours of gourmet ice creams.
              </p>
            </div>
            <Link
              href="/menu"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#A6533C] hover:text-[#243D32] transition-colors"
            >
              Explore South Indian & Shakes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#243D32] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-[#B58A50]/40">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F0E7]">
            Ready to Taste the Best of Najafgarh?
          </h3>
          <p className="text-xs sm:text-sm text-[#E7DCCB]/85 mt-2 max-w-lg mx-auto">
            Visit Salt and Peppers today or check our live Google Maps listing to navigate directly to our doorstep.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/menu"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#B58A50] to-[#A6533C] text-white text-xs sm:text-sm font-semibold shadow-md hover:brightness-110 transition-all"
            >
              Browse Full Menu Booklet
            </Link>
            <Link
              href="/location"
              className="px-6 py-3 rounded-full bg-[#192b23] hover:bg-[#192b23]/80 text-[#F5F0E7] border border-[#B58A50]/40 text-xs sm:text-sm font-semibold transition-all"
            >
              Find Our Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
