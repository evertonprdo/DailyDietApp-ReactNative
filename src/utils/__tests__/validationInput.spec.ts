import { FormInputProps } from "@/components/Form"

import { validateInputs } from "../validationInputs"
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
})