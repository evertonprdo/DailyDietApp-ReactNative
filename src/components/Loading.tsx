import Colors from "@/constants/colors";
import { ActivityIndicator, StyleSheet } from "react-native";

export function Loading() {
  return <ActivityIndicator testID="loading-spinner" color={Colors.gray[300]} style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})