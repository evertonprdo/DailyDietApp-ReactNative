import { StyleSheet } from "react-native";
import Colors from "@/constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 24
  },
  text: {
    color: Colors.gray[100],
    fontSize: 18
  },
  emptyView: {
    width: 24,
    height: 24
  }
})

export default styles