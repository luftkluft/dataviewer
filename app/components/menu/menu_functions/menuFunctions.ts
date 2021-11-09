import { APP_GITHUB, EN_LOCALE, RU_LOCALE } from '../../../constants'
import { setCurrentLocale } from '../../../lib/set_current_locale/setCurrentLocale'

const Alert = require('electron-alert')
const { app, shell } = require('electron')

let swalOptions = {
  position: 'top-end',
  title: 'Title',
  text: 'Text',
  icon: 'success',
  showConfirmButton: true,
  timer: 10000,
}

export function fileOpen() {
  swalOptions.title = `fileOpen()`
  swalOptions.text = `Click`
  Alert.fireToast(swalOptions)
}
export function fileExit() {
  app.emit('app_exit')
}
// =====
export function csvParser() {
  swalOptions.title = `csvParser()`
  swalOptions.text = `Click`
  Alert.fireToast(swalOptions)
}
// =====
export async function setRusLanguage() {
  await setCurrentLocale(RU_LOCALE)
  await app.emit('update_app')
}
export async function setEnLanguage() {
  await setCurrentLocale(EN_LOCALE)
  await app.emit('update_app')
}
// =====
export function about() {
  swalOptions.title = `about()`
  swalOptions.text = `Click`
  Alert.fireToast(swalOptions)
}
export function codeGithub(){
  shell.openExternal(APP_GITHUB)
}
export async function changeAppMode() {
  if (process.env.NODE_ENV === 'development') {
    process.env.NODE_ENV = await 'production'
  } else {
    process.env.NODE_ENV = await 'development'
  }
  await app.emit('change_app_mode')
}
