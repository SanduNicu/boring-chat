import express, { Request, Response, Application } from "express";
import { WebSocketServer } from "ws";

const app: Application = express();
const wss = new WebSocketServer({ port: 8080 });

const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!");
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});
