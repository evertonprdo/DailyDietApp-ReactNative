import { FormInputProps } from "@/components/Form"

import { validateInputs } from "../validationInputs"

import { InvalidInputDescriptionError } from "../errors/invalid-input-description-error"
import { MissingInputDateTimeError } from "../errors/missing-input-date-time-error"
import { MissingIsWithinDietError } from "../errors/missing-is-within-diet-error"
import { InvalidInputNameError } from "../errors/invalid-input-name-error"

describe("Utils: Validation Input", () => {
  it("should validate meal's fields", () => {
    const mealInput: FormInputProps = {
      title: 'meal test',
      description: 'meal test description',
      date: 'xx/xx/xxxx',
      time: 'xx/xx/xxxx',
      isWithinDiet: true
    }

    expect(validateInputs(mealInput)).toEqual(true)
  })

  it("should not validate the meal's name field if it has less than three characters", () => {
    const mealInput: FormInputProps = {
      title: 'ts',
      description: 'meal test description',
      date: 'xx/xx/xxxx',
      time: 'xx/xx/xxxx',
      isWithinDiet: true
    }

    expect(() => validateInputs(mealInput)).toThrow(InvalidInputNameError)
  })

  it("should not validate the meal's description field if it has less than twelve characters", () => {
    const mealInput: FormInputProps = {
      title: 'test title',
      description: 'less',
      date: 'xx/xx/xxxx',
      time: 'xx/xx/xxxx',
      isWithinDiet: true
    }

    expect(() => validateInputs(mealInput)).toThrow(InvalidInputDescriptionError)
  })

  it("should not validate the meal's date time fields if it empty", () => {
    const mealInput: FormInputProps = {
      title: 'test title',
      description: 'meal test description',
      date: '',
      time: '',
      isWithinDiet: true
    }

    expect(() => validateInputs(mealInput)).toThrow(MissingInputDateTimeError)
  })

  it("should not validate the meal's is within diet field if it null", () => {
    const mealInput: FormInputProps = {
      title: 'test title',
      description: 'meal test description',
      date: 'xx/xx/xxxx',
      time: 'xx/xx/xxxx',
      isWithinDiet: null
    }

    expect(() => validateInputs(mealInput)).toThrow(MissingIsWithinDietError)
  })
})