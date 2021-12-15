const fs = require('fs')
const { ipcRenderer } = require('electron')
const form: any = document.querySelector('.form')
const fileField = form.querySelector('.file-field')
fileField.value = ipcRenderer.sendSync('last_opened_file')

const fileContent = (_fileName: any) => {
  let fileContent: any = ''
  try {
    fileContent = fs.readFileSync(_fileName, 'utf8')
  } catch (error) {
    fileContent = error
  }
  return fileContent
}
const setGlobalFileContent = () => {
  ipcRenderer.send('set_global_file_content', fileContent(fileField.value))
}
form.addEventListener('submit', function (event: any) {
  event.preventDefault()
  const memo: any = document.getElementById('memo')
  memo.value = fileContent(fileField.value)
  setGlobalFileContent()
  ipcRenderer.send('open-file')
})
const chooseFile = () => {
  const path = ipcRenderer.sendSync('open-file-dialog')
  if (path == 'no_file_selected') {
    const memo: any = document.getElementById('memo')
    memo.value = ipcRenderer.sendSync('i18n', path)
  } else {
    fileField.value = path
  }
}
