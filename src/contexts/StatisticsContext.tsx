import { createContext, useEffect, useState } from "react";

import { MealProps } from "@/hooks/mealsReducer";
import { geDietStatistics } from "@/utils/statistics";

export type DietStatisticsProps = {
  percentWithinDiet: number
  bestSequence: number
  mealsAmount: number
  inMeals: number
  outMeals: number
}

export const DietStatisticsContext = createContext<DietStatisticsProps | null>(null);

type StatisticProps = {
  meals: MealProps[]
  children: React.ReactNode
}

export function DietStatisticsProvider({ meals, children }: StatisticProps) {
  const [statistcs, setStatistics] = useState<DietStatisticsProps | null>(null)

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
    <DietStatisticsContext.Provider value={statistcs}>
      {children}
    </DietStatisticsContext.Provider>
  )
}