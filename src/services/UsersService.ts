import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async findByEmail<User>(email: string) {
    const userExists = await this.usersRepository.findOne({
      email,
    });
    if (userExists) {
      return userExists;
    }
  }
  async create(email: string) {
    // Verificar se o usuario existe

    const userExists = await this.usersRepository.findOne({
      email,
    });
    // Se existir retornar User
    if (userExists) {
      return userExists;
    }

    const user = this.usersRepository.create({
      email,
    });
    // se não existir salvar no DB
    await this.usersRepository.save(user);
    return user;
  }
}

export { UsersService };
