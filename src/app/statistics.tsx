import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

import Colors from "@/constants/colors";
import FontFamily from "@/constants/fonts";

import { PageTemplate } from "@/components/PageTemplate";
import { StatisticCard } from "@/components/StatisticCard";

import { useDiet } from "@/hooks/useDiet";

export default function Statistics() {
  const { t } = useTranslation()

  const { statistics } = useDiet();

  const headerVariant = statistics === null
    ? "gray"
    : statistics.percentWithinDiet >= 0.5
      ? "green"
      : "red"

  const header = statistics === null
    ? t('statistics.title')
    : (statistics.percentWithinDiet * 100).toFixed(2).replace('.', ',') + "%"

  const inMeals = statistics?.withinDiet ?? 0
  const outMeals = statistics?.outsideDiet ?? 0
  const mealsAmount = statistics?.mealsAmount ?? 0
  const bestSequence = statistics?.bestStreak ?? 0

  return (
    <PageTemplate
      variant={headerVariant}
      onPressGoBack={() => router.back()}
      headerTitle={(
        <Fragment>
          <Text style={styles.navHeadline}>
            {header}{"\n"}
          </Text>

          <Text style={styles.navSubHeadline}>
            {t('statistics.subtitle')}
          </Text>
        </Fragment>
      )}
    >
      <View style={styles.dataContainer}>

        <Text style={styles.title}>
          {t('statistics.sectionTitle')}
        </Text>

        <StatisticCard
          variant="gray"
          headline={String(bestSequence)}
          subHeadline={t('statistics.cards.bestStreak')}
        />
        <StatisticCard
          variant="gray"
          headline={String(mealsAmount)}
          subHeadline={t('statistics.cards.registers')}
        />

        <View style={styles.rowDataContainer}>
          <StatisticCard
            variant="green"
            headline={String(inMeals)}
            subHeadline={t('statistics.cards.withinCount')}
            style={styles.rowCard}
          />
          <StatisticCard
            variant="red"
            headline={String(outMeals)}
            subHeadline={t('statistics.cards.outsideCount')}
            style={styles.rowCard}
          />
        </View>

      </View>
    </PageTemplate>
  )
}

const styles = StyleSheet.create({
  navHeadline: {
    fontSize: 32,
    fontFamily: FontFamily.bold
  },
  navSubHeadline: {
    fontFamily: FontFamily.regular,
    fontSize: 14,
    color: Colors.gray[200]
  },

  title: {
    fontFamily: FontFamily.bold,
    fontSize: 14,
    color: Colors.gray[100],
    textAlign: "center",

    marginBottom: 12,
  },

  dataContainer: {
    flex: 1,
    gap: 12
  },
  rowDataContainer: {
    flexDirection: "row",
    gap: 12
  },
  rowCard: {
    flex: 1
  }
})