import {
  DEFAULT_LOCALE
} from '../constants'

const fs = require('fs')
import { swalOptions, Alert } from '../services/alertService'

export async function setCurrentLocale(setLocale: string = DEFAULT_LOCALE) {
  let swOp = await {
    ...swalOptions,
    showConfirmButton: true,
  }
  try {
    const current_locale = await setLocale
    global.app_config.current_locale = current_locale
  } catch (error) {
    swOp.title = `setCurrentLocale()`
    swOp.text = `Сonfig app_config not found! ${error}`
    Alert.fireToast(swOp)
  }
}
