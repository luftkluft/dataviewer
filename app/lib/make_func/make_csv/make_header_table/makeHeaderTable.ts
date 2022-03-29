let fs = require('fs')
import { headerColumnDivider } from '../../make_parser/header_column_divider/headerColumnDivider'
import { deleteSeparator } from '../../make_parser/delete_separator/deleteSeparator'

export function makeHeaderTable(variablesListFile: string, separator: string) {
  let sVariableListLines: string = ""
  let sDeviderLines: string = ""
  let sReturn: string = ""
  const columnInLine: number = 3

  let addressCount: number = 0
  let nameCount: number = 0
  let commentCount: number = 0

  if (fs.existsSync(variablesListFile)) {
    sVariableListLines = fs.readFileSync(variablesListFile, 'utf8')
  } else {
    return ''
  }
  sVariableListLines = deleteSeparator(sVariableListLines, "\r")
  sDeviderLines = headerColumnDivider(sVariableListLines, separator)

  let step: number = 0
  for (step = 1; step < columnInLine + 1; step++) {
    let count: number = 1
    if (step == 1) {
      sReturn += "Адрес'"
    }
    if (step == 2) {
      sReturn += "\nИмя'"
    }
    if (step == 3) {
      sReturn += "\nКомментарий'"
    }

    let j: number = 0
    for (j = 0; j < sDeviderLines.length; j++) {
      if (step == 1 && count == 1) {
        sReturn += sDeviderLines[j]
      }
      if (step == 2 && count == 2) {
        sReturn += sDeviderLines[j]
      }
      if (step == 3 && count == 3) {
        sReturn += sDeviderLines[j]
      }
      if (sDeviderLines[j] == separator) {
        if (count == 1) {
          addressCount++
        }
        if (count == 2) {
          nameCount++
        }
        if (count == 3) {
          commentCount++
        }
        count++
        if (count >= 4) {
          count = 1
        }
      }
    }
  }
  if (addressCount == nameCount && addressCount == commentCount) {
    return sReturn
  } else {
    return `Bad header ${addressCount}:${nameCount}:${commentCount}! Check variable list!`
  }
}
