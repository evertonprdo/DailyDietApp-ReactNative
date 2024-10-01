import { useEffect } from "react";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import Colors from "@/constants/colors";
import { NunitoTitle } from "./Text";
import { useTranslation } from "react-i18next";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

type Props = PressableProps & {
  isSelected?: boolean
  variant: "YES" | "NO"
}

export function Select({ variant, isSelected, children, ...props }: Props) {
  const { t } = useTranslation()
  const isSelectedSv = useSharedValue(false);

  const bgTintColor = variant === "YES"
    ? Colors.brand.greenLight
    : Colors.brand.redLight

  const tintColor = variant === "YES"
    ? Colors.brand.greenDark
    : Colors.brand.redDark

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: isSelectedSv.value
      ? withTiming(bgTintColor)
      : withTiming(Colors.gray[600]),

    borderColor: isSelectedSv.value
      ? withTiming(tintColor)
      : withTiming("transparent")
  }))

  useEffect(() => {
    isSelectedSv.value = isSelected ?? false
  }, [isSelected])

  return (
    <AnimatedPressable
      style={[styles.select, animatedStyles]}
      {...props}
    >
      <View style={[styles.tag, { backgroundColor: tintColor }]} />

      <NunitoTitle style={styles.text}>
        {variant === "YES"
          ? t('form.yes')
          : t('form.no')
        }
      </NunitoTitle>
    </AnimatedPressable>
  )
}

const styles = StyleSheet.create({
  select: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    minHeight: 50,
    maxHeight: 50,
    paddingHorizontal: 16,
    gap: 8,

    borderRadius: 6,
    borderWidth: 1
  },
  tag: {
    height: 8,
    width: 8,
    borderRadius: 9999
  },
  text: {
    color: Colors.gray[100],
    fontSize: 14
  }
})