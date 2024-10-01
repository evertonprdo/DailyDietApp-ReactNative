import { LanguagesKeys } from "@/libs/i18n"

export type LanguageProps = {
  key: LanguagesKeys
  name: string
  date: string
  time: string
}

export const LanguageMap: LanguageProps[] = [
  { key: "en", name: "English", date: 'MM/DD/YYYY', time: 'hh:mm A' },
  { key: "pt", name: "Português", date: 'DD/MM/YYYY', time: 'HH:mm' },
]