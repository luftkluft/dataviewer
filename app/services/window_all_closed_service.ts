const fs = require('fs')
const appRoot = require('app-root-path')
const Alert = require('electron-alert')

let alert = new Alert()
let swalOptions = {
  position: 'top-end',
  title: 'Title',
  text: 'Text',
  icon: 'warning',
  showConfirmButton: true,
  showCancelButton: true,
  timer: 10000,
}

export class windowAllClosedService {
  static async ClosedAll(app: any, mainWindow: any) {
    try {
      mainWindow.closed
      swalOptions.title = 'Exit from App?'
      swalOptions.text = ''
      const result = await alert.fireWithFrame(swalOptions, null, null, false)
        if (result.value) {
          // TODO
          app.quit()
        } else if (result.dismiss) {
          app.emit('create_main_window')
        }
    } catch (error) {
      swalOptions.title = `ClosedAll()`
      swalOptions.text = `${error}`
      Alert.fireToast(swalOptions)
    }
  }
}
