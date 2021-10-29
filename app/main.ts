import { getCurrentLocale } from '../app/lib/getCurrentLocale'

const { app, BrowserWindow } = require('electron')
let electronEjs = require('electron-ejs')

let ejs = new electronEjs({ name: 'Luft Kluft!' }, {})

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

app.on('ready', () => {
  createWindow()
  console.log(getCurrentLocale())
})
