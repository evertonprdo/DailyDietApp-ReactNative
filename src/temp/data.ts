const DATA = [
  {
    title: "12.08.22",
    data: [
      { id: "1", title: "X-tudo", time: "20:00", isWithinDiet: false },
      { id: "2", title: "Whey protein com leite", time: "16:00", isWithinDiet: true },
      { id: "3", title: "Salada cesar com frango grelhado", time: "20:00", isWithinDiet: true },
      { id: "4", title: "Vitamina de banana com abacate", time: "20:00", isWithinDiet: true },
    ]
  },
  {
    title: "11.08.22",
    data: [
      { id: "5", title: "Whey protein com leite", time: "16:00", isWithinDiet: true },
      { id: "6", title: "X-tudo", time: "20:00", isWithinDiet: false },
      { id: "7", title: "Vitamina de banana com abacate", time: "20:00", isWithinDiet: true },
      { id: "8", title: "Salada cesar com frango grelhado", time: "20:00", isWithinDiet: true },
    ]
  },
  {
    title: "10.08.22",
    data: [
      { id: "9", title: "Whey protein com leite", time: "16:00", isWithinDiet: true },
      { id: "10", title: "Salada cesar com frango grelhado", time: "20:00", isWithinDiet: true },
      { id: "11", title: "X-tudo", time: "20:00", isWithinDiet: false },
      { id: "12", title: "Vitamina de banana com abacate", time: "20:00", isWithinDiet: true },
    ]
  },
]

export type SectionListType = typeof DATA

export default DATA