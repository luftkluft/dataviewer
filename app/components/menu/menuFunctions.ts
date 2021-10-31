import { APP_GITHUB, EN_LOCALE, RU_LOCALE } from '../../constants'
import { setCurrentLocale } from '../../lib/setCurrentLocale'

const Alert = require('electron-alert')
const { app, shell } = require('electron')

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
  app.quit()
}

export async function setRusLanguage() {
  await setCurrentLocale(RU_LOCALE)
  await app.emit('change-language')
}

export async function setEnLanguage() {
  await setCurrentLocale(EN_LOCALE)
  await app.emit('change-language')
}

export function helpAbout(){
  shell.openExternal(APP_GITHUB)
}
