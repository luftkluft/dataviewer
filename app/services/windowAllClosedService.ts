const fs = require('fs')
const appRoot = require('app-root-path')
import { I18n } from './i18nService'
import { alert, swalOptions, Alert } from './alertService'

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
        // TODO
        app.quit()
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
