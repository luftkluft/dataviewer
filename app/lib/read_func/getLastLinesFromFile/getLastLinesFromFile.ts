const fs = require('fs')

export function getLastLinesFromFile(filePath: string = 'emptyPath', fileName: string = 'emptyName', lastLinesNumber: number = 0) {
  const file = filePath + fileName
  const endLine = '\n'

  if (fs.existsSync(file)) {
    const linesArray: string[] = fs.readFileSync(file, 'utf8').split(endLine)
    const stringArray: string[] = linesArray.filter(line => line.length > 0)
    const selectedLinesArray: string[] = []
    let i: number = 0;
    for (i = 0; i < stringArray.length; i++) {
      if (i >= stringArray.length - lastLinesNumber) {
        selectedLinesArray.push(stringArray[i])
      }
    }
    return selectedLinesArray
  } else {
    return []
  }
}
