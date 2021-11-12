 import { ChartModel } from '../../models/chartModel'

let chartsArray: any = []
let chart: any = {}

export class ChartService {
  parserData: any

  constructor(_parserData: {}) {
    this.parserData = _parserData
  }

  getChartOptions(chartKey: number = 0) {
    return new ChartModel(this.parserData[chartKey]).getOptions()
  }
  async createChartObject(chartOptions: any) {
    chart.divId = await chartOptions.chart.id
    chart.chartAreaDiv = await`<div id="${chartOptions.chart.id}" class="list-group-item"></div>`
    chart.options = await chartOptions
    return await chart
  }
  async createCharts() {
    for (let i = 0; i < this.parserData.length; i++) {
      const options = await this.getChartOptions(i)
      const chartObject = await this.createChartObject(options)
      chartsArray[i] = await chartObject
      chart = await {}
    }
  }
  getCharts() {
    try {
      this.createCharts()
      return chartsArray
    } catch (error) {
      console.log(`getCharts(): ${error}`)
      return []
    }
  }
}
