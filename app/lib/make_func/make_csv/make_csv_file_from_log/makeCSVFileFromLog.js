"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCSVFileFromLog = void 0;
function makeCSVFileFromLog(logFile, variablesListFile, csvFileSavePath, logParams) {
    var sResult = '';
    sResult = logFile + '::' + variablesListFile + '::' + csvFileSavePath + '::' + logParams.delemiter;
    return sResult;
}
exports.makeCSVFileFromLog = makeCSVFileFromLog;
//# sourceMappingURL=makeCSVFileFromLog.js.map