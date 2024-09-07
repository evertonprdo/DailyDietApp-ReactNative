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
  },
  calendarIcon: {
    position: "absolute",
    right: 14,
    bottom: 17,
    pointerEvents: "none"
  },

  dateInputCotainer: {
    flex: 1
  }

})

export default styles