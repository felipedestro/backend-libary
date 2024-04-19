"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
exports.route = (0, express_1.Router)();
exports.route.get("/", (req, res) => {
    res.send("Typescript Backend API Libary");
});
//# sourceMappingURL=routes.js.map