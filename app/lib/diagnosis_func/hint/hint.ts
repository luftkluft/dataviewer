import { getAddressByPosition } from '../../make_func/make_parser/get_address_by_position/getAddressByPosition'
import { getNameByPosition } from '../../make_func/make_parser/get_name_by_position/getNameByPosition'
import { getCommentByPosition } from '../../make_func/make_parser/get_comment_by_position/getCommentByPosition'

const matchLines100 = () => {
  const sHint: string = `Неисправностей не обнаружено.
Проверьте автоматы защиты исполнительных механизмов.
Проверьте промежуточные реле и предохранители исполнительных механизмов.
Проверьте наличие сжатого воздуха.
Если это начало цикла, то может осталось просто нажать кнопку Пуск?`
  return sHint
}

const hintsWord = (file: string, sSource: string, sError: string, charCount: number) => {
  let sHint: string = '\n'
  sHint += `Адрес: ${getAddressByPosition(file, charCount)}\n`
  sHint += `Имя: ${getNameByPosition(file, charCount)}\n`
  sHint += `Комментарий: ${getCommentByPosition(file, charCount)}\n`
  sHint += `Значение в образцовой циклограмме: ${sSource}\n`
  sHint += `Значение в аварийном логе: ${sError}\n`
  return sHint
}

const hintsBit = (file: string, maxMatchLineI: string, errorLogLineI: string, charCount: number) => {
  let sHint: string = '\n'
  sHint += `Адрес: ${getAddressByPosition(file, charCount)}\n`
  sHint += `Имя: ${getNameByPosition(file, charCount)}\n`
  sHint += `Комментарий: ${getCommentByPosition(file, charCount)}\n`
  sHint += `Значение в образцовой циклограмме: ${maxMatchLineI}\n`
  sHint += `Значение в аварийном логе: ${errorLogLineI}\n`
  return sHint
}

export function hint(file: string, maxMatchLine: string, errorMainLine: string) {
  try {
    let sHint: string = ''
    let match: number = 0
    let charMatch: number = 0
    let startData: boolean = false
    let charCount: number = 0
    const delemiter: string = "'"

    let i: number = 0
    for (i = 0; i < maxMatchLine.length; i++) {
      if (maxMatchLine[i] == delemiter)
        startData = true
      if (startData) {
        if (maxMatchLine[i] == errorMainLine[i]) {
          charMatch++
        }
        charCount++
      }
    }

    match = charMatch / charCount * 100
    match = Math.floor(match * 100) / 100
    sHint = `Совпадение ${match.toString()}%\n`

    if (match == 100) {
      sHint += matchLines100()
    }
    else {
      startData = false
      charCount = 0
      for (i = 0; i < maxMatchLine.length; i++) {
        if (maxMatchLine[i] == delemiter) {
          startData = true
          charCount++
        }
        if (startData) {
          if (maxMatchLine[i] == delemiter && maxMatchLine[i + 7] == delemiter) // 6 знаков - длина слова в логе + 1
            if (maxMatchLine[i + 2] != delemiter)                          // если не бит
            {
              let isMatch: boolean = true
              let j: number = 0
              for (j = 0; j < 7; j++) {
                if (maxMatchLine[i + j] != errorMainLine[i + j])
                  isMatch = false;
              }
              if (isMatch) {
                continue
              }
              else {
                sHint += hintsWord(file, maxMatchLine.substr(i + 1, 6), errorMainLine.substr(i + 1, 6), charCount)
                continue
              }
            }
          if (maxMatchLine[i] != errorMainLine[i])
            if (maxMatchLine[i - 1] == '\'' && maxMatchLine[i + 1] == '\'') // если бит
            {
              sHint += hintsBit(file, maxMatchLine[i], errorMainLine[i], charCount)
            }
        }
      }

    }

    return sHint
  } catch (error) {
    return error
  }
}
