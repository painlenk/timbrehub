import { Module } from "@nestjs/common";
import { TimbreController } from "./infra/controllers/timbres.controller";
import { TimbreUseCase } from "./uses-cases/timbre-use-case";
import { TimbreService } from "./services/timbre-service";

@Module({
    imports: [],
    controllers: [TimbreController],
    providers: [TimbreUseCase, TimbreService]
})
export class TimbreModule { }