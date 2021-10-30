import { I18n } from '../../services/i18n_service'
import { fileOpen, fileExit, helpAbout } from './menuFunctions'

export const menuTemplate: any = [
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
    label: I18n.t('help'),
    submenu: [
      {
        label: I18n.t('about'),
        click: helpAbout,
      },
    ],
  },
]
