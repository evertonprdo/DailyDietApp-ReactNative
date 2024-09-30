import i18n from "@/libs/i18n"
import { FormInputProps } from "@/components/Form"

export function inputValidations(meal: FormInputProps) {
  if (meal.isWithinDiet === null) 
    return i18n.t('Form.alerts.isWithinDiet')

  if (!(meal.time.trim() || meal.date.trim())) 
    return i18n.t('Form.alerts.fillDateTime')

  if (meal.title.trim().length < 3) 
    return i18n.t('Form.alerts.nameLength')

  if (meal.description.trim().length < 12) 
    return i18n.t('Form.alerts.descriptionLength')

  return true
}