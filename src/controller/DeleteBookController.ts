import { Request, Response } from "express";
import { DeleteBookService } from "../services/DeleteBookService";

export class DeleteBookController {
	static async handle(req: Request, res: Response) {
		const { id } = req.params;
		const book = DeleteBookService.execute(id);

		if (!book) {
			res.status(404);
			res.send("Livro não encontrado");
		}
		res.status(200);
		res.send({ mensagem: "Livro deletado com sucesso!" });
	}
}
