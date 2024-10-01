import i18n from "@/libs/i18n";

export class InvalidInputDescriptionError extends Error {
  constructor() {
    super(i18n.t('form.alerts.descriptionLength'))
  }
}