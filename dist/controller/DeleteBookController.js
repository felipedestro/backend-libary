"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBookController = void 0;
const DeleteBookService_1 = require("../services/DeleteBookService");
class DeleteBookController {
    static async handle(req, res) {
        const { id } = req.params;
        const book = DeleteBookService_1.DeleteBookService.execute(id);
        if (!book) {
            res.status(404);
            res.send("Livro não encontrado");
        }
        res.status(200);
        res.send({ mensagem: "Livro deletado com sucesso!" });
    }
}
exports.DeleteBookController = DeleteBookController;
//# sourceMappingURL=DeleteBookController.js.map