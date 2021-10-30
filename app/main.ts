import { APP_ENTER_INDEX_EJS_PATH, RU_LOCALE } from './constants'
import { setCurrentLocale } from './lib/setCurrentLocale'
import { I18n } from './services/i18n_service'

const { app, BrowserWindow } = require('electron')
const appRoot = require('app-root-path')
let electronEjs = require('electron-ejs')

let ejs = new electronEjs({ name: 'Luft Kluft!', I18n })

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  mainWindow.loadFile(appRoot + APP_ENTER_INDEX_EJS_PATH)
  mainWindow.webContents.openDevTools()
}

app.on('ready', async () => {
  await setCurrentLocale(RU_LOCALE)
  await createWindow()
})
