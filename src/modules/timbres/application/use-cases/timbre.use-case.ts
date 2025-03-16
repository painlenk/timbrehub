import { Injectable } from "@nestjs/common";
import { TimbreService } from "../services/timbre.service";
import { CreateTimbreDto } from "../../dto/create-timbre.dto";

@Injectable()
export class TimbreUseCase {
    constructor(private readonly timbreService: TimbreService) { }
    findAllTimbres() {
        const timbres = this.timbreService.findAll()
        return timbres
    }

    async create(data: CreateTimbreDto) {
        const timbre = await this.timbreService.create(data)
        return timbre
    }
}