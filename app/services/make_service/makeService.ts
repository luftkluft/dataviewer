import { makeCSVFileFromLog } from '../../lib/make_func/make_csv/make_csv_file_from_log/makeCSVFileFromLog'

export class MakeService {
  static makeCSVfromLog(logFile: string, variablesListFile: string, csvFileSavePath: string, logParams: any) {
    return makeCSVFileFromLog(logFile, variablesListFile, csvFileSavePath, logParams)
  }
}
