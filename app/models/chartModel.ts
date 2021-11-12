export class ChartModel {
  // chartName: string
  // chartData: number[]
  // chartId: string
  // chartGroup: string
  // chartType: string
  // chartHeight: number
  // chartColors: string
  // chartYAxisLabelsMinWidth: number
  // chartYAxisLabelsText: string
  // chartTitleText: string
  // chartTitleAlign: string
  // chartTitleMargin: number
  // chartTitleOffsetX: number
  // chartTitleOffsetY: number
  // chartTitleFloating: boolean
  // chartTitleStyleFontSize: string
  // chartTitleStyleFontWeight: string
  // // chartTitleStyleFontFamily: xxx
  // chartTitleStyleFontColor: string
  chartOptions: any

  constructor(options: any) {
    // this.chartName = options.series[0].name
    // this.chartData = options.series[0].data
    // this.chartId = options.chart.id
    // this.chartGroup = options.chart.group
    // this.chartType = options.chart.type
    // this.chartHeight = options.chart.heigth
    // this.chartColors = options.chart.colors
    // this.chartYAxisLabelsMinWidth = options.yaxis.labels.minWidth
    // this.chartYAxisLabelsText = options.yaxis.labels.text
    // this.chartTitleText = options.title.text
    // this.chartTitleAlign = options.title.align
    // this.chartTitleMargin = options.title.margin
    // this.chartTitleOffsetX = options.title.offsetX
    // this.chartTitleOffsetY = options.title.offsetY
    // this.chartTitleFloating = options.title.floating
    // this.chartTitleStyleFontSize = options.title.style.fontSize
    // this.chartTitleStyleFontWeight = options.title.style.fontWeigth
    // this.chartTitleStyleFontColor = options.title.style.fontColor
    this.chartOptions = options
  }
  private dataCorrector(options: any){
    // TODO
    return options
  }
  getOptions(){
    return this.dataCorrector(this.chartOptions)
  }
}