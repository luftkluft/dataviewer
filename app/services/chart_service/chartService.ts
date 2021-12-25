import { ChartModel } from '../../models/chartModel'

// TODO
// console.log(`[0][0]: ${result[0][0]}`)
// console.log(`[1][0]: ${result[1][0]}`)
// console.log(`[1][2]: ${result[1][2]}`)
// result[0][0]: Адрес
// result[1][0]: A0.0
// result[1][2]: nasos 2 na linii 250 bar

export class ChartService {
  sortedData: [] = []

  constructor(_sortedData: []) {
    this.sortedData = _sortedData
  }

  private getChartOptions = (chartArray: [], chartId: number) => {
    const chart: any = new ChartModel(chartArray, chartId).createChartOptions()
    return chart
  }

  createChartObject(options: any) {
    try {
      let chartObject: { divId: string; chartAreaDiv: string; options: {} } = {
        divId: options.chart.id,
        chartAreaDiv: `<div id="${options.chart.id}" class="list-group-item"></div>`,
        options: options,
      }
      return chartObject
    } catch (error) {
      console.log(`createChartObject(): ${error}`)
      return {}
    }
  }

  private createChartsOptions = (sortedData: []) => {
    const charts: {}[] = []
    for (let i = 0; i < sortedData.length; i++) {
      const options = this.getChartOptions(sortedData[i], i)
      const chartObject = this.createChartObject(options)
      charts.push(chartObject)
      return charts
    }
  }
  getChartsOptions() {
    try {
      const chartsOptions: any = this.createChartsOptions(this.sortedData)
      console.log(`ChartServ getChartsOptions():`)
      console.dir(chartsOptions)
      return chartsOptions
    } catch (error) {
      console.log(`getChartsOptions(): ${error}`)
      return []
    }
  }
}
