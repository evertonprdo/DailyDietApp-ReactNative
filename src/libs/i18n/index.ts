import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enUS from "./locales/en/translation.json"
import ptBR from "./locales/pt/translation.json"

import { getStorageLanguage } from "@/libs/storage/storageLanguage"

export type LanguagesKeys = keyof typeof resources

const resources = {
  "en": { translation: enUS },
  "pt": { translation: ptBR },
}

const initI18n = async () => {
  let savedLanguage = await getStorageLanguage()

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: savedLanguage,
    fallbackLng: "en",
  })
}

initI18n()

export default i18n