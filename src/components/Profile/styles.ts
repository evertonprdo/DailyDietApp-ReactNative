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

    gap: 32,
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 40,

    backgroundColor: Colors.gray[700],

    borderRadius: 8
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  emptyView: {
    height: 24,
    width: 24
  },

  imageProfile: {
    alignSelf: 'center',

    height: 118,
    width: 118,

    borderRadius: 999,
    borderWidth: 2,
    borderColor: Colors.gray[200]
  },

  options: {
    width: "100%",
    gap: 12
  },
  button: {
    flex: 1
  },
  list: {
    gap: 8
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