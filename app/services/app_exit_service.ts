const fs = require('fs')
const appRoot = require('app-root-path')
import { alert, swalOptions, Alert } from './alert_service'

export class AppExitService {
  static async appExit(app: any, mainWindow: any) {
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
      }
    } catch (error) {
      swOp.title = `appExit()`
      swOp.text = `${error}`
      Alert.fireToast(swOp)
    }
  }
}
