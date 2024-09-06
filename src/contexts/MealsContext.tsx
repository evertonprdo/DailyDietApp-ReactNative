import { createContext, useEffect, useReducer, useState } from "react";

import { percistStorageMeals, StorageMealsProps } from "@/storage/storageMeals";
import { mealsReducer, ReducerActionProps } from "@/hooks/mealsReducer";

export type MealsContextProps = {
  state: StorageMealsProps["data"]
  dispatch: React.Dispatch<ReducerActionProps>
  lastId: {
    state: number
    setState: (value: number) => void
  }
}

export const MealsContext = createContext<MealsContextProps | null>(null)

type Props = {
  initialData: StorageMealsProps
  children: React.ReactNode
}

export function MealsContextProvider({ initialData, children }: Props) {
  const [meals, dispatch] = useReducer(mealsReducer, initialData.data)
  const [lastId, setLastId] = useState(initialData.lastId)

  useEffect(() => {
    percistStorageMeals({
      data: meals,
      lastId
    })
  }, [meals])

  return (
    <MealsContext.Provider
      value={{
        state: meals,
        dispatch,
        lastId: {
          state: lastId,
          setState: setLastId
        }
      }}
    >
      {children}
    </MealsContext.Provider>
  )
}