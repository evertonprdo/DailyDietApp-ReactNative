import { Fragment, useCallback, useState } from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import dayjs from "dayjs";

import PencilSimpleLine from "@/assets/icons/PencilSimpleLine";
import Trash from "@/assets/icons/Trash";

import { Button } from "@/components/Button";
import { ExclusionPopup } from "@/components/ExclusionPopup";
import { MealInfo } from "@/components/MealInfo";
import { PageTemplate } from "@/components/PageTemplate";
import { Form } from "@/components/Form";
import { Loading } from "@/components/Loading";

import { useMealsReducer } from "@/hooks/useMealsReducer";
import { inputValidations } from "@/utils/validationInputs";
import { useTranslation } from "react-i18next";

const initialState = {
  title: "",
  description: "",
  date: "",
  time: "",
  isWithinDiet: null as null | boolean
}

export default function Meal() {
  const { t } = useTranslation()

  const localParams = useLocalSearchParams();
  const { meals, dispatch } = useMealsReducer();

  const [meal, setMeal] = useState(initialState);
  const [editableMeal, setEditableMeal] = useState(initialState);

  const [isEditing, setIsEditing] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function handleOnConfirmEdit() {
    const iptValidationResponse = inputValidations(meal)

    if (iptValidationResponse !== true) {
      return Alert.alert(t('Form.alerts.title'), iptValidationResponse)
    }

    const time = meal.time.split("T")[1]
    const date = meal.date.split("T")[0]

    const dateTime = `${date}T${time}`

    dispatch({
      type: "changed",
      params: {
        id: localParams.id as string,
        title: editableMeal.title,
        description: editableMeal.description,
        date: dateTime,
        isWithinDiet: editableMeal.isWithinDiet as boolean,
      }
    })

    setMeal(editableMeal)
    setIsEditing(false)
  }

  function handleOnConfirmDelete() {
    dispatch({
      type: "deleted",
      params: {
        id: localParams.id as string
      }
    })

    router.dismissAll()
  }

  function handleOnPressEdit() {
    setEditableMeal(meal);
    setIsEditing(true);
  }

  useFocusEffect(useCallback(() => {
    setIsLoading(true)

    const storageMeal = meals.find(item => item.id === localParams.id)

    if (!storageMeal)
      return Alert.alert(
        "Refeição",
        `Parece que a refeição ${localParams.id ?? localParams} não foi encontrada ou não existe.`,
        [{ text: "Voltar a página inicial", onPress: () => router.dismissAll() }]
      )

    setMeal({
      ...storageMeal,
      time: storageMeal.date,
    })

    setIsLoading(false)
  }, []))

  if (isLoading) return <Loading />

  return (
    <Fragment>
      <PageTemplate
        variant={meal.isWithinDiet ? "green" : "red"}
        headerTitle={<Fragment>Refeição</Fragment>}
        onPressGoBack={() => router.back()}
      >
        <MealInfo
          title={meal.title}
          description={meal.description}
          dateTime={dayjs(meal.date).format("DD/MM/YYYY [às] HH:mm")}
          isWithinDiet={meal.isWithinDiet as boolean}
        />

        <View style={styles.buttonsContainer}>
          <Button
            title="Editar refeição"
            icon={PencilSimpleLine}
            onPress={handleOnPressEdit}
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
          onConfirm={handleOnConfirmDelete}
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
          headerTitle={<Fragment>Editar refeição</Fragment>}
          onPressGoBack={() => setIsEditing(false)}
        >
          <Form
            state={editableMeal}
            setState={setEditableMeal}
          />

          <Button
            title="Salvar alterações"
            onPress={handleOnConfirmEdit}
          />
        </PageTemplate>
      </Modal>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    gap: 8
  },
})