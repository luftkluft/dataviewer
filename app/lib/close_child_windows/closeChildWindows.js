"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeChildWindows = void 0;
function closeChildWindows(mainWindow) {
    var childWindows = mainWindow.getChildWindows();
    childWindows.forEach(function (item) {
        item.close();
    });
}
exports.closeChildWindows = closeChildWindows;
//# sourceMappingURL=closeChildWindows.js.map