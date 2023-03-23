import express, { Request, Response } from "express";
import http from "http";
import { WebSocketServer } from "ws";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!");
});

wss.on("connection", (ws) => {
  console.log('New client connected');
  
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
