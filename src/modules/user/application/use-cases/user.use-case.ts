import { Injectable } from "@nestjs/common";
import { UserEntity } from "../domain/user.entity";

@Injectable()
export class UserUseCase {
    constructor() { }

    async createUser(user: any) {
        const userToCreate = new UserEntity(user.name, user.email, user.password)
        const userCreated = userToCreate.getUser()

    }
}
