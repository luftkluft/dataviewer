import {
  EN_LOCALE,
  RU_LOCALE,
  BAD_STRING,
  PATH_TO_LOCALES,
  EN_WORDS_FILE,
  RU_WORDS_FILE,
} from '../constants'
import { getCurrentLocale } from '../lib/getCurrentLocale'
const fs = require('fs')

export class I18n {
  static t(_word: string = BAD_STRING) {
    try {
      const currentLocale: string = getCurrentLocale()
      switch (currentLocale) {
        case EN_LOCALE:
          try {
            const data = fs.readFileSync(
              PATH_TO_LOCALES + EN_WORDS_FILE,
              'utf8'
            )
            const en_words = JSON.parse(data)
            if (en_words[_word] === undefined) {
              console.log(`I18n.t(): en word not found!`)
              return BAD_STRING
            }
            return en_words[_word]
          } catch (error) {
            console.log(`I18n.t(): ${error}`)
            return BAD_STRING
          }
          break
        case RU_LOCALE:
          try {
            const data = fs.readFileSync(
              PATH_TO_LOCALES + RU_WORDS_FILE,
              'utf8'
            )
            const ru_words = JSON.parse(data)
            if (ru_words[_word] === undefined) {
              console.log(`I18n.t(): ru word not found!`)
              return BAD_STRING
            }
            return ru_words[_word]
          } catch (error) {
            console.log(`I18n.t(): ${error}`)
            return BAD_STRING
          }
          break
        default: {
          console.log(`I18n.t(): language not found!`)
          return BAD_STRING
        }
      }
    } catch (error) {
      console.log(`I18n.t()crash: ${error}`)
      return BAD_STRING
    }
  }
}
