import AsyncStorage from "@react-native-async-storage/async-storage"
import { getStorageLanguage, saveStorageLanguage } from "../storageLanguage"

describe("Storage: Storage Language", () => {
  beforeEach(async () => {
    const keys = await AsyncStorage.getAllKeys()
    await AsyncStorage.multiRemove(keys)
  })

  it("should return the user localization language code", async () => {
    expect(getStorageLanguage()).resolves.toEqual('en')
  })

  it("should be able save the user app language option", async () => {
    await saveStorageLanguage('pt')

    expect(getStorageLanguage()).resolves.toEqual('pt')
  })
})