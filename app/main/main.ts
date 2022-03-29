import {
  APP_ENTER_INDEX_EJS_PATH,
  APP_NAME,
  MAIN_ICON_PATH,
  MAIN_BIG_ICON_NAME,
} from '../constants/constants'
import { I18n } from '../services/i18n_service/i18nService'
import { InitService } from '../services/init_service/initService'
import { AppExitService } from '../services/app_exit_service/appExitService'
import { windowAllClosedService } from '../services/window_all_closed_service/windowAllClosedService'
import { menuTemplate } from '../components/menu/menu_template/menuTemplate'
import { RestartAppService } from '../services/restart_app_service/restartAppService'
import { closeChildWindows } from '../lib/close_child_windows/closeChildWindows'
import { appInfo } from '../lib/app_info/appInfo'
import { DiagnosisService } from '../services/diagnosis_service/diagnosisService'
import { MakeService } from '../services/make_service/makeService'

const { app, BrowserWindow, Menu } = require('electron')
const { ipcMain } = require('electron')
const appRoot = require('app-root-path')
const dialog = require('electron').dialog
const { basename, dirname } = require('path')
let electronEjs = require('electron-ejs')

let ejs = new electronEjs({
  name: 'Luft Kluft!',
  I18n,
  appName: APP_NAME,
  shortcutIcon: appRoot + MAIN_ICON_PATH + MAIN_BIG_ICON_NAME,
})

export let mainWindow: any
let mainMenu: any

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: APP_NAME,
    icon: appRoot + MAIN_ICON_PATH + MAIN_BIG_ICON_NAME,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })
  mainWindow.loadFile(appRoot + APP_ENTER_INDEX_EJS_PATH)
  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools()
  }
}

app.once('ready', async () => {
  await InitService.init()
  await createMainWindow()
  mainMenu = await Menu.buildFromTemplate(menuTemplate())
  await Menu.setApplicationMenu(mainMenu)
  await mainWindow.setTitle(appInfo(global))
})

app.on('update_app', () => {
  closeChildWindows(mainWindow)
  mainWindow.reload()
  mainMenu = Menu.buildFromTemplate(menuTemplate())
  Menu.setApplicationMenu(mainMenu)
  mainWindow.setTitle(appInfo(global))
})

app.on('change_app_mode', () => {
  RestartAppService.restart(app, mainWindow)
})

app.on('create_main_window', () => {
  createMainWindow()
})

app.on('window-all-closed', () => {
  windowAllClosedService.ClosedAll(app, mainWindow)
})

app.on('app_exit', () => {
  AppExitService.appExit(app, mainWindow)
})

ipcMain.on('last_opened_file', (event: any, arg: any) => {
  const result = global.app_config.last_opened_file
  event.returnValue = result
})

ipcMain.on('target_file_name', (event: any, arg: any) => {
  const result = global.app_config.target_file_name
  event.returnValue = result
})

ipcMain.on('set_file_content', (event: any, arg: any) => {
  global.app_config.file_content = arg
})

ipcMain.on('get_file_content', (event: any, arg: any) => {
  const result = global.app_config.file_content
  event.returnValue = result
})

ipcMain.on('get_csv_params', (event: any, arg: any) => {
  const result = global.app_config.csv_params
  event.returnValue = result
})

ipcMain.on('set_csv_params', (event: any, arg: any) => {
  global.app_config.csv_params = arg
  app.emit('update_app')
})

ipcMain.on('get_deep_test', (event: any, arg: any) => {
  const result = global.app_config.deep_test
  event.returnValue = result
})

ipcMain.on('set_deep_test', (event: any, arg: any) => {
  global.app_config.deep_test = arg
})

ipcMain.on('open-file-dialog', function (event: any) {
  dialog
    .showOpenDialog({ properties: ['openFile'] })
    .then(function (response: any) {
      if (!response.canceled) {
        const result = response.filePaths[0]
        global.app_config.target_file_name = basename(result)
        global.app_config.target_file_path = `${dirname(result)}/`
        global.app_config.last_opened_file = result
        event.returnValue = result
      } else {
        event.returnValue = 'no_file_selected'
      }
    })
})

ipcMain.on('open-log-file-dialog', function (event: any) {
  dialog
    .showOpenDialog({ properties: ['openFile'] })
    .then(function (response: any) {
      if (!response.canceled) {
        const result = response.filePaths[0]
        global.app_config.log_file_name = basename(result)
        global.app_config.log_file_path = `${dirname(result)}/`
        global.app_config.last_opened_log_file = result
        event.returnValue = result
      } else {
        event.returnValue = 'no_file_selected'
      }
    })
})

ipcMain.on('last_opened_log_file', (event: any, arg: any) => {
  const result = global.app_config.last_opened_log_file
  event.returnValue = result
})

ipcMain.on('open-variable-list-file-dialog', function (event: any) {
  dialog
    .showOpenDialog({ properties: ['openFile'] })
    .then(function (response: any) {
      if (!response.canceled) {
        const result = response.filePaths[0]
        global.app_config.variable_list_file_name = basename(result)
        global.app_config.variable_list_file_path = `${dirname(result)}/`
        global.app_config.last_opened_variable_list_file = result
        event.returnValue = result
      } else {
        event.returnValue = 'no_file_selected'
      }
    })
})

ipcMain.on('last_opened_variable_list_file', (event: any, arg: any) => {
  const result = global.app_config.last_opened_variable_list_file
  event.returnValue = result
})

ipcMain.on('open-csv-file-path-dialog', function (event: any) {
  dialog
    .showOpenDialog({ properties: ['openDirectory'] })
    .then(function (response: any) {
      if (!response.canceled) {
        const csvPath = response.filePaths[0] + "/"
        global.app_config.csv_file_path = csvPath
        global.app_config.last_csv_file_path = csvPath
        event.returnValue = csvPath
      } else {
        event.returnValue = 'no_file_selected'
      }
    })
})

ipcMain.on('last_csv_file_path', (event: any, arg: any) => {
  const result = global.app_config.last_csv_file_path
  event.returnValue = result
})

ipcMain.on('open-pattern-file-dialog', function (event: any) {
  dialog
    .showOpenDialog({ properties: ['openFile'] })
    .then(function (response: any) {
      if (!response.canceled) {
        const result = response.filePaths[0]
        global.app_config.pattern_file_name = basename(result)
        global.app_config.pattern_file_path = `${dirname(result)}/`
        global.app_config.last_opened_pattern_file = result
        event.returnValue = result
      } else {
        event.returnValue = 'no_file_selected'
      }
    })
})

ipcMain.on('last_opened_pattern_file', (event: any, arg: any) => {
  const result = global.app_config.last_opened_pattern_file
  event.returnValue = result
})

ipcMain.on('open-error-file-dialog', function (event: any) {
  dialog
    .showOpenDialog({ properties: ['openFile'] })
    .then(function (response: any) {
      if (!response.canceled) {
        const result = response.filePaths[0]
        global.app_config.error_file_name = basename(result)
        global.app_config.error_file_path = `${dirname(result)}/`
        global.app_config.last_opened_error_file = result
        event.returnValue = result
      } else {
        event.returnValue = 'no_file_selected'
      }
    })
})

ipcMain.on('last_opened_error_file', (event: any, arg: any) => {
  const result = global.app_config.last_opened_error_file
  event.returnValue = result
})

ipcMain.on('get_log_params', (event: any, arg: any) => {
  const result = global.app_config.log_params
  event.returnValue = result
})

ipcMain.on('set_log_params', (event: any, arg: any) => {
  global.app_config.log_params = arg
  // app.emit('update_app')
})

ipcMain.on('open-file', (event: any, arg: any) => {
  mainWindow.setTitle(appInfo(global))
})

ipcMain.on('update_app', (event: any, arg: any) => {
  app.emit('update_app')
})

ipcMain.on('i18n', (event: any, arg: any) => {
  event.returnValue = I18n.t(arg)
})

ipcMain.on('get_parser_status', (event: any, arg: any) => {
  const result = global.app_config.parser
  event.returnValue = result
})

ipcMain.on('set_sorted_data', (event: any, arg: any) => {
  global.app_config.sorted_data = arg
})

ipcMain.on('get_sorted_data', (event: any, arg: any) => {
  const result = global.app_config.sorted_data
  event.returnValue = result
})

ipcMain.on('set_sort_params_view_array', (event: any, arg: any) => {
  global.app_config.sort_params.view_array = arg
})

ipcMain.on('get_sort_params_view_array', (event: any, arg: any) => {
  const result = global.app_config.sort_params.view_array
  event.returnValue = result
})

ipcMain.on('set_sorting', (event: any, arg: any) => {
  global.app_config.sorting = arg
})

ipcMain.on('get_sorting', (event: any, arg: any) => {
  const result = global.app_config.sorting
  event.returnValue = result
})

ipcMain.on('run_test', (event: any, arg: any) => {
  const result = DiagnosisService.testing()
  event.returnValue = result
})

ipcMain.on('make_csv_from_log', (event: any, arg: any) => {
  const logFile: string = global.app_config.last_opened_log_file
  const variablesListFile: string = global.app_config.last_opened_variable_list_file
  const csvFileSavePath: string = global.app_config.last_csv_file_path
  const logParams: any = global.app_config.log_params
  const result = MakeService.makeCSVfromLog(logFile, variablesListFile, csvFileSavePath, logParams)
  event.returnValue = result
})

app.on('app_set_sorting_manual', () => {
  global.app_config.sorting = 'sorting_manual'
  app.emit('update_app')
})

app.on('app_set_no_sorting', () => {
  global.app_config.sorting = 'no_sorting'
  app.emit('update_app')
})
