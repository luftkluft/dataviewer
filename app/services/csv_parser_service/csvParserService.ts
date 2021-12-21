const ipcCsvPServiceRenderer = require('electron').ipcRenderer
import { csvColumnСounting } from '../../lib/csv/csv_column_counting/csvColumnCounting'
const testData: {} = [
  {
    series: [
      {
        name: 'sales1',
        data: [
          30, 40, 35, -50, 49, 60, -70, 91, 125, 30, 40, 35, -50, 49, 60, -70,
          91, 125, 30, 40, 35, -50, 49, 60, -70, 91, 125, 30, 40, 35, -50, 49,
          60, -70, 91, 125,
        ],
      },
    ],
    chart: {
      id: 'tw1',
      group: 'social',
      type: 'line',
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
        data: [
          0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1,
          0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0,
        ],
      },
    ],
    chart: {
      id: 'tw2',
      group: 'social',
      type: 'line',
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
  }
  csvParsering() {
    console.log(`file_content: ${this.dataFromFile}`)
    console.log(`columnСounting: ${csvColumnСounting(this.dataFromFile)}`)
    return testData
  }
}
