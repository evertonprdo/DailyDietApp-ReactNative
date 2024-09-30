import { useState } from "react";
import { Keyboard, NativeSyntheticEvent, NativeTouchEvent, View } from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import dayjs from "dayjs";

import Colors from "@/constants/colors";
import CalendarBlank from "@/assets/icons/CalendarBlank";

import styles from "./styles";
import { Input } from "@/components/Input";
import { NunitoTitle } from "@/components/Text";
import { Select } from "@/components/Select";
import { Calendar, SelectDateModal } from "@/components/SelectDateModal";
import { Button } from "@/components/Button";
import Clock from "@/assets/icons/Clock";
import { useTranslation } from "react-i18next";

export type FormInputProps = {
  title: string;
  description: string
  date: string;
  time: string
  isWithinDiet: boolean | null;
}

type Props = {
  state: FormInputProps,
  setState: (val: FormInputProps) => void
}

export function Form({ state, setState }: Props) {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false);

  const [localDate, setLocalDate] = useState(state.date);

  function handleOnChangeText(key: keyof FormInputProps, text: string) {
    setState({
      ...state,
      [key]: text
    })
  }

  function handleOnChangeValue(val: boolean) {
    setState({
      ...state,
      isWithinDiet: val
    })
  }

  function handleOnPressInDate(e: NativeSyntheticEvent<NativeTouchEvent>) {
    e.preventDefault()

    setShowModal(true)
  }

  function handleOnPressInTime(e: NativeSyntheticEvent<NativeTouchEvent>) {
    e.preventDefault()

    DateTimePickerAndroid.open({
      value: new Date(state.time || Date.now()),
      mode: 'time',
      onChange: (DateTimePickerEvent, date) => {
        if (DateTimePickerEvent.type === "set") {
          handleOnChangeText("time", dayjs(date).toISOString())
        }
      }
    })
  }

  function handleSelectDateConfirm() {
    setShowModal(false);
    handleOnChangeText("date", localDate)
  }

  return (
    <View style={styles.container}>
      <Input
        label={t('Form.name')}
        value={state.title}
        onChangeText={(text) => handleOnChangeText("title", text)}
        maxLength={24}
      />

      <Input
        label={t('Form.description')}
        value={state.description}
        onChangeText={(text) => handleOnChangeText("description", text)}
        numberOfLines={5}
        multiline
        textAlignVertical="top"
        maxLength={255}
      />

      <View style={styles.dateTimeContainer}>
        <View style={styles.dateInputContainer}>
          <Input
            label={t('Form.date')}
            value={state.date ? dayjs(state.date).format("DD/MM/YYYY") : ""}
            onPressIn={handleOnPressInDate}
            onFocus={() => Keyboard.dismiss()}
          />
          <CalendarBlank
            width={24}
            height={24}
            fill={Colors.gray[200]}
            style={styles.calendarIcon}
          />
        </View>

        <View style={styles.dateInputContainer}>
          <Input
            label={t('Form.description')}
            value={state.time ? dayjs(state.time).format("HH:mm") : ""}
            onChangeText={(text) => handleOnChangeText("time", text)}
            keyboardType="numeric"
            maxLength={5}
            onPressIn={handleOnPressInTime}
            onFocus={() => Keyboard.dismiss()}
          />
          <Clock
            width={24}
            height={24}
            fill={Colors.gray[200]}
            style={styles.calendarIcon}
          />
        </View>
      </View>

      <View style={styles.selectContainer}>
        <NunitoTitle style={styles.selectLabel}>
          {t('Form.isWithinDiet')}
        </NunitoTitle>

        <View style={styles.selectOptions}>
          <Select
            variant="YES"
            isSelected={!!state.isWithinDiet}
            onPress={() => handleOnChangeValue(true)}
          />
          <Select
            variant="NO"
            isSelected={!(state.isWithinDiet || state.isWithinDiet === null)}
            onPress={() => handleOnChangeValue(false)}
          />
        </View>

      </View>

      <SelectDateModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        headline={t('Form.modal.headline')}
        subHeadline={t('Form.modal.subHeadline')}
      >
        <Calendar
          maxDate={dayjs(new Date).add(-1, 'day').toISOString()}
          onDayPress={(value) => setLocalDate(value.dateString)}
          markedDates={{ [localDate]: { selected: true } }}
        />

        <Button title={t('Form.modal.button')} onPress={handleSelectDateConfirm} />
      </SelectDateModal>
    </View>
  )
}