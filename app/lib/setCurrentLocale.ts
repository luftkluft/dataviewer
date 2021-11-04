import {
  PATH_TO_APP_CONFIG,
  APP_CONFIG_FILE_NAME,
  DEFAULT_LOCALE,
} from '../constants'

const fs = require('fs')
const appRoot = require('app-root-path')
import { swalOptions, Alert } from '../services/alertService'

export async function setCurrentLocale(setLocale: string = DEFAULT_LOCALE) {
  let swOp = await {
    ...swalOptions,
    showConfirmButton: true,
  }
  try {
    const oldData = await fs.readFileSync(
      appRoot + PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      'utf8'
    )
    const app_config = await JSON.parse(oldData)
    if (app_config.current_locale === undefined) {
      swOp.title = `setCurrentLocale()`
      swOp.text = `Сonfig app_config not found!`
      Alert.fireToast(swOp)
    }
    app_config.current_locale = await setLocale
    const newData = await JSON.stringify(app_config)
    await fs.writeFileSync(
      appRoot + PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      newData,
      'utf8',
      (error: string) => {
        if (error) {
          swOp.title = `setCurrentLocale()`
          swOp.text = `setCurrentLocale(): ${error}`
          Alert.fireToast(swOp)
        }
      }
    )
  } catch (error) {
    swOp.title = `setCurrentLocale()`
    swOp.text = `Сonfig app_config not found! ${error}`
    Alert.fireToast(swOp)
  }
}
