import { GestureResponderEvent, Pressable, PressableProps, View } from "react-native";
import { NunitoText, NunitoTitle } from "@/components/Text";
import styles from "./styles";
import Colors from "@/constants/colors";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

type Props = PressableProps & {
  time: string
  title: string
  isWithinDiet: boolean
}

const AnimConfig = {
  duration: 124,
  easing: Easing.out(Easing.circle)
}

export function ItemList({ title, time, isWithinDiet, onPress, ...props }: Props) {
  const scale = useSharedValue(1)

  const tagColor = isWithinDiet
    ? Colors.brand.greenMid
    : Colors.brand.redMid

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }))

  function handleOnPress(event: GestureResponderEvent) {
    scale.value = withSequence(
      withTiming(0.9, AnimConfig),
      withTiming(1, AnimConfig)
    )

    if (onPress) setTimeout(() => onPress(event), AnimConfig.duration) 
  }

  return (
    <AnimatedPressable
      style={[styles.container, animatedStyle]}
      onPress={handleOnPress}
      {...props}
    >

      <NunitoTitle style={styles.time}>
        {time}
      </NunitoTitle>

      <View style={styles.divider} />

      <NunitoText style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </NunitoText>

      <View style={[styles.tag, { backgroundColor: tagColor }]} />
    </AnimatedPressable>
  )
}