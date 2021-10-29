import {
  PATH_TO_APP_CONFIG,
  APP_CONFIG_FILE_NAME,
  DEFAULT_LOCALE,
} from '../constants'
const fs = require('fs')

export function setCurrentLocale(setLocale: string = DEFAULT_LOCALE) {
  try {
    const oldData = fs.readFileSync(
      PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      'utf8'
    )
    const app_config = JSON.parse(oldData)
    if (app_config.current_locale === undefined) {
      console.log(`Сonfig app_config not found!`)
      console.log(`Used default locale: ${DEFAULT_LOCALE}`)
    }
    app_config.current_locale = setLocale
    const newData = JSON.stringify(app_config)
    fs.writeFileSync(
      PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      newData,
      'utf8',
      (error: string) => {
        if (error) {
          console.log(`setCurrentLocale(): ${error}`)
        } else {
          console.log(`Current locale set successfully!`)
        }
      }
    )
  } catch (error) {
    console.log(`setCurrentLocale(): ${error}`)
    console.log(`Used default locale: ${DEFAULT_LOCALE}`)
  }
}
