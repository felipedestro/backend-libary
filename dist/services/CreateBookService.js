"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookService = void 0;
const db_1 = __importDefault(require("../prisma/db"));
class CreateBookService {
    static async execute({ titulo, num_paginas, isbn, editora }) {
        if (!titulo || !isbn || !editora) {
            throw new Error("Preencha os campos obrigatórios!");
        }
        const book = await db_1.default.livros.create({
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
exports.CreateBookService = CreateBookService;
//# sourceMappingURL=CreateBookService.js.map