const { dialog } = require('electron')
import { logToHash } from '../../make_func/make_hash/log_to_hash/logToHash'
import { getErrorMainLine } from '../../diagnosis_func/get_error_main_line/getErrorMainLine'
import { getMaxMatchLine } from '../../diagnosis_func/get_max_match_line/getMaxMatchLine'
import { hint } from '../../diagnosis_func/hint/hint'

export function testing() {
  //   try {
  //     const options = {
  //       type: 'question',
  //       buttons: ['Yes, please', 'No, thanks'],
  //       //defaultId: 2,
  //       title: 'Question',
  //       message: 'Do you want to do this?',
  //       detail: 'It does not really matter',
  //     };
  //     const response = dialog.showMessageBoxSync(null, options);
  //     if (response == 0) {
  //       return 'yes'
  //     } else {
  //       return 'no'
  //     }
  //   } catch (error) {
  //     return error
  //   }
  let sResult: string = ''
  let deep: number = 0
  const minDeep: number = 1
  const maxDeep: number = 6
  deep = Number(global.app_config.deep_test)
  let hashDataLog: string = ''
  const logFile: string = global.app_config.last_opened_pattern_file
  const errorFile: string = global.app_config.last_opened_error_file
  const variablesListFile: string = global.app_config.last_opened_variable_list_file
  const csvFileSavePath: string = global.app_config.last_csv_file_path
  const logParams: any = global.app_config.log_params
  let errorMainLine: string = ''
  let maxMatchLine: string = ''
  let sHint: string = ''
  try {
    sResult = '===== Запуск диагностики =====\n'
    try {
      if (deep >= minDeep || deep <= maxDeep) {
        sResult += new Date().toDateString() + '\n'
        sResult += `Исходный файл: ${logFile}\n`
        sResult += `Файл ошибок: ${errorFile}\n`
        sResult += `Файл списка переменных: ${variablesListFile}\n`
      } else {
        sResult = `Глубина анализа может быть в интервале от ${minDeep} до ${maxDeep}, проверьте введённое значение!`
        return sResult
      }
    } catch (error) {
      return error
    }
    sResult += `Установлена глубина анализа: ${deep}\n`

    hashDataLog = logToHash(logFile, variablesListFile, csvFileSavePath, logParams, deep)
    if (logToHash.length) {
      sResult += `Хеширование лога даных - ok\n`
    } else {
      return `Ошибка хеширования лога даных!`
    }

    errorMainLine = getErrorMainLine(errorFile, variablesListFile, logParams.delemiter, deep)
    if (errorMainLine.length) {
      sResult += `Хеширование лога ошибки - ok\n`
    } else {
      return `Ошибка хеширования лога ошибки!`
    }

    maxMatchLine = getMaxMatchLine(hashDataLog, errorMainLine, logParams.delemiter)
    if (maxMatchLine.length) {
      sResult += `Найдено совпадение - ok\n`
    } else {
      return `Ошибка поиска совпадений!`
    }

    sHint = hint(hashDataLog, maxMatchLine, errorMainLine)
    if (sHint.length) {
      sResult += sHint
      sResult += `\n===== Диагностика завершена =====`
    } else {
      return `Ошибка диагнoстики!`
    }
    return sResult
  } catch (error) {
    return error
  }
}
