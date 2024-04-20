import prisma from "../prisma/db";

interface CreateBooksProps {
	title: string;
	pages?: number;
	isbn: number;
	company: string;
}

export class CreateBookService {
	static async execute({ title, pages, isbn, company }: CreateBooksProps) {
		if (!title || !isbn || !company) {
			throw new Error("Preencha os campos obrigatórios!");
		}

		const book = await prisma.books.create({
			data: {
				title,
				pages,
				isbn,
				company,
			},
		});

		return book;
	}
}
