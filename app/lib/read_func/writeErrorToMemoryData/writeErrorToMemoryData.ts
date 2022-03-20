import { PATH_TO_ERROR_MEMORY } from '../../../constants/constants'
const fs = require('fs')
const appRoot = require('app-root-path')
const errorsMemoryPath = appRoot + PATH_TO_ERROR_MEMORY
const file = errorsMemoryPath + 'errors.json'
const JSONdb = require('simple-json-db')
const db = new JSONdb(file)

export function writeErrorToMemoryData(sErrorKey: string = 'defaultErrorKey', sErrorMessage: string = 'defaultErrorMessage') {

  db.set(sErrorKey, sErrorMessage)
  if (db.get(sErrorKey)) {
    return db.get(sErrorKey)
  }
  else {
    return ''
  }
}
