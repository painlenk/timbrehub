import { UserEntity } from "../user.entity";

export interface IUserRepository {
    createUser(user: UserEntity): Promise<UserEntity | null>,
}

//@TODO implementar o restante