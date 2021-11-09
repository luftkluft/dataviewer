const fs = require('fs')
const appRoot = require('app-root-path')
import { I18n } from '../i18n_service/i18nService'
import { alert, swalOptions, Alert } from '../alert_service/alertService'
import { saveAppConfigToFile } from '../../lib/save_app_config_to_file/saveAppConfigToFile'

export class windowAllClosedService {
  static async ClosedAll(app: any, mainWindow: any) {
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
      } else if (result.dismiss) {
        app.emit('create_main_window')
      }
    } catch (error) {
      swOp.showCancelButton = false
      swOp.title = `ClosedAll()`
      swOp.text = `${error}`
      Alert.fireToast(swOp)
    }
  }
}
