export function makeCSVFileFromLog(logFile: string, variablesListFile: string, csvFileSavePath: string, logParams: any){
  let sResult: string = ''
  sResult = logFile + '::' + variablesListFile + '::' + csvFileSavePath + '::' + logParams.delemiter
  return sResult
}
