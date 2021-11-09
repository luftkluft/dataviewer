import {
  PATH_TO_APP_CONFIG,
  APP_CONFIG_FILE_NAME
} from '../../constants/constants'

const fs = require('fs')
const appRoot = require('app-root-path')
import { swalOptions, Alert } from '../../services/alert_service/alertService'

export async function saveAppConfigToFile() {
  let swOp = await {
    ...swalOptions,
    showConfirmButton: true,
  }
  try {
    const oldData = await fs.readFileSync(
      appRoot + PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      'utf8'
    )
    let old_app_config = await JSON.parse(oldData)
    if (old_app_config === undefined) {
      swOp.title = `saveAppConfigToFile()`
      swOp.text = `Сonfig app_config not found!`
      Alert.fireToast(swOp)
    }
    global.app_config.app_mode = await process.env.NODE_ENV
    const app_config = await global.app_config
    const newData = await JSON.stringify(app_config)
    await fs.writeFileSync(
      appRoot + PATH_TO_APP_CONFIG + APP_CONFIG_FILE_NAME,
      newData,
      'utf8',
      (error: string) => {
        if (error) {
          swOp.title = `saveAppConfigToFile()`
          swOp.text = `${error}`
          Alert.fireToast(swOp)
        }
      }
    )
  } catch (error) {
    swOp.title = `saveAppConfigToFile()`
    swOp.text = `Сonfig app_config not found! ${error}`
    Alert.fireToast(swOp)
  }
}
