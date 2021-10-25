const { app, BrowserWindow } = require('electron')
let electronEjs = require('electron-ejs')

let ejs = new electronEjs({ name: 'Luft Kluft!' }, {})

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })
  mainWindow.loadFile('app/views/index.ejs')
}

app.on('ready', createWindow)
