const fs = require('fs')
const appRoot = require('app-root-path')
import { alert, swalOptions, Alert } from './alert_service'

export class windowAllClosedService {
  static async ClosedAll(app: any, mainWindow: any) {
    let swOp = {
      ...swalOptions,
      showConfirmButton: true,
      showCancelButton: true,
    }
    try {
      mainWindow.closed
      swOp.title = 'Exit from App?'
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
