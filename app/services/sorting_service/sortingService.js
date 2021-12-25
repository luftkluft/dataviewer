"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortingService = void 0;
var noSorting_1 = require("../../lib/no_sorting/noSorting");
var manualSorting_1 = require("../../lib/manual_sorting/manualSorting");
var SortingService = (function () {
    function SortingService(_parseredData) {
        this.parseredData = [];
        this.parseredData = _parseredData;
    }
    SortingService.prototype.sorting = function (sortAs) {
        if (sortAs === void 0) { sortAs = 'no_sorting'; }
        switch (sortAs) {
            case 'no_sorting':
                console.log("case 'no_sorting':");
                console.dir((0, noSorting_1.noSorting)(this.parseredData));
                return (0, noSorting_1.noSorting)(this.parseredData);
                break;
            case 'manual_sorting':
                return (0, manualSorting_1.manualSorting)(this.parseredData);
                break;
            default:
                return (0, noSorting_1.noSorting)(this.parseredData);
                break;
        }
    };
    return SortingService;
}());
exports.SortingService = SortingService;
//# sourceMappingURL=sortingService.js.map