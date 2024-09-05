import { Link, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function Meal() {
  const mealParams = useLocalSearchParams<{
    id: string
  }>();

  return (
    <>
      <Text>{mealParams.id}</Text>
    </>
  )
}