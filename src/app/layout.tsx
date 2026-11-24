import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { RESTAURANT_DATA } from "@/data/restaurantData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurantJsonLd from "@/components/RestaurantJsonLd";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#243D32",
};

export const metadata: Metadata = {
  metadataBase: new URL(RESTAURANT_DATA.seo.siteUrl),
  title: {
    default: "Salt and Peppers | Pure Veg Family Restaurant in Najafgarh, Delhi",
    template: "%s | Salt and Peppers Najafgarh",
  },
  description:
    "Looking for a restaurant in Najafgarh, Delhi? Visit Salt and Peppers for delicious vegetarian Indian, Chinese, South Indian and Italian food, refreshing mocktails, shakes and desserts.",
  keywords: [
    "Restaurants in Najafgarh",
    "Best restaurant in Najafgarh",
    "Best restaurants in Najafgarh Delhi",
    "Restaurant in Najafgarh Delhi",
    "Family restaurant in Najafgarh",
    "Pure vegetarian restaurant in Najafgarh",
    "Indian restaurant in Najafgarh",
    "Chinese restaurant in Najafgarh",
    "South Indian restaurant in Najafgarh",
    "Vegetarian food in Najafgarh",
    "Pizza restaurant in Najafgarh",
    "Best food in Najafgarh",
    "Family dining in Najafgarh",
    "Restaurants near Najafgarh Thana Road",
    "Dosa in Najafgarh",
    "Paneer dishes in Najafgarh",
    "Chinese food in Najafgarh",
    "Mocktails in Najafgarh",
    "Shakes in Najafgarh",
    "Vegetarian Indian food in Najafgarh",
  ],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  authors: [{ name: "Salt and Peppers Restaurant" }],
  creator: "Salt and Peppers",
  publisher: "Salt and Peppers",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: RESTAURANT_DATA.seo.siteUrl,
    siteName: "Salt and Peppers Restaurant",
    title: "Salt and Peppers | Pure Veg Family Restaurant in Najafgarh, Delhi",
    description:
      "Looking for a restaurant in Najafgarh, Delhi? Visit Salt and Peppers for delicious vegetarian Indian, Chinese, South Indian and Italian food, refreshing mocktails, shakes and desserts.",
    images: [
      {
        url: "/images/restaurant/salt-peppers-dining-bar.jpg",
        width: 1200,
        height: 630,
        alt: "Salt and Peppers Pure Veg Restaurant Interior in Najafgarh, Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salt and Peppers | Pure Veg Family Restaurant in Najafgarh, Delhi",
    description:
      "Looking for a restaurant in Najafgarh, Delhi? Visit Salt and Peppers for delicious vegetarian Indian, Chinese, South Indian and Italian food, refreshing mocktails, shakes and desserts.",
    images: ["/images/restaurant/salt-peppers-dining-bar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: RESTAURANT_DATA.seo.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <RestaurantJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5F0E7] text-[#252522] selection:bg-[#A6533C] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
