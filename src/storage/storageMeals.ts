import AsyncStorage from "@react-native-async-storage/async-storage"

const StorageKey = "@dailydiet:meals"

export type StorageMealsProps = {
  data: {
    id: string
    title: string
    date: string
    isWithinDiet: boolean
  }[]
  lastId: number
}

export async function getStorageMeals() {
  const storage = await AsyncStorage.getItem(StorageKey);

  return storage ? JSON.parse(storage) : {} as StorageMealsProps
}

export async function percistStorageMeals(meals: StorageMealsProps) {
  AsyncStorage.setItem(StorageKey, JSON.stringify(meals))
}