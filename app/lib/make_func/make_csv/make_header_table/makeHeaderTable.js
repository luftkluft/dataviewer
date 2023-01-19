"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeHeaderTable = void 0;
var fs = require('fs');
var headerColumnDivider_1 = require("../../make_parser/header_column_divider/headerColumnDivider");
var deleteSeparator_1 = require("../../make_parser/delete_separator/deleteSeparator");
function makeHeaderTable(variablesListFile, separator) {
    var sVariableListLines = "";
    var sDeviderLines = "";
    var sReturn = "";
    var columnInLine = 3;
    var addressCount = 0;
    var nameCount = 0;
    var commentCount = 0;
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
                if (count == 1) {
                    addressCount++;
                }
                if (count == 2) {
                    nameCount++;
                }
                if (count == 3) {
                    commentCount++;
                }
                count++;
                if (count >= 4) {
                    count = 1;
                }
            }
        }
    }
    if (addressCount == nameCount && addressCount == commentCount) {
        return sReturn;
    }
    else {
        return "Bad header ".concat(addressCount, ":").concat(nameCount, ":").concat(commentCount, "! Check variable list!");
    }
}
exports.makeHeaderTable = makeHeaderTable;
//# sourceMappingURL=makeHeaderTable.js.map