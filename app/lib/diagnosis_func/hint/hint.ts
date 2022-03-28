import { getAddressByPositionFromLines } from '../../make_func/make_parser/get_address_by_position_from_lines/getAddressByPositionFromLines'
import { getNameByPositionFromLines } from '../../make_func/make_parser/get_name_by_position_from_lines/getNameByPositionFromLines'
import { getCommentByPositionFromLines } from '../../make_func/make_parser/get_comment_by_position_from_lines/getCommentByPositionFromLines'

const matchLines100 = () => {
  const sHint: string = `Неисправностей не обнаружено.
Проверьте автоматы защиты исполнительных механизмов.
Проверьте промежуточные реле и предохранители исполнительных механизмов.
Проверьте наличие сжатого воздуха.
Если это начало цикла, то может осталось просто нажать кнопку Пуск?`
  return sHint
}

const hintsWord = (hashDataLog: string, sSource: string, sError: string, charCount: number) => {
  let sHint: string = '\n'
  sHint += `Адрес: ${getAddressByPositionFromLines(hashDataLog, charCount)}\n`
  sHint += `Имя: ${getNameByPositionFromLines(hashDataLog, charCount)}\n`
  sHint += `Комментарий: ${getCommentByPositionFromLines(hashDataLog, charCount)}\n`
  sHint += `Значение в образцовой циклограмме: ${sSource}\n`
  sHint += `Значение в аварийном логе: ${sError}\n`
  return sHint
}

const hintsBit = (hashDataLog: string, maxMatchLineI: string, errorLogLineI: string, charCount: number) => {
  let sHint: string = '\n'
  sHint += `Адрес: ${getAddressByPositionFromLines(hashDataLog, charCount)}\n`
  sHint += `Имя: ${getNameByPositionFromLines(hashDataLog, charCount)}\n`
  sHint += `Комментарий: ${getCommentByPositionFromLines(hashDataLog, charCount)}\n`
  sHint += `Значение в образцовой циклограмме: ${maxMatchLineI}\n`
  sHint += `Значение в аварийном логе: ${errorLogLineI}\n`
  return sHint
}

export function hint(hashDataLog: string, maxMatchLine: string, errorMainLine: string) {
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
                sHint += hintsWord(hashDataLog, maxMatchLine.substr(i + 1, 6), errorMainLine.substr(i + 1, 6), charCount)
                continue
              }
            }
          if (maxMatchLine[i] != errorMainLine[i])
            if (maxMatchLine[i - 1] == '\'' && maxMatchLine[i + 1] == '\'') // если бит
            {
              sHint += hintsBit(hashDataLog, maxMatchLine[i], errorMainLine[i], charCount)
            }
        }
      }

    }

    return sHint
  } catch (error) {
    return ''
  }
}
