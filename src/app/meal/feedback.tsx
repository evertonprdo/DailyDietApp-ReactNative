import { Image, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Trans, useTranslation } from "react-i18next";

import GoodFeedback from "@/assets/good-feedback.png"
import BadFeedback from "@/assets/bad-feedback.png"

import Colors from "@/constants/colors";
import { Button } from "@/components/Button";
import FontFamily from "@/constants/fonts";

export default function Feedback() {
  const { t } = useTranslation()

  const localParams = useLocalSearchParams();
  const isWithinDiet = localParams.isWithinDiet === "yes"

  const color = isWithinDiet ? Colors.brand.greenDark : Colors.brand.redDark

  const titleKey = isWithinDiet 
    ? 'feedback.good.title'
    : 'feedback.bad.title'

  const subTitleKey = isWithinDiet 
    ? 'feedback.good.subtitle'
    : 'feedback.bad.subtitle'

  const image = isWithinDiet ? GoodFeedback : BadFeedback

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>

        <Text style={[styles.headline, { color }]}>
          {t(titleKey)}
        </Text>

        <Text style={styles.subHeadline}>
          <Trans i18nKey={subTitleKey}>
            <Text style={styles.bold}/>
          </Trans>
        </Text>
      </View>

      <Image
        source={image}
        style={styles.image}
      />

      <Button
        title={t('feedback.button')}
        onPress={() => router.dismissAll()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32
  },

  messageContainer: {
    gap: 8,
    marginBottom: 40
  },
  headline: {
    fontFamily: FontFamily.bold,
    fontSize: 24,
    textAlign: "center"
  },
  subHeadline: {
    fontFamily: FontFamily.regular,
    color: Colors.gray[100],
    fontSize: 16,
    textAlign: "center"
  },
  bold: {
    fontFamily: FontFamily.bold,
  },

  image: {
    height: 288,
    width: 224,
    alignSelf: "center",
    marginBottom: 32
  }
})