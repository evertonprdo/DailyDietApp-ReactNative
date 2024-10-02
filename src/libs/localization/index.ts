import { LanguageMap } from "@/constants/language"
import * as Localization from "expo-localization"

export function getLocalizationLanguageKey() {
  const localeLanguage = Localization.getLocales()[0].languageCode

  if (!localeLanguage) {
    return 'en'
  }

  for (const lng of LanguageMap) {
    if (localeLanguage === lng.key) {
      return lng.key
    }
  }

  return 'en'
}