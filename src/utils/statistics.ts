import { MealProps } from "@/contexts/mealsReducer"

type LocalStatistics = {
  withinDiet: number
  outsideDiet: number

  bestStreak: number
  streak: number
}

export function geDietStatistics(meals: MealProps[]) {
  let local: LocalStatistics = {
    withinDiet: 0,
    outsideDiet: 0,
    bestStreak: 0,
    streak: 0
  }

  meals.forEach(meal => {
    const { isWithinDiet } = meal

    if (isWithinDiet) {
      local.streak++
      local.withinDiet++

      if (local.streak > local.bestStreak) {
        local.bestStreak = local.streak
      }
      return
    }

    local.streak = 0
    local.outsideDiet++
    return
  })

  const mealsAmount = meals.length
  const percent = local.withinDiet / mealsAmount;

  return {
    percentWithinDiet: percent,
    bestStreak: local.bestStreak,
    mealsAmount,
    withinDiet: local.withinDiet,
    outsideDiet: local.outsideDiet
  }
}