const ipcCsvCCRenderer = require('electron').ipcRenderer

export const csvColumnCounting = (dataFromFile: string) => {
  try {
    const csvParams = ipcCsvCCRenderer.sendSync('get_csv_params')
    if ((csvParams.columns = '0')) {
      let delemiterCount: number = 0
      for (let i = 0; i < dataFromFile.length; i++) {
        if (dataFromFile[i] == csvParams.delemiter) {
          delemiterCount = delemiterCount + 1
        }
        if (dataFromFile[i] == csvParams.end_row) {
          return delemiterCount
        }
      }
    } else {
      return Number(csvParams.columns)
    }
  } catch (error) {
    console.log(`csvColumnCounting(): ${error}`)
    return 0
  }
}
