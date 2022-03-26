export function headerInfo(sVariableListLines: string, separator: string){
  // TODO
  let sReturn: string = ""
  let sHeaderInfo: string = ""
  let charCount: number = 0
  let wordCount: number = 0
  let isWritingChars: boolean = true
  let isWordCounted: boolean = false
  let columnInLine: number = 3
  let lineCount: number = 0
  let viewLine: number = 0

  let j: number = 0
  for (j = 0; j < sVariableListLines.length; j++)
  {
    // заполнение матрицы формирования csv таблицы
    if (sVariableListLines[j] == '#')
      viewLine--;
    if (sVariableListLines[j] == '\n')
    {
      viewLine++;
      if (charCount)
      {
        sHeaderInfo += String(viewLine)
        lineCount++
      }
      viewLine = 0
    }
    // парсинг данных
    if (sVariableListLines[j] == '#')
    {
      isWritingChars = false
      continue
    }
    if (sVariableListLines[j] == ' ' || sVariableListLines[j] == '\t')
      if (isWordCounted)
      {
        wordCount++
        isWordCounted = false
        if (wordCount < columnInLine && isWritingChars)
          sReturn += separator
      }
    if (sVariableListLines[j] == ' ')
      if (!charCount)
        continue
    if (sVariableListLines[j] != ' ')
      if (sVariableListLines[j] != '#')
        if (sVariableListLines[j] != '\n')
          if (sVariableListLines[j] != '\t')
          {
            isWordCounted = true
            charCount++
          }
    if (isWritingChars)
      if (charCount)
        if (sVariableListLines[j] != '\t')
        {
          if (sVariableListLines[j] == '\n')
          {
            sReturn += separator
          }
          else
          {
            sReturn += sVariableListLines[j]
          }
        }
    if (sVariableListLines[j] == '\n')
    {
      isWritingChars = true
      isWordCounted = false
      charCount = 0
      wordCount = 0
    }
  }
  return sHeaderInfo
}
