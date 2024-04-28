"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUniqueBookController = void 0;
const ListUniqueBookService_1 = require("../services/ListUniqueBookService");
class ListUniqueBookController {
    static async handle(req, res) {
        const { id } = req.params;
        if (!id) {
            res.status(500).send("Internal Server Error!");
        }
        const book = await ListUniqueBookService_1.ListUniqueBookService.execute(id);
        if (!book) {
            res.status(404);
            res.send("Livro não encontrado!");
        }
        else {
            res.status(200);
            res.send(book);
        }
    }
}
exports.ListUniqueBookController = ListUniqueBookController;
//# sourceMappingURL=ListUniqueController.js.map