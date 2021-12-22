import { csvGetColumns } from '../../lib/csv/csv_get_columns/csvGetColumns'

export class CsvParserService {
  dataFromFile: any
  csvParams: any
  constructor(_dataFromFile: any) {
    this.dataFromFile = _dataFromFile
  }
  csvParsering() {
    const result = csvGetColumns(this.dataFromFile)
    return result
  }
}
