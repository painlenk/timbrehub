import { Injectable } from "@nestjs/common";
import { IUserRepository } from "../../domain/repository/repository";
import { PrismaService } from "src/shared/infra/prisma/prisma.service";
import { UserEntity } from "../../domain/user.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class PrismaUserRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async createUser(user: UserEntity) {
        const userCreated = await this.prisma.user.create({
            data: {
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),

            } as Prisma.UserUncheckedCreateInput
        })

        return new UserEntity(
            userCreated.name,
            userCreated.email,
            userCreated.password,
            userCreated.id,
            userCreated.createdAt,
            userCreated.updatedAt

        )
    }


}
