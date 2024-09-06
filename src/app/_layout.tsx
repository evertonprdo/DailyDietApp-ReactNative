import "@/utils/dayjsLocaleConfig"

import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from "@expo-google-fonts/nunito-sans"
import { SafeAreaProvider } from "react-native-safe-area-context";

import Colors from "@/constants/colors";
import { Loading } from "@/components/Loading";

import { getStorageMeals, StorageMealsProps } from "@/storage/storageMeals";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })
  const [initialMeals, setInitialMeals] = useState<StorageMealsProps | null>(null)

  useEffect(() => {
    getStorageMeals().then(response => setInitialMeals(response))
  }, [])

  if (!(fontsLoaded && initialMeals)) return <Loading />

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