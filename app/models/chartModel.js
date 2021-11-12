"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartModel = void 0;
var ChartModel = (function () {
    function ChartModel(options) {
        this.chartOptions = options;
    }
    ChartModel.prototype.dataCorrector = function (options) {
        return options;
    };
    ChartModel.prototype.getOptions = function () {
        return this.dataCorrector(this.chartOptions);
    };
    return ChartModel;
}());
exports.ChartModel = ChartModel;
//# sourceMappingURL=chartModel.js.map