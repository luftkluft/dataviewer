import { I18n } from './i18nService'
import { alert, swalOptions, Alert } from './alertService'

export class RestartAppService {
  static restart(app: any, mainWindow: any) {
    // TODO restart, now message
    let swOp = {
      ...swalOptions,
      showConfirmButton: true,
    }
    try {
      swOp.title = `${I18n.t('required_restart_app')}`
      swOp.text = ``
      Alert.fireToast(swOp)
    } catch (error) {
      swOp.title = `RestartAppService()`
      swOp.text = `${error}`
      Alert.fireToast(swOp)
    }
  }
}
