import { router } from "expo-router";
import { SectionList } from "react-native";

import styles from "./styles";
import { ItemList } from "@/components/ItemList";
import { NunitoTitle } from "@/components/Text";

import { SectionListType } from "@/temp/data";

type Props = {
  sections: SectionListType
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
          time={item.time}
          isWithinDiet={item.isWithinDiet}
          onPress={() => router.navigate(`/meal/${item.id}`)}
        />
      )}
      renderSectionHeader={({ section }) => (
        <NunitoTitle style={styles.sectionTitle}>
          {section.title}
        </NunitoTitle>
      )}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  )
}