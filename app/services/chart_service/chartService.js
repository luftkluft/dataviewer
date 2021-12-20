"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartService = void 0;
var chartModel_1 = require("../../models/chartModel");
var chartsArray = [];
var chart = {};
var ChartService = (function () {
    function ChartService(_parserData) {
        this.parserData = _parserData;
    }
    ChartService.prototype.getChartOptions = function (chartKey) {
        if (chartKey === void 0) { chartKey = 0; }
        return new chartModel_1.ChartModel(this.parserData[chartKey]).getOptions();
    };
    ChartService.prototype.createChartObject = function (chartOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = chart;
                        return [4, chartOptions.chart.id];
                    case 1:
                        _a.divId = _d.sent();
                        _b = chart;
                        return [4, "<div id=\"" + chartOptions.chart.id + "\" class=\"list-group-item\"></div>"];
                    case 2:
                        _b.chartAreaDiv = _d.sent();
                        _c = chart;
                        return [4, chartOptions];
                    case 3:
                        _c.options = _d.sent();
                        return [4, chart];
                    case 4: return [2, _d.sent()];
                }
            });
        });
    };
    ChartService.prototype.createCharts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, options, chartObject, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(i < this.parserData.length)) return [3, 7];
                        return [4, this.getChartOptions(i)];
                    case 2:
                        options = _c.sent();
                        return [4, this.createChartObject(options)];
                    case 3:
                        chartObject = _c.sent();
                        _a = chartsArray;
                        _b = i;
                        return [4, chartObject];
                    case 4:
                        _a[_b] = _c.sent();
                        return [4, {}];
                    case 5:
                        chart = _c.sent();
                        _c.label = 6;
                    case 6:
                        i++;
                        return [3, 1];
                    case 7: return [2];
                }
            });
        });
    };
    ChartService.prototype.getCharts = function () {
        try {
            this.createCharts();
            return chartsArray;
        }
        catch (error) {
            console.log("getCharts(): " + error);
            return [];
        }
    };
    return ChartService;
}());
exports.ChartService = ChartService;
//# sourceMappingURL=chartService.js.map