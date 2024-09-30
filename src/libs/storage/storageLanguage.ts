import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization"

import { LanguagesKeys } from "../i18n";
import { STORAGE_LANGUAGE } from "./storage.config";

export async function getStorageLanguage() {
  const storageLanguage = await AsyncStorage.getItem(STORAGE_LANGUAGE)

  if (!storageLanguage) {
    const localeLanguage = Localization.getLocales()[0].languageCode ?? 'en'
    await saveStorageLanguage(localeLanguage as LanguagesKeys)

    return localeLanguage
  }
  return storageLanguage
}

export async function saveStorageLanguage(key: LanguagesKeys) {
  await AsyncStorage.setItem(STORAGE_LANGUAGE, key)
}