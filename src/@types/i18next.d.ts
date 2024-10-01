import en from '@/libs/i18n/locales/en'
import pt from '@/libs/i18n/locales/pt'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en'
    resources: {
      en: typeof en
      pt: typeof pt
    }
  }
}