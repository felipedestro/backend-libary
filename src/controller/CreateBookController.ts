import { Request, Response } from "express";
import { CreateBookService } from "../services/CreateBookService";

export class CreateBookController {
	static async handle(req: Request, res: Response) {
		const { titulo, num_paginas, isbn, editora } = req.body;
		const _isbn = Number(isbn);
		const book = await CreateBookService.execute({ titulo, num_paginas, isbn: _isbn, editora });
		res.status(201);
		res.send(book);
	}
}
