import Colors from "@/constants/colors";
import FontFamily from "@/constants/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contentContainer: {
    gap: 8,
    paddingBottom: 200,
  },

  sectionTitle: {
    fontFamily: FontFamily.bold,
    fontSize: 18,
    color: Colors.gray[100],
    marginTop: 24
  }
})

export default styles