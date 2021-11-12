"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuTemplate = void 0;
var constants_1 = require("../../../constants/constants");
var i18nService_1 = require("../../../services/i18n_service/i18nService");
var menuFunctions_1 = require("../menu_functions/menuFunctions");
var getCurrentLocale_1 = require("../../../lib/get_current_locale/getCurrentLocale");
function menuTemplate() {
    var menuTemplate;
    return (menuTemplate = [
        {
            label: i18nService_1.I18n.t('file'),
            submenu: [
                {
                    label: i18nService_1.I18n.t('open'),
                    click: menuFunctions_1.fileOpen,
                },
                {
                    type: 'separator',
                },
                {
                    label: i18nService_1.I18n.t('exit'),
                    click: menuFunctions_1.fileExit,
                },
            ],
        },
        {
            label: i18nService_1.I18n.t('parser'),
            submenu: [
                {
                    label: i18nService_1.I18n.t('csv'),
                    click: menuFunctions_1.csvParser,
                },
            ],
        },
        {
            label: i18nService_1.I18n.t('sorting'),
            submenu: [
                {
                    label: i18nService_1.I18n.t('no_sorting'),
                    click: menuFunctions_1.noSorting,
                },
                {
                    label: i18nService_1.I18n.t('manual'),
                    click: menuFunctions_1.manualSorting,
                },
            ],
        },
        {
            label: i18nService_1.I18n.t('language'),
            submenu: [
                {
                    label: i18nService_1.I18n.t('rus_menu'),
                    click: menuFunctions_1.setRusLanguage,
                    enabled: !(constants_1.RU_LOCALE === (0, getCurrentLocale_1.getCurrentLocale)()),
                },
                {
                    label: i18nService_1.I18n.t('en_menu'),
                    click: menuFunctions_1.setEnLanguage,
                    enabled: !(constants_1.EN_LOCALE === (0, getCurrentLocale_1.getCurrentLocale)()),
                },
            ],
        },
        {
            label: i18nService_1.I18n.t('help'),
            submenu: [
                {
                    label: i18nService_1.I18n.t('about'),
                    click: menuFunctions_1.about,
                },
                {
                    label: i18nService_1.I18n.t('code'),
                    click: menuFunctions_1.codeGithub,
                },
                {
                    label: i18nService_1.I18n.t('change_app_mode'),
                    click: menuFunctions_1.changeAppMode,
                },
            ],
        },
    ]);
}
exports.menuTemplate = menuTemplate;
//# sourceMappingURL=menuTemplate.js.map