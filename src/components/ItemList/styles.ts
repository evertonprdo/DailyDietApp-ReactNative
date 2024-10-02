import { StyleSheet } from "react-native"
import Colors from "@/constants/colors"
import FontFamily from "@/constants/fonts"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    paddingVertical: 14,
    paddingLeft: 12,
    paddingRight: 16,
    gap: 12,

    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.gray[500]
  },

  title: { 
    fontFamily: FontFamily.regular,
    flex: 1,
    color: Colors.gray[200],
    fontSize: 16
  },
  time: {
    fontFamily: FontFamily.bold,
    color: Colors.gray[100],
    fontSize: 12
  },

  divider: {
    width: 1,
    height: "100%",
    backgroundColor: Colors.gray[400]
  },

  tag: {
    height: 14,
    width: 14,
    borderRadius: 999
  }
})

export default styles