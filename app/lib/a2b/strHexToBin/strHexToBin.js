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
exports.strHexToBin = void 0;
var alertService_1 = require("../../../services/alert_service/alertService");
var strHexToBin = function (sHex) {
    var swOp = __assign(__assign({}, alertService_1.swalOptions), { showConfirmButton: true });
    var i = 0;
    var sReturn = "";
    while (sHex[i]) {
        switch (sHex[i]) {
            case '0':
                sReturn += "0000";
                break;
            case '1':
                sReturn += "0001";
                break;
            case '2':
                sReturn += "0010";
                break;
            case '3':
                sReturn += "0011";
                break;
            case '4':
                sReturn += "0100";
                break;
            case '5':
                sReturn += "0101";
                break;
            case '6':
                sReturn += "0110";
                break;
            case '7':
                sReturn += "0111";
                break;
            case '8':
                sReturn += "1000";
                break;
            case '9':
                sReturn += "1001";
                break;
            case 'A':
            case 'a':
                sReturn += "1010";
                break;
            case 'B':
            case 'b':
                sReturn += "1011";
                break;
            case 'C':
            case 'c':
                sReturn += "1100";
                break;
            case 'D':
            case 'd':
                sReturn += "1101";
                break;
            case 'E':
            case 'e':
                sReturn += "1110";
                break;
            case 'F':
            case 'f':
                sReturn += "1111";
                break;
            default:
                {
                    swOp.title = "strHexToBin()";
                    swOp.text = "Invalid character! Error! ";
                    alertService_1.Alert.fireToast(swOp);
                    return "";
                }
        }
        i++;
    }
    if (!i) {
        swOp.title = "strHexToBin()";
        swOp.text = "Empty line! Error! ";
        alertService_1.Alert.fireToast(swOp);
        return "";
    }
    return sReturn;
};
exports.strHexToBin = strHexToBin;
//# sourceMappingURL=strHexToBin.js.map