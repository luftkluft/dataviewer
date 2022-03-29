"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBodyTable = void 0;
var fs = require('fs');
var deleteSeparator_1 = require("../../make_parser/delete_separator/deleteSeparator");
var rws_1 = require("../../../../services/read_write_service/rws");
var strHexToBinFromSiemens_1 = require("../../../a2b/strHexToBinFromSiemens/strHexToBinFromSiemens");
var headerInfo_1 = require("../../make_parser/header_info/headerInfo");
var checkBodyTable = function (sLines, separator) {
    var currentCount = 0;
    var memoryCount = 0;
    var lineCount = 0;
    var i = 0;
    for (i = 0; i < sLines.length; i++) {
        if (sLines[i + 1] == '\n' && sLines[i] == '\n') {
            continue;
        }
        if (sLines[i] == separator) {
            currentCount++;
        }
        if (sLines[i] == '\n') {
            if (lineCount == 1) {
                memoryCount = currentCount;
            }
            if (memoryCount != currentCount && lineCount > 1) {
                return "\nBad body " + memoryCount + ":" + currentCount + "! Bad line: " + lineCount + "!";
            }
            lineCount++;
            currentCount = 0;
        }
    }
    return sLines;
};
function makeBodyTable(logFile, variablesListFile, separator) {
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
    if (fs.existsSync(logFile)) {
        sLogLines = fs.readFileSync(logFile, 'utf8');
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
                    if (!wordCharCount) {
                        if (sHeaderInfo[k - sumCharCount]) {
                            sReturn += sBitsLine[k];
                            sReturn += separator;
                        }
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
    sReturn = checkBodyTable(sReturn, separator);
    return sReturn;
}
exports.makeBodyTable = makeBodyTable;
//# sourceMappingURL=makeBodyTable.js.map