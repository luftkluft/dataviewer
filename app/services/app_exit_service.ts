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

export class AppExitService {
  static async appExit(app: any, mainWindow: any) {
    try {
      mainWindow.closed
      swalOptions.title = 'Exit from App?'
      swalOptions.text = ''
      const result = await alert.fireWithFrame(swalOptions, null, null, false)
      if (result.value) {
        // TODO
        app.quit()
      }
    } catch (error) {
      swalOptions.title = `window-all-closed`
      swalOptions.text = `${error}`
      Alert.fireToast(swalOptions)
    }
  }
}
