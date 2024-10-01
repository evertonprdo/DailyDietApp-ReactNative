import i18n from "@/libs/i18n";

export class InvalidInputNameError extends Error {
  constructor() {
    super(i18n.t('form.alerts.title'))
  }
}