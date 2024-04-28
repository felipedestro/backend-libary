"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBookService = void 0;
const db_1 = __importDefault(require("../prisma/db"));
class DeleteBookService {
    static async execute(_id) {
        const book = await db_1.default.livros.delete({
            where: {
                id: _id,
            },
        });
        return book;
    }
}
exports.DeleteBookService = DeleteBookService;
//# sourceMappingURL=DeleteBookService.js.map