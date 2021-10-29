import {
  PATH_TO_APP_CONFIG,
  APP_CONFIG_FILE_NAME,
  DEFAULT_LOCALE,
} from '../constants'
const fs = require('fs')

export function getCurrentLocale() {
  try {
    const data = fs.readFileSync(
      PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      'utf8'
    )
    const app_config = JSON.parse(data)
    if (app_config.current_locale === undefined) {
      console.log(`Сonfig app_config not found!`)
      console.log(`Used default locale: ${DEFAULT_LOCALE}`)
      return DEFAULT_LOCALE
    }
    return app_config.current_locale
  } catch (error) {
    console.log(`getCurrentLocale(): ${error}`)
    console.log(`Used default locale: ${DEFAULT_LOCALE}`)
    return DEFAULT_LOCALE
  }
}
