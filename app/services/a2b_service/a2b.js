"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A2b = void 0;
var strHexToBin_1 = require("../../lib/a2b/strHexToBin/strHexToBin");
var strHexToMirrorBin_1 = require("../../lib/a2b/strHexToMirrorBin/strHexToMirrorBin");
var strHexToBinFromSiemens_1 = require("../../lib/a2b/strHexToBinFromSiemens/strHexToBinFromSiemens");
var linesToArray_1 = require("../../lib/a2b/linesToArray/linesToArray");
var A2b = (function () {
    function A2b() {
    }
    A2b.strHexToBin = function (sHex) {
        return (0, strHexToBin_1.strHexToBin)(sHex);
    };
    A2b.strHexToMirrorBin = function (sHex) {
        return (0, strHexToMirrorBin_1.strHexToMirrorBin)(sHex);
    };
    A2b.strHexToBinFromSiemens = function (sHex) {
        return (0, strHexToBinFromSiemens_1.strHexToBinFromSiemens)(sHex);
    };
    A2b.linesToArray = function (lines) {
        return (0, linesToArray_1.linesToArray)(lines);
    };
    return A2b;
}());
exports.A2b = A2b;
//# sourceMappingURL=a2b.js.map