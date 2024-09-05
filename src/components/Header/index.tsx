import { View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import styles from "./styles";
import { NunitoTitle } from "@/components/Text";
import { PressableIcon } from "@/components/PressableIcon";
import ArrowLeft from "@/assets/icons/ArrowLeft";

type Props = {
  children?: React.ReactNode
  onPressArrowLeft: () => void
}

export function Header({ children, onPressArrowLeft }: Props) {
  const Insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Insets.top + 24 }]}>

      <PressableIcon icon={ArrowLeft} onPress={onPressArrowLeft}/>

      <NunitoTitle style={styles.text}>
        {children}
      </NunitoTitle>

      <View style={styles.emptyView} />
    </SafeAreaView>
  )
}