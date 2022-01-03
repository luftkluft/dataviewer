const ipcCsvGSCRenderer = require('electron').ipcRenderer

export const csvGetStringCell = (
  dataFromFile: string,
  startPosition: number = 0
) => {
  let result: string = ''
  try {
    const csvParams = ipcCsvGSCRenderer.sendSync('get_csv_params')
    for (let i = startPosition; i < dataFromFile.length -1; i++) {
      if (
        dataFromFile[i] == csvParams.end_row ||
        dataFromFile[i] == '\r' ||
        dataFromFile[i] == '\n' // TODO remove end_row sign
      ) {
        continue
      }
      if (dataFromFile[i] == csvParams.delemiter) {
        return result
      } else {
        result = result + dataFromFile[i]
      }
    }
  } catch (error) {
    console.log(`csvGetStringCell(): ${error}`)
    return 'error'
  }
}
