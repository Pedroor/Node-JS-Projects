import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

class Setting {
  id: string;
  username: string;
  chat: boolean;
  updated_at: Date;
  created_at: Date;
}

export { Setting };
