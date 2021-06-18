/// <reference types="mongoose" />
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").UserDocument>;
    findAll(): import("mongoose").Query<import("./entities/user.entity").UserDocument[], import("./entities/user.entity").UserDocument, {}>;
    findOne(id: string): import("mongoose").Query<import("./entities/user.entity").UserDocument, import("./entities/user.entity").UserDocument, {}>;
    update(id: string, updateUserDto: UpdateUserDto): import("mongoose").Query<import("./entities/user.entity").UserDocument, import("./entities/user.entity").UserDocument, {}>;
    remove(id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
