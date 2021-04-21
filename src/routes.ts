import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();
// Tipos de parametros
// Routes Params => Parametros de Rotas
// exemplo: http://localhost:3333/settings/1

// QueryParams => Filtros e buscas
// exemplo: http://localhost:3333/settings/1?search=algumacoisa

// BodyParams => Parametros enviados no corpo da requisição { JSON }

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);

export { routes };
