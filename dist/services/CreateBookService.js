"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookService = void 0;
const db_1 = __importDefault(require("../prisma/db"));
class CreateBookService {
    static async execute({ title, pages, isbn, company }) {
        if (!title || !isbn || !company) {
            throw new Error("Preencha os campos obrigatórios!");
        }
        const book = await db_1.default.books.create({
            data: {
                title,
                pages,
                isbn,
                company,
            },
        });
        return book;
    }
}
exports.CreateBookService = CreateBookService;
//# sourceMappingURL=CreateBookService.js.map