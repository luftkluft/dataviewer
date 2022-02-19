export const linesToArray = (sLines: string) => {
  const linesArray: string[] = []
  let tempLine: string = ""
  for (let j: number = 0; j < sLines.length; j++) {
    if (sLines[j] != '\n') {
      tempLine += sLines[j]
    }
    else {
      tempLine += sLines[j]
      linesArray.push(tempLine)
      tempLine = ""
    }
  }
  return linesArray
}
