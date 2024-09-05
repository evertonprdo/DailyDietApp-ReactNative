import { Modal, ModalProps, View } from "react-native";
import { BlurView } from "expo-blur";

import styles from "./styles";
import { NunitoTitle } from "@/components/Text";
import { Button } from "@/components/Button";

type Props = ModalProps & {
  onConfirm: () => void
  onCancel: () => void
}

export function ExclusionPopup({ onConfirm, onCancel, ...props }: Props) {
  return (
    <Modal
      animationType="fade"
      statusBarTranslucent
      transparent
      {...props}
    >
      <BlurView
        intensity={7}
        experimentalBlurMethod="dimezisBlurView"
        style={styles.bluer}
      >
        <View style={styles.bgContainer}>
          <View style={styles.popup}>

            <NunitoTitle style={styles.text}>
              Deseja realmente excluir o{"\n"}registro da refeição?
            </NunitoTitle>

            <View style={styles.options}>
              <Button
                title="Cancelar"
                variant="light"
                onPress={onCancel}
              />
              <Button
                title="Sim, excluir"
                onPress={onConfirm}
              />
            </View>
            
          </View>
        </View>
      </BlurView>
    </Modal>
  )
}