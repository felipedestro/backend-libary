import { ListBookService } from "../services/ListBooksService";
import { Request, Response } from "express";

export class ListBooksController {
	static async handle(req: Request, res: Response) {
		const books = await ListBookService.execute();
		res.send(books);
	}
}
