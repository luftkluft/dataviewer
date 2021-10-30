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
  timer: 30000,
}

export function setCurrentLocale(setLocale: string = DEFAULT_LOCALE) {
  try {
    const oldData = fs.readFileSync(
      appRoot + PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      'utf8'
    )
    const app_config = JSON.parse(oldData)
    if (app_config.current_locale === undefined) {
      swalOptions.title = `setCurrentLocale()`
      swalOptions.text = `Сonfig app_config not found!`
      Alert.fireToast(swalOptions)
    }
    app_config.current_locale = setLocale
    const newData = JSON.stringify(app_config)
    fs.writeFileSync(
      appRoot + PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      newData,
      'utf8',
      (error: string) => {
        if (error) {
          swalOptions.title = `setCurrentLocale()`
          swalOptions.text = `setCurrentLocale(): ${error}`
          Alert.fireToast(swalOptions)
          return
        }
      }
    )
    swalOptions.title = `setCurrentLocale()`
    swalOptions.text = `Current locale set successfully!`
    swalOptions.timer = 3000
    swalOptions.icon = 'success'
    swalOptions.showConfirmButton = false
    Alert.fireToast(swalOptions)
  } catch (error) {
    swalOptions.title = `setCurrentLocale()`
    swalOptions.text = `Сonfig app_config not found! ${error}`
    Alert.fireToast(swalOptions)
  }
}
