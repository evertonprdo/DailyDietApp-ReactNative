import { Stack } from "expo-router";
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from "@expo-google-fonts/nunito-sans"
import { SafeAreaProvider } from "react-native-safe-area-context";

import Colors from "@/constants/colors";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  if (!fontsLoaded) return null

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: Colors.gray[700] },
          headerShown: false,
          statusBarTranslucent: true,
          statusBarColor: "transparent",
          statusBarStyle: "dark"
        }}
      />
    </SafeAreaProvider>
  )
}