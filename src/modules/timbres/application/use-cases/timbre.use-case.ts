import { Injectable } from "@nestjs/common";
import { TimbreService } from "../services/timbre.service";

@Injectable()
export class TimbreUseCase {
    constructor(private readonly timbreService: TimbreService) { }
    findAllTimbres() {
        const timbres = this.timbreService.findAll()
        return timbres
    }

    async create() {
        const timbre = await this.timbreService.create({})
        return timbre
    }
}