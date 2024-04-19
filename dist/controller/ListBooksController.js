"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBooksController = void 0;
const ListBooksService_1 = require("../services/ListBooksService");
class ListBooksController {
    static async handle(req, res) {
        const books = await ListBooksService_1.ListBookService.execute();
        res.send(books);
    }
}
exports.ListBooksController = ListBooksController;
//# sourceMappingURL=ListBooksController.js.map