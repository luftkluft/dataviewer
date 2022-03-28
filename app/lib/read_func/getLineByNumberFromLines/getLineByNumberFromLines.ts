export function getLineByNumberFromLines(sLines: string, lineNumber: number) {
  const endLine = '\n'
  try {
    const linesArray: string[] = sLines.split(endLine)
    const stringArray: string[] = linesArray.filter(line => line.length > 0)
    if (stringArray.length >= lineNumber && lineNumber > 0) {
      return stringArray[lineNumber - 1]
    } else {
      return ''
    }
  } catch (error) {
    return ''
  }
}
