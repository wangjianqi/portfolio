"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

interface DocumentLanguageProps {
  locale: Locale;
}

export default function DocumentLanguage({ locale }: DocumentLanguageProps) {
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return null;
}
