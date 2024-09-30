import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORAGE_MEALS } from "./storage.config"
import { MealProps } from "@/hooks/mealsReducer"

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
  const storage = await AsyncStorage.getItem(STORAGE_MEALS);

  return storage ? JSON.parse(storage) : {
    data: [] as MealProps[],
    lastId: 0,
  }
}

export async function persistStorageMeals(meals: StorageMealsProps) {
  AsyncStorage.setItem(STORAGE_MEALS, JSON.stringify(meals))
}