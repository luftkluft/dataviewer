const ipcPServiceRenderer = require('electron').ipcRenderer
import { CsvParserService } from '../csv_parser_service/csvParserService'
const emptyData: {} = [
  {
    series: [
      {
        name: ipcPServiceRenderer.sendSync('i18n', 'no_data'),
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    chart: {
      id: 'no-data',
      group: 'no-group',
      type: 'line',
      height: 160,
    },
    colors: ['#008FFB'],
    yaxis: {
      labels: {
        minWidth: 40,
        text: ipcPServiceRenderer.sendSync('i18n', 'empty_label'),
      },
    },
    title: {
      text: ipcPServiceRenderer.sendSync('i18n', 'empty_text'),
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '14px',
        fontWeight: 'normal',
        //fontFamily: undefined,
        color: 'red',
      },
    },
  },
]

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
        break
      default:
        return emptyData
        break
    }
  }

  private parsering() {
    try {
      const dataFromFile = this.getDataFromFile()
      if (dataFromFile == '' || dataFromFile == undefined) {
        return emptyData
      } else {
        return this.doParsering(dataFromFile)
      }
    } catch (error) {
      console.log(`parsering(): ${error}`)
      return emptyData
    }
  }
  getParseredData() {
    return this.parsering()
  }
}
