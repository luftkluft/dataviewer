"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortingService = void 0;
var noSorting_1 = require("../../lib/no_sorting/noSorting");
var manualSorting_1 = require("../../lib/manual_sorting/manualSorting");
var SortingService = (function () {
    function SortingService(_parserData) {
        this.parserData = [];
        this.parserData = _parserData;
    }
    SortingService.prototype.noSortingData = function () {
        (0, noSorting_1.noSorting)(this.parserData);
    };
    SortingService.prototype.manualSortingData = function () {
        (0, manualSorting_1.manualSorting)(this.parserData);
    };
    return SortingService;
}());
exports.SortingService = SortingService;
//# sourceMappingURL=sortingService.js.map