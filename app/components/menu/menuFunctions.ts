import { APP_GITHUB } from '../../constants'

const electron = require('electron')
const Alert = require('electron-alert')

let swalOptions = {
  position: 'top-end',
  title: 'Title',
  text: 'Text',
  icon: 'warning',
  showConfirmButton: true,
  timer: 30000,
}

export function fileOpen() {
  swalOptions.title = `fileOpen()`
  swalOptions.text = `Click`
  Alert.fireToast(swalOptions)
}

export function fileExit() {
  electron.app.quit()
}

export function helpAbout(){
  electron.shell.openExternal(APP_GITHUB)
}
