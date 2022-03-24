"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisService = void 0;
var testing_1 = require("../../lib/diagnosis_func/testing/testing");
var DiagnosisService = (function () {
    function DiagnosisService() {
    }
    DiagnosisService.testing = function () {
        return (0, testing_1.testing)();
    };
    return DiagnosisService;
}());
exports.DiagnosisService = DiagnosisService;
//# sourceMappingURL=diagnosisService.js.map