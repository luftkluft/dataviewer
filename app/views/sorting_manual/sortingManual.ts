import $ from 'jquery'
import {ParserService} from '../../services/parser_service/parserService'
const ipcSManualRenderer = require('electron').ipcRenderer
const csvParams = ipcSManualRenderer.sendSync('get_csv_params')
const ipcSortingRenderer = require('electron').ipcRenderer
const setSortingParamsButton: any = document.querySelector('.set-sorting-params-btn')

const getSortParamsFromView = () => {
  let viewArray: (string)[] = []
  try {
    const table: any = document.querySelector('.table')
    const markedCheckbox: any = document.getElementsByName('ibox')
    for (let checkbox of markedCheckbox) {
      if (checkbox.checked) {
        viewArray.push(String(checkbox.id))
      }
    }
    if (viewArray.length > 0){
      viewArray.unshift('0')
    }
  } catch (error) {
    console.log(`getSortParamsFromView(): ${error}`)
  }
  return viewArray
}

const setSortParamsViewArray = async () => {
  const viewArray: (string)[] = getSortParamsFromView()
  await ipcSManualRenderer.send('set_sort_params_view_array', viewArray)
  await ipcSManualRenderer.send('update_app')
}

setSortingParamsButton.addEventListener('click', function (event: any) {
  event.preventDefault()
  setSortParamsViewArray()
})

const getTableData = () =>{
  try {
    const parseredData = new ParserService().getParseredData()
    return parseredData
  } catch (error) {
    console.log(`getTableData(): ${error}`)
  }
}

const tableConstructor = () => {
  const tableData = getTableData()
  const headSize = csvParams.head_rows
  if (tableData == undefined || tableData.length == 0){
    return `<h1>${ipcSManualRenderer.sendSync('i18n', 'nothing_to_sort')}</h1>`
  }
  try {
    let sortingTable: string = ``
    const beginTableHead: string = `<table class="table table-striped">\n<thead>\n<tr>`
    let bodyTableHead: string = ``
    const endTableHead: string = `</tr>\n</thead>`
    const beginTableBody: string = `<tbody>`
    let bodyTableBody: string = ``
    let tempTableBody: string = ``
    const endTableBody = `</tbody>\n</table>`
    let rowNumber: number = 0
    for (let i = 0; i < tableData.length; i++) {
      for (let j = 0; j < tableData[i].length; j++) {
        if (i == 0) {
          if (j < headSize) {
            if (j == 0) {
              bodyTableHead = `<th scope="col">#</th>`
            }
            bodyTableHead = bodyTableHead + `<th scope="col">${tableData[i][j]}</th>`
            if (j == headSize - 1) {
              bodyTableHead = bodyTableHead + `<th scope="col">${ipcSManualRenderer.sendSync('i18n', 'show')}</th>`
            }
          }
        } else {
          if (j < headSize) {
            if (j == 0) {
              rowNumber = rowNumber + 1
              tempTableBody = `<tr><td>${rowNumber}</td>`
            }
            tempTableBody = tempTableBody + `<td>${tableData[i][j]}</td>`
            if (j == headSize - 1) {
              tempTableBody = tempTableBody + `<td><input type="checkbox" id="${rowNumber}" name="ibox"></td></tr>`
              bodyTableBody = bodyTableBody + tempTableBody
              tempTableBody = ``
            }
          }
        }
      }
    }
    sortingTable = beginTableHead + bodyTableHead + endTableHead + beginTableBody + bodyTableBody + endTableBody
    return sortingTable
  } catch (error) {
    console.log(`tableConstructor(): ${error}`)
    return `<h1>Sorting Table Error</h1>`
  }
}

$(document).ready(() => {
  const divTableArea: any = document.createElement('div')
  divTableArea.id = 'table-area'
  const rootTable = document.getElementById('root')
  if (rootTable === null) {
    console.log(`rootArea is null!`)
  } else {
    rootTable.appendChild(divTableArea)
    try {
      divTableArea.innerHTML = tableConstructor()
    } catch (error) {
      console.log(`Sorting table: ${error}`)
    }
  }
})
