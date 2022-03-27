import $ from 'jquery'
const fs = require('fs')
const ipcLogRenderer = require('electron').ipcRenderer
const formLog: any = document.querySelector('.parser-form')
const logFileField = formLog.querySelector('.choose-log-file-field')
logFileField.value = ipcLogRenderer.sendSync('last_opened_log_file')
const vListFileField = formLog.querySelector('.choose-variable-list-file-field')
vListFileField.value = ipcLogRenderer.sendSync('last_opened_variable_list_file')
const csvFilePathField = formLog.querySelector('.csv-file-path-field')
csvFilePathField.value = ipcLogRenderer.sendSync('last_csv_file_path')

const fileStat = (stat: any) => {
  return `birthtime: ${stat.birthtime}\nmtime: ${stat.mtime}\nctime: ${stat.ctime}\nsize: ${stat.size}`
}

const logParams = ipcLogRenderer.sendSync('get_log_params')
const endRowField = formLog.querySelector('.end-row-field')

switch (logParams.end_row) {
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

const delemiter = formLog.querySelector('.delemiter-field')
delemiter.value = logParams.delemiter

const rows = formLog.querySelector('.rows-field')
rows.value = logParams.rows

const columns = formLog.querySelector('.columns-field')
columns.value = logParams.columns

const setLogParams = () => {
  switch (endRowField.value) {
    case '\\n':
      logParams.end_row = '\n'
      break
    case '\\r':
      logParams.end_row = '\r'
      break

    default:
      logParams.end_row = endRowField.value
      break
  }

  logParams.delemiter = delemiter.value
  logParams.rows = rows.value
  logParams.columns = columns.value
  ipcLogRenderer.send('set_log_params', logParams)
}

const chooseLogFile = () => {
  const path = ipcLogRenderer.sendSync('open-log-file-dialog')
  const memo: any = document.getElementById('memo')
  if (path == 'no_file_selected') {
    memo.value = ipcLogRenderer.sendSync('i18n', path)
  } else {
    logFileField.value = path
    fs.stat(path, function (err: any, stat: any) {
      if (err) {
        memo.value = err
      } else {
        memo.value = fileStat(stat)
        setMakeCsvButtonStatus()
      }
    })
  }
}

const chooseVariableListFile = () => {
  const path = ipcLogRenderer.sendSync('open-variable-list-file-dialog')
  const memo: any = document.getElementById('memo')
  if (path == 'no_file_selected') {
    memo.value = ipcLogRenderer.sendSync('i18n', path)
  } else {
    vListFileField.value = path
    fs.stat(path, function (err: any, stat: any) {
      if (err) {
        memo.value = err
      } else {
        memo.value = fileStat(stat)
        setMakeCsvButtonStatus()
      }
    })
  }
}

const chooseCsvFilePath = () => {
  const path = ipcLogRenderer.sendSync('open-csv-file-path-dialog')
  const memo: any = document.getElementById('memo')
  if (path == 'no_file_selected') {
    memo.value = ipcLogRenderer.sendSync('i18n', path)
  } else {
    csvFilePathField.value = path
    fs.stat(path, function (err: any, stat: any) {
      if (err) {
        memo.value = err
      } else {
        memo.value = fileStat(stat)
        setMakeCsvButtonStatus()
      }
    })
  }
}

const setMakeCsvButtonStatus = () => {
  const makeCsvButton: any = document.querySelector('.make-csv-file-btn')
  if (logFileField.value == undefined || logFileField.value.length == 0
    || vListFileField.value == undefined || vListFileField.value.length == 0
    || csvFilePathField.value == undefined || csvFilePathField.value.length == 0) {
    makeCsvButton.disabled = true
  } else {
    makeCsvButton.disabled = false
  }
}

$(document).ready(() => {
  setMakeCsvButtonStatus()
})

formLog.addEventListener('submit', function (event: any) {
  event.preventDefault()
  setLogParams()
  const memo: any = document.getElementById('memo')
  memo.value = makeCSVfromLog()
})

const makeCSVfromLog = () => {
  return ipcLogRenderer.sendSync('make_csv_from_log')
}
