import {
  PATH_TO_APP_CONFIG,
  APP_CONFIG_FILE_NAME,
  DEFAULT_LOCALE,
} from '../constants'

const fs = require('fs')
const appRoot = require('app-root-path')
import { swalOptions, Alert } from '../services/alert_service'

export function getCurrentLocale() {
  let swOp = {
    ...swalOptions,
    showConfirmButton: true,
  }
  try {
    const data = fs.readFileSync(
      appRoot + PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      'utf8'
    )
    const app_config = JSON.parse(data)
    if (app_config.current_locale === undefined) {
      swOp.title = `getCurrentLocale()`
      swOp.text = `Сonfig app_config not found!`
      Alert.fireToast(swOp)
      return DEFAULT_LOCALE
    }
    return app_config.current_locale
  } catch (error) {
    swOp.title = `getCurrentLocale()`
    swOp.text = `${error}`
    Alert.fireToast(swOp)
    return DEFAULT_LOCALE
  }
}
