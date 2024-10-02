import AsyncStorage from "@react-native-async-storage/async-storage"
import { getStorageMeals, persistStorageMeals } from "../storageMeals"

describe('Storage: Storage Meals', () => {
  beforeEach(async () => {
    const keys = await AsyncStorage.getAllKeys()
    await AsyncStorage.multiRemove(keys)
  })

  it("should return default storage meals values", async () => {
    expect(getStorageMeals()).resolves.toEqual({
      data: [],
      lastId: 0
    })
  })

  it("should persist storage meals", async () => {
    const meal = {
      id: '1',
      title: 'test',
      description: 'test',
      date: '2024-10-11T20:00:00Z',
      isWithinDiet: true
    }
    
    await persistStorageMeals({
      data: [meal],
      lastId: 1
    })

    expect(getStorageMeals()).resolves.toEqual({
      data: [meal],
      lastId: 1
    })
  })
})