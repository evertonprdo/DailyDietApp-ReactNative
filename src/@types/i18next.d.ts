import en from '@/libs/i18n/locales/en/translation.json'
import pt from '@/libs/i18n/locales/pt/translation.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en'
    resources: {
      en: typeof en
      pt: typeof pt
    }
  }
}