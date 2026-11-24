import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink, Navigation } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurantData";

export default function Footer() {
  const currentYear = 2026;
  return (
    <footer className="bg-[#192b23] text-[#E7DCCB] border-t border-[#B58A50]/20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-[#B58A50]/20">
          {/* Col 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white border border-[#B58A50]/60 flex items-center justify-center p-0.5 overflow-hidden shrink-0 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="Salt and Peppers Official Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#F5F0E7]">
                {RESTAURANT_DATA.name}
              </span>
            </div>

            <p className="text-sm text-[#E7DCCB]/80 leading-relaxed">
              Modern Indian Bistro, rustic warmth, and contemporary vegetarian dining in Najafgarh, New Delhi. Good food, great mood, and unforgettable family moments.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-700/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                100% Pure Vegetarian Restaurant
              </span>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={RESTAURANT_DATA.maps.listingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-[#243D32] hover:bg-[#A6533C] text-[#F5F0E7] border border-[#B58A50]/30 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#B58A50]" />
                Google Business Profile
              </a>
              <a
                href={RESTAURANT_DATA.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-[#243D32] hover:bg-[#B58A50] text-[#F5F0E7] border border-[#B58A50]/30 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B58A50]" />
                Directions
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-[#B58A50] tracking-wide">
              Quick Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#B58A50] transition-colors flex items-center gap-2">
                  <span className="text-[#B58A50] text-xs">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#B58A50] transition-colors flex items-center gap-2">
                  <span className="text-[#B58A50] text-xs">›</span> About Salt and Peppers
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#B58A50] transition-colors flex items-center gap-2">
                  <span className="text-[#B58A50] text-xs">›</span> Explore Menu Booklet
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#B58A50] transition-colors flex items-center gap-2">
                  <span className="text-[#B58A50] text-xs">›</span> Food & Ambiance Gallery
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-[#B58A50] transition-colors flex items-center gap-2">
                  <span className="text-[#B58A50] text-xs">›</span> Location & Maps
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B58A50] transition-colors flex items-center gap-2">
                  <span className="text-[#B58A50] text-xs">›</span> Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Menu Categories */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-[#B58A50] tracking-wide">
              Menu Specialties
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-[#E7DCCB]/85">
              <li>
                <Link href="/menu" className="hover:text-[#B58A50] transition-colors">
                  North Indian & Royal Thali
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#B58A50] transition-colors">
                  Sizzling Chinese Combos & Momos
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#B58A50] transition-colors">
                  Crispy South Indian Dosas & Idlis
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#B58A50] transition-colors">
                  Italian Stone Pizzas & Pastas
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#B58A50] transition-colors">
                  Kathi Rolls & Special Kababs
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#B58A50] transition-colors">
                  Handcrafted Mocktails & Shakes
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#B58A50] transition-colors">
                  Gulab Jamun & Gourmet Ice Creams
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Exact Address */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-[#B58A50] tracking-wide">
              Visit & Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3 text-[#E7DCCB]/90">
                <MapPin className="w-5 h-5 text-[#B58A50] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {RESTAURANT_DATA.address.line1},<br />
                  {RESTAURANT_DATA.address.line2},<br />
                  {RESTAURANT_DATA.address.area}, {RESTAURANT_DATA.address.city},<br />
                  {RESTAURANT_DATA.address.state} – {RESTAURANT_DATA.address.postalCode}, {RESTAURANT_DATA.address.country}
                </address>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#B58A50] shrink-0" />
                <a
                  href={RESTAURANT_DATA.contact.phoneTel}
                  className="hover:text-[#B58A50] transition-colors font-medium"
                >
                  {RESTAURANT_DATA.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B58A50] shrink-0" />
                <span className="text-[#E7DCCB]/70">{RESTAURANT_DATA.contact.emailPlaceholder}</span>
              </div>

              <div className="pt-2 text-xs text-[#E7DCCB]/75">
                <span className="font-semibold text-[#B58A50] block mb-0.5">Operating Hours:</span>
                {RESTAURANT_DATA.hours.display}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E7DCCB]/60">
          <p>
            © {currentYear} {RESTAURANT_DATA.name}. All Rights Reserved. Pure Vegetarian Family Restaurant.
          </p>
          <div className="flex items-center gap-6">
            <span>Najafgarh, Delhi – 110043</span>
            <span>•</span>
            <Link href="/location" className="hover:text-[#B58A50] transition-colors">
              Find on Google Maps
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
