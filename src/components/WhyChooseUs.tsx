import {
  Leaf,
  UtensilsCrossed,
  Sparkles,
  Users,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurantData";

const ICON_MAP: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="w-6 h-6 text-emerald-400" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#B58A50]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#d4a96a]" />,
  Users: <Users className="w-6 h-6 text-amber-300" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#A6533C]" />,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-[#243D32] text-[#F5F0E7] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B58A50]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#A6533C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#B58A500d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58A50]">
              EXPERIENCE THE DIFFERENCE
            </span>
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F0E7]">
            WHY SALT AND PEPPERS?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#E7DCCB]/80 font-light leading-relaxed">
            We are dedicated to offering an elevated vegetarian dining experience in Najafgarh, New Delhi — uniting rich tradition, contemporary bistro atmosphere, and uncompromising quality.
          </p>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RESTAURANT_DATA.whyChooseUs.map((card, idx) => {
            const isLast = idx === 4;
            return (
              <div
                key={card.title}
                className={`group relative rounded-3xl p-7 transition-all duration-300 border border-[#B58A50]/25 bg-[#192b23]/80 hover:bg-[#192b23] hover:border-[#B58A50]/60 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Card number badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#243D32] border border-[#B58A50]/40 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      {ICON_MAP[card.icon] || <Sparkles className="w-6 h-6 text-[#B58A50]" />}
                    </div>
                    <span className="font-serif text-3xl font-extrabold text-[#B58A50]/30 group-hover:text-[#B58A50]/60 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B58A50] block mb-1">
                    {card.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F0E7] group-hover:text-[#d4a96a] transition-colors mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#E7DCCB]/80 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B58A50]/15 flex items-center text-xs text-[#B58A50] font-medium gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Quality Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
