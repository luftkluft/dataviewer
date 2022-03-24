function replaceAt(str: string, index: number, ch: any) {
  return str.replace(/./g, (c, i) => i == index ? ch : c)
}

export function hashing(sLines: string = '', deep: number = 1) {
  let sReturn: string = ''
  const hashSimbol = '@'
  let isStartHash: boolean = false
  const endLine = '\n'
  const linesArray: string[] = sLines.split(endLine)

  if (linesArray.length <= (deep + 1)) {
    return '';
  }

  let i: number = 0
  for (i = 0; i < linesArray.length - deep; i++)
  {
    let j: number = 0
    for (j = 0; j < linesArray[i].length; j++) {
      if (linesArray[i][j] == '\'') {
        isStartHash = true
      }
      if (j == linesArray[i].length - 1) {
        isStartHash = false
      }
      if (isStartHash) {
        let k: number = 0
        for (k = 0; k < deep; k++) {
          if (linesArray[i][j] == linesArray[i + k][j]) {
            continue
          }
          else {
            linesArray[i] = replaceAt(linesArray[i], j, hashSimbol)
          }
        }
      }
    }
  }
  for (i = 0; i < linesArray.length - deep; i++) {
    sReturn += linesArray[i] + '\n'
  }
  return sReturn
}
