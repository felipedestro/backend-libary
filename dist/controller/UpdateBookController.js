"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookController = void 0;
const UpdateBookService_1 = require("../services/UpdateBookService");
class UpdateBookController {
    static async handle(req, res) {
        const { id } = req.body;
        const { titulo, num_paginas, isbn, editora } = req.body;
        const _isbn = Number(isbn);
        if (!id) {
            res.status(404);
            res.send("Código do Livro não localizado!");
        }
        else {
            UpdateBookService_1.UpdateBookService.execute(id, {
                titulo,
                num_paginas,
                isbn: _isbn,
                editora,
            });
            res.status(200);
            res.send({ mensagem: "Livro atualizado com sucesso!" });
        }
    }
}
exports.UpdateBookController = UpdateBookController;
//# sourceMappingURL=UpdateBookController.js.map