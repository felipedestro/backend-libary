import "dotenv/config";
import express from "express";
import { route } from "./routes";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(route);

app.listen(PORT, () => console.log("listing port: " + PORT));
