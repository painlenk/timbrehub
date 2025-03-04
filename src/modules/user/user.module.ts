import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/infra/prisma/prisma.module';
import { UserController } from './infra/controller/user.controller';
import { UserUseCase } from './application/use-cases/user.use-case';
import { UserService } from './application/services/user.service';
import { PrismaUserRepository } from './infra/database/prisma-user.repository';
import { PrismaService } from 'src/shared/infra/prisma/prisma.service';
import { DatabaseModule } from './infra/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserUseCase, UserService, PrismaService,
        { provide: 'IUserRepository', useClass: PrismaUserRepository }
    ],
    exports: [UserService],
})
export class UserModule { }