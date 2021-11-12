import { ChartService } from '../services/chart_service/ChartService'
import { SortingService } from '../services/sorting_service/sortingService'
import { ParserService } from '../services/parser_service/parserService'

const testData: {} = [
  {
    series: [
      {
        name: 'sales3',
        data: [30, 40, 35, -50, 49, 60, -70, 91, 125],
      },
    ],
    chart: {
      id: 'tw3',
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
      text: 'undefined undefined undefined undefined',
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
        name: 'sales4',
        data: [0, 0, 1, 1, 1, 0, 1, 0, 0],
      },
    ],
    chart: {
      id: 'tw4',
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
      text: 'undefined undefined undefined undefined',
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
        name: 'Chart Name',
        data: [-30, -40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    chart: {
      id: 'tw5',
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
      text: 'text title',
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
