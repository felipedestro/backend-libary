"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookService = void 0;
const db_1 = __importDefault(require("../prisma/db"));
class UpdateBookService {
    static async execute(_id, { titulo, num_paginas, isbn, editora }) {
        const book = await db_1.default.livros.update({
            where: { id: _id },
            data: {
                titulo,
                num_paginas,
                isbn,
                editora,
            },
        });
        return book;
    }
}
exports.UpdateBookService = UpdateBookService;
//# sourceMappingURL=UpdateBookService.js.map