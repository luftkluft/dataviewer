"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
var ChartService_1 = require("../services/ChartService");
var MainController = (function () {
    function MainController() {
    }
    MainController.render = function () {
        return ChartService_1.ChartService.render();
    };
    return MainController;
}());
exports.MainController = MainController;
//# sourceMappingURL=mainController.js.map