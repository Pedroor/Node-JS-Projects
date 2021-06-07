import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes";

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração, update
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica, exemplo: senha de um usuário.
 */

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    info: {
      title: "Chat-Service Using Websocket",
      version: "1.0.0",
      description: "Customer API desenvironment in NLW 5",
      contact: {
        name: "Pedro Arthur",
      },
      servers: [
        {
          url: "http://localhost:3333",
        },
      ],
    },
  },
  apis: ["./routes/*.ts"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html");
});

const http = createServer(app); // Criando protocolo http
const io = new Server(http); // Criando protocolo ws

io.on("connection", (socket: Socket) => {
  // console.log("Se conectou", socket.id);
});

app.use(express.json());

app.use(routes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
export { http, io };
