import { StorageMealsProps } from "@/storage/storageMeals"

export type MealProps = StorageMealsProps["data"][0]

export type ReducerActionsAddEdit = {
  type: "added" | "changed"
  params: MealProps
}

export type ReducerActionsDelete = {
  type: "deleted"
  params: {
    id: string
  }
}

export type ReducerActionProps = ReducerActionsAddEdit | ReducerActionsDelete

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

function addedDispatch(meals: MealProps[], action: ReducerActionsAddEdit) {
  return [{ ...action.params }, ...meals];
}

function changedDispatch(meals: MealProps[], action: ReducerActionsAddEdit) {
  const rowIndex = meals.findIndex(meal => meal.id === action.params.id)
  let newMeals = [...meals]

  newMeals[rowIndex] = action.params

  return newMeals
}

function deletedDispatch(meals: MealProps[], action: ReducerActionsDelete) {
  return meals.filter((meal) => meal.id !== action.params.id);
}