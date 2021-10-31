import { EN_LOCALE, RU_LOCALE } from '../../constants'
import { I18n } from '../../services/i18n_service'
import {
  fileOpen,
  fileExit,
  helpAbout,
  setRusLanguage,
  setEnLanguage,
} from './menuFunctions'
import { getCurrentLocale } from '../../lib/getCurrentLocale'

export function menuTemplate() {
  let menuTemplate: any
  return (menuTemplate = [
    {
      label: I18n.t('file'),
      submenu: [
        {
          label: I18n.t('open'),
          click: fileOpen,
        },
        {
          type: 'separator',
        },
        {
          label: I18n.t('exit'),
          click: fileExit,
        },
      ],
    },
    {
      label: I18n.t('language'),
      submenu: [
        {
          label: I18n.t('rus_menu'),
          click: setRusLanguage,
          enabled: !(RU_LOCALE === getCurrentLocale()),
        },
        {
          label: I18n.t('en_menu'),
          click: setEnLanguage,
          enabled: !(EN_LOCALE === getCurrentLocale()),
        },
      ],
    },
    {
      label: I18n.t('help'),
      submenu: [
        {
          label: I18n.t('about'),
          click: helpAbout,
        },
      ],
    },
  ])
}
