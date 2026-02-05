import type { Metadata } from "next";
import { site } from "@/content/site";
import { Language } from "@/content/types";

export const getPageMetadata = (lang: Language): Metadata => {
  const seo = site.seo[lang];
  const isZh = lang === "zh";

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: isZh ? "/" : "/en",
      languages: {
        zh: "/",
        en: "/en"
      }
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      locale: isZh ? "zh_CN" : "en_US"
    }
  };
};
