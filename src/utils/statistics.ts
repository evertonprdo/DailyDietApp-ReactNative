import { MealProps } from "@/hooks/mealsReducer"

type LocalStatistics = {
  inMeals: number
  outMeals: number

  bestSequence: number
  currentSequence: number
}

export function geDietStatistics(meals: MealProps[]) {
  let local: LocalStatistics = {
    inMeals: 0,
    outMeals: 0,
    bestSequence: 0,
    currentSequence: 0
  }

  meals.forEach(meal => {
    const { isWithinDiet } = meal

    if (isWithinDiet) {
      local.currentSequence++
      local.inMeals++

      if (local.currentSequence > local.bestSequence) {
        local.bestSequence = local.currentSequence
      }
      return
    }

    local.currentSequence = 0
    local.outMeals++
    return
  })

  const mealsAmount = meals.length
  const percent = local.inMeals / mealsAmount;

  return {
    percentWithinDiet: percent,
    bestSequence: local.bestSequence,
    mealsAmount,
    inMeals: local.inMeals,
    outMeals: local.outMeals
  }
}