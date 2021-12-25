import { ChartModel } from '../../models/chartModel'

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
    try {
      const charts: {}[] = []
      if (sortedData.length == 0) {
        const options = this.getChartOptions(sortedData, 0)
        const chartObject = this.createChartObject(options)
        charts.push(chartObject)
        return charts
      } else {
        //// for (let i = 0; i < sortedData.length; i++) {
        for (let i = 0; i < 5; i++) {
          const options = this.getChartOptions(sortedData[i], i)
          const chartObject = this.createChartObject(options)
          charts.push(chartObject)
        }
        return charts
      }
    } catch (error) {
      console.log(`ChartService createChartsOptions: ${error}`)
    }
  }
  getChartsOptions() {
    try {
      const chartsOptions: any = this.createChartsOptions(this.sortedData)
      return chartsOptions
    } catch (error) {
      console.log(`getChartsOptions(): ${error}`)
      return []
    }
  }
}
