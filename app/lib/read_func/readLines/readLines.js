"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readLinesArray = void 0;
var fs = require('fs');
function readLinesArray(filePath, fileName) {
    if (filePath === void 0) { filePath = 'emptyPath'; }
    if (fileName === void 0) { fileName = 'emptyName'; }
    var file = filePath + fileName;
    var endLine = '\n';
    if (fs.existsSync(file)) {
        var linesArray = fs.readFileSync(file, 'utf8').split(endLine);
        var sArray = linesArray.filter(function (line) { return line.length > 0; });
        return sArray;
    }
    else {
        return [];
    }
}
exports.readLinesArray = readLinesArray;
//# sourceMappingURL=readLines.js.map