import { getLineCountFromFile } from '../../lib/read_func/getLineCountFromFile/getLineCountFromFile'
import { getLastLinesFromFile } from '../../lib/read_func/getLastLinesFromFile/getLastLinesFromFile'
import { getLineByNumberFromFile } from '../../lib/read_func/getLineByNumberFromFile/getLineByNumberFromFile'
import { readDataLineFromLog } from '../../lib/read_func/readDataLineFromLog/readDataLineFromLog'
import { readLinesArray } from '../../lib/read_func/readLines/readLines'
import { readTimeFromLog } from '../../lib/read_func/readTimeFromLog/readTimeFromLog'
import { writeErrorToMemoryData } from '../../lib/read_func/writeErrorToMemoryData/writeErrorToMemoryData'

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
  static readLinesArray(sFilePath: string, sFileName: string) {
    return readLinesArray(sFilePath, sFileName)
  }
  static readTimeFromLog(sLogLine: string = '') {
    return readTimeFromLog(sLogLine)
  }
  static writeErrorToMemoryData(sErrorKey: string = 'defaultErrorKey', sErrorMessage: string = 'defaultErrorMessage') {
    return writeErrorToMemoryData(sErrorKey, sErrorMessage)
  }
}
