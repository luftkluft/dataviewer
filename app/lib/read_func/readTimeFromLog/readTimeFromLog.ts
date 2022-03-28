const formatTime = (sTime: string, timeDelemitor: string = ':') => {
  let i: number = 0
  let sReturn: string = ''

  if(sTime[1] == timeDelemitor){
    sTime = '0' + sTime
  }

  while (sTime[i]) {
    if (sTime[i] == "'" || sTime[i] == ",") // код 39 = " ' " разделитель столбцов
    {
      return sReturn
    }
    if (sTime[i] == " ") {
      sReturn += '0'
      i++
      continue
    }
    else {
      sReturn += sTime[i]
    }
    i++
  }
  return sReturn
}

export function readTimeFromLog(sLogLine: string = '') {
  let i: number = 0
  let sReturn: string = ''

  while (sLogLine[i]) {
    if (sLogLine[i] == "'") // код 39 = " ' " разделитель столбцов
    {
      return formatTime(sReturn)
    }
    else {
      sReturn += sLogLine[i]
    }
    i++
  }
  return formatTime(sReturn)
}
