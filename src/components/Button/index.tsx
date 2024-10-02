import Colors from "@/constants/colors";
import { GestureResponderEvent, Pressable, PressableProps, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { SvgProps } from "react-native-svg";

import styles from "./styles";
import { TapAnimationConfig } from "@/constants/animation";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

type Props = Omit<PressableProps, "children"> & {
  variant?: "dark" | "light"
  title: string
  icon?: (props: SvgProps) => React.JSX.Element
}

export function Button({ variant = "dark", icon: Icon, title, onPressIn, onPressOut, style, ...props }: Props) {
  const isPressedIn = useSharedValue(false);

  const tintColor = variant === "dark"
    ? Colors.white
    : Colors.gray[100]

  const bgColors = variant === "dark"
    ? [Colors.gray[200], Colors.gray[100]]
    : ["transparent", Colors.gray[500]]

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: isPressedIn.value
      ? withTiming(bgColors[1], TapAnimationConfig)
      : withTiming(bgColors[0]),

    borderColor: variant === "dark"
      ? "transparent"
      : Colors.gray[100]
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
      style={[styles.button, animatedStyles, style]}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      {...props}
    >
      {Icon && <Icon fill={tintColor} height={18} width={18} />}
      
      <Text style={[styles.title, { color: tintColor }]}>
        {title}
      </Text>
    </AnimatedPressable>
  )
}