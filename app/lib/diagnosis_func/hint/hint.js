"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hint = void 0;
var getAddressByPositionFromLines_1 = require("../../make_func/make_parser/get_address_by_position_from_lines/getAddressByPositionFromLines");
var getNameByPositionFromLines_1 = require("../../make_func/make_parser/get_name_by_position_from_lines/getNameByPositionFromLines");
var getCommentByPositionFromLines_1 = require("../../make_func/make_parser/get_comment_by_position_from_lines/getCommentByPositionFromLines");
var matchLines100 = function () {
    var sHint = "\u041D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u043E\u0441\u0442\u0435\u0439 \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u043E.\n\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u044B \u0437\u0430\u0449\u0438\u0442\u044B \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C\u043E\u0432.\n\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u044B\u0435 \u0440\u0435\u043B\u0435 \u0438 \u043F\u0440\u0435\u0434\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C\u043E\u0432.\n\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0441\u0436\u0430\u0442\u043E\u0433\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0430.\n\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u043D\u0430\u0447\u0430\u043B\u043E \u0446\u0438\u043A\u043B\u0430, \u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0430\u0436\u0430\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \u041F\u0443\u0441\u043A?";
    return sHint;
};
var hintsWord = function (hashDataLog, sSource, sError, charCount) {
    var sHint = '\n';
    sHint += "\u0410\u0434\u0440\u0435\u0441: " + (0, getAddressByPositionFromLines_1.getAddressByPositionFromLines)(hashDataLog, charCount) + "\n";
    sHint += "\u0418\u043C\u044F: " + (0, getNameByPositionFromLines_1.getNameByPositionFromLines)(hashDataLog, charCount) + "\n";
    sHint += "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: " + (0, getCommentByPositionFromLines_1.getCommentByPositionFromLines)(hashDataLog, charCount) + "\n";
    sHint += "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432\u043E\u0439 \u0446\u0438\u043A\u043B\u043E\u0433\u0440\u0430\u043C\u043C\u0435: " + sSource + "\n";
    sHint += "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u0430\u0432\u0430\u0440\u0438\u0439\u043D\u043E\u043C \u043B\u043E\u0433\u0435: " + sError + "\n";
    return sHint;
};
var hintsBit = function (hashDataLog, maxMatchLineI, errorLogLineI, charCount) {
    var sHint = '\n';
    sHint += "\u0410\u0434\u0440\u0435\u0441: " + (0, getAddressByPositionFromLines_1.getAddressByPositionFromLines)(hashDataLog, charCount) + "\n";
    sHint += "\u0418\u043C\u044F: " + (0, getNameByPositionFromLines_1.getNameByPositionFromLines)(hashDataLog, charCount) + "\n";
    sHint += "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: " + (0, getCommentByPositionFromLines_1.getCommentByPositionFromLines)(hashDataLog, charCount) + "\n";
    sHint += "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432\u043E\u0439 \u0446\u0438\u043A\u043B\u043E\u0433\u0440\u0430\u043C\u043C\u0435: " + maxMatchLineI + "\n";
    sHint += "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u0430\u0432\u0430\u0440\u0438\u0439\u043D\u043E\u043C \u043B\u043E\u0433\u0435: " + errorLogLineI + "\n";
    return sHint;
};
function hint(hashDataLog, maxMatchLine, errorMainLine) {
    try {
        var sHint = '';
        var match = 0;
        var charMatch = 0;
        var startData = false;
        var charCount = 0;
        var delemiter_1 = "'";
        var i = 0;
        for (i = 0; i < maxMatchLine.length; i++) {
            if (maxMatchLine[i] == delemiter_1)
                startData = true;
            if (startData) {
                if (maxMatchLine[i] == errorMainLine[i]) {
                    charMatch++;
                }
                charCount++;
            }
        }
        match = charMatch / charCount * 100;
        match = Math.floor(match * 100) / 100;
        sHint = "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0435 " + match.toString() + "%\n";
        if (match == 100) {
            sHint += matchLines100();
        }
        else {
            startData = false;
            charCount = 0;
            for (i = 0; i < maxMatchLine.length; i++) {
                if (maxMatchLine[i] == delemiter_1) {
                    startData = true;
                    charCount++;
                }
                if (startData) {
                    if (maxMatchLine[i] == delemiter_1 && maxMatchLine[i + 7] == delemiter_1)
                        if (maxMatchLine[i + 2] != delemiter_1) {
                            var isMatch = true;
                            var j = 0;
                            for (j = 0; j < 7; j++) {
                                if (maxMatchLine[i + j] != errorMainLine[i + j])
                                    isMatch = false;
                            }
                            if (isMatch) {
                                continue;
                            }
                            else {
                                sHint += hintsWord(hashDataLog, maxMatchLine.substr(i + 1, 6), errorMainLine.substr(i + 1, 6), charCount);
                                continue;
                            }
                        }
                    if (maxMatchLine[i] != errorMainLine[i])
                        if (maxMatchLine[i - 1] == '\'' && maxMatchLine[i + 1] == '\'') {
                            sHint += hintsBit(hashDataLog, maxMatchLine[i], errorMainLine[i], charCount);
                        }
                }
            }
        }
        return sHint;
    }
    catch (error) {
        return '';
    }
}
exports.hint = hint;
//# sourceMappingURL=hint.js.map