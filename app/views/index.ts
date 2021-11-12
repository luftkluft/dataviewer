const $ = require('jquery')
const ApexCharts = require('apexcharts')
import { MainController } from '../controllers/mainController'
const charts = MainController.render()

$(document).ready(async () => {
  const divChartsArea: any = document.createElement('div')
  divChartsArea.id = 'charts-area'
  // divChartsArea.style.width = '100px'
  // divChartsArea.style.height = '100px'
  // divChartsArea.style.background = 'red'
  // divChartsArea.style.color = 'white'
  const rootArea = document.getElementById('root')

  if (rootArea === null) {
    console.log(`rootArea is null!`)
  } else {
    rootArea.appendChild(divChartsArea)
    try {
      for (let i = 0; i < charts.length; i++) {
        divChartsArea.innerHTML += await charts[i].chartAreaDiv
      }
      for (let i = 0; i < charts.length; i++) {
        await new ApexCharts(
          document.getElementById(charts[i].divId),
          charts[i].options
        ).render()
      }
    } catch (error) {
      console.log(`new ApexCharts(): ${error}`)
    }
  }
})
