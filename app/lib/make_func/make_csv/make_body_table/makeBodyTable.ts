let fs = require('fs')
import { headerColumnDivider } from '../../make_parser/header_column_divider/headerColumnDivider'
import { deleteSeparator } from '../../make_parser/delete_separator/deleteSeparator'
import { RWS } from '../../../../services/read_write_service/rws'
import { strHexToBinFromSiemens } from '../../../a2b/strHexToBinFromSiemens/strHexToBinFromSiemens'
import { headerInfo } from '../../make_parser/header_info/headerInfo'

export function makeBodyTable(logFile: string, variablesListFile: string, separator: string) {
  let sVariableListLines: string = ""
  let sLogLines: string = ""
  let sDataLine: string = ""
  let sLine: string = ""
  let sBitsLine: string = ""
  let sReturn: string = ""
  let isFirstStringRemoved: boolean = false
  let sumCharCount: number = 0

  if (fs.existsSync(variablesListFile)) {
    sVariableListLines = fs.readFileSync(variablesListFile, 'utf8')
  } else {
    return ''
  }
  sVariableListLines = deleteSeparator(sVariableListLines, "\r")

  const sHeaderInfo: string = headerInfo(sVariableListLines, separator)

  if (fs.existsSync(logFile)) {
    sLogLines = fs.readFileSync(logFile, 'utf8')
  } else {
    return ''
  }
  sLogLines = deleteSeparator(sLogLines, "\r")
  let j: number = 0
  for (j = 0; j < sLogLines.length; j++) {
    if (sLogLines[j] == '\n') {
      isFirstStringRemoved = true
    }
    if (sLogLines[j] != '\n') {
      if (isFirstStringRemoved) {
        sLine += sLogLines[j]
      }
    }
    else {
      sDataLine = RWS.readDataLineFromLog(sLine)
      sBitsLine = strHexToBinFromSiemens(sDataLine)
      if (sBitsLine != "") {
        sReturn += RWS.readTimeFromLog(sLine)
        sReturn += separator
        let wordCharCount: number = 0
        let k: number = 0
        for (k = 0; k < sBitsLine.length; k++) {
          if (sBitsLine[k] == '+' || sBitsLine[k] == '-') {
            wordCharCount++
          }
          if (wordCharCount) {
            if (wordCharCount >= 6) {
              sReturn += sBitsLine[k]
              sReturn += separator
              wordCharCount = 0
              continue
            }
            else {
              sReturn += sBitsLine[k]
              wordCharCount++
              sumCharCount++
              continue
            }
          }
          if (!wordCharCount)
            if (sHeaderInfo[k - sumCharCount]) {
              sReturn += sBitsLine[k]
              sReturn += separator
            }
        }
      }
      sReturn += '\n'
      sLine = ""
      sBitsLine = ""
      sDataLine = ""
      sumCharCount = 0
    }
  }
  return sReturn
}
