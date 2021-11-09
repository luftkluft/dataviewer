import {
  DEFAULT_LOCALE
} from '../../constants/constants'

const fs = require('fs')
import { swalOptions, Alert } from '../../services/alert_service/alertService'

export function getCurrentLocale() {
  let swOp = {
    ...swalOptions,
    showConfirmButton: true,
  }
  try {
    const current_locale = global.app_config.current_locale
    if (current_locale === undefined) {
      swOp.title = `getCurrentLocale()`
      swOp.text = `Global app_config not found!`
      Alert.fireToast(swOp)
      return DEFAULT_LOCALE
    }
    return current_locale
  } catch (error) {
    swOp.title = `getCurrentLocale()`
    swOp.text = `${error}`
    Alert.fireToast(swOp)
    return DEFAULT_LOCALE
  }
}
