export function readDataLineFromLog(sLogLine: string = '') {
  let i: number = 0
  let sReturn: string = ''
  let beginData: boolean = false

  while (sLogLine[i]) {
    if (sLogLine[i] == "'") { // код 39 = " ' " разделитель столбцов
      beginData = true
    }
    if (beginData) { // данные с разделителями
      sReturn += sLogLine[i]
    }
    i++
  }
  return sReturn
}
