import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

import Colors from "@/constants/colors";

import { PageTemplate } from "@/components/PageTemplate";
import { StatisticCard } from "@/components/StatisticCard";
import { NunitoText, NunitoTitle } from "@/components/Text";

import { useDietStatistics } from "@/hooks/useDietStatistics";

export default function Statistics() {
  const { t } = useTranslation()

  const Statistics = useDietStatistics();

  const headerVariant = Statistics === null
    ? "gray"
    : Statistics.percentWithinDiet >= 0.5
      ? "green"
      : "red"

  const header = Statistics === null
    ? t('statistics.title')
    : (Statistics.percentWithinDiet * 100).toFixed(2).replace('.', ',') + "%"

  const bestSequence = Statistics?.bestSequence ?? 0
  const mealsAmount = Statistics?.mealsAmount ?? 0
  const inMeals = Statistics?.inMeals ?? 0
  const outMeals = Statistics?.outMeals ?? 0

  return (
    <PageTemplate
      variant={headerVariant}
      onPressGoBack={() => router.back()}
      headerTitle={(
        <Fragment>
          <NunitoTitle style={styles.navHeadline}>
            {header}{"\n"}
          </NunitoTitle>

          <NunitoText style={styles.navSubHeadline}>
            {t('statistics.subtitle')}
          </NunitoText>
        </Fragment>
      )}
    >
      <View style={styles.dataContainer}>

        <NunitoTitle style={styles.title}>
          {t('statistics.sectionTitle')}
        </NunitoTitle>

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
    fontSize: 32
  },
  navSubHeadline: {
    fontSize: 14,
    color: Colors.gray[200]
  },

  title: {
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