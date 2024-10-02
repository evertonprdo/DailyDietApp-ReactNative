import { getFormattedSectionList, mealsToSectionList, orderMealsByDate } from "../meals"

const meals = [
  { id: '4', title: 'test', description: 'desc', date: '2024-12-23T06:00:00Z', isWithinDiet: false },
  { id: '1', title: 'test', description: 'desc', date: '2024-12-20T20:00:00Z', isWithinDiet: true },
  { id: '2', title: 'test', description: 'desc', date: '2024-12-21T13:30:00Z', isWithinDiet: false },
  { id: '5', title: 'test', description: 'desc', date: '2024-12-23T12:00:00Z', isWithinDiet: true },
  { id: '3', title: 'test', description: 'desc', date: '2024-12-22T08:00:00Z', isWithinDiet: true },
]

describe("Utils: Meals", () => {
  it("should order meals by earliest to latest date", () => {
    const orderedMeals = orderMealsByDate(meals)

    expect(orderedMeals).toEqual([
      expect.objectContaining({ id: '5', date: '2024-12-23T12:00:00Z' }),
      expect.objectContaining({ id: '4', date: '2024-12-23T06:00:00Z' }),
      expect.objectContaining({ id: '3', date: '2024-12-22T08:00:00Z' }),
      expect.objectContaining({ id: '2', date: '2024-12-21T13:30:00Z' }),
      expect.objectContaining({ id: '1', date: '2024-12-20T20:00:00Z' }),
    ])
  })

  it("should parse meals to section list", () => {
    const sectionList = mealsToSectionList(meals)

    expect(sectionList).toEqual(expect.arrayContaining([
      { date: '2024-12-20', data: [expect.objectContaining({ id: '1' })] },
      { date: '2024-12-21', data: [expect.objectContaining({ id: '2' })] },
      { date: '2024-12-22', data: [expect.objectContaining({ id: '3' })] },
      {
        date: '2024-12-23', data: expect.arrayContaining([
          expect.objectContaining({ id: '4' }),
          expect.objectContaining({ id: '5' })
        ])
      },
    ]))
  })

  it("should get the meal's section list formatted by locale key", () => {
    const enFmtSectionList = getFormattedSectionList(meals, 'en')
    const ptFmtSectionList = getFormattedSectionList(meals, 'pt')

    expect(enFmtSectionList).toEqual(expect.arrayContaining([
      { date: '12.20.2024', data: [expect.objectContaining({ id: '1' })] },
      { date: '12.21.2024', data: [expect.objectContaining({ id: '2' })] },
      { date: '12.22.2024', data: [expect.objectContaining({ id: '3' })] },
      {
        date: '12.23.2024', data: expect.arrayContaining([
          expect.objectContaining({ id: '4' }),
          expect.objectContaining({ id: '5' }),
        ])
      },
    ]))

    expect(ptFmtSectionList).toEqual(expect.arrayContaining([
      { date: '20.12.2024', data: [expect.objectContaining({ id: '1' })] },
      { date: '21.12.2024', data: [expect.objectContaining({ id: '2' })] },
      { date: '22.12.2024', data: [expect.objectContaining({ id: '3' })] },
      {
        date: '23.12.2024', data: expect.arrayContaining([
          expect.objectContaining({ id: '4' }),
          expect.objectContaining({ id: '5' }),
        ])
      },
    ]))
  })
})