import { RWS } from '../../../services/read_write_service/rws'
import { deleteSeparator } from '../../make_func/make_parser/delete_separator/deleteSeparator'

export function getMaxMatchLine(sLines: string, errorLogLine: string, separator: string) {
  try {
    let readedLine: string = ""
    let match: number = 0
    let maxMatch: number = 0
    let maxMatchLine: string = ""
    let readedBits: string = ""
    let sLinesArray: string[] = []
    let readedErrorBits = RWS.readDataLineFromLog(errorLogLine)
    readedErrorBits = deleteSeparator(readedErrorBits, separator)
    sLinesArray = sLines.split('\n')
    let i: number = 0
    for (i = 0; i < sLinesArray.length; i++) {
      readedBits = deleteSeparator(RWS.readDataLineFromLog(sLinesArray[i]), separator)
      let j: number = 0
      for (j = 0; j < readedBits.length; j++) {
        if (readedBits[j] == readedErrorBits[j]) {
          match++
        }
      }
      if (match > maxMatch) {
        maxMatch = match
        maxMatchLine = sLinesArray[i]
      }
      match = 0
    }
    return maxMatchLine
  } catch (error) {
    return ''
  }
}
