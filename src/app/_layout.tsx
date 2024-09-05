import { Slot } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

      <Slot />
    </View>
  )
}