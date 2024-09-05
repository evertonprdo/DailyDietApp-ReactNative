import { NativeSyntheticEvent, TextInput, TextInputFocusEventData, TextInputProps, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import Colors from "@/constants/colors";
import styles from "./styles";
import { NunitoTitle } from "@/components/Text";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

type Props = TextInputProps & {
  label: string
}

export function Input({ label, onFocus, onBlur, ...props }: Props) {
  const isOnFocus = useSharedValue(false)

  const animatedStyles = useAnimatedStyle(() => ({
    borderColor: !isOnFocus.value
      ? withTiming(Colors.gray[500])
      : withTiming(Colors.gray[300])
  }))

  function handleOnFocus(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    isOnFocus.value = true

    if (onFocus) onFocus(e)
  }

  function handleOnBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    isOnFocus.value = false

    if (onBlur) onBlur(e)
  }

  return (
    <View style={styles.container}>

      <NunitoTitle style={styles.label}>
        {label}
      </NunitoTitle>

      <AnimatedTextInput
        style={[styles.input, animatedStyles]}
        cursorColor={Colors.gray[100]}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...props}
      />
    </View>
  )
}