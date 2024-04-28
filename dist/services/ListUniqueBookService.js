"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUniqueBookService = void 0;
const db_1 = __importDefault(require("../prisma/db"));
class ListUniqueBookService {
    static async execute(_id) {
        const book = db_1.default.livros.findUnique({
            where: {
                id: _id,
            },
        });
        return book;
    }
}
exports.ListUniqueBookService = ListUniqueBookService;
//# sourceMappingURL=ListUniqueBookService.js.map