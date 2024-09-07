import { MealProps } from "@/hooks/mealsReducer"
import AsyncStorage from "@react-native-async-storage/async-storage"

const StorageKey = "@dailydiet:meals"

export type StorageMealsProps = {
  data: {
    id: string
    title: string
    description: string
    date: string
    isWithinDiet: boolean
  }[]
  lastId: number
}

export async function getStorageMeals(): Promise<StorageMealsProps> {
  const storage = await AsyncStorage.getItem(StorageKey);

  return storage ? JSON.parse(storage) : {
    data: [] as MealProps[],
    lastId: 0
  }
}

export async function percistStorageMeals(meals: StorageMealsProps) {
  AsyncStorage.setItem(StorageKey, JSON.stringify(meals))
}