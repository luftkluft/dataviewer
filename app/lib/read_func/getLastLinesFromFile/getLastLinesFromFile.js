"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastLinesFromFile = void 0;
var fs = require('fs');
function getLastLinesFromFile(filePath, fileName, lastLinesNumber) {
    if (filePath === void 0) { filePath = 'emptyPath'; }
    if (fileName === void 0) { fileName = 'emptyName'; }
    if (lastLinesNumber === void 0) { lastLinesNumber = 0; }
    var file = filePath + fileName;
    var endLine = '\n';
    if (fs.existsSync(file)) {
        var linesArray = fs.readFileSync(file, 'utf8').split(endLine);
        var stringArray = linesArray.filter(function (line) { return line.length > 0; });
        var selectedLinesArray = [];
        var i = 0;
        for (i = 0; i < stringArray.length; i++) {
            if (i >= stringArray.length - lastLinesNumber) {
                selectedLinesArray.push(stringArray[i]);
            }
        }
        return selectedLinesArray;
    }
    else {
        return [];
    }
}
exports.getLastLinesFromFile = getLastLinesFromFile;
//# sourceMappingURL=getLastLinesFromFile.js.map