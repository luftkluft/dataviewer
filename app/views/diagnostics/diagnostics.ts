import $ from 'jquery'
const fs = require('fs')
const ipcDiagnRenderer = require('electron').ipcRenderer
const formDiagn: any = document.querySelector('.diagnostics-form')
const patternFileField = formDiagn.querySelector('.choose-pattern-file-field')
patternFileField.value = ipcDiagnRenderer.sendSync('last_opened_pattern_file')
const errorFileField = formDiagn.querySelector('.choose-error-file-field')
errorFileField.value = ipcDiagnRenderer.sendSync('last_opened_error_file')
const vListFileField = formDiagn.querySelector('.choose-variable-list-file-field')
vListFileField.value = ipcDiagnRenderer.sendSync('last_opened_variable_list_file')
const deepField = formDiagn.querySelector('.deep-field')
deepField.value = ipcDiagnRenderer.sendSync('get_deep_test')

const fileStat = (stat: any) => {
  return `birthtime: ${stat.birthtime}\nmtime: ${stat.mtime}\nctime: ${stat.ctime}\nsize: ${stat.size}`
}

const choosePatternFile = () => {
  const path = ipcDiagnRenderer.sendSync('open-pattern-file-dialog')
  const memo: any = document.getElementById('memo')
  if (path == 'no_file_selected') {
    memo.value = ipcDiagnRenderer.sendSync('i18n', path)
  } else {
    patternFileField.value = path
    fs.stat(path, function (err: any, stat: any) {
      if (err) {
        memo.value = err
      } else {
        memo.value = fileStat(stat)
        setMakeDiagnosticsButtonStatus()
      }
    })
  }
}

const chooseErrorFile = () => {
  const path = ipcDiagnRenderer.sendSync('open-error-file-dialog')
  const memo: any = document.getElementById('memo')
  if (path == 'no_file_selected') {
    memo.value = ipcDiagnRenderer.sendSync('i18n', path)
  } else {
    errorFileField.value = path
    fs.stat(path, function (err: any, stat: any) {
      if (err) {
        memo.value = err
      } else {
        memo.value = fileStat(stat)
        setMakeDiagnosticsButtonStatus()
      }
    })
  }
}

const chooseVariableListFile = () => {
  const path = ipcDiagnRenderer.sendSync('open-variable-list-file-dialog')
  const memo: any = document.getElementById('memo')
  if (path == 'no_file_selected') {
    memo.value = ipcDiagnRenderer.sendSync('i18n', path)
  } else {
    vListFileField.value = path
    fs.stat(path, function (err: any, stat: any) {
      if (err) {
        memo.value = err
      } else {
        memo.value = fileStat(stat)
        setMakeDiagnosticsButtonStatus()
      }
    })
  }
}

formDiagn.addEventListener('submit', function (event: any) {
  event.preventDefault()
  const memo: any = document.getElementById('memo')
  setDeepConfig()
  memo.value = runTesting()
})

const setMakeDiagnosticsButtonStatus = () => {
  const makeDiagnosticButton: any = document.querySelector('.make-diagnostics-btn')
  if (patternFileField.value == undefined || patternFileField.value.length == 0
    || errorFileField.value == undefined || errorFileField.value.length == 0
    || vListFileField.value == undefined || vListFileField.value.length == 0
    || deepField.value == undefined || deepField.value <= 0) {
    makeDiagnosticButton.disabled = true
  } else {
    makeDiagnosticButton.disabled = false
  }
}

const changeDeep = () => {
  setDeepConfig()
  setMakeDiagnosticsButtonStatus()
}

const setDeepConfig = () => {
  ipcDiagnRenderer.send('set_deep_test', deepField.value)
}

const runTesting = () => {
  return ipcDiagnRenderer.sendSync('run_test')
}

$(document).ready(() => {
  setMakeDiagnosticsButtonStatus()
})
