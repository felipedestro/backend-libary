import { Router, Request, Response } from "express";
import { ListBooksController } from "./controller/ListBooksController";

export const route = Router();

route.get("/", (req: Request, res: Response) => {
	res.send("Typescript Backend API Libary");
});

route.get("/livros", (req: Request, res: Response) => {
	ListBooksController.handle(req, res);
});
