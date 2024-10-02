import { StyleSheet, Text, View, ViewProps } from "react-native";

import Colors from "@/constants/colors";
import FontFamily from "@/constants/fonts";

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
      <Text style={styles.headline}>
        {headline}
      </Text>

      <Text style={styles.subHeadline}>
        {subHeadline}
      </Text>
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
    fontFamily: FontFamily.bold,
    fontSize: 24,
    color: Colors.gray[100],
    textAlign: "center"
  },
  subHeadline: {
    fontFamily: FontFamily.regular,
    color: Colors.gray[200],
    fontSize: 14,
    textAlign: "center"
  }
})