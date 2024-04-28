"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookController = void 0;
const CreateBookService_1 = require("../services/CreateBookService");
class CreateBookController {
    static async handle(req, res) {
        const { titulo, num_paginas, isbn, editora } = req.body;
        const _isbn = Number(isbn);
        const book = await CreateBookService_1.CreateBookService.execute({ titulo, num_paginas, isbn: _isbn, editora });
        res.status(201);
        res.send(book);
    }
}
exports.CreateBookController = CreateBookController;
//# sourceMappingURL=CreateBookController.js.map