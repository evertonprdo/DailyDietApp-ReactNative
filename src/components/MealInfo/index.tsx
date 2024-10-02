import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";

import Colors from "@/constants/colors";

import styles from "./styles";

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
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.text}>
          {description}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>
          {t('meal.dateTime')}
        </Text>

        <Text style={styles.text}>
          {dateTime}
        </Text>
      </View>

      <View style={styles.tagContainer}>
        <View style={[styles.tagIcon, { backgroundColor: tagColor }]} />

        <Text style={styles.text}>
          {tagText}
        </Text>
      </View>
    </View>
  )
}