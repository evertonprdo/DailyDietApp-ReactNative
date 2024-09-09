import { useState } from "react";
import { router } from "expo-router";

import { PageTemplate } from "@/components/PageTemplate";
import { Form } from "@/components/Form";
import { Button } from "@/components/Button";
import { useMealsReducer } from "@/hooks/useMealsReducer";
import { Alert } from "react-native";

export default function CreateMeal() {
  const { dispatch, lastId } = useMealsReducer();

  const [meal, setMeal] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    isWithinDiet: null as null | boolean
  });

  function handleOnCreateMeal() {
    const date = `${meal.date}T${meal.time}:00`
    const alertTitle = "Formulário"

    if (meal.isWithinDiet === null) 
      return Alert.alert(alertTitle, "Defina se a refeição está dentro da dieta")

    if (!(meal.time.trim() || meal.date.trim())) 
      return Alert.alert(alertTitle, "Preencha a data e o horas da refeição")

    if (meal.title.trim().length < 3) 
      return Alert.alert(alertTitle, "O nome da refeição deve ter pelo menos 3 caracteres")

    if (meal.description.trim().length < 12) 
      return Alert.alert(alertTitle, "A descrição deve ter pelo menos 12 caracteres")

    const nextId = lastId.state + 1
    dispatch({
      type: "added",
      params: {
        id: String(nextId),
        title: meal.title,
        description: meal.description,
        date,
        isWithinDiet: meal.isWithinDiet
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
      headerTitle={<>Nova refeição</>}
      onPressGoBack={() => router.back()}
    >
      <Form
        state={meal}
        setState={setMeal}
      />

      <Button
        title="Cadastrar refeição"
        onPress={handleOnCreateMeal}
      />
    </PageTemplate>
  )
}