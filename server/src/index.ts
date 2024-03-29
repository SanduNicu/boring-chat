import express, { Request, Response } from "express";
import http from "http";
import { WebSocketServer } from "ws";
import bodyParser from "body-parser";
import cors from "cors";
import register from "./api/auth/register";
import login from "./api/auth/login";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!");
});

app.post("/register", register);
app.post("/login", login);

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message: string) => {
    //log the received message and send it back to the client
    console.log("received: %s", message);
    ws.send(`${message}`);
  });

  //send immediatly a feedback to the incoming connection
  // ws.send("Hi there, I am a WebSocket server");
});

//start our server
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}: `);
});
