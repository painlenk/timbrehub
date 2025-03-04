import { Module } from "@nestjs/common";
import { PrismaUserRepository } from "./prisma-user.repository";
import { PrismaService } from "src/shared/infra/prisma/prisma.service";

@Module({
    providers: [PrismaUserRepository, PrismaService],
    exports: [PrismaUserRepository],
})
export class DatabaseModule { }