const fs = require('fs')
const appRoot = require('app-root-path')
const Alert = require('electron-alert')

let swalOptions = {
  position: 'top-end',
  title: 'Title',
  text: 'Text',
  icon: 'warning',
  showConfirmButton: true,
  timer: 30000,
}

export class InitService {
  static init(params: string = 'default') {
    try {
      switch (params) {
        case 'default':
          try {
            swalOptions.title = `init()`
            swalOptions.text = `Run as Default`
            swalOptions.icon = `success`
            Alert.fireToast(swalOptions)
          } catch (error) {
            swalOptions.title = `init()`
            swalOptions.text = `${error}`
            Alert.fireToast(swalOptions)
          }
          break

        default: {
          swalOptions.title = `init()`
          swalOptions.text = `Run as default in Default`
          swalOptions.icon = `success`
          Alert.fireToast(swalOptions)
        }
      }
    } catch (error) {
      swalOptions.title = `init()`
      swalOptions.text = `${error}`
      Alert.fireToast(swalOptions)
    }
  }
}
