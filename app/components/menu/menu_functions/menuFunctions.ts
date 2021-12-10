import { APP_GITHUB, EN_LOCALE, RU_LOCALE } from '../../../constants/constants'
import { setCurrentLocale } from '../../../lib/set_current_locale/setCurrentLocale'
import { I18n } from '../../../services/i18n_service/i18nService'

const Alert = require('electron-alert')
const { app, shell } = require('electron')

import { mainWindow } from '../../../main/main'
import { createChildWindow } from '../../../lib/create_child_window/createChildWindow'

import { PARSER_CSV_EJS_PATH } from '../../../constants/constants'

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
  createChildWindow(mainWindow, PARSER_CSV_EJS_PATH, I18n.t('parser_csv'))
}
// =====
export function noSorting() {
  swalOptions.title = `noSorting()`
  swalOptions.text = `Click`
  Alert.fireToast(swalOptions)
}
// =====
export function manualSorting() {
  swalOptions.title = `manualSorting()`
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
export function codeGithub() {
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
