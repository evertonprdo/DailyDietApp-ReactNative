import { useState } from "react";
import { Keyboard, View } from "react-native";

import Colors from "@/constants/colors";
import CalendarBlank from "@/assets/icons/CalendarBlank";

import styles from "./styles";
import { Input } from "@/components/Input";
import { NunitoTitle } from "@/components/Text";
import { Select } from "@/components/Select";
import { Calendar, SelectDateModal } from "@/components/SelectDateModal";
import { Button } from "../Button";
import dayjs from "dayjs";

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
      />

      <Input
        label="Descrição"
        value={state.description}
        onChangeText={(text) => handleOnChangeText("description", text)}
        numberOfLines={5}
        multiline
        textAlignVertical="top"
      />

      <View style={styles.dateTimeContainer}>
        <View style={styles.dateInputCotainer}>
          <Input
            label="Data"
            value={state.date ? dayjs(state.date).format("DD/MM/YYYY") : ""}
            onPress={() => setShowModal(true)}
            onFocus={() => Keyboard.dismiss()}
          />
          <CalendarBlank
            width={24}
            height={24}
            fill={Colors.gray[200]}
            style={styles.calendarIcon}
          />
        </View>

        <Input
          label="Hora"
          value={state.time}
          onChangeText={(text) => handleOnChangeText("time", text)}
          keyboardType="numeric"
        />
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