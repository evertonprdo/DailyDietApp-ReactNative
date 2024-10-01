import { FormInputProps } from "@/components/Form"

import { InvalidInputNameError } from "./errors/invalid-input-name-error"
import { MissingIsWithinDietError } from "./errors/missing-is-within-diet-error"
import { MissingInputDateTimeError } from "./errors/missing-input-date-time-error"
import { InvalidInputDescriptionError } from "./errors/invalid-input-description-error"

export function validateInputs(meal: FormInputProps) {
  if (meal.isWithinDiet === null) 
    throw new MissingIsWithinDietError()

  if (!(meal.time.trim() || meal.date.trim())) 
    throw new MissingInputDateTimeError()

  if (meal.title.trim().length < 3) 
    throw new InvalidInputNameError()

  if (meal.description.trim().length < 12) 
    throw new InvalidInputDescriptionError()

  return true
}