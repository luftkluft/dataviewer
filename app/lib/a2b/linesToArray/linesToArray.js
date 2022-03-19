"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linesToArray = void 0;
var linesToArray = function (sLines) {
    var linesArray = [];
    var tempLine = "";
    for (var j = 0; j < sLines.length; j++) {
        if (sLines[j] != '\n') {
            tempLine += sLines[j];
        }
        else {
            tempLine += sLines[j];
            linesArray.push(tempLine);
            tempLine = "";
        }
    }
    return linesArray;
};
exports.linesToArray = linesToArray;
//# sourceMappingURL=linesToArray.js.map