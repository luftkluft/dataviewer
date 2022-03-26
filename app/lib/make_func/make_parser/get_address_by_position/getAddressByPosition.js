"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddressByPosition = void 0;
var rws_1 = require("../../../../services/read_write_service/rws");
function getAddressByPosition(file, positionNumber) {
    if (file === void 0) { file = ''; }
    var sLine = "";
    var sReturn = "";
    var positionCount = 0;
    sLine = rws_1.RWS.getLineByNumberFromFile(file, '', 1);
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
exports.getAddressByPosition = getAddressByPosition;
//# sourceMappingURL=getAddressByPosition.js.map