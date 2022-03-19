const fs = require('fs')

export function getLineCountFromFile(filePath: string = 'emptyPath', fileName: string = 'emptyName') {
  const file = filePath + fileName
  const endLine = '\n'

  if (fs.existsSync(file)) {
    const linesArray: string[] = fs.readFileSync(file, 'utf8').split(endLine)
    const linesCount = linesArray.filter(line => line.length > 0).length
    return linesCount
  } else {
    return -1
  }
}
