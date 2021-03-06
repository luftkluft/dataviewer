let fs = require('fs')
const { dialog } = require('electron')
import { makeHeaderTable } from '../../make_csv/make_header_table/makeHeaderTable'
import { makeBodyTable } from '../../make_csv/make_body_table/makeBodyTable'

const createFileName = () => {
  let current = new Date()
  let datePart = (new Date().toString()).split(/\.|\s|:/)
  let fileName: string = ''
  fileName = `${datePart[3]}-${datePart[1]}-${datePart[2]}-${datePart[4]}-${datePart[5]}.csv`
  return fileName
}

export function makeCSVFileFromLog(logFile: string, variablesListFile: string, csvFileSavePath: string, logParams: any) {
  try {
    let sData: string = ''
    let fileName: string = createFileName()
    let savePath: string = csvFileSavePath
    let file: string = savePath + fileName
    let options = {
      title: `Cоздание файла ${fileName}`,
      defaultPath: `${file}`,
      //buttonLabel: `Создать`,
      filters: [
        { name: 'CSV', extensions: ['csv'] },
      ]
    }
    sData += makeHeaderTable(variablesListFile, logParams.delemiter)
    sData += makeBodyTable(logFile, variablesListFile, logParams.delemiter)

    dialog.showSaveDialog(null, options).then((result: any) => {
      // console.log('Second Response: ', result)
      if (result.filePath && !result.canceled) {
        //const data = new Uint8Array(Buffer.from('Hello Node.js'))
        fs.writeFile(result.filePath, sData, (error: any) => {
          if (error) {
            return error
          }
        })
        dialog.showMessageBoxSync(null, {
          type: 'info',
          buttons: ['Ok'],
          title: 'Создание csv файла',
          message: `Файл ${result.filePath} создан.`
        })
      }
    }).catch((...args: any) => {
      // console.warn('failed/rejected with', args)
      return args
    })
    return ''
  } catch (error) {
    return error
  }
}
