import { Injectable } from "@nestjs/common";
import { UserService } from "../services/user.service";


@Injectable()
export class UserUseCase {
    constructor(private readonly userService: UserService) { }

    async createUser(user: any) {
        return await this.userService.createUser(user.name, user.email, user.password)
    }
}
