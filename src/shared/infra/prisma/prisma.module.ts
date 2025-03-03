import { Module } from "@nestjs/common";
import { PrismaService } from "./timbre.service";

@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule { }