import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getStorageLanguage, saveStorageLanguage } from "@/libs/storage/storageLanguage";
import { LanguagesKeys } from "@/libs/i18n";
import { LanguageMap, LanguageProps } from "@/constants/language";

type LanguageContextProps = {
  language: LanguageProps
  changeLanguage: (value: LanguagesKeys) => void
}
export const LanguageContext = createContext<LanguageContextProps | null>(null)

export function LanguageContextProvider({ children }: PropsWithChildren) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState<LanguageProps>(LanguageMap[0])

  async function fetchStorageLanguage() {
    const stgLanguage = await getStorageLanguage()

    if (stgLanguage === language.key)
      return

    const newLanguage = LanguageMap.find(lang => lang.key === stgLanguage)

    if (!newLanguage) {
      throw new Error('Unable to find current language')
    }
    setLanguage(newLanguage)
  }

  async function changeLanguage(value: LanguagesKeys) {
    i18n.changeLanguage(value)
      .then(async () => {
        const newLanguage = LanguageMap.find(lang => lang.key === value)

        if (!newLanguage) {
          throw new Error('Unable to find current language')
        }

        setLanguage(newLanguage)
        await saveStorageLanguage(value)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchStorageLanguage()
  }, [])

  return (
    <LanguageContext.Provider value={{
      language,
      changeLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  )
}