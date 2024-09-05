import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    minHeight: 50,
    maxHeight: 50,
    paddingHorizontal: 24,
    gap: 12,

    borderWidth: 1,
    borderRadius: 6
  },
  title: {
    fontSize: 14
  }
})

export default styles