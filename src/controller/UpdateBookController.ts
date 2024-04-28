import { Request, Response } from "express";
import { UpdateBookService } from "../services/UpdateBookService";

export class UpdateBookController {
	static async handle(req: Request, res: Response) {
		const { id } = req.body;
		const { titulo, num_paginas, isbn, editora } = req.body;
		const _isbn = Number(isbn);

		if (!id) {
			res.status(404);
			res.send("Código do Livro não localizado!");
		} else {
			UpdateBookService.execute(id, {
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
