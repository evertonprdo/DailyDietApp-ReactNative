import { useContext } from "react";
import { DietContext, DietContextProps } from "@/contexts/DietContextProvider";

export function useMealsReducer() {
  return useContext(DietContext) as DietContextProps
}