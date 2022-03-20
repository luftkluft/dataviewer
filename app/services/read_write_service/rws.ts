import { getLineCountFromFile } from '../../lib/read_func/getLineCountFromFile/getLineCountFromFile'
import { getLastLinesFromFile } from '../../lib/read_func/getLastLinesFromFile/getLastLinesFromFile'
import { getLineByNumberFromFile } from '../../lib/read_func/getLineByNumberFromFile/getLineByNumberFromFile'
import { readDataLineFromLog } from '../../lib/read_func/readDataLineFromLog/readDataLineFromLog'

export class RWS {
  static getLineCountFromFile(sFilePath: string, sFileName: string) {
    return getLineCountFromFile(sFilePath, sFileName)
  }
  static getLastLinesFromFile(sFilePath: string, sFileName: string, lastLineNumber: number = 0) {
    return getLastLinesFromFile(sFilePath, sFileName, lastLineNumber)
  }
  static getLineByNumberFromFile(sFilePath: string, sFileName: string, lineNumber: number = 1) {
    return getLineByNumberFromFile(sFilePath, sFileName, lineNumber)
  }
  static readDataLineFromLog(sLogLine: string = '') {
    return readDataLineFromLog(sLogLine)
  }
}
