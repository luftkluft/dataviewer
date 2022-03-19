"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.strHexToBinFromSiemens = void 0;
var alertService_1 = require("../../../services/alert_service/alertService");
var strHexToMirrorBin_1 = require("../strHexToMirrorBin/strHexToMirrorBin");
var strHexToBinFromSiemens = function (sHex) {
    var swOp = __assign(__assign({}, alertService_1.swalOptions), { showConfirmButton: true });
    var sReturn = "";
    var localString = "";
    var bytePosition = 0;
    var wordCharCount = 0;
    for (var i = 0; i < sHex.length; i++) {
        if (sHex[i] == '+' || sHex[i] == '-')
            if (sHex[i - 1] == '\'') {
                wordCharCount++;
            }
            else {
                swOp.title = "strHexToBinFromSiemens()";
                swOp.text = "The format of the beginning of the word is broken! Error!";
                alertService_1.Alert.fireToast(swOp);
                return "";
            }
        if (wordCharCount) {
            if (wordCharCount == 6 && sHex[i + 1] != '\'') {
                swOp.title = "strHexToBinFromSiemens()";
                swOp.text = "End of word format broken! Error!";
                alertService_1.Alert.fireToast(swOp);
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
                    swOp.title = "strHexToBinFromSiemens()";
                    swOp.text = "Bit Threshold! Error!";
                    alertService_1.Alert.fireToast(swOp);
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