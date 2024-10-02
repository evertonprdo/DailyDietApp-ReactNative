import { useContext } from "react";
import { DietContext } from "@/contexts/DietContext";

export function useDiet() {
  const value = useContext(DietContext)

  if (!value)
    throw new Error('useMealsReducer must be wrapped in <DietContextProvider/>')

  return value
}