import { chinese } from "./i18n/chinese"

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ch',
    messages: {
      ch: {
        ...chinese
      },
      fr: {
        welcome: 'Bienvenue'
      }
    }
  }))