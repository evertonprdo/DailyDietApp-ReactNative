import { StyleSheet, Text, TextProps } from "react-native"
import FontFamily from "@/constants/fonts"

export function NunitoTitle({ children, style, ...props }: TextProps) {
  return <Text style={[styles.bold, style]} {...props}>{children}</Text>
}

export function NunitoText({ children, style, ...props }: TextProps) {
  return <Text style={[styles.regular, style]} {...props}>{children}</Text>
}

const styles = StyleSheet.create({
  bold: {
    fontFamily: FontFamily.bold
  },
  regular: {
    fontFamily: FontFamily.regular
  }
})