import { FormInputProps } from "@/components/Form"

export function inputValidations(meal: FormInputProps) {
  if (meal.isWithinDiet === null) 
    return "Selecione se a refeição está dentro da dieta"

  if (!(meal.time.trim() || meal.date.trim())) 
    return "Preencha a data e horas da refeição"

  if (meal.title.trim().length < 3) 
    return "O nome da refeição deve ter pelo menos 3 caracteres"

  if (meal.description.trim().length < 12) 
    return "A descrição deve ter pelo menos 12 caracteres"

  return true
}