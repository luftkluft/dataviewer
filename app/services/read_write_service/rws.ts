import {getLineCountFromFile} from '../../lib/read_func/getLineCountFromFile/getLineCountFromFile'

export class RWS {
  static getLineCountFromFile(sFilePath: string, sFileName: string){
    return getLineCountFromFile(sFilePath, sFileName)
  }
}
