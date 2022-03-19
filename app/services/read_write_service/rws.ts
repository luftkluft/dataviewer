import { getLineCountFromFile } from '../../lib/read_func/getLineCountFromFile/getLineCountFromFile'
import { getLastLinesFromFile } from '../../lib/read_func/getLastLinesFromFile/getLastLinesFromFile'

export class RWS {
  static getLineCountFromFile(sFilePath: string, sFileName: string) {
    return getLineCountFromFile(sFilePath, sFileName)
  }
  static getLastLinesFromFile(sFilePath: string, sFileName: string, lastLineNumber: number = 0){
    return getLastLinesFromFile(sFilePath, sFileName, lastLineNumber)
  }
}
