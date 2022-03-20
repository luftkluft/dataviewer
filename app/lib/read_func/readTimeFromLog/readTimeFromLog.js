"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTimeFromLog = void 0;
var formatTime = function (sTime) {
    if (sTime === void 0) { sTime = ''; }
    var i = 0;
    var sReturn = '';
    while (sTime[i]) {
        if (sTime[i] == "'" || sTime[i] == ",") {
            return sReturn;
        }
        if (sTime[i] == " ") {
            i++;
            continue;
        }
        else {
            sReturn += sTime[i];
        }
        i++;
    }
    return sReturn;
};
function readTimeFromLog(sLogLine) {
    if (sLogLine === void 0) { sLogLine = ''; }
    var i = 0;
    var sReturn = '';
    while (sLogLine[i]) {
        if (sLogLine[i] == "'") {
            return formatTime(sReturn);
        }
        else {
            sReturn += sLogLine[i];
        }
        i++;
    }
    return formatTime(sReturn);
}
exports.readTimeFromLog = readTimeFromLog;
//# sourceMappingURL=readTimeFromLog.js.map