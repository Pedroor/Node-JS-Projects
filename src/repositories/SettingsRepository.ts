import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Settings";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository };
