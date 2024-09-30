import { Fragment, useState } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";

import { PageTemplate } from "@/components/PageTemplate";
import { Form } from "@/components/Form";
import { Button } from "@/components/Button";

import { useMealsReducer } from "@/hooks/useMealsReducer";
import { inputValidations } from "@/utils/validationInputs";
import { useTranslation } from "react-i18next";

export default function CreateMeal() {
  const { t } = useTranslation()
  const { dispatch, lastId } = useMealsReducer();

  const [meal, setMeal] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    isWithinDiet: null as null | boolean
  });

  function handleOnCreateMeal() {
    const iptValidationResponse = inputValidations(meal)

    if(iptValidationResponse !== true) {
      return Alert.alert(t('Form.alerts.title'), iptValidationResponse)
    }
    
    const date = meal.date.split("T")[0]
    const time = meal.time.split("T")[1]

    const dateTime = `${date}T${time}`

    const nextId = lastId.state + 1

    dispatch({
      type: "added",
      params: {
        id: String(nextId),
        title: meal.title,
        description: meal.description,
        date: dateTime,
        isWithinDiet: meal.isWithinDiet as boolean
      }
    })

    lastId.setState(nextId)

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