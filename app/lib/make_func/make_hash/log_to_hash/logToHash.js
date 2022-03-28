"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logToHash = void 0;
var fs = require('fs');
var dialog = require('electron').dialog;
var makeHeaderTable_1 = require("../../make_csv/make_header_table/makeHeaderTable");
var makeBodyTable_1 = require("../../make_csv/make_body_table/makeBodyTable");
var hashing_1 = require("../hashing/hashing");
var rws_1 = require("../../../../services/read_write_service/rws");
var createFileName = function () {
    var current = new Date();
    var datePart = (new Date().toString()).split(/\.|\s|:/);
    var fileName = '';
    fileName = datePart[3] + "-" + datePart[1] + "-" + datePart[2] + "-" + datePart[4] + "-" + datePart[5] + ".csv";
    return fileName;
};
var compressHashBody = function (sHashBody, deep) {
    try {
        var endLine = "\n";
        var compressBody = '\n';
        var currentLine = '';
        var sLinesArray = [];
        sLinesArray = sHashBody.split(endLine);
        var i = 0;
        for (i = 0; i < sLinesArray.length - deep; i++) {
            if (rws_1.RWS.readDataLineFromLog(sLinesArray[i]) == currentLine) {
                continue;
            }
            else {
                if (rws_1.RWS.readDataLineFromLog(sLinesArray[i]).length) {
                    compressBody += rws_1.RWS.readTimeFromLog(sLinesArray[i]) + rws_1.RWS.readDataLineFromLog(sLinesArray[i]);
                    compressBody += '\n';
                    currentLine = rws_1.RWS.readDataLineFromLog(sLinesArray[i]);
                }
            }
        }
        return compressBody;
    }
    catch (error) {
        return '';
    }
};
function logToHash(logFile, variablesListFile, csvFileSavePath, logParams, deep) {
    if (deep === void 0) { deep = 1; }
    try {
        var sData = '';
        var sHash = '';
        var fileName = createFileName();
        var savePath = csvFileSavePath;
        var file = savePath + fileName;
        sHash += (0, makeHeaderTable_1.makeHeaderTable)(variablesListFile, logParams.delemiter);
        sData = (0, makeBodyTable_1.makeBodyTable)(logFile, variablesListFile, logParams.delemiter);
        sData = (0, hashing_1.hashing)(sData, deep);
        sData = compressHashBody(sData, deep);
        sHash += sData;
        return sHash;
    }
    catch (error) {
        return '';
    }
}
exports.logToHash = logToHash;
//# sourceMappingURL=logToHash.js.map