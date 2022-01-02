import $ from 'jquery'
const ipcSManualRenderer = require('electron').ipcRenderer
const csvParams = ipcSManualRenderer.sendSync('get_csv_params')
const testSortedData: Array<(string)[]> = [
  ["Адрес", "Имя", "Комментарий", "0", "0", "0", "0", "0"],
  ["A1", "N1", "K1", "1", "1", "1", "1", "1"],
  ["A2", "N2", "K2", "2", "2", "2", "2", "2"],
  ["A3", "N3", "K3", "3", "3", "3", "3", "3"]
]

const ipcSortingRenderer = require('electron').ipcRenderer
const setSortingParamsButton: any = document.querySelector('.set-sorting-params-btn')

const getSortParamsFromView = () => {
  // TODO
  return ["0", "1", "2", "3"]
}

const setSortParamsViewArray = async () => {
  const viewArray: (string)[] = getSortParamsFromView()
  await ipcSManualRenderer.send('set_sort_params_view_array', viewArray)
  await ipcSManualRenderer.send('update_app')
}

setSortingParamsButton.addEventListener('click', function (event: any) {
  event.preventDefault()
  console.log(`etSortingParamsButton click`)
  setSortParamsViewArray()
})

const tableConstructor = () => {
  const headSize = csvParams.head_rows
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
    for (let i = 0; i < testSortedData.length; i++) {
      for (let j = 0; j < testSortedData[i].length; j++) {
        if (i == 0) {
          if (j < headSize) {
            if (j == 0) {
              bodyTableHead = `<th scope="col">#</th>`
            }
            bodyTableHead = bodyTableHead + `<th scope="col">${testSortedData[i][j]}</th>`
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
            tempTableBody = tempTableBody + `<td>${testSortedData[i][j]}</td>`
            if (j == headSize - 1) {
              tempTableBody = tempTableBody + `<td><input type="checkbox" id="${rowNumber}"></td></tr>`
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
