import FontFamily from "@/constants/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 12,

    borderWidth: 1,
    borderRadius: 6
  },
  title: {
    fontFamily: FontFamily.bold,
    fontSize: 14,
  }
})

export default styles