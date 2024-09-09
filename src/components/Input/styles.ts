import Colors from "@/constants/colors";
import FontFamily from "@/constants/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 4
  },
  input: {
    padding: 14,
    
    color: Colors.gray[100],
    fontFamily: FontFamily.regular,
    fontSize: 16,

    borderWidth: 1,
    borderRadius: 6,
  },
  label: {
    color: Colors.gray[200],
    fontSize: 14
  }
})

export default styles