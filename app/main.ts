import {
  APP_ENTER_INDEX_EJS_PATH,
  RU_LOCALE,
  APP_NAME,
  MAIN_ICON_PATH,
  MAIN_BIG_ICON_NAME,
} from './constants'
import { setCurrentLocale } from './lib/setCurrentLocale'
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

function createWindow() {
  const mainWindow = new BrowserWindow({
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
  setCurrentLocale(RU_LOCALE)
  createWindow()
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)
})
