import { PageTemplate } from "@/components/PageTemplate";
import { StatisticCard } from "@/components/StatisticCard";
import { NunitoText, NunitoTitle } from "@/components/Text";
import Colors from "@/constants/colors";
import { useDietStatistics } from "@/hooks/useDietStatistics";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Statistics() {
  const Statistcs = useDietStatistics();

  const headeVariant = Statistcs === null
    ? "gray"
    : Statistcs.percentWithinDiet >= 0.5
      ? "green"
      : "red"

  const percent = Statistcs === null
    ? "Estatísticas"
    : (Statistcs.percentWithinDiet * 100).toFixed(2).replace('.', ',') + "%"

  const bestSequence = Statistcs?.bestSequence ?? 0
  const mealsAmount = Statistcs?.mealsAmount ?? 0
  const inMeals = Statistcs?.inMeals ?? 0
  const outMeals = Statistcs?.outMeals ?? 0

  return (
    <PageTemplate
      variant={headeVariant}
      onPressGoBack={() => router.back()}
      headerTitle={(
        <>
          <NunitoTitle style={styles.navHeadline}>
            {percent}{"\n"}
          </NunitoTitle>

          <NunitoText style={styles.navSubHeadline}>
            das refeições dentro da dieta
          </NunitoText>
        </>
      )}
    >
      <View style={styles.dataContainer}>

        <NunitoTitle style={styles.title}>
          Estatísticas gerais
        </NunitoTitle>

        <StatisticCard
          variant="gray"
          headline={String(bestSequence)}
          subHeadline="melhor sequencia de pratos dentro da dieta"
        />
        <StatisticCard
          variant="gray"
          headline={String(mealsAmount)}
          subHeadline="refeições registradas"
        />

        <View style={styles.rowDataContainer}>
          <StatisticCard
            variant="green"
            headline={String(inMeals)}
            subHeadline="refeições dentro da dieta"
            style={styles.rowCard}
          />
          <StatisticCard
            variant="red"
            headline={String(outMeals)}
            subHeadline="refeições fora da dieta"
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