import { Module } from "@nestjs/common";
import { TimbreController } from "./infra/controllers/timbres.controller";
import { TimbreUseCase } from "./uses-cases/timbre-use-case";
import { TimbreService } from "./services/timbre.service";
import { PrismaModule } from "src/shared/infra/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [TimbreController],
    providers: [TimbreUseCase, TimbreService]
})
export class TimbreModule { }