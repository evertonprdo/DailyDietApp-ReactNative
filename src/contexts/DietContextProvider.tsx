import { createContext, useEffect, useReducer, useState } from "react";

import { persistStorageMeals, StorageMealsProps } from "@/libs/storage/storageMeals";
import { mealsReducer, ReducerActionProps } from "@/hooks/mealsReducer";
import { DietStatisticsProvider } from "@/contexts/StatisticsContext";

export type DietContextProps = {
  meals: StorageMealsProps["data"]
  dispatch: React.Dispatch<ReducerActionProps>
  lastId: {
    state: number
    setState: (value: number) => void
  }
}

export const DietContext = createContext<DietContextProps | null>(null)

type Props = {
  initialData: StorageMealsProps
  children: React.ReactNode
}

export function DietContextProvider({ initialData, children }: Props) {
  const [meals, dispatch] = useReducer(mealsReducer, initialData.data)
  const [lastId, setLastId] = useState(initialData.lastId)

  useEffect(() => {
    persistStorageMeals({
      data: meals,
      lastId
    })
  }, [meals])

  return (
    <DietContext.Provider
      value={{
        meals: meals,
        dispatch,
        lastId: {
          state: lastId,
          setState: setLastId
        }
      }}
    >
      <DietStatisticsProvider meals={meals}>
        {children}
      </DietStatisticsProvider>
    </DietContext.Provider>
  )
}