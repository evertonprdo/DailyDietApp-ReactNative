import { Modal, ModalProps, Text, View } from "react-native";
import { BlurView } from "expo-blur";

import styles from "./styles";
import { Button } from "@/components/Button";
import { useTranslation } from "react-i18next";

type Props = ModalProps & {
  onConfirm: () => void
  onCancel: () => void
}

export function ExclusionPopup({ onConfirm, onCancel, ...props }: Props) {
  const { t } = useTranslation()

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

            <Text style={styles.text}>
              {t('meal.modal.message')}
            </Text>

            <View style={styles.options}>
              <Button
                title={t('meal.modal.cancel')}
                variant="light"
                onPress={onCancel}
                style={styles.button}
              />
              <Button
                title={t('meal.modal.confirm')}
                onPress={onConfirm}
                style={styles.button}
              />
            </View>

          </View>
        </View>
      </BlurView>
    </Modal>
  )
}