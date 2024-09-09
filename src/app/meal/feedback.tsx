import { Image, StyleSheet, View } from "react-native";

import GoodFeedback from "@/assets/good-feedback.png"
import BadFeedback from "@/assets/bad-feedback.png"

import Colors from "@/constants/colors";
import { NunitoText, NunitoTitle } from "@/components/Text";
import { Button } from "@/components/Button";
import { router, useLocalSearchParams } from "expo-router";

export default function Feedback() {
  const localParams = useLocalSearchParams();
  const isWithinDiet = localParams.isWithinDiet === "yes"

  const color = isWithinDiet ? Colors.brand.greenDark : Colors.brand.redDark
  const Message = isWithinDiet
    ? ["Continue assim!", "Você continua ", "dentro da dieta", ". Muito bem!"]
    : ["Que pena!", "Você ", "saiu da dieta", " dessa vez, mas continue\nse esforçando e não desista!"]

  const image = isWithinDiet ? GoodFeedback : BadFeedback

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>

        <NunitoTitle style={[styles.headline, { color }]}>
          {Message[0]}
        </NunitoTitle>

        <NunitoText style={styles.subHeadline}>
          {Message[1]}

          <NunitoTitle>
            {Message[2]}
          </NunitoTitle>

          {Message[3]}
        </NunitoText>
      </View>

      <Image
        source={image}
        style={styles.image}
      />

      <Button
        title="Ir para a página inicial"
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
  },

  messageContainer: {
    gap: 8,
    marginBottom: 40
  },
  headline: {
    fontSize: 24,
    textAlign: "center"
  },
  subHeadline: {
    color: Colors.gray[100],
    fontSize: 16,
    textAlign: "center"
  },

  image: {
    height: 288,
    width: 224,
    alignSelf: "center",
    marginBottom: 32
  }
})