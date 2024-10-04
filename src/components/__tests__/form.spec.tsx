import { fireEvent, render, screen, waitFor } from "@/__tests__/mocks/utils/customRender"
import { mockAndroidDialogDateChange } from "@/__tests__/mocks/utils/date-time-picker"

import { Form } from "../Form"
import dayjs from "dayjs"

describe("Components: Form", () => {
  it("should trigger setState with title value on Change Text", () => {
    const setState = jest.fn()
    render(<Form state={initialState} setState={setState} />)

    const nameInput = screen.getByTestId('name-input')
    fireEvent(nameInput, 'changeText', 'changed')

    expect(setState).toHaveBeenCalledWith(expect.objectContaining({
      title: 'changed'
    }))
  })

  it("should trigger setState with isWithinDiet value on change value", () => {
    const setState = jest.fn()
    render(<Form state={initialState} setState={setState} />)

    const yesInput = screen.getByTestId('yes-input')
    fireEvent.press(yesInput)

    expect(setState).toHaveBeenCalledWith(expect.objectContaining({
      isWithinDiet: true
    }))
  })

  it("should trigger setState with time value on set time", () => {
    const setState = jest.fn()
    render(<Form state={initialState} setState={setState} />)

    const dateISO = '2024-11-11T23:00:00.000Z'
    const changeDate = new Date(dateISO)

    const inputTime = screen.getByTestId('time-input')

    mockAndroidDialogDateChange(changeDate)

    const mockEvent = { preventDefault: jest.fn() }
    fireEvent(inputTime, 'pressIn', mockEvent)

    expect(setState).toHaveBeenCalledWith(expect.objectContaining({
      time: dateISO
    }))
  })

  it("should trigger setState with date value on change date", () => {
    const setState = jest.fn()
    render(<Form state={initialState} setState={setState} />)

    const inputDate = screen.getByTestId('date-input')

    const mockEvent = { preventDefault: jest.fn() }
    fireEvent(inputDate, 'pressIn', mockEvent)

    fireEvent.press(screen.getByText('1'))
    fireEvent.press(screen.getByTestId('modal-button'))

    const selectedDate = `${dayjs().format('YYYY-MM')}-01`

    expect(setState).toHaveBeenCalledWith(expect.objectContaining({
      date: selectedDate
    }))
  })
})

const initialState = {
  title: '',
  description: '',
  date: '',
  time: '',
  isWithinDiet: null
}