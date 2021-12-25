const ipcChartModelRenderer = require('electron').ipcRenderer
const csvParams = ipcChartModelRenderer.sendSync('get_csv_params')
const testChart: {} = 
  {
    series: [
      {
        name: 'test chart',
        data: [
          30, 40, 35, -50, 49, 60, -70, 91, 125, 30, 40, 35, -50, 49, 60, -70,
          91, 125, 30, 40, 35, -50, 49, 60, -70, 91, 125, 30, 40, 35, -50, 49,
          60, -70, 91, 125,
        ],
      },
    ],
    chart: {
      id: 'twt',
      group: 'social',
      type: 'line',
      height: 160,
    },
    colors: ['#008F00'],
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    title: {
      text: 'test chart',
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
  }

export class ChartModel {
  chartName: string
  chartData: number[]
  chartId: string
  chartGroup: string
  chartType: string
  chartHeight: number
  chartColors: string
  chartYAxisLabelsMinWidth: number
  chartYAxisLabelsText: string
  chartTitleText: string
  chartTitleAlign: string
  chartTitleMargin: number
  chartTitleOffsetX: number
  chartTitleOffsetY: number
  chartTitleFloating: boolean
  chartTitleStyleFontSize: string
  chartTitleStyleFontWeight: string
  // chartTitleStyleFontFamily: xxx
  chartTitleStyleFontColor: string
  chartOptions: any
  sortedData: []
  currentChartId: number

  constructor(_sortedData: [], _currentChartId: number) {
    try {
      this.sortedData = _sortedData
      this.currentChartId = _currentChartId
      this.setDefaultOptions()
    } catch (error) {
      console.log(`class ChartModel constructor: ${error}`)
    }
    
  }

  private setDefaultOptions() {
    this.chartName = 'chart name' // options.series[0].name
    this.chartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // options.series[0].data
    this.chartId = String(this.currentChartId) // options.chart.id
    this.chartGroup = 'group' // options.chart.group
    this.chartType = 'line' // options.chart.type
    this.chartHeight = 160 // options.chart.heigth
    this.chartColors = '#008F00' // options.chart.colors
    this.chartYAxisLabelsMinWidth = 40 // options.yaxis.labels.minWidth
    this.chartYAxisLabelsText = 'yaxis text' // options.yaxis.labels.text
    this.chartTitleText = 'title text' // options.title.text
    this.chartTitleAlign = 'left' // options.title.align
    this.chartTitleMargin = 10 // options.title.margin
    this.chartTitleOffsetX = 0 // options.title.offsetX
    this.chartTitleOffsetY = 0 // options.title.offsetY
    this.chartTitleFloating = false // options.title.floating
    this.chartTitleStyleFontSize = '14px' // options.title.style.fontSize
    this.chartTitleStyleFontWeight = 'normal' // options.title.style.fontWeigth
    this.chartTitleStyleFontColor = '#008F00' // options.title.style.fontColor
  }
  private head3Texts() {
    //
  }
  private head2Texts() {
    //
  }
  private head1Texts() {
    //
  }
  private head0Texts() {
    //
  }
  private chartTexts() {
    try {
      const headRows: string = csvParams.head_rows
      switch (headRows) {
        case '3':
          this.head3Texts()
          break
        case '2':
          this.head2Texts()
          break
        case '1':
          this.head1Texts()
          break

        default:
          this.head0Texts()
          break
      }
    } catch (error) {
      console.log(`class ChartModel chartTexts(): ${error}`)
    }

  }

  private createDefaultChartOptions() {
    // this.setDefaultOptions()
    const defaultOptions: {} = {
      series: [
        {
          name: this.chartName,
          data: this.chartData,
        },
      ],
      chart: {
        id: this.chartId,
        group: this.chartGroup,
        type: this.chartType,
        height: this.chartHeight,
      },
      colors: [this.chartColors],
      yaxis: {
        labels: {
          minWidth: this.chartYAxisLabelsMinWidth,
        },
      },
      title: {
        text: this.chartYAxisLabelsText,
        align: this.chartTitleAlign,
        margin: this.chartTitleMargin,
        offsetX: this.chartTitleOffsetX,
        offsetY: this.chartTitleOffsetY,
        floating: this.chartTitleFloating,
        style: {
          fontSize: this.chartTitleStyleFontSize,
          fontWeight: this.chartTitleStyleFontWeight,
          //fontFamily: undefined,
          color: this.chartTitleStyleFontColor,
        },
      },
    }
    return defaultOptions
  }

  private dataCorrector(){
    let options = this.createDefaultChartOptions()
    // TODO
    return options
  }
  createChartOptions() {
    const chart = this.dataCorrector()
    console.log(`createChart():`)
    console.dir(chart)
    return chart
    //return testChart
  }
}