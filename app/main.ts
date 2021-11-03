import {
  APP_ENTER_INDEX_EJS_PATH,
  APP_NAME,
  MAIN_ICON_PATH,
  MAIN_BIG_ICON_NAME,
} from './constants'
import { I18n } from './services/i18n_service'
import { InitService } from './services/init_service'
import { AppExitService } from './services/app_exit_service'
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

const Alert = require('electron-alert')
let alert = new Alert()
let swalOptions = {
  position: 'top-end',
  title: 'Title',
  text: 'Text',
  icon: 'warning',
  showConfirmButton: true,
  showCancelButton: true,
  timer: 10000,
}

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

app.once('ready', async () => {
  await InitService.init()
  await createWindow()
  mainMenu = await Menu.buildFromTemplate(menuTemplate())
  await Menu.setApplicationMenu(mainMenu)
})

app.on('change-language', () => {
  mainWindow.reload()
  mainMenu = Menu.buildFromTemplate(menuTemplate())
  Menu.setApplicationMenu(mainMenu)
})

app.on('window-all-closed', async () => {
  try {
    mainWindow.closed
    swalOptions.title = 'Exit from App?'
    swalOptions.text = ''
    const result = await alert.fireWithFrame(swalOptions, null, null, false)
    if (result.value) {
      app.quit()
    } else if (result.dismiss) {
      createWindow()
    }
  } catch (error) {
    swalOptions.title = `window-all-closed`
    swalOptions.text = `${error}`
    Alert.fireToast(swalOptions)
  }
})

app.on('app_exit', () => {
  AppExitService.appExit(app, mainWindow)
})
