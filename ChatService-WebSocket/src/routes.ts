import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

/**
 * @swagger
 * /settings:
 *   get:
 *     summary: Returns the list of all the books
 *     responses:
 *       '200':
 *         description: The list of the books
 *         content:
 *           application/json:
 *
 */
routes.get("/settings/:username", settingsController.findByUsername);
routes.post("/settings", settingsController.create);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };
