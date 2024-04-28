import prisma from "../prisma/db";

export class DeleteBookService {
	static async execute(_id: string) {
		const book = await prisma.livros.delete({
			where: {
				id: _id,
			},
		});

		return book;
	}
}
