"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerInfo = void 0;
function headerInfo(sVariableListLines) {
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
        if (sVariableListLines[j] == '#')
            viewLine--;
        if (sVariableListLines[j] == '\n') {
            viewLine++;
            if (charCount) {
                sHeaderInfo += String(viewLine);
                lineCount++;
            }
            viewLine = 0;
        }
        if (sVariableListLines[j] == '#') {
            isWritingChars = false;
            continue;
        }
        if (sVariableListLines[j] == ' ' || sVariableListLines[j] == '\t')
            if (isWordCounted) {
                wordCount++;
                isWordCounted = false;
                if (wordCount < columnInLine && isWritingChars)
                    sReturn += "'";
            }
        if (sVariableListLines[j] == ' ')
            if (!charCount)
                continue;
        if (sVariableListLines[j] != ' ')
            if (sVariableListLines[j] != '#')
                if (sVariableListLines[j] != '\n')
                    if (sVariableListLines[j] != '\t') {
                        isWordCounted = true;
                        charCount++;
                    }
        if (isWritingChars)
            if (charCount)
                if (sVariableListLines[j] != '\t') {
                    if (sVariableListLines[j] == '\n') {
                        sReturn += "'";
                    }
                    else {
                        sReturn += sVariableListLines[j];
                    }
                }
        if (sVariableListLines[j] == '\n') {
            isWritingChars = true;
            isWordCounted = false;
            charCount = 0;
            wordCount = 0;
        }
    }
    return sHeaderInfo;
}
exports.headerInfo = headerInfo;
//# sourceMappingURL=headerInfo.js.map