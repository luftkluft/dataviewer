let fs = require('fs')
import { hashing } from '../../make_func/make_hash/hashing/hashing'
import { makeBodyTable } from '../../make_func/make_csv/make_body_table/makeBodyTable'

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

export function getErrorMainLine(sLastOpenedErrorFile: string, variablesListFile: string, separator: string, deep: number = 1) {
  try {
    let sResult: string = ''
    sResult = makeBodyTable(sLastOpenedErrorFile, variablesListFile, separator)
    sResult = hashing(sResult, deep)
    sResult = getLastLogLine(sResult)
    return sResult
  } catch (error) {
    return ''
  }
}
