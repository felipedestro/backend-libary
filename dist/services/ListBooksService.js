"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBookService = void 0;
const db_1 = __importDefault(require("../prisma/db"));
class ListBookService {
    static async execute() {
        const books = await db_1.default.livros.findMany();
        return books;
    }
}
exports.ListBookService = ListBookService;
//# sourceMappingURL=ListBooksService.js.map