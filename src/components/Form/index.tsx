import { View } from "react-native";

import styles from "./styles";
import { Input } from "@/components/Input";
import { NunitoTitle } from "@/components/Text";
import { Select } from "@/components/Select";

export function Form() {
  return (
    <View style={styles.container}>
      <Input label="Nome" />

      <Input label="Descrição" />

      <View style={styles.dateTimeContainer}>
        <Input label="Data" />

        <Input label="Hora" />
      </View>

      <View style={styles.selectContainer}>
        <NunitoTitle style={styles.selectLabel}>
          Está dentro da dieta?
        </NunitoTitle>

        <View style={styles.selectOptions}>
          <Select
            variant="YES"
          />
          <Select
            variant="NO"
          />
        </View>
        
      </View>
    </View>
  )
}