import { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import PencilSimpleLine from "@/assets/icons/PencilSimpleLine";
import Trash from "@/assets/icons/Trash";

import { Button } from "@/components/Button";
import { ExclusionPopup } from "@/components/ExclusionPopup";
import { MealInfo } from "@/components/MealInfo";
import { PageTemplate } from "@/components/PageTemplate";
import { Form } from "@/components/Form";

export default function Meal() {
  const localParams = useLocalSearchParams();

  const [isEditing, setIsEditing] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <PageTemplate
        variant="green"
        headerTitle={<>Refeição</>}
        onPressGoBack={() => router.back()}
      >
        <MealInfo
          title="X-tudo"
          description="Xis completo da lancheria do bairro"
          dateTime="12/08/2022 às 20:00"
          isWithinDiet={false}
        />

        <View style={styles.buttonsContainer}>
          <Button
            title="Editar refeição"
            icon={PencilSimpleLine}
            onPress={() => setIsEditing(true)}
          />
          <Button
            title="Excluir refeição"
            variant="light"
            icon={Trash}
            onPress={() => setIsModalVisible(true)}
          />
        </View>

        <ExclusionPopup
          visible={isModalVisible}
          onConfirm={() => { }}
          onCancel={() => setIsModalVisible(false)}
        />
      </PageTemplate >

      <Modal
        visible={isEditing}
        animationType="slide"
        statusBarTranslucent
      >
        <PageTemplate
          variant="gray"
          headerTitle={<>Editar refeição</>}
          onPressGoBack={() => setIsEditing(false)}
        >
          <Form/>

          <Button title="Salvar alterações"/>
        </PageTemplate>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    gap: 8
  },
})