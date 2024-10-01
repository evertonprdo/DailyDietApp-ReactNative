import { router } from "expo-router";
import { SectionList } from "react-native";
import dayjs from "dayjs";

import styles from "./styles";
import { ItemList } from "@/components/ItemList";
import { NunitoTitle } from "@/components/Text";

import { MealSectionListProps } from "@/utils/meals";
import { useLanguage } from "@/hooks/useLanguage";

type Props = {
  sections: MealSectionListProps
  children?: React.ReactNode
}

export function MealSectionList({ sections, children }: Props) {
  const { language } = useLanguage()

  return (
    <SectionList
      sections={sections}
      ListHeaderComponent={() => children}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ItemList
          title={item.title}
          time={dayjs(item.date).format(language.time)}
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