import prisma from "../prisma/db";

export class ListUniqueBookService {
	static async execute(_id: number) {
		const book = prisma.livros.findUnique({
			where: {
				id: _id,
			},
		});

		return book;
	}
}
