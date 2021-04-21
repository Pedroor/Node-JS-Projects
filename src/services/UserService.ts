import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  async create(email: string) {
    // Verificar se o usuario existe
    const usersRepository = getCustomRepository(UsersRepository);
    const userExists = await usersRepository.findOne({
      email,
    });
    // Se existir retornar User
    if (userExists) {
      return userExists;
    }

    const user = usersRepository.create({
      email,
    });
    // se não existir salvar no DB
    await usersRepository.save(user);
    return user;
  }
}

export { UsersService };
