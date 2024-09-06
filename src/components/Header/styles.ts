import { StyleSheet } from "react-native";
import Colors from "@/constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",

    paddingHorizontal: 24,
    paddingVertical: 24
  },
  text: {
    color: Colors.gray[100],
    fontSize: 18,
    textAlign: "center"
  },
  emptyView: {
    width: 24,
    height: 24
  }
})

export default styles