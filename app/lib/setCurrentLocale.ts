import {
  PATH_TO_APP_CONFIG,
  APP_CONFIG_FILE_NAME,
  DEFAULT_LOCALE,
} from '../constants'

const fs = require('fs')
const appRoot = require('app-root-path')
const Alert = require('electron-alert')

let swalOptions = {
  position: 'top-end',
  title: 'Title',
  text: 'Text',
  icon: 'warning',
  showConfirmButton: true,
  timer: 10000,
}

export async function setCurrentLocale(setLocale: string = DEFAULT_LOCALE) {
  try {
    const oldData = await fs.readFileSync(
      appRoot + PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      'utf8'
    )
    const app_config = await JSON.parse(oldData)
    if (app_config.current_locale === undefined) {
      swalOptions.title = `setCurrentLocale()`
      swalOptions.text = `Сonfig app_config not found!`
      Alert.fireToast(swalOptions)
    }
    app_config.current_locale = await setLocale
    const newData = await JSON.stringify(app_config)
    await fs.writeFileSync(
      appRoot + PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      newData,
      'utf8',
      (error: string) => {
        if (error) {
          swalOptions.title = `setCurrentLocale()`
          swalOptions.text = `setCurrentLocale(): ${error}`
          Alert.fireToast(swalOptions)
        }
      }
    )
  } catch (error) {
    swalOptions.title = `setCurrentLocale()`
    swalOptions.text = `Сonfig app_config not found! ${error}`
    Alert.fireToast(swalOptions)
  }
}
