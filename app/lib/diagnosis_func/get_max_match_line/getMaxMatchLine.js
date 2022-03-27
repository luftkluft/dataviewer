"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxMatchLine = void 0;
var rws_1 = require("../../../services/read_write_service/rws");
var deleteSeparator_1 = require("../../make_func/make_parser/delete_separator/deleteSeparator");
function getMaxMatchLine(sLines, errorLogLine, separator) {
    try {
        var readedLine = "";
        var match = 0;
        var maxMatch = 0;
        var maxMatchLine = "";
        var readedBits = "";
        var sLinesArray = [];
        var readedErrorBits = rws_1.RWS.readDataLineFromLog(errorLogLine);
        readedErrorBits = (0, deleteSeparator_1.deleteSeparator)(readedErrorBits, separator);
        sLinesArray = sLines.split('\n');
        var i = 0;
        for (i = 0; i < sLinesArray.length; i++) {
            readedBits = (0, deleteSeparator_1.deleteSeparator)(rws_1.RWS.readDataLineFromLog(sLinesArray[i]), separator);
            var j = 0;
            for (j = 0; j < readedBits.length; j++) {
                if (readedBits[j] == readedErrorBits[j]) {
                    match++;
                }
            }
            if (match > maxMatch) {
                maxMatch = match;
                maxMatchLine = sLinesArray[i];
            }
            match = 0;
        }
        return maxMatchLine;
    }
    catch (error) {
        return '';
    }
}
exports.getMaxMatchLine = getMaxMatchLine;
//# sourceMappingURL=getMaxMatchLine.js.map