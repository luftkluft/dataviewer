import { setCurrentLocale } from '../app/lib/setCurrentLocale'
import {I18n} from './services/i18n_service'

const { app, BrowserWindow } = require('electron')
let electronEjs = require('electron-ejs')

let ejs = new electronEjs({ name: 'Luft Kluft!', hello: I18n.t('hello') })

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  mainWindow.loadFile('app/views/index.ejs')
  mainWindow.webContents.openDevTools()
}

app.on('ready', async () => {
  await setCurrentLocale('ru-RU')
  await createWindow()
})
