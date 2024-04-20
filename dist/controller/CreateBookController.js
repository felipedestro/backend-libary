"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookController = void 0;
const CreateBookService_1 = require("../services/CreateBookService");
class CreateBookController {
    static async handle(req, res) {
        const { title, pages, isbn, company } = req.body;
        const book = await CreateBookService_1.CreateBookService.execute({ title, pages, isbn, company });
        res.status(201).send(book);
    }
}
exports.CreateBookController = CreateBookController;
//# sourceMappingURL=CreateBookController.js.map