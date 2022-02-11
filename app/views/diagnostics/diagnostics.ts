import $ from 'jquery'
const fs = require('fs')
const ipcDiagnRenderer = require('electron').ipcRenderer
const formDiagn: any = document.querySelector('.diagnostics-form')
const patternFileField = formDiagn.querySelector('.choose-pattern-file-field')
patternFileField.value = ipcDiagnRenderer.sendSync('last_opened_pattern_file')
const errorFileField = formDiagn.querySelector('.choose-error-file-field')
errorFileField.value = ipcDiagnRenderer.sendSync('last_opened_error_file')

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

formDiagn.addEventListener('submit', function (event: any) {
  event.preventDefault()
  const memo: any = document.getElementById('memo')
  memo.value = `click submit`
})

const setMakeDiagnosticsButtonStatus = () => {
  const makeDiagnosticButton: any = document.querySelector('.make-diagnostics-btn')
  if (patternFileField.value == undefined || patternFileField.value.length == 0
    || errorFileField.value == undefined || errorFileField.value.length == 0) {
    makeDiagnosticButton.disabled = true
  } else {
    makeDiagnosticButton.disabled = false
  }
}

$(document).ready(() => {
  setMakeDiagnosticsButtonStatus()
})
