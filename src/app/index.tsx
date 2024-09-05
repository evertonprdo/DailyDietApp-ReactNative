import { useState } from "react";
import { router } from "expo-router";
import { Text, TextInput, View } from "react-native";

import Plus from "@/assets/icons/Plus";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { ExclusionPopup } from "@/components/ExclusionPopup";
import { Header } from "@/components/Header";
import Colors from "@/constants/colors";

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectTest, setSelectTest] = useState(false)
  const [modalVisibility, setModalVisibility] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: Colors.gray[500] }}>
      <Header
        onPressArrowLeft={() => {}}
      >
        Nova Refeição
      </Header>

      <View style={{ flex: 1, padding: 32, gap: 30, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "#fff", elevation: 5 }}>

        <Text>Digite o id da refeição:</Text>
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={{ backgroundColor: "#eee", width: 300, borderRadius: 12, padding: 12 }}
        />

        <Button
          title="Travel to"
          variant="light"
          icon={Plus}
          onPress={() =>
            router.navigate({
              pathname: "/meal/[id]",
              params: { id: search }
            })
          }
        />

        <View style={{ flexDirection: "row", width: "100%", gap: 12 }}>
          <Select
            variant="YES"
            isSelected={selectTest}
            onPress={() => setSelectTest(!selectTest)}
          />
          <Select
            variant="NO"
            isSelected={selectTest}
            onPress={() => setSelectTest(!selectTest)}
          />
        </View>

        <View style={{ flexDirection: "row", width: "100%", gap: 12 }}>
          <Input label="Data" />
          <Input label="Hora" />
        </View>

        <Button
          title="Open Modal"
          onPress={() => setModalVisibility(true)}
        />

        <ExclusionPopup
          visible={modalVisibility}
          onCancel={() => setModalVisibility(false)}
          onConfirm={() => { }}
        />
      </View>
    </View>
  )
}