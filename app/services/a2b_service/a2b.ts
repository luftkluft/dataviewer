import { strHexToBin } from '../../lib/a2b/strHexToBin/strHexToBin'
import { strHexToMirrorBin } from '../../lib/a2b/strHexToMirrorBin/strHexToMirrorBin'
import { strHexToBinFromSiemens } from '../../lib/a2b/strHexToBinFromSiemens/strHexToBinFromSiemens'
import { linesToArray } from '../../lib/a2b/linesToArray/linesToArray'

export class A2b {
  static strHexToBin(sHex: string) {
    return strHexToBin(sHex)
  }
  static strHexToMirrorBin(sHex: string) {
    return strHexToMirrorBin(sHex)
  }
  static strHexToBinFromSiemens(sHex: string) {
    return strHexToBinFromSiemens(sHex)
  }
  static linesToArray(lines: string) {
    return linesToArray(lines)
  }
}
