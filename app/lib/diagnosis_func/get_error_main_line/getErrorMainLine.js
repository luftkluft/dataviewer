"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMainLine = void 0;
var fs = require('fs');
var hashing_1 = require("../../make_func/make_hash/hashing/hashing");
var makeBodyTable_1 = require("../../make_func/make_csv/make_body_table/makeBodyTable");
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
function getErrorMainLine(sLastOpenedErrorFile, variablesListFile, separator, deep) {
    if (deep === void 0) { deep = 1; }
    try {
        var sResult = '';
        sResult = (0, makeBodyTable_1.makeBodyTable)(sLastOpenedErrorFile, variablesListFile, separator);
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