const $ = require('jquery')
import { MainController } from '../controllers/mainController'
const html = MainController.render()

$(document).ready(() => {
  const divChartsArea: any = document.createElement('div')
  divChartsArea.id = 'charts-area'
  // divChartsArea.style.width = '100px'
  // divChartsArea.style.height = '100px'
  // divChartsArea.style.background = 'red'
  // divChartsArea.style.color = 'white'
  divChartsArea.innerHTML = html

  const rootArea = document.getElementById('root')

  if (rootArea === null) {
    console.log(`rootArea is null!`)
  } else {
    rootArea.appendChild(divChartsArea)
  }
})
