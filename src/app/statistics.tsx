import { PageTemplate } from "@/components/PageTemplate";
import { StatisticCard } from "@/components/StatisticCard";
import { NunitoText, NunitoTitle } from "@/components/Text";
import Colors from "@/constants/colors";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Statistics() {
  return (
    <PageTemplate
      variant="green"
      onPressGoBack={() => router.back()}
      headerTitle={(
        <>
          <NunitoTitle style={styles.navHeadline}>
            90,86%{"\n"}
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
          headline="22"
          subHeadline="melhor sequencia de pratos dentro da dieta"
        />
        <StatisticCard
          variant="gray"
          headline="109"
          subHeadline="refeições registradas"
        />
        
        <View style={styles.rowDataContainer}>
          <StatisticCard
            variant="green"
            headline="99"
            subHeadline="refeições dentro da dieta"
            style={styles.rowCard}
          />
          <StatisticCard
            variant="red"
            headline="10"
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