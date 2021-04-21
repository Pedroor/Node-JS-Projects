import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();
// Tipos de parametros
// Routes Params => Parametros de Rotas
// exemplo: http://localhost:3333/settings/1

// QueryParams => Filtros e buscas
// exemplo: http://localhost:3333/settings/1?search=algumacoisa

// BodyParams => Parametros enviados no corpo da requisição { JSON }

routes.post("/settings", settingsController.create);

export { routes };
