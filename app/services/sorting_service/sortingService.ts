import { noSorting } from '../../lib/no_sorting/noSorting'
import { manualSorting } from '../../lib/manual_sorting/manualSorting'

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
    colors: ['#008FFB'],
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
    colors: ['#5FFFFB'],
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

export class SortingService {
  parseredData: {} = []

  constructor(_parseredData: {}){
    this.parseredData = _parseredData
  }
  noSortingData(parseredData: any) {
    // TODO
    // return noSorting(this.parseredData)
    // result[0][0]: Адрес
    // result[1][0]: A0.0
    // result[1][2]: nasos 2 na linii 250 bar
    // console.log(`[0][0]: ${result[0][0]}`)
    // console.log(`[1][0]: ${result[1][0]}`)
    // console.log(`[1][2]: ${result[1][2]}`)
    console.log(`parseredData no sorting:`)
    console.dir(parseredData)
    return testData
  }
  manualSortingData() {
    // TODO
    return manualSorting(this.parseredData)
  }
  sorting(sortAs: string = 'no_sorting'){
    switch (sortAs) {
      case 'no_sorting':
        return this.noSortingData(this.parseredData)
        break
      case 'manual_sorting':
        return this.manualSortingData()
        break
      default:
        return this.noSortingData(this.parseredData)
        break
    }
  }
}
