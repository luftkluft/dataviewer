import { PATH_TO_APP_CONFIG, APP_CONFIG_FILE_NAME } from '../../constants/constants'

const fs = require('fs')
const appRoot = require('app-root-path')
require('dotenv').config()
import { swalOptions, Alert } from '../../services/alert_service/alertService'

export function initAppConfigFromFile() {
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
    if (app_config === undefined) {
      swOp.title = `initStorageFromFile()`
      swOp.text = `Сonfig app_config not found!`
      Alert.fireToast(swOp)
    } else {
      global.app_config = app_config
      if (global.app_config.app_mode === 'production'){
        process.env.NODE_ENV = 'production'
      }else{
        process.env.NODE_ENV = 'development'
      }
    }
  } catch (error) {
    swOp.title = `initStorageFromFile()`
    swOp.text = `${error}`
    Alert.fireToast(swOp)
  }
}
