const fs = require('fs')
const appRoot = require('app-root-path')
import { I18n } from '../../services/i18n_service/i18nService'
import { alert, swalOptions, Alert } from '../alert_service/alertService'
import { saveAppConfigToFile } from '../../lib/save_app_config_to_file/saveAppConfigToFile'

export class AppExitService {
  static async appExit(app: any, mainWindow: any) {
    let swOp = {
      ...swalOptions,
      showConfirmButton: true,
      showCancelButton: true,
    }
    try {
      mainWindow.closed
      swOp.title = `${I18n.t('quit_the_application?')}`
      swOp.text = ''
      const result = await alert.fireWithFrame(swOp, null, null, false)
      if (result.value) {
        await saveAppConfigToFile()
        await app.quit()
      }
    } catch (error) {
      swOp.title = `appExit()`
      swOp.text = `${error}`
      Alert.fireToast(swOp)
    }
  }
}
