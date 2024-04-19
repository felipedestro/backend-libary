import { Router, Request, Response } from "express";

export const route = Router();

route.get("/", (req: Request, res: Response) => {
	res.send("Express Typescript");
});
