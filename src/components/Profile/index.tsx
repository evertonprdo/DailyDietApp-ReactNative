import { FlatList, Image, Modal, View } from "react-native";
import { useTranslation } from "react-i18next";
import { BlurView } from "expo-blur";

import ProfilePhoto from "@/assets/profile-photo.jpeg"
import Colors from "@/constants/colors";
import X from "@/assets/icons/X";

import styles from "./styles";
import { Button } from "@/components/Button";
import { NunitoText, NunitoTitle } from "@/components/Text";
import { PressableIcon } from "@/components/PressableIcon";

import { useLanguage } from "@/hooks/useLanguage";
import { LanguageMap } from "@/constants/language";

type Props = {
  onClose: () => void
  visible?: boolean
}

export function Profile({ visible, onClose }: Props) {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()

  return (
    <Modal
      animationType="fade"
      visible={visible}
      statusBarTranslucent
      transparent
    >
      <BlurView
        intensity={7}
        experimentalBlurMethod="dimezisBlurView"
        style={styles.bluer}
      >
        <View style={styles.bgContainer}>
          <View style={styles.popup}>

            <View style={styles.header}>
              <View style={styles.emptyView} />

              <NunitoTitle style={styles.text}>
                {t('home.modal.title')}
              </NunitoTitle>

              <PressableIcon
                icon={X}
                fill={Colors.gray[200]}
                onPress={onClose}
              />
            </View>

            <Image
              source={ProfilePhoto}
              style={styles.imageProfile}
            />

            <View style={styles.options}>
              <NunitoText style={styles.text}>
                {t('home.modal.languages')}
              </NunitoText>

              <FlatList
                data={LanguageMap}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                  <Button
                    title={item.name}
                    onPress={() => changeLanguage(item.key)}
                    variant={language.key === item.key ? "light" : "dark"}
                    disabled={language.key === item.key}
                  />
                )}
                contentContainerStyle={styles.list}
                horizontal
                centerContent
                showsVerticalScrollIndicator={false}
              />
            </View>

          </View>
        </View>
      </BlurView>
    </Modal>
  )
}