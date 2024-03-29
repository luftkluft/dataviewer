import {
  APP_GITHUB,
  EN_LOCALE,
  RU_LOCALE,
  PARSER_CSV_EJS_PATH,
  SORTING_MANUAL_EJS_PATH,
  OPEN_FILE_EJS_PATH,
  PARSER_LOG_EJS_PATH,
  DIAGNOSTICS_EJS_PATH
} from '../../../constants/constants'
import { setCurrentLocale } from '../../../lib/set_current_locale/setCurrentLocale'
import { I18n } from '../../../services/i18n_service/i18nService'

const Alert = require('electron-alert')
const { app, shell } = require('electron')

import { mainWindow } from '../../../main/main'
import { createChildWindow } from '../../../lib/create_child_window/createChildWindow'

let swalOptions = {
  position: 'top-end',
  title: 'Title',
  text: 'Text',
  icon: 'success',
  showConfirmButton: true,
  timer: 10000,
}

export function fileOpen() {
  createChildWindow(mainWindow, OPEN_FILE_EJS_PATH, I18n.t('file'))
}
export function makeDiagnostics() {
  createChildWindow(mainWindow, DIAGNOSTICS_EJS_PATH, I18n.t('diagnostics'))
}
export function fileExit() {
  app.emit('app_exit')
}
// =====
export function csvParser() {
  createChildWindow(mainWindow, PARSER_CSV_EJS_PATH, I18n.t('parser_csv'))
}
// =====
export function logParser() {
  createChildWindow(mainWindow, PARSER_LOG_EJS_PATH, I18n.t('parser_log'))
}
// =====
export function noSorting() {
  app.emit('app_set_no_sorting')
}
// =====
export async function manualSorting() {
  await app.emit('app_set_sorting_manual')
  await createChildWindow(
    mainWindow,
    SORTING_MANUAL_EJS_PATH,
    I18n.t('sorting_manual')
  )
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
  swalOptions.text = `DataViewer v1.1.0 for MIT use`
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
