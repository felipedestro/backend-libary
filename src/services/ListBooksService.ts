import prisma from "../prisma/db";

export class ListBookService {
	static async execute() {
		const books = await prisma.livros.findMany();
		return books;
	}
}
