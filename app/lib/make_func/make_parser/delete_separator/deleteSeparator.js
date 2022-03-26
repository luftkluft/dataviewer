"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSeparator = void 0;
function deleteSeparator(sLine, separator) {
    if (separator === void 0) { separator = '\''; }
    var sReturn = "";
    var i = 0;
    for (i = 0; i < sLine.length; i++) {
        if (sLine[i] == separator)
            continue;
        sReturn += sLine[i];
    }
    return sReturn;
}
exports.deleteSeparator = deleteSeparator;
//# sourceMappingURL=deleteSeparator.js.map