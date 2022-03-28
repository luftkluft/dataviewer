"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNameByPositionFromLines = void 0;
var rws_1 = require("../../../../services/read_write_service/rws");
function getNameByPositionFromLines(sLines, positionNumber) {
    if (sLines === void 0) { sLines = ''; }
    var sLine = "";
    var sReturn = "";
    var positionCount = 0;
    sLine = rws_1.RWS.getLineByNumberFromLines(sLines, 2);
    var i = 0;
    for (i = 0; i < sLine.length; i++) {
        if (sLine[i] == '\'')
            positionCount++;
        if (positionCount == positionNumber) {
            if (sLine[i] != '\'') {
                sReturn += sLine[i];
            }
        }
    }
    return sReturn;
}
exports.getNameByPositionFromLines = getNameByPositionFromLines;
//# sourceMappingURL=getNameByPositionFromLines.js.map