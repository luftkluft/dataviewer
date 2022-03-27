let fs = require('fs')

const { dialog } = require('electron')

const createFileName = () => {
  let current = new Date()
  let datePart = (new Date().toString()).split(/\.|\s|:/)
  let fileName: string = ''
  fileName = `${datePart[3]}-${datePart[1]}-${datePart[2]}-${datePart[4]}-${datePart[5]}.csv`
  return fileName
}

export function makeCSVFileFromLog(logFile: string, variablesListFile: string, csvFileSavePath: string, logParams: any) {
  try {
    let sData: string = 'test string'
    let sResult: string = 'test result'
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

    dialog.showSaveDialog(null, options).then((result: any) => {
      // console.log('Second Response: ', result)
      if (result.filePath && !result.canceled) {
        //const data = new Uint8Array(Buffer.from('Hello Node.js'))
        fs.writeFile(result.filePath, sData, (error: any) => {
          if (error) {
            return error
          }
        })
      }
    }).catch((...args: any) => {
      // console.warn('failed/rejected with', args)
      return args
    })
    return sResult
  } catch (error) {
    return error
  }
}
