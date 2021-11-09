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

const { app, BrowserWindow, Menu } = require('electron')
const appRoot = require('app-root-path')
let electronEjs = require('electron-ejs')

let ejs = new electronEjs({
  name: 'Luft Kluft!',
  I18n,
  appName: APP_NAME,
  shortcutIcon: appRoot + MAIN_ICON_PATH + MAIN_BIG_ICON_NAME,
})

let mainWindow: any
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
})

app.on('update_app', () => {
  mainWindow.reload()
  mainMenu = Menu.buildFromTemplate(menuTemplate())
  Menu.setApplicationMenu(mainMenu)
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
