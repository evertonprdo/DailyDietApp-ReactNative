import { router } from "expo-router";
import { SectionList } from "react-native";

import styles from "./styles";
import { ItemList } from "@/components/ItemList";
import { NunitoTitle } from "@/components/Text";

import { MealSectionListProps } from "@/utils/meals";
import dayjs from "dayjs";

type Props = {
  sections: MealSectionListProps
  children?: React.ReactNode
}

export function MealSectionList({ sections, children }: Props) {
  return (
    <SectionList
      sections={sections}
      ListHeaderComponent={() => children}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ItemList
          title={item.title}
          time={dayjs(item.date).format("HH:mm")}
          isWithinDiet={item.isWithinDiet}
          onPress={() => router.navigate(`/meal/${item.id}`)}
        />
      )}
      renderSectionHeader={({ section }) => (
        <NunitoTitle style={styles.sectionTitle}>
          {section.date}
        </NunitoTitle>
      )}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  )
}