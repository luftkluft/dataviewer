const fs = require('fs')

export function readLinesArray(filePath: string = 'emptyPath', fileName: string = 'emptyName') {
  const file = filePath + fileName
  const endLine = '\n'

  if (fs.existsSync(file)) {
    const linesArray: string[] = fs.readFileSync(file, 'utf8').split(endLine)
    const sArray = linesArray.filter(line => line.length > 0)
    return sArray
  } else {
    return []
  }
}
