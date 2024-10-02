import { geDietStatistics } from "../statistics"

const meals = [
  { id: '1', title: 'test', description: 'desc', date: '2024-12-20T20:00:00Z', isWithinDiet: true },
  { id: '2', title: 'test', description: 'desc', date: '2024-12-21T13:30:00Z', isWithinDiet: false },
  { id: '4', title: 'test', description: 'desc', date: '2024-12-23T19:00:00Z', isWithinDiet: false },
  { id: '3', title: 'test', description: 'desc', date: '2024-12-22T08:00:00Z', isWithinDiet: true },
  { id: '5', title: 'test', description: 'desc', date: '2024-12-24T12:00:00Z', isWithinDiet: true },
]

describe("Utils: Statistics", () => {
  it("should get the statistics of meal array", () => {
    const statistics = geDietStatistics(meals)

    expect(statistics).toEqual(expect.objectContaining({
      percentWithinDiet: 0.6,
      bestStreak: 2,
      mealsAmount: 5,
      withinDiet: 3,
      outsideDiet: 2,
    }))
  })
})