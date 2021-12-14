import { ChartService } from '../services/chart_service/ChartService'
import { SortingService } from '../services/sorting_service/sortingService'
import { ParserService } from '../services/parser_service/parserService'

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
  {
    series: [
      {
        name: 'sales3',
        data: [-30, -40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    chart: {
      id: 'tw3',
      group: 'social',
      type: 'line',
      height: 160,
    },
    colors: ['#008FFB'],
    yaxis: {
      labels: {
        minWidth: 40,
        text: 'test 3',
      },
    },
    title: {
      text: 'test 3',
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '14px',
        fontWeight: 'normal',
        //fontFamily: undefined,
        color: 'green',
      },
    },
  },
  {
    series: [
      {
        name: 'sales4',
        data: [30, 40, 35, -50, 49, 60, -70, 91, 125],
      },
    ],
    chart: {
      id: 'tw4',
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
      text: 'test 4',
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
        name: 'sales5',
        data: [0, 0, 1, 1, 1, 0, 1, 0, 0],
      },
    ],
    chart: {
      id: 'tw5',
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
      text: 'test 5',
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
  {
    series: [
      {
        name: 'test 6',
        data: [-30, -40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    chart: {
      id: 'tw6',
      group: 'social',
      type: 'line',
      height: 160,
    },
    colors: ['#008FFB'],
    yaxis: {
      labels: {
        minWidth: 40,
        text: 'Lablel 1',
      },
    },
    title: {
      text: 'test 6',
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '14px',
        fontWeight: 'normal',
        //fontFamily: undefined,
        color: 'green',
      },
    },
  },
]

export class MainController {
  // TODO make singleton
  parseredData: {} = []
  parserData(){
    // TODO data source
    return new ParserService(testData).getParserData()
  }
  sortingData(_parserData: {}){
    return new SortingService(_parserData).sorting()
  }
  render() {
    this.parseredData = this.parserData()
    const sortedData = this.sortingData(this.parseredData)
    const charts = new ChartService(sortedData)
    return charts.getCharts()
  }
}
