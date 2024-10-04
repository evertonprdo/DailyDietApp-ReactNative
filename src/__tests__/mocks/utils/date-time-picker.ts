import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker'

export const mockAndroidDialogDateChange = (datePickedByUser: Date) => {
  jest.spyOn(DateTimePickerAndroid, 'open').mockImplementation(({ onChange }: any) => {
    const DateTimePickerEvent = { type: 'set' } as DateTimePickerEvent

    onChange(DateTimePickerEvent, datePickedByUser)
  })
}