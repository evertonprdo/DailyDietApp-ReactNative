import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, TextStyle, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

import Logo from "@/assets/Logo";
import ProfilePhoto from "@/assets/profile-photo.jpeg"
import Plus from "@/assets/icons/Plus";
import ArrowUpRight from "@/assets/icons/ArrowUpRight";

import Colors from "@/constants/colors";
import { PressableIcon } from "@/components/PressableIcon";
import { NunitoText, NunitoTitle } from "@/components/Text";
import { Button } from "@/components/Button";
import { MealSectionList } from "@/components/MealSectionList";

import { useMeals } from "@/hooks/useMeals";
import DATA from "@/temp/data";

export default function Home() {
  const Insets = useSafeAreaInsets()
  const Meals = useMeals();

  return (
    <View style={styles.container}>
      <MealSectionList
        sections={DATA}
      >
        <View style={[styles.header, { paddingTop: Insets.top + 24 }]}>
          <Logo />

          <Image
            source={ProfilePhoto}
            style={styles.imageProfile}
          />
        </View>

        <View style={styles.resumeCard}>
          <NunitoTitle style={styles.resumeTitle}>
            90,86%
          </NunitoTitle>

          <NunitoText style={styles.resumeSubtitle}>
            das refeições dentro da dieta
          </NunitoText>

          <View style={styles.resumeAbsoluteIcon}>
            <PressableIcon
              icon={ArrowUpRight}
              fill={Colors.brand.greenDark}
              onPress={() => router.navigate("/statistics")}
            />
          </View>
        </View>


        <View style={styles.newMealContainer}>
          <NunitoText style={styles.newMealLabel}>
            Refeições
          </NunitoText>

          <Button
            title="Nova refeição"
            icon={Plus}
            onPress={() => router.navigate("/meal/create")}
          />
        </View>

      </MealSectionList>

      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']}
        locations={[0, 0.9]}
        style={styles.bottomGradient}
      />
    </View>
  )
}

const text: TextStyle = {
  color: Colors.gray[200],
  textAlign: "center"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: "row",
    paddingBottom: 24,
    justifyContent: "space-between"
  },
  imageProfile: {
    height: 40,
    width: 40,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: Colors.gray[200]
  },

  resumeCard: {
    backgroundColor: Colors.brand.greenLight,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 2,
    marginBottom: 40
  },
  resumeTitle: {
    ...text,
    fontSize: 32
  },
  resumeSubtitle: {
    ...text,
    fontSize: 14
  },
  resumeAbsoluteIcon: {
    position: "absolute",
    top: 12,
    right: 12,
  },

  newMealContainer: {
    gap: 8,
  },
  newMealLabel: { 
    color: Colors.gray[100], 
    fontSize: 16 
  },

  bottomGradient: {
    position: 'absolute',
    left: -24,
    right: -24,
    bottom: 0,
    height: "20%",
  }
})