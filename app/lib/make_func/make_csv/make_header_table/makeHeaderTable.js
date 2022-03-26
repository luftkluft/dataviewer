"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeHeaderTable = void 0;
var fs = require('fs');
var headerColumnDivider_1 = require("../../make_parser/header_column_divider/headerColumnDivider");
var deleteSeparator_1 = require("../../make_parser/delete_separator/deleteSeparator");
function makeHeaderTable(variablesListFile, separator) {
    if (variablesListFile === void 0) { variablesListFile = ''; }
    if (separator === void 0) { separator = "\'"; }
    var sVariableListLines = "";
    var sDeviderLines = "";
    var sReturn = "";
    var columnInLine = 3;
    if (fs.existsSync(variablesListFile)) {
        sVariableListLines = fs.readFileSync(variablesListFile, 'utf8');
    }
    else {
        return '';
    }
    sVariableListLines = (0, deleteSeparator_1.deleteSeparator)(sVariableListLines, "\r");
    sDeviderLines = (0, headerColumnDivider_1.headerColumnDivider)(sVariableListLines, separator);
    var step = 0;
    for (step = 1; step < columnInLine + 1; step++) {
        var count = 1;
        if (step == 1) {
            sReturn += "Адрес'";
        }
        if (step == 2) {
            sReturn += "\nИмя'";
        }
        if (step == 3) {
            sReturn += "\nКомментарий'";
        }
        var j = 0;
        for (j = 0; j < sDeviderLines.length; j++) {
            if (step == 1 && count == 1) {
                sReturn += sDeviderLines[j];
            }
            if (step == 2 && count == 2) {
                sReturn += sDeviderLines[j];
            }
            if (step == 3 && count == 3) {
                sReturn += sDeviderLines[j];
            }
            if (sDeviderLines[j] == separator) {
                count++;
                if (count >= 4) {
                    count = 1;
                }
            }
        }
    }
    return sReturn;
}
exports.makeHeaderTable = makeHeaderTable;
//# sourceMappingURL=makeHeaderTable.js.map