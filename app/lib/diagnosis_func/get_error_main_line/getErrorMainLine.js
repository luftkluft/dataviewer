"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMainLine = void 0;
var fs = require('fs');
var hashing_1 = require("../../make_func/make_hash/hashing/hashing");
var rws_1 = require("../../../services/read_write_service/rws");
var strHexToBinFromSiemens_1 = require("../../a2b/strHexToBinFromSiemens/strHexToBinFromSiemens");
var deleteSeparator_1 = require("../../make_func/make_parser/delete_separator/deleteSeparator");
var headerInfo_1 = require("../../make_func/make_parser/header_info/headerInfo");
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
var makeErrorBodyTable = function (sBodyErrorLog, variablesListFile, separator) {
    var sVariableListLines = "";
    var sLogLines = "";
    var sDataLine = "";
    var sLine = "";
    var sBitsLine = "";
    var sReturn = "";
    var isFirstStringRemoved = false;
    var sumCharCount = 0;
    if (fs.existsSync(variablesListFile)) {
        sVariableListLines = fs.readFileSync(variablesListFile, 'utf8');
    }
    else {
        return '';
    }
    sVariableListLines = (0, deleteSeparator_1.deleteSeparator)(sVariableListLines, "\r");
    var sHeaderInfo = (0, headerInfo_1.headerInfo)(sVariableListLines, separator);
    if (sBodyErrorLog.length) {
        sLogLines = sBodyErrorLog;
    }
    else {
        return '';
    }
    sLogLines = (0, deleteSeparator_1.deleteSeparator)(sLogLines, "\r");
    var j = 0;
    for (j = 0; j < sLogLines.length; j++) {
        if (sLogLines[j] == '\n') {
            isFirstStringRemoved = true;
        }
        if (sLogLines[j] != '\n') {
            if (isFirstStringRemoved) {
                sLine += sLogLines[j];
            }
        }
        else {
            sDataLine = rws_1.RWS.readDataLineFromLog(sLine);
            sBitsLine = (0, strHexToBinFromSiemens_1.strHexToBinFromSiemens)(sDataLine);
            if (sBitsLine != "") {
                sReturn += rws_1.RWS.readTimeFromLog(sLine);
                sReturn += separator;
                var wordCharCount = 0;
                var k = 0;
                for (k = 0; k < sBitsLine.length; k++) {
                    if (sBitsLine[k] == '+' || sBitsLine[k] == '-') {
                        wordCharCount++;
                    }
                    if (wordCharCount) {
                        if (wordCharCount >= 6) {
                            sReturn += sBitsLine[k];
                            sReturn += separator;
                            wordCharCount = 0;
                            continue;
                        }
                        else {
                            sReturn += sBitsLine[k];
                            wordCharCount++;
                            sumCharCount++;
                            continue;
                        }
                    }
                    if (!wordCharCount)
                        if (sHeaderInfo[k - sumCharCount]) {
                            sReturn += sBitsLine[k];
                            sReturn += separator;
                        }
                }
            }
            sReturn += '\n';
            sLine = "";
            sBitsLine = "";
            sDataLine = "";
            sumCharCount = 0;
        }
    }
    return sReturn;
};
function getErrorMainLine(sLastOpenedErrorFile, variablesListFile, separator, deep) {
    if (deep === void 0) { deep = 1; }
    try {
        var sResult = '';
        var sErrorLog = '';
        sErrorLog = getErrorLog(sLastOpenedErrorFile);
        sResult = getBodyErrorLog(sErrorLog);
        sResult = makeErrorBodyTable(sResult, variablesListFile, separator);
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