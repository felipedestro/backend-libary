import { Request, Response } from "express";
import { CreateBookService } from "../services/CreateBookService";

export class CreateBookController {
	static async handle(req: Request, res: Response) {
		const { title, pages, isbn, company } = req.body;
		const book = await CreateBookService.execute({ title, pages, isbn, company });
		res.status(201).send(book);
	}
}
