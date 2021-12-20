const ipcCsvPServiceRenderer = require('electron').ipcRenderer
export class CsvParserService {
  dataFromFile: any
  csvParams: any
  constructor(_dataFromFile: any) {
    this.dataFromFile = _dataFromFile
    try {
      this.csvParams = ipcCsvPServiceRenderer.sendSync('get_csv_params')
    } catch (error) {
      console.log(`CsvParserService:constructor: ${error}`)
    }
  }
}
