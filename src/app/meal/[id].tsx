import { Fragment, useCallback, useState } from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

import PencilSimpleLine from "@/assets/icons/PencilSimpleLine";
import Trash from "@/assets/icons/Trash";

import { Button } from "@/components/Button";
import { ExclusionPopup } from "@/components/ExclusionPopup";
import { MealInfo } from "@/components/MealInfo";
import { PageTemplate } from "@/components/PageTemplate";
import { Form } from "@/components/Form";
import { Loading } from "@/components/Loading";

import { useLanguage } from "@/hooks/useLanguage";
import { useDiet } from "@/hooks/useDiet";
import { validateInputs } from "@/utils/validationInputs";

const initialState = {
  title: "",
  description: "",
  date: "",
  time: "",
  isWithinDiet: null as null | boolean
}

export default function Meal() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  const localParams = useLocalSearchParams();
  const { meals, dispatches } = useDiet();

  const [meal, setMeal] = useState(initialState);
  const [editableMeal, setEditableMeal] = useState(initialState);

  const [isEditing, setIsEditing] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dateTime = t('meal.dateTimeValues', {
    date: dayjs(meal.date).format(language.date),
    time: dayjs(meal.time).format(language.time),
    interpolation: {
      escapeValue: false
    }
  })

  function handleOnConfirmEdit() {
    try {
      validateInputs(meal)
    } catch (error: any) {
      Alert.alert(t('form.alerts.title'), error.message)
    }

    const time = meal.time.split("T")[1]
    const date = meal.date.split("T")[0]

    const dateTime = `${date}T${time}`

    dispatches.changed({
      id: localParams.id as string,
      title: editableMeal.title,
      description: editableMeal.description,
      date: dateTime,
      isWithinDiet: editableMeal.isWithinDiet as boolean,
    })

    setMeal(editableMeal)
    setIsEditing(false)
  }

  function handleOnConfirmDelete() {
    dispatches.deleted(localParams.id as string)

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
        t('meal.title'),
        t('meal.alert.message', { params: localParams.id ?? localParams }),
        [{ text: t('meal.alert.button'), onPress: () => router.dismissAll() }]
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
        headerTitle={<Fragment>{t('meal.title')}</Fragment>}
        onPressGoBack={() => router.back()}
      >
        <MealInfo
          title={meal.title}
          description={meal.description}
          dateTime={dateTime}
          isWithinDiet={meal.isWithinDiet as boolean}
        />

        <View style={styles.buttonsContainer}>
          <Button
            title={t('meal.btn.edit')}
            icon={PencilSimpleLine}
            onPress={handleOnPressEdit}
          />
          <Button
            title={t('meal.btn.delete')}
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
          headerTitle={<Fragment>{t('meal.edit.title')}</Fragment>}
          onPressGoBack={() => setIsEditing(false)}
        >
          <Form
            state={editableMeal}
            setState={setEditableMeal}
          />

          <Button
            title={t('meal.edit.button')}
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