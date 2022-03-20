const fs = require('fs')

export function getLineByNumberFromFile(filePath: string = 'emptyPath', fileName: string = 'emptyName', lineNumber: number = 1) {
  const file = filePath + fileName
  const endLine = '\n'

  if (fs.existsSync(file)) {
    const linesArray: string[] = fs.readFileSync(file, 'utf8').split(endLine)
    const stringArray: string[] = linesArray.filter(line => line.length > 0)
    if (stringArray.length >= lineNumber && lineNumber > 0) {
      return stringArray[lineNumber - 1]
    } else {
      return ''
    }
  } else {
    return ''
  }
}
