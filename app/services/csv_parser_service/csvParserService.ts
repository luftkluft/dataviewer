const ipcCsvPServiceRenderer = require('electron').ipcRenderer
const testData: {} = [
  {
    series: [
      {
        name: 'sales1',
        data: [30, 40, 35, -50, 49, 60, -70, 91, 125],
      },
    ],
    chart: {
      id: 'tw1',
      group: 'social',
      type: 'area',
      height: 160,
    },
    colors: ['green'],
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    title: {
      text: 'test1',
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '12px',
        fontWeight: 'normal',
        //fontFamily: undefined,
        color: 'blue',
      },
    },
  },
  {
    series: [
      {
        name: 'sales2',
        data: [0, 0, 1, 1, 1, 0, 1, 0, 0],
      },
    ],
    chart: {
      id: 'tw2',
      group: 'social',
      type: 'area',
      height: 160,
    },
    colors: ['red'],
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    title: {
      text: 'test 2',
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '12px',
        fontWeight: 'normal',
        //fontFamily: undefined,
        color: 'black',
      },
    },
  },
]
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
  private columnСounting(dataFromFile: string) {
    if ((this.csvParams.columns = '0')) {
      let delemiterCount = 0
      for (let i = 0; i <= dataFromFile.length; i++) {
        if (dataFromFile[i] == this.csvParams.delemiter) {
          delemiterCount = delemiterCount + 1
        }
        if (dataFromFile[i] == this.csvParams.end_row) {
          return delemiterCount
        }
      }
    } else {
      return this.csvParams.columns
    }
  }
  csvParsering() {
    console.log(`file_content: ${this.dataFromFile}`)
    console.log(`columnСounting: ${this.columnСounting(this.dataFromFile)}`)
    return testData
  }
}
