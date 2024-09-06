import { MealsContext, MealsContextProps } from "@/contexts/MealsContext";
import { useContext } from "react";

export function useMeals() {
  return useContext(MealsContext) as MealsContextProps
}