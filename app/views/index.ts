const $ = require('jquery')
const ApexCharts = require('apexcharts')
import { MainController } from '../controllers/mainController'
const Sortable = require('sortablejs')
const mainController = new MainController()
const chartsOptions = mainController.render()

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
      for (let i = 0; i < chartsOptions.length; i++) {
        divChartsArea.innerHTML += await chartsOptions[i].chartAreaDiv
      }
      for (let i = 0; i < chartsOptions.length; i++) {
        await new ApexCharts(
          document.getElementById(chartsOptions[i].divId),
          chartsOptions[i].options
        ).render()
      }
    } catch (error) {
      console.log(`new ApexCharts(): ${error}`)
    }
  }
  const el = document.getElementById('charts-area')
  const sortable = Sortable.create(el, { delay: 1000 })
})
