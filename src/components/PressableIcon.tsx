import { GestureResponderEvent, Pressable, PressableProps, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { SvgProps } from "react-native-svg";

import Colors from "@/constants/colors";
import { TapAnimationConfig } from "@/constants/animation";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

type Props = PressableProps & {
  fill?: string
  icon: (props: SvgProps) => React.JSX.Element
}

export function PressableIcon({ icon: Icon, fill = Colors.white, onPressIn, onPressOut, ...props }: Props) {
  const isPressedIn = useSharedValue(false)

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: isPressedIn.value
      ? withTiming("rgba(0, 0, 0, 0.12)", TapAnimationConfig)
      : withTiming("transparent")
  }))

  function handleOnPressIn(event: GestureResponderEvent) {
    isPressedIn.value = true

    if (onPressIn) onPressIn(event)
  }

  function handleOnPressOut(event: GestureResponderEvent) {
    isPressedIn.value = false

    if (onPressOut) onPressOut(event)
  }

  return (
    <AnimatedPressable
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      style={[styles.container, animatedStyles]}
      {...props}
    >
      <Icon fill={fill} height={24} width={24} />
    </AnimatedPressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    margin: -6,
    borderRadius: 999
  },
})