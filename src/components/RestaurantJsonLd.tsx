import { RESTAURANT_DATA } from "@/data/restaurantData";

export default function RestaurantJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${RESTAURANT_DATA.seo.siteUrl}#restaurant`,
    name: RESTAURANT_DATA.name,
    alternateName: "Salt and Peppers Najafgarh",
    description:
      "Premium Pure Vegetarian and Family Restaurant in Najafgarh, New Delhi, serving North Indian, Chinese, South Indian, Italian, Fast Food, Mocktails, and Shakes.",
    url: RESTAURANT_DATA.seo.siteUrl,
    telephone: RESTAURANT_DATA.contact.phone,
    email: RESTAURANT_DATA.contact.email,
    servesCuisine: RESTAURANT_DATA.seo.servesCuisine,
    priceRange: RESTAURANT_DATA.seo.priceRange,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI",
    hasMap: RESTAURANT_DATA.maps.listingUrl,
    menu: `${RESTAURANT_DATA.seo.siteUrl}/menu`,
    acceptsReservations: "True",
    image: [
      `${RESTAURANT_DATA.seo.siteUrl}/images/restaurant/salt-peppers-dining-bar.jpg`,
      `${RESTAURANT_DATA.seo.siteUrl}/images/restaurant/salt-peppers-interior-ambiance.jpg`,
      `${RESTAURANT_DATA.seo.siteUrl}/images/restaurant/salt-peppers-signature-chaap-platter.jpg`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${RESTAURANT_DATA.address.line1}, ${RESTAURANT_DATA.address.line2}`,
      addressLocality: RESTAURANT_DATA.address.area,
      addressRegion: RESTAURANT_DATA.address.state,
      postalCode: RESTAURANT_DATA.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: RESTAURANT_DATA.maps.coordinates.latitude,
      longitude: RESTAURANT_DATA.maps.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "23:00",
      },
    ],
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${RESTAURANT_DATA.seo.siteUrl}/menu`,
        inLanguage: "en-IN",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
