"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strHexToBin = void 0;
var strHexToBin = function (sHex) {
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
                    return "";
                }
        }
        i++;
    }
    if (!i) {
        return "";
    }
    return sReturn;
};
exports.strHexToBin = strHexToBin;
//# sourceMappingURL=strHexToBin.js.map