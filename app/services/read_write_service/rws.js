"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RWS = void 0;
var getLineCountFromFile_1 = require("../../lib/read_func/getLineCountFromFile/getLineCountFromFile");
var getLastLinesFromFile_1 = require("../../lib/read_func/getLastLinesFromFile/getLastLinesFromFile");
var getLineByNumberFromFile_1 = require("../../lib/read_func/getLineByNumberFromFile/getLineByNumberFromFile");
var readDataLineFromLog_1 = require("../../lib/read_func/readDataLineFromLog/readDataLineFromLog");
var readLines_1 = require("../../lib/read_func/readLines/readLines");
var readTimeFromLog_1 = require("../../lib/read_func/readTimeFromLog/readTimeFromLog");
var writeErrorToMemoryData_1 = require("../../lib/read_func/writeErrorToMemoryData/writeErrorToMemoryData");
var readErrorFromMemoryData_1 = require("../../lib/read_func/readErrorFromMemoryData/readErrorFromMemoryData");
var RWS = (function () {
    function RWS() {
    }
    RWS.getLineCountFromFile = function (sFilePath, sFileName) {
        return (0, getLineCountFromFile_1.getLineCountFromFile)(sFilePath, sFileName);
    };
    RWS.getLastLinesFromFile = function (sFilePath, sFileName, lastLineNumber) {
        if (lastLineNumber === void 0) { lastLineNumber = 0; }
        return (0, getLastLinesFromFile_1.getLastLinesFromFile)(sFilePath, sFileName, lastLineNumber);
    };
    RWS.getLineByNumberFromFile = function (sFilePath, sFileName, lineNumber) {
        if (lineNumber === void 0) { lineNumber = 1; }
        return (0, getLineByNumberFromFile_1.getLineByNumberFromFile)(sFilePath, sFileName, lineNumber);
    };
    RWS.readDataLineFromLog = function (sLogLine) {
        if (sLogLine === void 0) { sLogLine = ''; }
        return (0, readDataLineFromLog_1.readDataLineFromLog)(sLogLine);
    };
    RWS.readLinesArray = function (sFilePath, sFileName) {
        return (0, readLines_1.readLinesArray)(sFilePath, sFileName);
    };
    RWS.readTimeFromLog = function (sLogLine) {
        if (sLogLine === void 0) { sLogLine = ''; }
        return (0, readTimeFromLog_1.readTimeFromLog)(sLogLine);
    };
    RWS.writeErrorToMemoryData = function (sErrorKey, sErrorMessage) {
        if (sErrorKey === void 0) { sErrorKey = 'defaultErrorKey'; }
        if (sErrorMessage === void 0) { sErrorMessage = 'defaultErrorMessage'; }
        return (0, writeErrorToMemoryData_1.writeErrorToMemoryData)(sErrorKey, sErrorMessage);
    };
    RWS.readErrorFromMemoryData = function (sErrorKey) {
        if (sErrorKey === void 0) { sErrorKey = 'defaultErrorKey'; }
        return (0, readErrorFromMemoryData_1.readErrorFromMemoryData)(sErrorKey);
    };
    return RWS;
}());
exports.RWS = RWS;
//# sourceMappingURL=rws.js.map