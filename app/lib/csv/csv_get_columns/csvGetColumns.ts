const ipcCsvGCRenderer = require('electron').ipcRenderer
const csvParams = ipcCsvGCRenderer.sendSync('get_csv_params')
import { csvColumnCounting } from '../csv_column_counting/csvColumnCounting'
import { csvGetStringCell } from '../csv_get_string_cell/csvGetStringCell'

const doFirstColumn = (columnsArray: Array<(string)[]>) => {
  try {
    columnsArray[0].pop() // TODO: das ist bugfix
    switch (csvParams.head_rows) {
      case "3":
        columnsArray[0][0] = csvParams.first_column_name
        columnsArray[0][1] = ''
        columnsArray[0][2] = csvParams.first_column_name
        let temp = ''
        for (let i = 3; i < columnsArray[0].length - 1; i++) {
          for (let j = 0; j < columnsArray[0][i].length; j++) {
            if (columnsArray[0][i][j] == ':') {
              temp = ''
              continue
            }
            if (columnsArray[0][i][j] == '.' || columnsArray[0][i][j] == ',') {
              break
            }
            temp = temp + columnsArray[0][i][j]
          }
          columnsArray[0][i] = temp
          temp = ''
        }
        return columnsArray
      default:
        return columnsArray
    }
  } catch (error) {
    console.log(`doFirstColumn(): ${error}`)
  }
}

export const csvGetColumns = (dataFromFile: string) => {
  let columnsArray: any = []
  let columnArray: any = []
  let delemiterCount: number = 0
  let rowCount: number = 0
  try {
    const columnCount: number = Number(csvColumnCounting(dataFromFile))
    for (let i = 0; i < columnCount; i++) {
      for (let j = 0; j < dataFromFile.length - 1; j++) {
        if (dataFromFile[j] == csvParams.delemiter) {
          delemiterCount = delemiterCount + 1
        }
        if (dataFromFile[j] == csvParams.end_row) {
          rowCount = rowCount + 1
        }
        if (
          (j == 0 && i == 0) ||
          (i == 0 &&
            dataFromFile[j - 1] == csvParams.delemiter &&
            delemiterCount == columnCount * (rowCount + 1) + i)
        ) {
          const cell = csvGetStringCell(dataFromFile, j)
          columnArray.push(cell)
        }
        if (delemiterCount == rowCount * columnCount + i) {
          if (dataFromFile[j - 1] == csvParams.delemiter) {
            const cell = csvGetStringCell(dataFromFile, j)
            if (cell == undefined) {
              break
            }
            columnArray.push(cell)
          }
        }
      }
      columnsArray.push(columnArray)
      columnArray = []
      delemiterCount = 0
      rowCount = 0
    }
    const result: any = doFirstColumn(columnsArray)
    return result
  } catch (error) {
    console.log(`csvGetColumns(): ${error}`)
    return columnsArray
  }
}
