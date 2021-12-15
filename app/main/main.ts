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

const { app, BrowserWindow, Menu } = require('electron')
const { ipcMain } = require('electron')
const appRoot = require('app-root-path')
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

ipcMain.on('set_global_file_content', (event: any, arg: any) => {
  global.file_content = arg
})

ipcMain.on('get_csv_params', (event: any, arg: any) => {
  const result = global.app_config.csv_params
  event.returnValue = result
})

ipcMain.on('set_csv_params', (event: any, arg: any) => {
  global.app_config.csv_params = arg
  app.emit('update_app')
})
