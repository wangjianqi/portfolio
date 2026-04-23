import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getLocaleFromAcceptLanguage } from "@/lib/i18n";

export default async function HomePage() {
  const headersList = await headers();
  const locale = getLocaleFromAcceptLanguage(headersList.get("accept-language"));

  redirect(`/${locale}`);
}
