import { useMemo, useState } from "react";
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

import { useMealsReducer } from "@/hooks/useMealsReducer";
import { getFormatedSectionList, MealSectionListProps } from "@/utils/meals";
import { useDietStatistics } from "@/hooks/useDietStatistics";

export default function Home() {
  const Insets = useSafeAreaInsets()
  const { meals } = useMealsReducer();
  const Statistics = useDietStatistics();

  const cardColors = Statistics === null
    ? [Colors.gray[600], Colors.gray[200]]
    : Statistics.percentWithinDiet >= 0.5
      ? [Colors.brand.greenLight, Colors.brand.greenDark]
      : [Colors.brand.redLight, Colors.brand.redDark]

  const cardHeadline = Statistics === null
    ? "Bem vindo(a)!"
    : (Statistics.percentWithinDiet * 100).toFixed(2).replace(".", ",") + "%"

  const cardSubHeadline = Statistics === null
    ? "Que tal começar cadastrando sua\nprimeira refeição"
    : "das refeições dentro da dieta"

  const [sectionMeals, setSectionMeals] = useState<MealSectionListProps>([]);

  useMemo(() => {
    if (meals.length > 0) {
      setSectionMeals(
        getFormatedSectionList(meals)
      )
    }
  }, [meals])

  return (
    <View style={styles.container}>
      <MealSectionList sections={sectionMeals}>

        <View style={[styles.header, { paddingTop: Insets.top + 24 }]}>
          <Logo />

          <Image
            source={ProfilePhoto}
            style={styles.imageProfile}
          />
        </View>

        <View style={[styles.resumeCard, { backgroundColor: cardColors[0] }]}>
          <NunitoTitle style={styles.resumeTitle}>
            {cardHeadline}
          </NunitoTitle>

          <NunitoText style={styles.resumeSubtitle}>
            {cardSubHeadline}
          </NunitoText>

          <View style={styles.resumeAbsoluteIcon}>
            <PressableIcon
              icon={ArrowUpRight}
              fill={cardColors[1]}
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
    overflow: "hidden",
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
    pointerEvents: "none"
  }
})