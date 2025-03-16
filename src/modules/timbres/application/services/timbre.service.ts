import { Injectable } from "@nestjs/common";
import { ITimbreServiceInterface } from "./timbre-service-interface";
import { PrismaService } from "src/shared/infra/prisma/prisma.service";
import { CreateTimbreDto } from "../../dto/create-timbre.dto";

@Injectable()
export class TimbreService implements ITimbreServiceInterface {
    constructor(private readonly prismaService: PrismaService) { }
    async findAll(): Promise<any[]> {
        const teste = await this.prismaService.timbres.findMany()
        console.log(teste)
        return teste
    }

    find(id: string): any[] | null {
        return []
    }

    async create(timbre: CreateTimbreDto): Promise<any | null> {
        const teste = this.prismaService.timbres.create({
            data: {
                title: timbre.title,
                description: timbre.description,
                userId: timbre.userId.toString(),
                fields: timbre.fields
            }
        })
        return teste
    }

    delete(id: string): boolean {
        return false
    }
}