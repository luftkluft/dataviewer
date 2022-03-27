let fs = require('fs')
const { dialog } = require('electron')
import { makeHeaderTable } from '../../make_csv/make_header_table/makeHeaderTable'
import { makeBodyTable } from '../../make_csv/make_body_table/makeBodyTable'
import { hashing } from '../hashing/hashing'

const createFileName = () => {
  let current = new Date()
  let datePart = (new Date().toString()).split(/\.|\s|:/)
  let fileName: string = ''
  fileName = `${datePart[3]}-${datePart[1]}-${datePart[2]}-${datePart[4]}-${datePart[5]}.csv`
  return fileName
}

export function logToHash(logFile: string, variablesListFile: string, csvFileSavePath: string, logParams: any, deep: number) {
  try {
    let sData: string = ''
    let sHash: string = ''
    let fileName: string = createFileName()
    let savePath: string = csvFileSavePath
    let file: string = savePath + fileName
    sHash += makeHeaderTable(variablesListFile, logParams.delemiter)
    sData = hashing(makeBodyTable(logFile, variablesListFile, logParams.delemiter), deep)
    sHash += sData
    return sHash
  } catch (error) {
    return error
  }
}
