"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compress = void 0;
var rws_1 = require("../../../services/read_write_service/rws");
function compress(sLine) {
    if (sLine === void 0) { sLine = ''; }
    try {
        var currentLine = '';
        var sReturn = '';
        var endLine = '\n';
        var sLineArray = [];
        sLineArray = sLine.split(endLine);
        var i = 0;
        for (i = 0; i < sLineArray.length; i++) {
            if (rws_1.RWS.readDataLineFromLog(sLineArray[i]) == rws_1.RWS.readDataLineFromLog(currentLine)) {
                continue;
            }
            else {
                if (sLineArray[i].length) {
                    sReturn += sLineArray[i];
                    sReturn += '\n';
                    currentLine = sLineArray[i];
                }
            }
        }
        return sReturn;
    }
    catch (error) {
        return '';
    }
}
exports.compress = compress;
//# sourceMappingURL=compress.js.map