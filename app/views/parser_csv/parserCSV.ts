const ipcCsvRenderer = require('electron').ipcRenderer
const formCsv: any = document.querySelector('.parser-form')
const fileCsvField = formCsv.querySelector('.target-file-name-field')
fileCsvField.value = ipcCsvRenderer.sendSync('target_file_name')
formCsv.addEventListener('submit', function (event: any) {
  event.preventDefault()
  console.log(`csv click`)
})
