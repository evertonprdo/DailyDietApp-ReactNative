import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ArrowLeft from "@/assets/icons/ArrowLeft";

import Colors from "@/constants/colors";
import styles from "./styles";
import { PressableIcon } from "@/components/PressableIcon";


type Props = {
  children?: React.ReactNode
  onPressArrowLeft: () => void
  variant: "green" | "red" | "gray"
}

export function Header({ variant, children, onPressArrowLeft }: Props) {
  const tintColor = variant === "green"
    ? Colors.brand.greenDark
    : variant === "red"
      ? Colors.brand.redDark
      : Colors.gray[200]
      
  return (
    <SafeAreaView style={styles.container}>

      <PressableIcon fill={tintColor} icon={ArrowLeft} onPress={onPressArrowLeft} />

      <Text style={styles.text}>
        {children}
      </Text>

      <View style={styles.emptyView} />
    </SafeAreaView>
  )
}