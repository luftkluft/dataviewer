const JSONdb = require('simple-json-db')
const appRoot = require('app-root-path')
import { PATH_TO_ERROR_MEMORY } from '../../../constants/constants'
const db = new JSONdb(appRoot + PATH_TO_ERROR_MEMORY + 'errors.json')
import { RWS } from '../../../services/read_write_service/rws'

export function findReadySolution(errorMainLine: string) {
  let key: string = RWS.readDataLineFromLog(errorMainLine)
  try {
    if (db.has(key)) {
      return db.get(key)
    } else {
      return ''
    }
  } catch (error) {
    return ''
  }
}
