import { createContext, useEffect, useReducer, useState } from "react";

import { persistStorageMeals, StorageMealsProps } from "@/libs/storage/storageMeals";

import { MealProps, mealsReducer } from "@/contexts/mealsReducer";
import { geDietStatistics } from "@/utils/statistics";

export type DietStatisticsProps = {
  percentWithinDiet: number
  bestStreak: number
  mealsAmount: number
  withinDiet: number
  outsideDiet: number
}

export type DietContextProps = {
  meals: StorageMealsProps["data"]
  dispatches: {
    added: (meal: Omit<MealProps, "id">) => void
    changed: (meal: MealProps) => void
    deleted: (id: string) => void
  }
  statistics: DietStatisticsProps | null
}

export const DietContext = createContext<DietContextProps | null>(null)

type Props = {
  initialData: StorageMealsProps
  children: React.ReactNode
}

export function DietContextProvider({ initialData, children }: Props) {
  const [meals, dispatch] = useReducer(mealsReducer, initialData.data)
  const [lastId, setLastId] = useState(initialData.lastId)
  
  const [statistics, setStatistics] = useState<DietStatisticsProps | null>(null)

  function added(newMeal: Omit<MealProps, "id">) {
    dispatch({
      type: 'added',
      params: {
        ...newMeal,
        id: String(lastId + 1)
      }
    })
    setLastId(lastId + 1)
  }

  function changed(updateMeal: MealProps) {
    dispatch({
      type: 'changed',
      params: updateMeal
    })
  }

  function deleted(id: string) {
    dispatch({
      type: 'deleted',
      params: { id }
    })
  }

  useEffect(() => {
    persistStorageMeals({
      data: meals,
      lastId
    })
  }, [meals])

  useEffect(() => {
    if (meals.length > 0) {
      setStatistics(
        geDietStatistics(meals)
      )
    } else {
      setStatistics(null)
    }
  }, [meals])

  return (
    <DietContext.Provider
      value={{
        meals: meals,
        dispatches: {
          added,
          changed,
          deleted
        },
        statistics,
      }}
    >
      {children}
    </DietContext.Provider>
  )
}