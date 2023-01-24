"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strHexToBinFromSiemens = void 0;
var strHexToMirrorBin_1 = require("../strHexToMirrorBin/strHexToMirrorBin");
var strHexToBinFromSiemens = function (sHex) {
    var sReturn = "";
    var localString = "";
    var bytePosition = 0;
    var wordCharCount = 0;
    var expWordCharCount = 0;
    for (var i = 0; i < sHex.length; i++) {
        if (sHex[i] == '+' || sHex[i] == '-') {
            if (sHex[i + 9] == 'E' && (sHex[i + 10] == '+' || sHex[i + 10] == '-')) {
                expWordCharCount++;
            }
            else {
                if (sHex[i - 1] != 'E') {
                    wordCharCount++;
                }
            }
        }
        if (expWordCharCount) {
            if (wordCharCount == 13 && sHex[i + 1] != '\'') {
                return "";
            }
            if (expWordCharCount >= 13) {
                sReturn += sHex[i];
                expWordCharCount = 0;
                continue;
            }
            else {
                sReturn += sHex[i];
                expWordCharCount++;
                continue;
            }
        }
        if (wordCharCount) {
            if (wordCharCount == 6 && sHex[i + 1] != '\'') {
                return "";
            }
            if (wordCharCount >= 6) {
                sReturn += sHex[i];
                wordCharCount = 0;
                continue;
            }
            else {
                sReturn += sHex[i];
                wordCharCount++;
                continue;
            }
        }
        if (sHex[i] != '\'') {
            if (sHex[i - 1] == '\'' && sHex[i + 1] == '\'') {
                if (sHex[i] == '0' || sHex[i] == '1') {
                    sReturn += sHex[i];
                    continue;
                }
                else {
                    return "";
                }
            }
            bytePosition++;
        }
        if (!(bytePosition % 2))
            if (bytePosition) {
                if (sHex[i] == '\'') {
                    bytePosition--;
                    continue;
                }
                if (sHex[i - 1] == '\'') {
                    bytePosition--;
                    continue;
                }
                localString = "";
                localString += sHex[i];
                sReturn += (0, strHexToMirrorBin_1.strHexToMirrorBin)(localString);
                localString = "";
                localString += sHex[i - 1];
                sReturn += (0, strHexToMirrorBin_1.strHexToMirrorBin)(localString);
            }
    }
    return sReturn;
};
exports.strHexToBinFromSiemens = strHexToBinFromSiemens;
//# sourceMappingURL=strHexToBinFromSiemens.js.map