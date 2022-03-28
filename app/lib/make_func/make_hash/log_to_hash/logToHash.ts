let fs = require('fs')
const { dialog } = require('electron')
import { makeHeaderTable } from '../../make_csv/make_header_table/makeHeaderTable'
import { makeBodyTable } from '../../make_csv/make_body_table/makeBodyTable'
import { hashing } from '../hashing/hashing'
import { RWS } from '../../../../services/read_write_service/rws'

const createFileName = () => {
  let current = new Date()
  let datePart = (new Date().toString()).split(/\.|\s|:/)
  let fileName: string = ''
  fileName = `${datePart[3]}-${datePart[1]}-${datePart[2]}-${datePart[4]}-${datePart[5]}.csv`
  return fileName
}

const compressHashBody = (sHashBody: string, deep: number) => {
  try {
    const endLine: string = "\n"
    let compressBody: string = '\n'
    let currentLine: string = ''
    let sLinesArray: string[] = []
    sLinesArray = sHashBody.split(endLine)
    let i: number = 0

    for (i = 0; i < sLinesArray.length - deep; i++) {
      if (RWS.readDataLineFromLog(sLinesArray[i]) == currentLine) {
        continue
      }
      else {
        if (RWS.readDataLineFromLog(sLinesArray[i]).length) {
          compressBody += RWS.readTimeFromLog(sLinesArray[i]) + RWS.readDataLineFromLog(sLinesArray[i])
          compressBody += '\n'
          currentLine = RWS.readDataLineFromLog(sLinesArray[i])
        }
      }
    }
    return compressBody
  } catch (error) {
    return ''
  }

}

export function logToHash(logFile: string, variablesListFile: string, csvFileSavePath: string, logParams: any, deep: number = 1) {
  try {
    let sData: string = ''
    let sHash: string = ''
    let fileName: string = createFileName()
    let savePath: string = csvFileSavePath
    let file: string = savePath + fileName
    sHash += makeHeaderTable(variablesListFile, logParams.delemiter)
    sData = makeBodyTable(logFile, variablesListFile, logParams.delemiter)
    sData = hashing(sData, deep)
    sData = compressHashBody(sData, deep)
    sHash += sData
    return sHash
  } catch (error) {
    return ''
  }
}
