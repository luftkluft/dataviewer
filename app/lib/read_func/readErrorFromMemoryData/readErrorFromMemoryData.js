"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readErrorFromMemoryData = void 0;
var constants_1 = require("../../../constants/constants");
var fs = require('fs');
var appRoot = require('app-root-path');
var errorsMemoryPath = appRoot + constants_1.PATH_TO_ERROR_MEMORY;
var file = errorsMemoryPath + 'errors.json';
var JSONdb = require('simple-json-db');
var db = new JSONdb(file);
function readErrorFromMemoryData(sErrorKey) {
    if (sErrorKey === void 0) { sErrorKey = 'defaultErrorKey'; }
    if (db.get(sErrorKey)) {
        return db.get(sErrorKey);
    }
    else {
        return '';
    }
}
exports.readErrorFromMemoryData = readErrorFromMemoryData;
//# sourceMappingURL=readErrorFromMemoryData.js.map