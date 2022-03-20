"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDataLineFromLog = void 0;
function readDataLineFromLog(sLogLine) {
    if (sLogLine === void 0) { sLogLine = ''; }
    var i = 0;
    var sReturn = '';
    var beginData = false;
    while (sLogLine[i]) {
        if (sLogLine[i] == "'") {
            beginData = true;
        }
        if (beginData) {
            sReturn += sLogLine[i];
        }
        i++;
    }
    return sReturn;
}
exports.readDataLineFromLog = readDataLineFromLog;
//# sourceMappingURL=readDataLineFromLog.js.map