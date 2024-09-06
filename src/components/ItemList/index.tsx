import { Pressable, PressableProps, View } from "react-native";
import { NunitoText, NunitoTitle } from "@/components/Text";
import styles from "./styles";
import Colors from "@/constants/colors";

type Props = PressableProps & {
  time: string
  title: string
  isWithinDiet: boolean
}

export function ItemList({ title, time, isWithinDiet, ...props }: Props) {
  const tagColor = isWithinDiet
    ? Colors.brand.greenMid
    : Colors.brand.redMid

  return (
    <Pressable style={styles.container} {...props}>

      <NunitoTitle style={styles.time}>
        {time}
      </NunitoTitle>

      <View style={styles.divider} />

      <NunitoText style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </NunitoText>

      <View style={[styles.tag, { backgroundColor: tagColor }]} />
    </Pressable>
  )
}