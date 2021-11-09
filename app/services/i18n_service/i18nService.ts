import {
  EN_LOCALE,
  RU_LOCALE,
  BAD_STRING,
  PATH_TO_LOCALES,
  EN_WORDS_FILE,
  RU_WORDS_FILE,
} from '../../constants'

import { getCurrentLocale } from '../../lib/get_current_locale/getCurrentLocale'

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

export class I18n {
  static t(_word: string = BAD_STRING) {
    try {
      const currentLocale: string = getCurrentLocale()
      switch (currentLocale) {
        case EN_LOCALE:
          try {
            const data = fs.readFileSync(
              appRoot + PATH_TO_LOCALES + EN_WORDS_FILE,
              'utf8'
            )
            const en_words = JSON.parse(data)
            if (en_words[_word] === undefined) {
              swalOptions.title = `I18n.t()`
              swalOptions.text = `En word not found!`
              Alert.fireToast(swalOptions)
              return BAD_STRING
            }
            return en_words[_word]
          } catch (error) {
            swalOptions.title = `I18n.t()`
            swalOptions.text = `${error}`
            Alert.fireToast(swalOptions)
            return BAD_STRING
          }
          break
        case RU_LOCALE:
          try {
            const data = fs.readFileSync(
              appRoot + PATH_TO_LOCALES + RU_WORDS_FILE,
              'utf8'
            )
            const ru_words = JSON.parse(data)
            if (ru_words[_word] === undefined) {
              swalOptions.title = `I18n.t()`
              swalOptions.text = `Ru word not found!`
              Alert.fireToast(swalOptions)
              return BAD_STRING
            }
            return ru_words[_word]
          } catch (error) {
            swalOptions.title = `I18n.t()`
            swalOptions.text = `${error}`
            Alert.fireToast(swalOptions)
            return BAD_STRING
          }
          break
        default: {
          swalOptions.title = `I18n.t()`
          swalOptions.text = `Language not found!`
          Alert.fireToast(swalOptions)
          return BAD_STRING
        }
      }
    } catch (error) {
      swalOptions.title = `I18n.t()`
      swalOptions.text = `${error}`
      Alert.fireToast(swalOptions)
      return BAD_STRING
    }
  }
}
