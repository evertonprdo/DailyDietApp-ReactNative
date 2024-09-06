import { router } from "expo-router";

import { PageTemplate } from "@/components/PageTemplate";
import { Form } from "@/components/Form";
import { Button } from "@/components/Button";

export default function CreateMeal() {

  function handleOnCreateMeal() {
    router.navigate({
      pathname: "/meal/feedback",
      params: { isWithinDiet: "yes" }
    })
  }

  return (
    <PageTemplate
      variant="gray"
      headerTitle={<>Nova refeição</>}
      onPressGoBack={() => router.back()}
    >
      <Form />

      <Button
        title="Cadastrar refeição"
        onPress={handleOnCreateMeal}
      />
    </PageTemplate>
  )
}