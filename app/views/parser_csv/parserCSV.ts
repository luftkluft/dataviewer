const ipcCsvRenderer = require('electron').ipcRenderer
const formCsv: any = document.querySelector('.parser-form')

const csvParams = ipcCsvRenderer.sendSync('get_csv_params')

const headRowsField = formCsv.querySelector('.head-rows-field')
headRowsField.value = csvParams.head_rows

const firstColumnName = formCsv.querySelector('.first-column-name-field')
firstColumnName.value = csvParams.first_column_name

const endRowField = formCsv.querySelector('.end-row-field')
switch (csvParams.end_row) {
  case '\n':
    endRowField.value = '\\n'
    break
  case '\r':
    endRowField.value = '\\r'
    break
  default:
    endRowField.value = csvParams.end_row
    break
}

const delemiter = formCsv.querySelector('.delemiter-field')
delemiter.value = csvParams.delemiter

const rows = formCsv.querySelector('.rows-field')
rows.value = csvParams.rows

const columns = formCsv.querySelector('.columns-field')
columns.value = csvParams.columns

const setCsvParams = () => {
  csvParams.head_rows = headRowsField.value
  csvParams.first_column_name = firstColumnName.value
  switch (endRowField.value) {
    case '\\n':
      csvParams.end_row = '\n'
      break
    case '\\r':
      csvParams.end_row = '\r'
      break

    default:
      csvParams.end_row = endRowField.value
      break
  }

  csvParams.delemiter = delemiter.value
  csvParams.rows = rows.value
  csvParams.columns = columns.value
  ipcCsvRenderer.sendSync('set_csv_params', csvParams)
}

formCsv.addEventListener('submit', function (event: any) {
  event.preventDefault()
  setCsvParams()
})
