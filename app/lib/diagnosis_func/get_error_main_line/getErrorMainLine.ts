let fs = require('fs')
import { hashing } from '../../make_func/make_hash/hashing/hashing'
import { RWS } from '../../../services/read_write_service/rws'
import { strHexToBinFromSiemens } from '../../a2b/strHexToBinFromSiemens/strHexToBinFromSiemens'
import { deleteSeparator } from '../../make_func/make_parser/delete_separator/deleteSeparator'
import { headerInfo } from '../../make_func/make_parser/header_info/headerInfo'

const getErrorLog = (sLastOpenedErrorFile: string = '') => {
  try {
    let sResult: string = ''
    if (fs.existsSync(sLastOpenedErrorFile)) {
      sResult = fs.readFileSync(sLastOpenedErrorFile, 'utf8')
      return sResult
    } else {
      return ''
    }
    return sResult
  } catch (error) {
    return ''
  }
}

const getBodyErrorLog = (sErrorLog: string) => {
  try {
    const endLine = '\n'
    let sResult: string = ''
    let linesArray: string[] = []
    linesArray = sErrorLog.split(endLine)
    let i: number = 0
    for (i = 1; i < linesArray.length - 1; i++) {
      sResult += linesArray[i] + endLine
    }
    return sResult
  } catch (error) {
    return ''
  }
}

const getLastLogLine = (sLines: string = '') => {
  try {
    const endLine = '\n'
    let sResult: string = ''
    let linesArray: string[] = []
    linesArray = sLines.split(endLine)
    sResult = linesArray[linesArray.length - 2] // TODO 2 is bugfix after .split?
    return sResult
  } catch (error) {
    return ''
  }
}

const makeErrorBodyTable = (sBodyErrorLog: string, variablesListFile: string, separator: string) => {
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

  if (sBodyErrorLog.length) {
    sLogLines = sBodyErrorLog
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

export function getErrorMainLine(sLastOpenedErrorFile: string, variablesListFile: string, separator: string, deep: number = 1) {
  try {
    let sResult: string = ''
    let sErrorLog: string = ''
    sErrorLog = getErrorLog(sLastOpenedErrorFile)
    sResult = getBodyErrorLog(sErrorLog)
    sResult = makeErrorBodyTable(sResult, variablesListFile, separator)
    sResult = hashing(sResult, deep)
    sResult = getLastLogLine(sResult)
    return sResult
  } catch (error) {
    return ''
  }
}
