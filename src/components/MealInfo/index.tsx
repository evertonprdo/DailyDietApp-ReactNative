import { View } from "react-native";

import styles from "./styles";
import { NunitoText, NunitoTitle } from "@/components/Text";
import Colors from "@/constants/colors";

type Props = {
  title: string
  description: string
  dateTime: string
  isWithinDiet: boolean
}

export function MealInfo({ title, description, dateTime, isWithinDiet }: Props) {
  const tagColor = isWithinDiet ? Colors.brand.greenDark : Colors.brand.redDark
  const tagText = isWithinDiet ? "dentro da dieta" : "fora da dieta"

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <NunitoTitle style={styles.title}>
          {title}
        </NunitoTitle>

        <NunitoText style={styles.text}>
          {description}
        </NunitoText>
      </View>

      <View style={styles.section}>
        <NunitoTitle style={styles.subTitle}>
          Data e hora
        </NunitoTitle>

        <NunitoText style={styles.text}>
          {dateTime}
        </NunitoText>
      </View>

      <View style={styles.tagContainer}>
        <View style={[styles.tagIcon, { backgroundColor: tagColor }]} />

        <NunitoText style={styles.text}>
          {tagText}
        </NunitoText>
      </View>
    </View>
  )
}