import Colors from "@/constants/colors";
import FontFamily from "@/constants/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 24,
    marginBottom: 24,
  },
  dateTimeContainer: {
    flexDirection: "row",
    gap: 20
  },

  selectContainer: {
    gap: 8
  },
  selectLabel: {
    fontFamily: FontFamily.bold,
    color: Colors.gray[200],
    fontSize: 14
  },
  selectOptions: {
    flexDirection: "row",
    gap: 8
  },
  calendarIcon: {
    position: "absolute",
    right: 14,
    bottom: 17,
    pointerEvents: "none"
  },

  dateInputContainer: {
    flex: 1
  }

})

export default styles