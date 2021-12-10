import {
  MAIN_ICON_PATH,
  MAIN_SMAII_ICON_NAME,
} from '../../constants/constants'

const { BrowserWindow } = require('electron')
const appRoot = require('app-root-path')

export const createChildWindow = (parentWindow: any, ejsPath: string, windowTitle: string) => {
  let childWindow = new BrowserWindow({
    width: 600,
    height: 400,
    title: windowTitle,
    parent: parentWindow,
    icon: appRoot + MAIN_ICON_PATH + MAIN_SMAII_ICON_NAME,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })
  childWindow.setMenu(null)
  childWindow.loadFile(appRoot + ejsPath)
  if (process.env.NODE_ENV !== 'production') {
    childWindow.webContents.openDevTools()
  }
}