"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require('jquery');
var mainController_1 = require("../controllers/mainController");
var html = mainController_1.MainController.render();
$(document).ready(function () {
    var divChartsArea = document.createElement('div');
    divChartsArea.id = 'charts-area';
    divChartsArea.innerHTML = html;
    var rootArea = document.getElementById('root');
    if (rootArea === null) {
        console.log("rootArea is null!");
    }
    else {
        rootArea.appendChild(divChartsArea);
    }
});
//# sourceMappingURL=index.js.map