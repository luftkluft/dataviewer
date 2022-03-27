import { makeCSVFileFromLog } from '../../lib/make_func/make_csv/make_csv_file_from_log/makeCSVFileFromLog'
import { logToHash } from '../../lib/make_func/make_hash/log_to_hash/logToHash'

export class MakeService {
  static makeCSVfromLog(logFile: string, variablesListFile: string, csvFileSavePath: string, logParams: any) {
    return makeCSVFileFromLog(logFile, variablesListFile, csvFileSavePath, logParams)
  }
  static logToHash(logFile: string, variablesListFile: string, csvFileSavePath: string, logParams: any, deep: number) {
    return logToHash(logFile, variablesListFile, csvFileSavePath, logParams, deep)
  }
}
