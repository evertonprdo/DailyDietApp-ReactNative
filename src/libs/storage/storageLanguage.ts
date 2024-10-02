import AsyncStorage from "@react-native-async-storage/async-storage";

import { LanguagesKeys } from "../i18n";
import { STORAGE_LANGUAGE } from "./storage.config";
import { getLocalizationLanguageKey } from "../localization";

export async function getStorageLanguage() {
  const storageLanguage = await AsyncStorage.getItem(STORAGE_LANGUAGE)

  if (!storageLanguage) {
    const localeLanguage = getLocalizationLanguageKey()

    await saveStorageLanguage(localeLanguage)
    return localeLanguage
  }
  return storageLanguage
}

export async function saveStorageLanguage(key: LanguagesKeys) {
  await AsyncStorage.setItem(STORAGE_LANGUAGE, key)
}