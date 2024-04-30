import { Request, Response } from "express";
import { ListUniqueBookService } from "../services/ListUniqueBookService";

export class ListUniqueBookController {
	static async handle(req: Request, res: Response) {
		const { id } = req.params;

		if (!id) {
			res.status(500).send("Internal Server Error!");
		}

		const book = await ListUniqueBookService.execute(Number(id));
		if (!book) {
			res.status(404);
			res.send("Livro não encontrado!");
		} else {
			res.status(200);
			res.send(book);
		}
	}
}
