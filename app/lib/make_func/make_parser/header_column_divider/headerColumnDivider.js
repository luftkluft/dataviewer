"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerColumnDivider = void 0;
var checkSeparator = function (sLines, separator) {
    var sResult = '';
    var i = 0;
    for (i = 0; i < sLines.length; i++) {
        if (sLines[i - 1] == separator && sLines[i] == separator) {
            continue;
        }
        sResult += sLines[i];
    }
    return sResult;
};
function headerColumnDivider(sVariableListLines, separator) {
    if (sVariableListLines === void 0) { sVariableListLines = ''; }
    var sReturn = "";
    var sHeaderInfo = "";
    var charCount = 0;
    var wordCount = 0;
    var isWritingChars = true;
    var isWordCounted = false;
    var columnInLine = 3;
    var lineCount = 0;
    var viewLine = 0;
    var j = 0;
    for (j = 0; j < sVariableListLines.length; j++) {
        if (sVariableListLines[j] == '#') {
            isWritingChars = false;
            continue;
        }
        if (sVariableListLines[j] == ' ' || sVariableListLines[j] == '\t') {
            if (isWordCounted) {
                wordCount++;
                isWordCounted = false;
                if (wordCount < columnInLine && isWritingChars) {
                    sReturn += separator;
                }
            }
        }
        if (sVariableListLines[j] == ' ') {
            if (!charCount) {
                continue;
            }
        }
        if (sVariableListLines[j] != ' ') {
            if (sVariableListLines[j] != '#') {
                if (sVariableListLines[j] != '\n') {
                    if (sVariableListLines[j] != '\t') {
                        isWordCounted = true;
                        charCount++;
                    }
                }
            }
        }
        if (isWritingChars) {
            if (charCount) {
                if (sVariableListLines[j] != '\t') {
                    if (sVariableListLines[j] == '\n') {
                        sReturn += separator;
                    }
                    else {
                        sReturn += sVariableListLines[j];
                    }
                }
            }
        }
        if (sVariableListLines[j] == '\n') {
            isWritingChars = true;
            isWordCounted = false;
            charCount = 0;
            wordCount = 0;
        }
    }
    sReturn = checkSeparator(sReturn, separator);
    return sReturn;
}
exports.headerColumnDivider = headerColumnDivider;
//# sourceMappingURL=headerColumnDivider.js.map