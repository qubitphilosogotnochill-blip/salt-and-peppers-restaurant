import { MetadataRoute } from "next";
import { RESTAURANT_DATA } from "@/data/restaurantData";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = RESTAURANT_DATA.seo.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
