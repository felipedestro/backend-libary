"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const ListBooksController_1 = require("./controller/ListBooksController");
const CreateBookController_1 = require("./controller/CreateBookController");
exports.route = (0, express_1.Router)();
exports.route.get("/", (req, res) => {
    res.send("Typescript Backend API Libary");
});
exports.route.get("/livros", (req, res) => {
    ListBooksController_1.ListBooksController.handle(req, res);
});
exports.route.post("/livros", (req, res) => {
    CreateBookController_1.CreateBookController.handle(req, res);
});
//# sourceMappingURL=routes.js.map