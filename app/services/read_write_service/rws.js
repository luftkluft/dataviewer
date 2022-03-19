"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RWS = void 0;
var getLineCountFromFile_1 = require("../../lib/read_func/getLineCountFromFile/getLineCountFromFile");
var RWS = (function () {
    function RWS() {
    }
    RWS.getLineCountFromFile = function (sFilePath, sFileName) {
        return (0, getLineCountFromFile_1.getLineCountFromFile)(sFilePath, sFileName);
    };
    return RWS;
}());
exports.RWS = RWS;
//# sourceMappingURL=rws.js.map