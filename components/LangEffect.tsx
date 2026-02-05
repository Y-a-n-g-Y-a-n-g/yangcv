"use client";

import { useEffect } from "react";
import { Language } from "@/content/types";

export const LangEffect = ({ lang }: { lang: Language }) => {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
};
