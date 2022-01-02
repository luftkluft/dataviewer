const ipcPServiceRenderer = require('electron').ipcRenderer
import { CsvParserService } from '../csv_parser_service/csvParserService'

export class ParserService {
  parseredData: {} = []

  private getDataFromFile() {
    try {
      const result = ipcPServiceRenderer.sendSync('get_file_content')
      return result
    } catch (error) {
      console.log(`getDataFromFile(): ${error}`)
      return ''
    }
  }

  private getParserStatus() {
    try {
      const result = ipcPServiceRenderer.sendSync('get_parser_status')
      return result
    } catch (error) {
      console.log(`getParserStatus(): ${error}`)
      return ''
    }
  }

  private doParsering(dataFromFile: any) {
    const parser = this.getParserStatus()
    switch (parser) {
      case 'parser_csv':
        const parseredData = new CsvParserService(dataFromFile).csvParsering()
        return parseredData
      default:
        return []
    }
  }

  private parsering() {
    try {
      const dataFromFile = this.getDataFromFile()
      if (dataFromFile == '' || dataFromFile == undefined) {
        return []
      } else {
        return this.doParsering(dataFromFile)
      }
    } catch (error) {
      console.log(`parsering(): ${error}`)
      return []
    }
  }
  getParseredData() {
    return this.parsering()
  }
}
