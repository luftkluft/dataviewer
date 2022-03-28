"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLineByNumberFromLines = void 0;
function getLineByNumberFromLines(sLines, lineNumber) {
    var endLine = '\n';
    try {
        var linesArray = sLines.split(endLine);
        var stringArray = linesArray.filter(function (line) { return line.length > 0; });
        if (stringArray.length >= lineNumber && lineNumber > 0) {
            return stringArray[lineNumber - 1];
        }
        else {
            return '';
        }
    }
    catch (error) {
        return '';
    }
}
exports.getLineByNumberFromLines = getLineByNumberFromLines;
//# sourceMappingURL=getLineByNumberFromLines.js.map