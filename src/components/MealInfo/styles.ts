import { StyleSheet } from "react-native";
import Colors from "@/constants/colors";

const styles = StyleSheet.create({
  container: {
    gap: 24,
    marginBottom: 24
  },

  section: {
    gap: 8
  },
  title: {
    fontSize: 20,
    color: Colors.gray[100]
  },
  text: {
    fontSize: 16,
    color: Colors.gray[200]
  },
  subTitle: {
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
    backgroundColor: Colors.brand.greenDark
  },
})

export default styles