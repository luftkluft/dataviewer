import { ChartModel } from '../../models/chartModel'

const chart = new ChartModel('Test Chart Name')

export class ChartService {
  charts: any
  constructor(_charts: any) {
    this.charts = _charts
  }
  static render() {
    return `<h1>Hello ${chart.chartName}</h1>`
  }
}
