import {
  APP_ENTER_INDEX_EJS_PATH,
  RU_LOCALE,
  APP_NAME,
  MAIN_ICON_PATH,
  MAIN_BIG_ICON_NAME,
} from './constants'
import { I18n } from './services/i18n_service'
import { menuTemplate } from './components/menu/menuTemplate'

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

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: APP_NAME,
    icon: appRoot + MAIN_ICON_PATH + MAIN_BIG_ICON_NAME,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  mainWindow.loadFile(appRoot + APP_ENTER_INDEX_EJS_PATH)
  mainWindow.webContents.openDevTools()
}

app.on('ready', () => {
  createWindow()
  mainMenu = Menu.buildFromTemplate(menuTemplate())
  Menu.setApplicationMenu(mainMenu)
})

app.on('change-language', () => {
  mainWindow.reload()
  mainMenu = Menu.buildFromTemplate(menuTemplate())
  Menu.setApplicationMenu(mainMenu)
})
