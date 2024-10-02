import "@/libs/i18n"

import { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { DietContextProvider } from "@/contexts/DietContext";
import { LanguageContextProvider } from "@/contexts/LanguageContext";

const Providers = ({ children }: PropsWithChildren) => (
  <SafeAreaProvider>
    <DietContextProvider initialData={{
      data: [],
      lastId: 0
    }}>
      <LanguageContextProvider>
        {children}
      </LanguageContextProvider>
    </DietContextProvider>
  </SafeAreaProvider >
)

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react-native'
export { customRender as render, Providers }