import Colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 24,
    marginBottom: 24
  },
  dateTimeContainer: {
    flexDirection: "row",
    gap: 20
  },

  selectContainer: {
    gap: 8
  },
  selectLabel: {
    color: Colors.gray[200],
    fontSize: 14
  },
  selectOptions: {
    flexDirection: "row",
    gap: 8
  }
})

export default styles