import { Router, Request, Response } from "express";
import { ListBooksController } from "./controller/ListBooksController";
import { CreateBookController } from "./controller/CreateBookController";

export const route = Router();

route.get("/", (req: Request, res: Response) => {
	res.send("Typescript Backend API Libary");
});

route.get("/livros", (req: Request, res: Response) => {
	ListBooksController.handle(req, res);
});

route.post("/livros", (req: Request, res: Response) => {
	CreateBookController.handle(req, res);
});
