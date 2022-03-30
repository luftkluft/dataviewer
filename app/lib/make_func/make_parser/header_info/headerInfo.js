"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerInfo = void 0;
function headerInfo(sVariableListLines, separator) {
    var sHeaderInfo = "";
    var viewLine = 0;
    var charCount = 0;
    var j = 0;
    for (j = 0; j < sVariableListLines.length; j++) {
        if (sVariableListLines[j] != ' ')
            if (sVariableListLines[j] != '#')
                if (sVariableListLines[j] != '\n')
                    if (sVariableListLines[j] != '\t') {
                        charCount++;
                    }
        if (sVariableListLines[j] == '#') {
            viewLine--;
        }
        if (sVariableListLines[j] == '\n' && sVariableListLines[j + 1] != '\n') {
            viewLine++;
            if (charCount > 0) {
                if (viewLine == 1) {
                    sHeaderInfo += '1';
                }
                if (viewLine == 0) {
                    sHeaderInfo += '0';
                }
            }
            viewLine = 0;
            charCount = 0;
        }
    }
    return sHeaderInfo;
}
exports.headerInfo = headerInfo;
//# sourceMappingURL=headerInfo.js.map