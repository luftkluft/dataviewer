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
  // timer: 3000,
}

export function getCurrentLocale() {
  try {
    const data = fs.readFileSync(
      appRoot + PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      'utf8'
    )
    const app_config = JSON.parse(data)
    if (app_config.current_locale === undefined) {
      swalOptions.title = `getCurrentLocale()`
      swalOptions.text = `Сonfig app_config not found!`
      Alert.fireToast(swalOptions)
      return DEFAULT_LOCALE
    }
    return app_config.current_locale
  } catch (error) {
    swalOptions.title = `getCurrentLocale()`
    swalOptions.text = `${error}`
    Alert.fireToast(swalOptions)
    return DEFAULT_LOCALE
  }
}
