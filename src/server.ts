import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import "./database";
import { routes } from "./routes";

const app = express();
const http = createServer(app); // criando protocolo HTTP
const io = new Server(http); // criando protocolo de Websocket

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
});

app.use(express.json());

app.use(routes);

http.listen(3333, () => console.log("SERVER is running on port 3333"));
