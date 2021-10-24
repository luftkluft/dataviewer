const { app, BrowserWindow } = require('electron')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  mainWindow.loadFile('app/index.html')
}

app.on('ready', createWindow)
