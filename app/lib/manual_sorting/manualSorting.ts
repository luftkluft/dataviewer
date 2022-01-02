const ipcMSortingRenderer = require('electron').ipcRenderer

export function manualSorting(parseredData: Array<(string)[]>) {
  try {
    const viewArray = ipcMSortingRenderer.sendSync('get_sort_params_view_array')
    if (viewArray == undefined || viewArray.length == 0 || viewArray.length == 0) {
      return []
    }
    let sortedData: any = []
    for (let i = 0; i < parseredData.length; i++) {
      if (viewArray.includes(String(i))) {
        sortedData.push(parseredData[i])
      }
    }
    return sortedData
  } catch (error) {
    console.log(`manualSorting(): ${error}`)
    return []
  }
}
