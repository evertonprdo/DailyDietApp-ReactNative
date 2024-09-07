import { StorageMealsProps } from "@/storage/storageMeals"
import { orderMealsByDate } from "@/utils/meals"

export type MealProps = StorageMealsProps["data"][0]

type ReducerActionsAllProps = {
  type: "added" | "changed"
  params: MealProps
}

type ReducerActionsDelete = {
  type: "deleted"
  params: {
    id: string
  }
}

export type ReducerActionProps = ReducerActionsAllProps | ReducerActionsDelete

export function mealsReducer(meals: MealProps[], action: ReducerActionProps): MealProps[] {
  switch (action.type) {
    case "added":
      return addedDispatch(meals, action)

    case "changed":
      return changedDispatch(meals, action)

    case "deleted":
      return deletedDispatch(meals, action)

    default:
      throw Error('Unknown action')
  }
}

function addedDispatch(meals: MealProps[], action: ReducerActionsAllProps) {
  return orderMealsByDate(
    [{ ...action.params }, ...meals]
  );
}

function changedDispatch(meals: MealProps[], action: ReducerActionsAllProps) {
  const rowIndex = meals.findIndex(meal => meal.id === action.params.id)
  let newMeals = [...meals]

  newMeals[rowIndex] = action.params

  return orderMealsByDate(newMeals)
}

function deletedDispatch(meals: MealProps[], action: ReducerActionsDelete) {
  return orderMealsByDate(
    meals.filter((meal) => meal.id !== action.params.id)
  );
}