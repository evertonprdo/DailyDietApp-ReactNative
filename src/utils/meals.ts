import { StorageMealsProps } from "@/libs/storage/storageMeals";
import dayjs from "dayjs";

type MealProps = StorageMealsProps["data"][0]

export type MealSectionListProps = {
  date: string
  data: {
    id: string;
    title: string;
    date: Date;
    isWithinDiet: boolean;
  }[]
}[]

export function getFormattedSectionList(meals: MealProps[]) {
  const sectionList = mealsToSectionList(meals);

  return sectionList.map(section => {
    return {
      ...section,
      date: dayjs(section.date).format("DD.MM.YYYY")
    }
  })
}

export function mealsToSectionList(meals: MealProps[]) {
  return meals.reduce((sections, meal) => {
    const section = new Date(meal.date).toISOString().split("T")[0]
    const sectionIndex = sections.findIndex(sect => sect.date === section)

    if (sectionIndex !== -1) {
      sections[sectionIndex].data.push({
        ...meal,
        date: new Date(meal.date)
      })
    } else {
      sections.push({
        date: section,
        data: [{
          ...meal,
          date: new Date(meal.date)
        }]
      })
    }

    return sections
  }, [] as MealSectionListProps)
}

export function orderMealsByDate(meals: MealProps[]) {
  return meals.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}