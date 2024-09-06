import { StyleSheet, View, ViewProps } from "react-native";

import { NunitoText, NunitoTitle } from "@/components/Text";
import Colors from "@/constants/colors";

type Props = ViewProps & {
  variant: "green" | "red" | "gray"
  headline: string
  subHeadline: string
}

export function StatisticCard({ headline, subHeadline, variant, style, ...props }: Props) {
  const backgroundColor = variant === "green"
    ? Colors.brand.greenLight
    : variant === "red"
      ? Colors.brand.redLight
      : Colors.gray[600]

  return (
    <View
      style={[styles.container, { backgroundColor }, style]}
      {...props}
    >
      <NunitoTitle style={styles.headline}>
        {headline}
      </NunitoTitle>

      <NunitoText style={styles.subHeadline}>
        {subHeadline}
      </NunitoText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  headline: {
    fontSize: 24,
    color: Colors.gray[100],
    textAlign: "center"
  },
  subHeadline: {
    color: Colors.gray[200],
    fontSize: 14,
    textAlign: "center"
  }
})