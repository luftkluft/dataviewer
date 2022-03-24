import { RWS } from '../../../services/read_write_service/rws'

export function compress(sLine: string = '') {
  try {
    let currentLine: string = ''
    let sReturn: string = ''
    const endLine = '\n'

    let sLineArray: string[] = []
    sLineArray = sLine.split(endLine)

    let i: number = 0
    for (i = 0; i < sLineArray.length; i++) {
      if (RWS.readDataLineFromLog(sLineArray[i]) == RWS.readDataLineFromLog(currentLine)) {
        continue
      }
      else {
        if (sLineArray[i].length) {
          sReturn += sLineArray[i]
          sReturn += '\n'
          currentLine = sLineArray[i]
        }
      }
    }
    return sReturn
  } catch (error) {
    return ''
  }
}
