"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLineByNumberFromFile = void 0;
var fs = require('fs');
function getLineByNumberFromFile(filePath, fileName, lineNumber) {
    var file = filePath + fileName;
    var endLine = '\n';
    if (fs.existsSync(file)) {
        var linesArray = fs.readFileSync(file, 'utf8').split(endLine);
        var stringArray = linesArray.filter(function (line) { return line.length > 0; });
        if (stringArray.length >= lineNumber && lineNumber > 0) {
            return stringArray[lineNumber - 1];
        }
        else {
            return '';
        }
    }
    else {
        return '';
    }
}
exports.getLineByNumberFromFile = getLineByNumberFromFile;
//# sourceMappingURL=getLineByNumberFromFile.js.map