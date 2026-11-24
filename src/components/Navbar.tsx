"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, MapPin, Utensils, ChevronRight } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurantData";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route change during render without triggering cascade renders
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro banner on desktop */}
      <div className="bg-[#192b23] text-[#E7DCCB] text-xs py-2 px-4 border-b border-[#B58A50]/20 hidden md:block transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#B58A50]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
              100% Pure Vegetarian Restaurant
            </span>
            <span className="text-[#E7DCCB]/70">|</span>
            <span className="flex items-center gap-1.5 text-[#E7DCCB]/90">
              <MapPin className="w-3.5 h-3.5 text-[#B58A50]" />
              Najafgarh Thana Road, Najafgarh, New Delhi
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#E7DCCB]/80">{RESTAURANT_DATA.hours.display}</span>
            <span className="text-[#E7DCCB]/70">|</span>
            <a
              href={RESTAURANT_DATA.contact.phoneTel}
              className="flex items-center gap-1.5 font-medium text-[#B58A50] hover:text-[#d4a96a] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {RESTAURANT_DATA.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#243D32]/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-[#B58A50]/25 py-3.5"
            : "bg-[#243D32] md:bg-[#243D32]/85 md:backdrop-blur-sm border-b border-[#B58A50]/15 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#B58A50] rounded-lg p-1"
            aria-label="Salt and Peppers - Home"
          >
            <div className="w-11 h-11 rounded-full bg-white border border-[#B58A50]/60 flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform shadow-md overflow-hidden shrink-0">
              <Image
                src="/images/logo.png"
                alt="Salt and Peppers Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#F5F0E7] group-hover:text-[#B58A50] transition-colors">
                SALT AND PEPPERS
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest text-[#B58A50] font-medium uppercase">
                Pure Veg • Bistro & Family Dining
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all relative py-1 ${
                    isActive
                      ? "text-[#B58A50] font-semibold"
                      : "text-[#F5F0E7]/90 hover:text-[#B58A50]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B58A50] rounded-full animate-fadeIn" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={RESTAURANT_DATA.contact.phoneTel}
              className="p-2.5 rounded-full bg-[#192b23] text-[#B58A50] hover:text-[#F5F0E7] hover:bg-[#A6533C] transition-all border border-[#B58A50]/30 shadow-sm"
              title="Call Salt and Peppers"
              aria-label="Call Restaurant"
            >
              <Phone className="w-4 h-4" />
            </a>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B58A50] to-[#A6533C] text-white font-medium text-sm tracking-wide shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Menu</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={RESTAURANT_DATA.contact.phoneTel}
              className="p-2 rounded-full bg-[#192b23] text-[#B58A50] border border-[#B58A50]/30"
              aria-label="Call Restaurant"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F5F0E7] hover:text-[#B58A50] hover:bg-[#192b23] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B58A50]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#243D32] border-l border-[#B58A50]/30 p-6 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#B58A50]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#B58A50]/50 flex items-center justify-center p-0.5 overflow-hidden shrink-0 shadow-sm">
                    <Image
                      src="/images/logo.png"
                      alt="Salt and Peppers Logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-serif text-lg font-bold text-[#F5F0E7]">
                    SALT AND PEPPERS
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-[#F5F0E7] hover:bg-[#192b23] hover:text-[#B58A50]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-2">
                <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                  🌱 100% Pure Vegetarian
                </span>
              </div>

              {/* Mobile Links */}
              <nav className="mt-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-[#192b23] text-[#B58A50] font-semibold border-l-4 border-[#B58A50]"
                          : "text-[#F5F0E7] hover:bg-[#192b23]/60 hover:text-[#B58A50]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-[#B58A50]/20 flex flex-col gap-3">
                <Link
                  href="/menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#B58A50] to-[#A6533C] text-white font-medium text-sm shadow-md"
                >
                  <Utensils className="w-4 h-4" />
                  <span>Explore Full Menu</span>
                </Link>

                <a
                  href={RESTAURANT_DATA.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#192b23] text-[#F5F0E7] hover:text-[#B58A50] border border-[#B58A50]/30 font-medium text-sm"
                >
                  <MapPin className="w-4 h-4 text-[#B58A50]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Bottom contact in mobile drawer */}
            <div className="pt-6 border-t border-[#B58A50]/20 text-xs text-[#E7DCCB]/80 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#B58A50] font-medium text-sm">
                <Phone className="w-4 h-4" />
                <a href={RESTAURANT_DATA.contact.phoneTel}>{RESTAURANT_DATA.contact.phone}</a>
              </div>
              <p className="text-xs text-[#E7DCCB]/70 leading-relaxed">
                {RESTAURANT_DATA.address.line1}, {RESTAURANT_DATA.address.line2}, Najafgarh, New Delhi – 110043
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
