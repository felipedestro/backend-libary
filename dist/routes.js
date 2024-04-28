"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const ListBooksController_1 = require("./controller/ListBooksController");
const CreateBookController_1 = require("./controller/CreateBookController");
const DeleteBookController_1 = require("./controller/DeleteBookController");
const ListUniqueController_1 = require("./controller/ListUniqueController");
const UpdateBookController_1 = require("./controller/UpdateBookController");
exports.route = (0, express_1.Router)();
exports.route.get("/", (req, res) => {
    res.send("Typescript Backend API Libary");
});
exports.route.get("/livros", (req, res) => {
    ListBooksController_1.ListBooksController.handle(req, res);
});
exports.route.get("/livros/:id", (req, res) => {
    ListUniqueController_1.ListUniqueBookController.handle(req, res);
});
exports.route.post("/livros", (req, res) => {
    CreateBookController_1.CreateBookController.handle(req, res);
});
exports.route.delete("/livros/:id", (req, res) => {
    DeleteBookController_1.DeleteBookController.handle(req, res);
});
exports.route.put("/livros/:id", (req, res) => {
    UpdateBookController_1.UpdateBookController.handle(req, res);
});
//# sourceMappingURL=routes.js.map