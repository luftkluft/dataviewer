import { EN_LOCALE, RU_LOCALE } from '../../../constants/constants'
import { I18n } from '../../../services/i18n_service/i18nService'
import {
  fileOpen,
  makeDiagnostics,
  fileExit,
  csvParser,
  logParser,
  noSorting,
  manualSorting,
  setRusLanguage,
  setEnLanguage,
  about,
  codeGithub,
  changeAppMode,
} from '../menu_functions/menuFunctions'
import { getCurrentLocale } from '../../../lib/get_current_locale/getCurrentLocale'

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
          label: I18n.t('make_diagnostics'),
          click: makeDiagnostics,
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
    // =====
    {
      label: I18n.t('parser'),
      submenu: [
        {
          label: I18n.t('csv'),
          click: csvParser,
        },
        {
          label: I18n.t('log'),
          click: logParser,
        },
      ],
    },
    // =====
    {
      label: I18n.t('sorting'),
      submenu: [
        {
          label: I18n.t('no_sorting'),
          click: noSorting,
        },
        {
          label: I18n.t('manual'),
          click: manualSorting,
        },
      ],
    },
    // =====
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
    // =====
    {
      label: I18n.t('help'),
      submenu: [
        {
          label: I18n.t('about'),
          click: about,
        },
        {
          label: I18n.t('code'),
          click: codeGithub,
        },
        {
          label: I18n.t('change_app_mode'),
          click: changeAppMode,
        },
      ],
    },
  ])
}
