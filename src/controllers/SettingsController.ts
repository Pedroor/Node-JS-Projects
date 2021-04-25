import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

/**
 * Tipos de Parâmetros:
 * Routes Params => Parâmetros de rotas
 * http://localhost:8080/repositories/1
 *
 * Query Params => Filtros e buscas, com estrutura de chave e valor
 * http://localhost:8080/repositories/1?search=algumacoisa&outra
 *
 * Body Params => Inserção de objetos dentro da requisição, representado por JSON
 *  => {
 *
 *  }
 */

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingsService();

    // Tratando o possível erro do SettingsService quando há um usuário já cadastrado
    try {
      const settings = await settingsService.create({ chat, username });

      return response.json(settings);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async findByUsername(request: Request, response: Response) {
    const { username } = request.params;

    const settingsService = new SettingsService();

    const settings = await settingsService.findByUsername(username);

    return response.json(settings);
  }

  async update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.update(username, chat);
    return response.json(settings);
  }
}

export { SettingsController };
