import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "../../domain/repository/repository";
import { UserEntity } from "../../domain/user.entity";

@Injectable()
export class UserService {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository) { }

    async createUser(name: string, email: string, password: string) {
        const user = new UserEntity(name, email, password)
        return await this.userRepository.createUser(user)
    }
}