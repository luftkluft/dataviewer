const fs = require('fs')
const { ipcRenderer } = require('electron')
const form: any = document.querySelector('.form')
const fileField = form.querySelector('.file-field')
fileField.value = ipcRenderer.sendSync('target_path_file')

const fileContent = (_fileName: string) => {
  let fileContent: string = ''
  try {
    fileContent = fs.readFileSync(_fileName, 'utf8')
  } catch (error) {
    fileContent = error
  }
  return fileContent
}
form.addEventListener('submit', function (event: any) {
  event.preventDefault()
  //const formData: {} = { file: fileField.value }
  const memo: any = document.getElementById('memo')
  memo.value = fileContent(fileField.value)
})
const chooseFile = () => {
  console.log(`chooseFile`)
}
