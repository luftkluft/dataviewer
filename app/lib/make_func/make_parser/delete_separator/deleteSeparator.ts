export function deleteSeparator(sLine: string, separator: string = '\'') {
  let sReturn: string = ""
  let i: number = 0
  for (i = 0; i < sLine.length; i++) {
    if (sLine[i] == separator)
      continue
    sReturn += sLine[i]
  }
  return sReturn
}
