import { strHexToMirrorBin } from '../strHexToMirrorBin/strHexToMirrorBin'

export const strHexToBinFromSiemens = (sHex: string) => {
  let sReturn: string = ""
  let localString: string = ""
  let bytePosition: number = 0
  let wordCharCount: number = 0
  for (let i: number = 0; i < sHex.length; i++) {
    if (sHex[i] == '+' || sHex[i] == '-')
      if (sHex[i - 1] == '\'') {
        wordCharCount++
      }
      else {
        return ""
      }
    if (wordCharCount) {
      if (wordCharCount == 6 && sHex[i + 1] != '\'') // 6 - длина значения в слове: +12345
      {
        return ""
      }
      if (wordCharCount >= 6) {
        sReturn += sHex[i]
        wordCharCount = 0
        continue
      }
      else {
        sReturn += sHex[i]
        wordCharCount++
        continue
      }
    }
    if (sHex[i] != '\'') {
      if (sHex[i - 1] == '\'' && sHex[i + 1] == '\'') {
        if (sHex[i] == '0' || sHex[i] == '1') {
          sReturn += sHex[i]
          continue
        }
        else {
          return ""
        }
      }
      bytePosition++
    }

    if (!(bytePosition % 2))
      if (bytePosition) {
        if (sHex[i] == '\'') {
          bytePosition--;
          continue;
        }

        if (sHex[i - 1] == '\'') {
          bytePosition--
          continue;
        }
        localString = ""
        localString += sHex[i]
        sReturn += strHexToMirrorBin(localString)
        localString = ""
        localString += sHex[i - 1]
        sReturn += strHexToMirrorBin(localString)
      }
  }
  return sReturn
}
