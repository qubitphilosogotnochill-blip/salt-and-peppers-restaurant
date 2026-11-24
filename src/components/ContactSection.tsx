"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Navigation, Clock } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurantData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#243D32] text-[#F5F0E7] relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#B58A50]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#A6533C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#B58A500d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Exact prompt requirement) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58A50]">
              GET IN TOUCH
            </span>
            <span className="w-6 h-0.5 bg-[#B58A50]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F0E7]">
            LET&apos;S CONNECT.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#E7DCCB]/85 font-light leading-relaxed">
            Have questions, planning a family celebration, or want to reserve a table? Reach out to Salt and Peppers anytime.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Phone */}
          <div className="bg-[#192b23] p-6 rounded-2xl border border-[#B58A50]/30 shadow-lg flex flex-col justify-between hover:border-[#B58A50] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#243D32] border border-[#B58A50]/40 flex items-center justify-center text-[#B58A50] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B58A50] block">
                Official Contact
              </span>
              <h3 className="font-serif text-lg font-bold text-[#F5F0E7] mt-1">
                Call Us Directly
              </h3>
              <p className="text-sm font-medium text-[#d4a96a] mt-2">
                {RESTAURANT_DATA.contact.phone}
              </p>
            </div>
            <a
              href={RESTAURANT_DATA.contact.phoneTel}
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#B58A50] hover:bg-[#d4a96a] text-[#192b23] font-bold text-xs tracking-wider transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>TAP TO CALL</span>
            </a>
          </div>

          {/* Card 2: Address */}
          <div className="bg-[#192b23] p-6 rounded-2xl border border-[#B58A50]/30 shadow-lg flex flex-col justify-between hover:border-[#B58A50] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#243D32] border border-[#B58A50]/40 flex items-center justify-center text-[#B58A50] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B58A50] block">
                Visit Us
              </span>
              <h3 className="font-serif text-lg font-bold text-[#F5F0E7] mt-1">
                Najafgarh Location
              </h3>
              <p className="text-xs text-[#E7DCCB]/80 mt-2 leading-relaxed">
                {RESTAURANT_DATA.address.line1}, {RESTAURANT_DATA.address.line2}, Najafgarh, New Delhi – 110043
              </p>
            </div>
            <a
              href={RESTAURANT_DATA.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#243D32] hover:bg-[#A6533C] text-[#F5F0E7] border border-[#B58A50]/30 font-semibold text-xs tracking-wider transition-all"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>DIRECTIONS</span>
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-[#192b23] p-6 rounded-2xl border border-[#B58A50]/30 shadow-lg flex flex-col justify-between hover:border-[#B58A50] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#243D32] border border-[#B58A50]/40 flex items-center justify-center text-[#B58A50] mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B58A50] block">
                Email Inquiries
              </span>
              <h3 className="font-serif text-lg font-bold text-[#F5F0E7] mt-1">
                Write to Us
              </h3>
              <p className="text-xs text-[#E7DCCB]/70 mt-2">
                Placeholder email: {RESTAURANT_DATA.contact.emailPlaceholder}
              </p>
            </div>
            <a
              href={`mailto:${RESTAURANT_DATA.contact.email}`}
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#243D32] hover:bg-[#A6533C] text-[#F5F0E7] border border-[#B58A50]/30 font-semibold text-xs tracking-wider transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>SEND EMAIL</span>
            </a>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-[#192b23] p-6 rounded-2xl border border-[#B58A50]/30 shadow-lg flex flex-col justify-between hover:border-[#B58A50] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#243D32] border border-[#B58A50]/40 flex items-center justify-center text-[#B58A50] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B58A50] block">
                Service Timings
              </span>
              <h3 className="font-serif text-lg font-bold text-[#F5F0E7] mt-1">
                Operating Hours
              </h3>
              <p className="text-sm font-semibold text-[#F5F0E7] mt-2">
                {RESTAURANT_DATA.hours.time}
              </p>
              <p className="text-xs text-[#E7DCCB]/70 mt-1">
                {RESTAURANT_DATA.hours.days}
              </p>
            </div>
            <a
              href={RESTAURANT_DATA.maps.listingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#243D32] hover:bg-[#B58A50] hover:text-[#192b23] text-[#F5F0E7] border border-[#B58A50]/30 font-semibold text-xs tracking-wider transition-all"
            >
              <span>GOOGLE LISTING</span>
            </a>
          </div>
        </div>

        {/* Interactive Reservation / Inquiry Form */}
        <div className="max-w-3xl mx-auto bg-[#192b23] rounded-3xl p-6 sm:p-10 border border-[#B58A50]/40 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#F5F0E7]">
              Reserve a Table or Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#E7DCCB]/80 mt-1">
              Planning a family dinner or special gathering? Drop a message and our team will get back to you promptly.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#243D32] border border-emerald-500/50 text-center animate-fadeIn">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h4 className="font-serif text-xl font-bold text-white">
                Thank You, {formData.name || "Guest"}!
              </h4>
              <p className="text-sm text-[#E7DCCB]/90 mt-2 max-w-md mx-auto">
                We have received your inquiry. For immediate table reservation, feel free to give us a direct call at{" "}
                <a href={RESTAURANT_DATA.contact.phoneTel} className="text-[#B58A50] font-bold underline">
                  {RESTAURANT_DATA.contact.phone}
                </a>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 rounded-xl bg-[#B58A50] text-[#192b23] text-xs font-bold uppercase tracking-wider"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#E7DCCB]/90 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#243D32] border border-[#B58A50]/30 text-white placeholder-[#E7DCCB]/40 focus:outline-none focus:ring-2 focus:ring-[#B58A50] text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-[#E7DCCB]/90 mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#243D32] border border-[#B58A50]/30 text-white placeholder-[#E7DCCB]/40 focus:outline-none focus:ring-2 focus:ring-[#B58A50] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="guests" className="block text-xs font-medium text-[#E7DCCB]/90 mb-1">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#243D32] border border-[#B58A50]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B58A50] text-sm"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-4">3 - 4 People</option>
                    <option value="5-8">5 - 8 People (Family)</option>
                    <option value="8+">8+ People (Party)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-xs font-medium text-[#E7DCCB]/90 mb-1">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#243D32] border border-[#B58A50]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B58A50] text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-xs font-medium text-[#E7DCCB]/90 mb-1">
                    Preferred Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#243D32] border border-[#B58A50]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B58A50] text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[#E7DCCB]/90 mb-1">
                  Message or Special Requests (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Birthday celebration, Jain food requirements, high chair needed..."
                  className="w-full px-4 py-3 rounded-xl bg-[#243D32] border border-[#B58A50]/30 text-white placeholder-[#E7DCCB]/40 focus:outline-none focus:ring-2 focus:ring-[#B58A50] text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#B58A50] to-[#A6533C] text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Reservation Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
