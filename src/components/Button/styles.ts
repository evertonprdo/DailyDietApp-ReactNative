import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
     flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    paddingVertical: 16,
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