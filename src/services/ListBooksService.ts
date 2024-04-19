import prisma from "../prisma/db";

export class ListBookService {
	static async execute() {
		const books = await prisma.books.findMany();
		return books;
	}
}
