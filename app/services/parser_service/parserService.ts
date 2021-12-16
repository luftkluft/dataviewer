const ipcPServiceRenderer = require('electron').ipcRenderer
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

export class ParserService {
  parseredData: {} = []

  private getDataFromFile() {
    try {
      const result = ipcPServiceRenderer.sendSync('get_file_content')
      console.log(`file_content: ${result}`)
      return result
    } catch (error) {
      console.log(`getDataFromFile(): ${error}`)
      return ''
    }
  }

  private parsering() {
    try {
      const dataFromFile = this.getDataFromFile()
      if (dataFromFile == '' || dataFromFile == undefined) {
        return emptyData
      } else {
        return testData
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
