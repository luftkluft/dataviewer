const ipcCsvGCRenderer = require('electron').ipcRenderer
import { csvColumnСounting } from '../csv_column_counting/csvColumnCounting'
import { csvGetStringCell } from '../csv_get_string_cell/csvGetStringCell'
export const csvGetColumns = (dataFromFile: string) => {
  let columnsArray: any = []
  let columnArray: any = []
  let delemiterCount: number = 0
  let rowCount: number = 0
  try {
    const csvParams = ipcCsvGCRenderer.sendSync('get_csv_params')
    const columnCount: number = Number(csvColumnСounting(dataFromFile))
    for (let i = 0; i < columnCount; i++) {
      for (let j = 0; j < dataFromFile.length; j++) {
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
    return columnsArray
  } catch (error) {
    console.log(`csvGetColumns(): ${error}`)
    return columnsArray
  }
}
