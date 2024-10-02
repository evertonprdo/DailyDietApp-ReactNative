import { Fragment, useState } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

import { PageTemplate } from "@/components/PageTemplate";
import { Form } from "@/components/Form";
import { Button } from "@/components/Button";

import { useDiet } from "@/hooks/useDiet";
import { validateInputs } from "@/utils/validationInputs";

export default function CreateMeal() {
  const { t } = useTranslation()
  const { dispatches } = useDiet();

  const [meal, setMeal] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    isWithinDiet: null as null | boolean
  });

  function handleOnCreateMeal() {
    try {
      validateInputs(meal)
    } catch (error: any) {
      Alert.alert(t('form.alerts.title'), error.message)
    }

    const date = meal.date.split("T")[0]
    const time = meal.time.split("T")[1]

    const dateTime = `${date}T${time}`

    dispatches.added({
      title: meal.title,
      description: meal.description,
      date: dateTime,
      isWithinDiet: meal.isWithinDiet as boolean
    })

    router.navigate({
      pathname: "/meal/feedback",
      params: { isWithinDiet: meal.isWithinDiet ? "yes" : "no" }
    })
  }

  return (
    <PageTemplate
      variant="gray"
      headerTitle={<Fragment>{t('create.title')}</Fragment>}
      onPressGoBack={() => router.back()}
    >
      <Form
        state={meal}
        setState={setMeal}
      />

      <Button
        title={t('create.registerMeal')}
        onPress={handleOnCreateMeal}
      />
    </PageTemplate>
  )
}