"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18n = void 0;
var constants_1 = require("../../constants");
var getCurrentLocale_1 = require("../../lib/get_current_locale/getCurrentLocale");
var fs = require('fs');
var appRoot = require('app-root-path');
var Alert = require('electron-alert');
var swalOptions = {
    position: 'top-end',
    title: 'Title',
    text: 'Text',
    icon: 'warning',
    showConfirmButton: true,
    timer: 30000,
};
var I18n = (function () {
    function I18n() {
    }
    I18n.t = function (_word) {
        if (_word === void 0) { _word = constants_1.BAD_STRING; }
        try {
            var currentLocale = (0, getCurrentLocale_1.getCurrentLocale)();
            switch (currentLocale) {
                case constants_1.EN_LOCALE:
                    try {
                        var data = fs.readFileSync(appRoot + constants_1.PATH_TO_LOCALES + constants_1.EN_WORDS_FILE, 'utf8');
                        var en_words = JSON.parse(data);
                        if (en_words[_word] === undefined) {
                            swalOptions.title = "I18n.t()";
                            swalOptions.text = "En word not found!";
                            Alert.fireToast(swalOptions);
                            return constants_1.BAD_STRING;
                        }
                        return en_words[_word];
                    }
                    catch (error) {
                        swalOptions.title = "I18n.t()";
                        swalOptions.text = "" + error;
                        Alert.fireToast(swalOptions);
                        return constants_1.BAD_STRING;
                    }
                    break;
                case constants_1.RU_LOCALE:
                    try {
                        var data = fs.readFileSync(appRoot + constants_1.PATH_TO_LOCALES + constants_1.RU_WORDS_FILE, 'utf8');
                        var ru_words = JSON.parse(data);
                        if (ru_words[_word] === undefined) {
                            swalOptions.title = "I18n.t()";
                            swalOptions.text = "Ru word not found!";
                            Alert.fireToast(swalOptions);
                            return constants_1.BAD_STRING;
                        }
                        return ru_words[_word];
                    }
                    catch (error) {
                        swalOptions.title = "I18n.t()";
                        swalOptions.text = "" + error;
                        Alert.fireToast(swalOptions);
                        return constants_1.BAD_STRING;
                    }
                    break;
                default: {
                    swalOptions.title = "I18n.t()";
                    swalOptions.text = "Language not found!";
                    Alert.fireToast(swalOptions);
                    return constants_1.BAD_STRING;
                }
            }
        }
        catch (error) {
            swalOptions.title = "I18n.t()";
            swalOptions.text = "" + error;
            Alert.fireToast(swalOptions);
            return constants_1.BAD_STRING;
        }
    };
    return I18n;
}());
exports.I18n = I18n;
//# sourceMappingURL=i18nService.js.map