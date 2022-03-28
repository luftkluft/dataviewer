"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTimeFromLog = void 0;
var formatTime = function (sTime, timeDelemitor) {
    if (timeDelemitor === void 0) { timeDelemitor = ':'; }
    var i = 0;
    var sReturn = '';
    if (sTime[1] == timeDelemitor) {
        sTime = '0' + sTime;
    }
    while (sTime[i]) {
        if (sTime[i] == "'" || sTime[i] == ",") {
            return sReturn;
        }
        if (sTime[i] == " ") {
            sReturn += '0';
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