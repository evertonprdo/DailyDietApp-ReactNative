import i18n from "@/libs/i18n";

export class MissingInputDateTimeError extends Error {
  constructor() {
    super(i18n.t('form.alerts.fillDateTime'))
  }
}