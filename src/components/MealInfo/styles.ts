import { StyleSheet } from "react-native";
import Colors from "@/constants/colors";
import FontFamily from "@/constants/fonts";

const styles = StyleSheet.create({
  container: {
    gap: 24,
    marginBottom: 24
  },

  section: {
    gap: 8
  },
  title: {
    fontFamily: FontFamily.bold,
    fontSize: 20,
    color: Colors.gray[100]
  },
  text: {
    fontFamily: FontFamily.regular,
    fontSize: 16,
    color: Colors.gray[200]
  },
  subTitle: {
    fontFamily: FontFamily.bold,
    fontSize: 14,
    color: Colors.gray[100]
  },

  tagContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",

    backgroundColor: Colors.gray[600],

    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,

    borderRadius: 999
  },
  tagIcon: {
    height: 8,
    width: 8,
    borderRadius: 999,
  },
})

export default styles