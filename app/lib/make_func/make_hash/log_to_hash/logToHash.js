"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logToHash = void 0;
var fs = require('fs');
var dialog = require('electron').dialog;
var makeHeaderTable_1 = require("../../make_csv/make_header_table/makeHeaderTable");
var makeBodyTable_1 = require("../../make_csv/make_body_table/makeBodyTable");
var hashing_1 = require("../hashing/hashing");
var createFileName = function () {
    var current = new Date();
    var datePart = (new Date().toString()).split(/\.|\s|:/);
    var fileName = '';
    fileName = datePart[3] + "-" + datePart[1] + "-" + datePart[2] + "-" + datePart[4] + "-" + datePart[5] + ".csv";
    return fileName;
};
function logToHash(logFile, variablesListFile, csvFileSavePath, logParams, deep) {
    try {
        var sData = '';
        var sHash = '';
        var fileName = createFileName();
        var savePath = csvFileSavePath;
        var file = savePath + fileName;
        sHash += (0, makeHeaderTable_1.makeHeaderTable)(variablesListFile, logParams.delemiter);
        sData = (0, hashing_1.hashing)((0, makeBodyTable_1.makeBodyTable)(logFile, variablesListFile, logParams.delemiter), deep);
        sHash += sData;
        return sHash;
    }
    catch (error) {
        return error;
    }
}
exports.logToHash = logToHash;
//# sourceMappingURL=logToHash.js.map