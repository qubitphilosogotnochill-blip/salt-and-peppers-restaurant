import type { Metadata } from "next";
import { Phone, HelpCircle } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { RESTAURANT_DATA } from "@/data/restaurantData";

export const metadata: Metadata = {
  title: "Contact & Table Reservation | Salt and Peppers Najafgarh, Delhi",
  description:
    "Get in touch with Salt and Peppers pure vegetarian restaurant in Najafgarh, New Delhi. Call +91 96259 52699 for table bookings, takeaway orders, or family events.",
  alternates: {
    canonical: `${RESTAURANT_DATA.seo.siteUrl}/contact`,
  },
};

const FAQS = [
  {
    question: "Is Salt and Peppers 100% pure vegetarian?",
    answer: "Yes, absolutely! We are a strictly pure vegetarian (Shuddh Shakahari) family restaurant. No meat, fish, or egg products are prepared in our kitchen.",
  },
  {
    question: "Where exactly is the restaurant located in Najafgarh?",
    answer: "We are located at H.No. 1629, Ground Floor, Pole No. 3, Najafgarh Thana Road, Najafgarh, New Delhi – 110043. We are easily reachable from Najafgarh Police Station and Najafgarh Metro Station.",
  },
  {
    question: "What are your daily operating hours?",
    answer: "We are open all 7 days of the week from 11:00 AM to 11:00 PM for dine-in, takeaway, and family meals.",
  },
  {
    question: "Do you accept table reservations for large family gatherings or parties?",
    answer: "Yes! For birthdays, anniversaries, kitty parties, or large family dinners, please call us directly at +91 96259 52699 or submit the inquiry form above to reserve your preferred seating.",
  },
  {
    question: "What cuisines do you serve?",
    answer: "We serve authentic North Indian main courses, clay-oven tandoori breads, crispy South Indian dosas, Hakka noodles and Chinese combos, Italian pizzas and pastas, Kathi rolls, momos, handcrafted mocktails, thick shakes, and gourmet ice creams.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#F5F0E7] text-[#252522]">
      {/* Header */}
      <section className="bg-[#243D32] text-[#F5F0E7] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#B58A5015_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58A50]">
              GET IN TOUCH
            </span>
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F0E7]">
            LET&apos;S CONNECT
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#E7DCCB]/90 max-w-2xl mx-auto font-light leading-relaxed">
            We are always here to welcome you. Reach out for table reservations, family gatherings, takeaway orders, or any inquiries in Najafgarh, New Delhi.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-[#B58A50]">
            <a href={RESTAURANT_DATA.contact.phoneTel} className="hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> {RESTAURANT_DATA.contact.phone}
            </a>
            <span>•</span>
            <span>Najafgarh Thana Road</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Component */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-white/70 border-t border-[#B58A50]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A6533C] block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#243D32]">
              Planning Your Visit
            </h2>
            <p className="mt-3 text-sm text-[#252522]/75">
              Everything you need to know before visiting Salt and Peppers.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-[#B58A50]/25 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#A6533C] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#243D32]">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#252522]/80 mt-2 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
