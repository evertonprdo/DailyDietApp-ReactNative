import { useState } from "react";
import { Keyboard, NativeSyntheticEvent, NativeTouchEvent, Platform, TextInputFocusEventData, View } from "react-native";
import dayjs from "dayjs";
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import Colors from "@/constants/colors";
import CalendarBlank from "@/assets/icons/CalendarBlank";

import styles from "./styles";
import { Input } from "@/components/Input";
import { NunitoTitle } from "@/components/Text";
import { Select } from "@/components/Select";
import { Calendar, SelectDateModal } from "@/components/SelectDateModal";
import { Button } from "@/components/Button";

type FormInputProps = {
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
  const [showModal, setShowModal] = useState(false);

  const [localDate, setLocalDate] = useState("");
  const [localTime, setLocalTime] = useState("");

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
      value: new Date(localTime || Date.now()),
      mode: 'time',
      onChange: (DateTimePickerEvent, date) => {
        if(DateTimePickerEvent.type === "set") {
          handleOnChangeText("time", dayjs(date).format("HH:mm"))
          setLocalTime(date?.toISOString() ?? "")
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
        label="Nome"
        value={state.title}
        onChangeText={(text) => handleOnChangeText("title", text)}
        maxLength={24}
      />

      <Input
        label="Descrição"
        value={state.description}
        onChangeText={(text) => handleOnChangeText("description", text)}
        numberOfLines={5}
        multiline
        textAlignVertical="top"
        maxLength={255}
      />

      <View style={styles.dateTimeContainer}>
        <View style={styles.dateInputCotainer}>
          <Input
            label="Data"
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

        <View style={styles.dateInputCotainer}>
          <Input
            label="Hora"
            value={state.time}
            onChangeText={(text) => handleOnChangeText("time", text)}
            keyboardType="numeric"
            maxLength={5}
            onPressIn={handleOnPressInTime}
            onFocus={() => Keyboard.dismiss()}
          />
        </View>
      </View>

      <View style={styles.selectContainer}>
        <NunitoTitle style={styles.selectLabel}>
          Está dentro da dieta?
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
        headline="Selecionar data"
        subHeadline="Selecione o dia desta refeição"
      >
        <Calendar
          maxDate={dayjs(new Date).add(-1, 'day').toISOString()}
          onDayPress={(value) => setLocalDate(value.dateString)}
          markedDates={{ [localDate]: { selected: true } }}
        />

        <Button title="Confirmar" onPress={handleSelectDateConfirm} />
      </SelectDateModal>
    </View>
  )
}