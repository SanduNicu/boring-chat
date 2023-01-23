import express, { Request, Response, Application } from "express";
import cors from "cors";
import connect from "./config/database.js";
import dotenv from "dotenv";
// import { User as UserModel } from "./model/user.js";
// import { User as UserInterface } from "./types/types.js";

const app: Application = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const port = process.env.SERVER_PORT;

app.get("/register", (req: any, res: Response) => {
  const { email, password, name } = req;
  res.send("wip");
});

app.get("/login", (req: any, res: Response) => {
  const { email, password } = req;
  res.send("wip");
});

connect();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
