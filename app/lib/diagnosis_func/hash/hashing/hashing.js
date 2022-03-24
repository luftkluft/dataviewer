"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashing = void 0;
function replaceAt(str, index, ch) {
    return str.replace(/./g, function (c, i) { return i == index ? ch : c; });
}
function hashing(sLines, deep) {
    if (sLines === void 0) { sLines = ''; }
    if (deep === void 0) { deep = 1; }
    var sReturn = '';
    var hashSimbol = '@';
    var isStartHash = false;
    var endLine = '\n';
    var linesArray = sLines.split(endLine);
    if (linesArray.length <= (deep + 1)) {
        return '';
    }
    var i = 0;
    for (i = 0; i < linesArray.length - deep; i++) {
        var j = 0;
        for (j = 0; j < linesArray[i].length; j++) {
            if (linesArray[i][j] == '\'') {
                isStartHash = true;
            }
            if (j == linesArray[i].length - 1) {
                isStartHash = false;
            }
            if (isStartHash) {
                var k = 0;
                for (k = 0; k < deep; k++) {
                    if (linesArray[i][j] == linesArray[i + k][j]) {
                        continue;
                    }
                    else {
                        linesArray[i] = replaceAt(linesArray[i], j, hashSimbol);
                    }
                }
            }
        }
    }
    for (i = 0; i < linesArray.length - deep; i++) {
        sReturn += linesArray[i] + '\n';
    }
    return sReturn;
}
exports.hashing = hashing;
//# sourceMappingURL=hashing.js.map