import Colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",

    paddingHorizontal: 24
  },

  popup: {
    width: "100%",
    justifyContent: "center",

    gap: 32,
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 40,

    backgroundColor: Colors.gray[700],

    borderRadius: 8
  },

  options: {
    width: "100%",
    flexDirection: "row",
    gap: 12
  },
  button: {
    flex: 1
  },

  text: {
    color: Colors.gray[200],
    fontSize: 18,
    textAlign: "center"
  },

  bluer: {
    flex: 1
  }
})

export default styles