import { Controller, Post } from "@nestjs/common";
import { UserUseCase } from "../../application/use-cases/user.use-case";

@Controller('/user')
export class UserController {
    constructor(private readonly userUseCase: UserUseCase) { }

    @Post('/create')
    async create() {
        const user = await this.userUseCase.createUser({ name: 'teste usuário', email: 'emailTeste@teste.com', password: '123456' })
        return user
    }
}