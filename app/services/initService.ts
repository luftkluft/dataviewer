const fs = require('fs')
const appRoot = require('app-root-path')
import { swalOptions, Alert } from './alertService'

export class InitService {
  static init(params: string = 'default') {
    let swOp = {
      ...swalOptions,
      showConfirmButton: true,
    }
    try {
      switch (params) {
        case 'default':
          try {
            swOp.title = `init()`
            swOp.text = `Run as Default`
            swOp.icon = `success`
            Alert.fireToast(swOp)
          } catch (error) {
            swOp.title = `init()`
            swOp.text = `${error}`
            Alert.fireToast(swOp)
          }
          break

        default: {
          swOp.title = `init()`
          swOp.text = `Run as default in Default`
          swOp.icon = `success`
          Alert.fireToast(swOp)
        }
      }
    } catch (error) {
      swOp.title = `init()`
      swOp.text = `${error}`
      Alert.fireToast(swOp)
    }
  }
}
