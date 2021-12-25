const ipcChartModelRenderer = require('electron').ipcRenderer
const csvParams = ipcChartModelRenderer.sendSync('get_csv_params')
// const testChart: {} = {
//   series: [
//     {
//       name: 'test chart',
//       data: [
//         30, 40, 35, -50, 49, 60, -70, 91, 125, 30, 40, 35, -50, 49, 60, -70, 91,
//         125, 30, 40, 35, -50, 49, 60, -70, 91, 125, 30, 40, 35, -50, 49, 60,
//         -70, 91, 125,
//       ],
//     },
//   ],
//   chart: {
//     id: 'twt',
//     group: 'social',
//     type: 'line',
//     height: 160,
//   },
//   colors: ['#008F00'],
//   yaxis: {
//     labels: {
//       minWidth: 40,
//     },
//   },
//   title: {
//     text: 'test chart',
//     align: 'left',
//     margin: 10,
//     offsetX: 0,
//     offsetY: 0,
//     floating: false,
//     style: {
//       fontSize: '12px',
//       fontWeight: 'normal',
//       //fontFamily: undefined,
//       color: 'blue',
//     },
//   },
// }

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
  sortedData: any
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
    this.chartData = [] // options.series[0].data
    this.chartId = String(this.currentChartId) // options.chart.id
    this.chartGroup = 'group' // options.chart.group
    this.chartType = 'line' // options.chart.type
    this.chartHeight = 160 // options.chart.heigth
    this.chartColors = '#151515' // options.chart.colors
    this.chartYAxisLabelsMinWidth = 40 // options.yaxis.labels.minWidth
    this.chartYAxisLabelsText = ipcChartModelRenderer.sendSync(
      'i18n',
      'empty_text'
    ) // options.yaxis.labels.text
    this.chartTitleText = 'title text' // options.title.text
    this.chartTitleAlign = 'left' // options.title.align
    this.chartTitleMargin = 10 // options.title.margin
    this.chartTitleOffsetX = 0 // options.title.offsetX
    this.chartTitleOffsetY = 0 // options.title.offsetY
    this.chartTitleFloating = false // options.title.floating
    this.chartTitleStyleFontSize = '14px' // options.title.style.fontSize
    this.chartTitleStyleFontWeight = 'normal' // options.title.style.fontWeigth
    this.chartTitleStyleFontColor = '#151515' // options.title.style.fontColor
  }
  private copyArray(sourceArray: [], targetArray: []) {
    try {
      for (let i = 0; i <= sourceArray.length; i++) {
        targetArray[i] = sourceArray[i]
      }
      return targetArray
    } catch (error) {
      console.log(`chartModel copyArray(): ${error}`)
    }
  }
  private setChartData(options: any) {
    try {
      let sData: any = []
      sData = this.copyArray(this.sortedData, sData)
      const headRows: string = csvParams.head_rows
      options.series[0].data = sData.splice(
        Number(headRows),
        this.sortedData.length - Number(headRows)
      )
      return options
    } catch (error) {
      console.log(`chartModel setChartData(): ${error}`)
    }
  }
  private setHead3Texts(options: any) {
    try {
      options.series[0].name = `${this.sortedData[0]} - ${this.sortedData[1]}`
      options.title.text = `${this.sortedData[0]} - ${this.sortedData[1]} - ${this.sortedData[2]}`
      return options
    } catch (error) {
      console.log(`chartModel setHead3Texts(): ${error}`)
    }
  }
  private setHead2Texts() {
    //
  }
  private setHead1Texts() {
    //
  }
  private setHead0Texts() {
    //
  }
  private setChartTexts(options: any) {
    try {
      const headRows: string = csvParams.head_rows
      switch (headRows) {
        case '3':
          return this.setHead3Texts(options)
        case '2':
          this.setHead2Texts()
          break
        case '1':
          this.setHead1Texts()
          break

        default:
          this.setHead0Texts()
          break
      }
    } catch (error) {
      console.log(`class ChartModel chartTexts(): ${error}`)
    }
  }

  private createDefaultChartOptions() {
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

  private dataCorrector() {
    try {
      let options: any = this.createDefaultChartOptions()
      if (this.sortedData.length == 0) {
        return options
      } else {
        options = this.setChartTexts(options)
        options = this.setChartData(options)
        //return testChart
        return options
      }
    } catch (error) {
      console.log(`ChartCervice dataCorrector(): ${error}`)
    }
  }
  createChartOptions() {
    const chartOptions = this.dataCorrector()
    return chartOptions
    //return testChart
  }
}
