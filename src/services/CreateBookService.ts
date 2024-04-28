import prisma from "../prisma/db";

interface CreateBooksProps {
	titulo: string;
	num_paginas?: number;
	isbn: number;
	editora: string;
}

export class CreateBookService {
	static async execute({ titulo, num_paginas, isbn, editora }: CreateBooksProps) {
		if (!titulo || !isbn || !editora) {
			throw new Error("Preencha os campos obrigatórios!");
		}

		const book = await prisma.livros.create({
			data: {
				titulo,
				num_paginas,
				isbn,
				editora,
			},
		});

		return book;
	}
}
