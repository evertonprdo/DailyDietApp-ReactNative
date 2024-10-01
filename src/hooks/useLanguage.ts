import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

export function useLanguage() {
  const value = useContext(LanguageContext)

  if (!value)
    throw new Error('useLanguage must be wrapped in <LanguageContextProvider/>')

  return value
}