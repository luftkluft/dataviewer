"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RWS = void 0;
var getLineCountFromFile_1 = require("../../lib/read_func/getLineCountFromFile/getLineCountFromFile");
var getLastLinesFromFile_1 = require("../../lib/read_func/getLastLinesFromFile/getLastLinesFromFile");
var getLineByNumberFromFile_1 = require("../../lib/read_func/getLineByNumberFromFile/getLineByNumberFromFile");
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
    return RWS;
}());
exports.RWS = RWS;
//# sourceMappingURL=rws.js.map