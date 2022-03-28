import { RWS } from '../../../../services/read_write_service/rws'

export function getCommentByPositionFromLines(sLines: string = '', positionNumber: number) {
  let sLine: string = ""
  let sReturn: string = ""
  let positionCount: number = 0
  sLine = RWS.getLineByNumberFromLines(sLines, 3) // 3 - comment line
  let i: number = 0
  for (i = 0; i < sLine.length; i++) {
    if (sLine[i] == '\'')
      positionCount++
    if (positionCount == positionNumber) {
      if (sLine[i] != '\'') {
        sReturn += sLine[i]
      }
    }
  }
  return sReturn
}
