import Colors from "@/constants/colors";
import FontFamily from "@/constants/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "flex-end",
  },

  bluer: {
    flex: 1
  },

  container: {
    width: "100%",
    backgroundColor: Colors.gray[700],
    padding: 24,
    gap: 16,
    borderTopWidth: 1,
    borderColor: Colors.gray[600]
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  headlineContainer: {
    gap: 8
  },

  headline: {
    fontFamily: FontFamily.bold,
    color: Colors.gray[200],
    fontSize: 18
  },

  subHeadline: {
    fontFamily: FontFamily.regular,
    color: Colors.gray[300],
    fontSize: 16
  }
})

export default styles