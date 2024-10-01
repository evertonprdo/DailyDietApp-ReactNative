import { useMemo, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, StyleSheet, TextStyle, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useTranslation } from "react-i18next"

import Logo from "@/assets/Logo";
import Plus from "@/assets/icons/Plus";
import ProfilePhoto from "@/assets/profile-photo.jpeg"
import ArrowUpRight from "@/assets/icons/ArrowUpRight";

import Colors from "@/constants/colors";
import { Button } from "@/components/Button";
import { Profile } from "@/components/Profile";
import { PressableIcon } from "@/components/PressableIcon";
import { NunitoText, NunitoTitle } from "@/components/Text";
import { MealSectionList } from "@/components/MealSectionList";

import { useMealsReducer } from "@/hooks/useMealsReducer";
import { useDietStatistics } from "@/hooks/useDietStatistics";
import { getFormattedSectionList, MealSectionListProps } from "@/utils/meals";

export default function Home() {
  const { t } = useTranslation()
  const Insets = useSafeAreaInsets()

  const { meals } = useMealsReducer();
  const Statistics = useDietStatistics();

  const [sectionMeals, setSectionMeals] = useState<MealSectionListProps>([]);
  const [showModal, setShowModal] = useState(false)

  const cardColors = Statistics === null
    ? [Colors.gray[600], Colors.gray[200]]
    : Statistics.percentWithinDiet >= 0.5
      ? [Colors.brand.greenLight, Colors.brand.greenDark]
      : [Colors.brand.redLight, Colors.brand.redDark]

  const cardHeadline = Statistics === null
    ? t('home.card.welcome')
    : (Statistics.percentWithinDiet * 100).toFixed(2).replace(".", ",") + "%"

  const cardSubHeadline = Statistics === null
    ? t('home.card.emptyMessage')
    : t('home.card.message')

  useMemo(() => {
    if (meals.length > 0) {
      setSectionMeals(
        getFormattedSectionList(meals)
      )
    } else {
      setSectionMeals([])
    }
  }, [meals])

  return (
    <View style={styles.container}>
      <MealSectionList sections={sectionMeals}>

        <View style={[styles.header, { paddingTop: Insets.top + 24 }]}>
          <Logo />

          <Pressable onPress={() => setShowModal(true)}>
            <Image
              source={ProfilePhoto}
              style={styles.imageProfile}
            />
          </Pressable>
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
            {t('home.labelMeals')}
          </NunitoText>

          <Button
            title={t('home.btnNewMeal')}
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

      <Profile
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </View >
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