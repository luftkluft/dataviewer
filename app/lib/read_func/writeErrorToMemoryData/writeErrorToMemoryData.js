"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeErrorToMemoryData = void 0;
var constants_1 = require("../../../constants/constants");
var fs = require('fs');
var appRoot = require('app-root-path');
var errorsMemoryPath = appRoot + constants_1.PATH_TO_ERROR_MEMORY;
var file = errorsMemoryPath + 'errors.json';
var JSONdb = require('simple-json-db');
var db = new JSONdb(file);
function writeErrorToMemoryData(sErrorKey, sErrorMessage) {
    if (sErrorKey === void 0) { sErrorKey = 'defaultErrorKey'; }
    if (sErrorMessage === void 0) { sErrorMessage = 'defaultErrorMessage'; }
    db.set(sErrorKey, sErrorMessage);
    if (db.get(sErrorKey)) {
        return db.get(sErrorKey);
    }
    else {
        return '';
    }
}
exports.writeErrorToMemoryData = writeErrorToMemoryData;
//# sourceMappingURL=writeErrorToMemoryData.js.map