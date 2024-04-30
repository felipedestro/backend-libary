import prisma from "../prisma/db";

interface UpdateBookProps {
	titulo: string;
	num_paginas?: number;
	isbn: number;
	editora: string;
}

export class UpdateBookService {
	static async execute(_id: number, { titulo, num_paginas, isbn, editora }: UpdateBookProps) {
		const book = await prisma.livros.update({
			where: { id: _id },
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
