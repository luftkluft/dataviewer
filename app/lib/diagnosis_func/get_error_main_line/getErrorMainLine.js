"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMainLine = void 0;
var fs = require('fs');
var hashing_1 = require("../../make_func/make_hash/hashing/hashing");
var getErrorLog = function (sLastOpenedErrorFile) {
    if (sLastOpenedErrorFile === void 0) { sLastOpenedErrorFile = ''; }
    try {
        var sResult = '';
        if (fs.existsSync(sLastOpenedErrorFile)) {
            sResult = fs.readFileSync(sLastOpenedErrorFile, 'utf8');
            return sResult;
        }
        else {
            return '';
        }
        return sResult;
    }
    catch (error) {
        return '';
    }
};
var getBodyErrorLog = function (sErrorLog) {
    try {
        var endLine = '\n';
        var sResult = '';
        var linesArray = [];
        linesArray = sErrorLog.split(endLine);
        var i = 0;
        for (i = 1; i < linesArray.length - 1; i++) {
            sResult += linesArray[i] + endLine;
        }
        return sResult;
    }
    catch (error) {
        return '';
    }
};
var getLastLogLine = function (sLines) {
    if (sLines === void 0) { sLines = ''; }
    try {
        var endLine = '\n';
        var sResult = '';
        var linesArray = [];
        linesArray = sLines.split(endLine);
        sResult = linesArray[linesArray.length - 2];
        return sResult;
    }
    catch (error) {
        return '';
    }
};
function getErrorMainLine(sLastOpenedErrorFile, deep) {
    if (sLastOpenedErrorFile === void 0) { sLastOpenedErrorFile = ''; }
    if (deep === void 0) { deep = 1; }
    try {
        var sResult = '';
        var sErrorLog = '';
        sErrorLog = getErrorLog(sLastOpenedErrorFile);
        sResult = getBodyErrorLog(sErrorLog);
        sResult = (0, hashing_1.hashing)(sResult, deep);
        sResult = getLastLogLine(sResult);
        return sResult;
    }
    catch (error) {
        return '';
    }
}
exports.getErrorMainLine = getErrorMainLine;
//# sourceMappingURL=getErrorMainLine.js.map