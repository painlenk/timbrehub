import { Module } from "@nestjs/common";
import { PrismaModule } from "src/shared/infra/prisma/prisma.module";
import { TimbreController } from "./infra/controllers/timbres.controller";
import { TimbreUseCase } from "./application/use-cases/timbre.use-case";
import { TimbreService } from "./application/services/timbre.service";

@Module({
    imports: [PrismaModule],
    controllers: [TimbreController],
    providers: [TimbreUseCase, TimbreService]
})
export class TimbreModule { }