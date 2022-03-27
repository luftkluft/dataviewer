let fs = require('fs')
import { hashing } from '../../make_func/make_hash/hashing/hashing'
import { RWS } from '../../../services/read_write_service/rws'

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

export function getErrorMainLine(sLastOpenedErrorFile: string = '', deep: number = 1) {
  try {
    let sResult: string = ''
    let sErrorLog: string = ''
    sErrorLog = getErrorLog(sLastOpenedErrorFile)
    sResult = getBodyErrorLog(sErrorLog)
    sResult = hashing(sResult, deep)
    sResult = getLastLogLine(sResult)
    return sResult
  } catch (error) {
    return ''
  }
}
