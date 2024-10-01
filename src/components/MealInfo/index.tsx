import { View } from "react-native";
import { useTranslation } from "react-i18next";

import Colors from "@/constants/colors";

import styles from "./styles";
import { NunitoText, NunitoTitle } from "@/components/Text";

type Props = {
  title: string
  description: string
  dateTime: string
  isWithinDiet: boolean
}

export function MealInfo({ title, description, dateTime, isWithinDiet }: Props) {
  const { t } = useTranslation()

  const tagColor = isWithinDiet ? Colors.brand.greenDark : Colors.brand.redDark
  const tagText = isWithinDiet ? t('meal.tag.good') : t('meal.tag.bad')

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
          {t('meal.dateTime')}
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