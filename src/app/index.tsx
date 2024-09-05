import { Link, router } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput } from "react-native";

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Text>Digite o id da refeição:</Text>
      <TextInput
        value={search}
        onChangeText={setSearch}
        style={{ backgroundColor: "#eee", width: 300, borderRadius: 12, marginVertical: 20, padding: 12 }}
      />
      <Button
        title="Pesquisar"
        onPress={() =>
          router.navigate({ pathname: "/meal/[id]", params: { id: search } })
        }
      />
    </>
  )
}