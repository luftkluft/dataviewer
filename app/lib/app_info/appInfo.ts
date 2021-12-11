import { I18n } from '../../services/i18n_service/i18nService'
import { APP_NAME } from '../../constants/constants'

export function appInfo(_global: any) {
  let appInfo: string = ``
  try {
    appInfo = `${_global.app_config.target_file_name} - ${I18n.t(
      _global.app_config.parser
    )} - ${I18n.t(_global.app_config.sorting)} - ${APP_NAME}`
  } catch (error) {
    console.log(`appInfo(): ${error}`)
  }
  return appInfo
}
