import { Router, Request, Response } from "express";
import { ListBooksController } from "./controller/ListBooksController";
import { CreateBookController } from "./controller/CreateBookController";
import { DeleteBookController } from "./controller/DeleteBookController";
import { ListUniqueBookController } from "./controller/ListUniqueController";
import { UpdateBookController } from "./controller/UpdateBookController";

export const route = Router();

route.get("/", (req: Request, res: Response) => {
	res.send("Typescript Backend API Libary");
});

route.get("/livros", (req: Request, res: Response) => {
	ListBooksController.handle(req, res);
});

route.get("/livros/:id", (req: Request, res: Response) => {
	ListUniqueBookController.handle(req, res);
});

route.post("/livros", (req: Request, res: Response) => {
	CreateBookController.handle(req, res);
});

route.delete("/livros/:id", (req: Request, res: Response) => {
	DeleteBookController.handle(req, res);
});

route.put("/livros/:id", (req: Request, res: Response) => {
	UpdateBookController.handle(req, res);
});
