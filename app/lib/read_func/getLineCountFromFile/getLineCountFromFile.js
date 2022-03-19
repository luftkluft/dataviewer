"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLineCountFromFile = void 0;
var fs = require('fs');
function getLineCountFromFile(filePath, fileName) {
    if (filePath === void 0) { filePath = 'emptyPath'; }
    if (fileName === void 0) { fileName = 'emptyName'; }
    var file = filePath + fileName;
    var endLine = '\n';
    if (fs.existsSync(file)) {
        var linesArray = fs.readFileSync(file, 'utf8').split(endLine);
        var linesCount = linesArray.filter(function (line) { return line.length > 0; }).length;
        return linesCount;
    }
    else {
        return -1;
    }
}
exports.getLineCountFromFile = getLineCountFromFile;
//# sourceMappingURL=getLineCountFromFile.js.map