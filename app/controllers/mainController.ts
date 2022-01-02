import { ChartService } from '../services/chart_service/chartService'
import { SortingService } from '../services/sorting_service/sortingService'
import { ParserService } from '../services/parser_service/parserService'
const ipcMCRenderer = require('electron').ipcRenderer

export class MainController {
  parseredData: [] = []
  getParseredData() {
    return new ParserService().getParseredData()
  }
  sortingData(_parserData: []) {
    return new SortingService(_parserData).sorting(ipcMCRenderer.sendSync('get_sorting'))
  }
  render() {
    this.parseredData = this.getParseredData()
    const sortedData = this.sortingData(this.parseredData)
    const charts = new ChartService(sortedData)
    return charts.getChartsOptions()
  }
}
