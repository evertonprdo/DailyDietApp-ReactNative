import Colors from "@/constants/colors";
import { ScrollView, ScrollViewProps, StyleSheet, View } from "react-native";
import { Header } from "./Header";

type Props = ScrollViewProps & {
  headerTitle: React.ReactElement
  variant: "green" | "red" | "gray"
  onPressGoBack: () => void
}

export function PageTemplate({ variant, headerTitle, children, onPressGoBack, ...props }: Props) {
  const backgroundColor = variant === "green"
    ? Colors.brand.greenLight
    : variant === "red"
      ? Colors.brand.redLight
      : Colors.gray[500]

  return (
    <ScrollView
      style={[styles.container, { backgroundColor }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      <Header
        variant={variant}
        onPressArrowLeft={onPressGoBack}
      >
        {headerTitle}
      </Header>

      <View style={styles.body}>
        {children}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[500]
  },
  content: {
    minHeight: "100%"
  },

  body: {
    flex: 1,
    backgroundColor: Colors.gray[700],
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    elevation: 16,

    shadowRadius: 30,
    shadowOpacity: 0.05,

    paddingHorizontal: 24,
    paddingVertical: 40,

    justifyContent: "space-between"
  }
})