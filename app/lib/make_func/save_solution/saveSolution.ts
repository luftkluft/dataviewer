const JSONdb = require('simple-json-db')
const appRoot = require('app-root-path')
import { PATH_TO_ERROR_MEMORY } from '../../../constants/constants'
const db = new JSONdb(appRoot + PATH_TO_ERROR_MEMORY + 'errors.json')
import { RWS } from '../../../services/read_write_service/rws'

export function saveSolution(key: string, sNote: string) {
  try {
    db.set(key, sNote)
    db.sync()
    return 'ok'
  } catch (error) {
    return ''
  }
}
