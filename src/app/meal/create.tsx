import { useState } from "react";
import { router } from "expo-router";

import { PageTemplate } from "@/components/PageTemplate";
import { Form } from "@/components/Form";
import { Button } from "@/components/Button";
import { useMealsReducer } from "@/hooks/useMealsReducer";

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

    if (meal.isWithinDiet === null) return
    if (!(meal.title || meal.time || meal.description || meal.date)) return

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