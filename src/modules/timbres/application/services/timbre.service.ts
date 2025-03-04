import { Injectable } from "@nestjs/common";
import { ITimbreServiceInterface } from "./timbre-service-interface";
import { PrismaService } from "src/shared/infra/prisma/prisma.service";

@Injectable()
export class TimbreService implements ITimbreServiceInterface {
    constructor(private readonly prismaService: PrismaService) { }
    async findAll(): Promise<any[]> {
        const teste = await this.prismaService.user.findMany()
        console.log(teste)
        return teste
    }

    find(id: string): any[] | null {
        return []
    }

    async create(data: any): Promise<any | null> {
        const teste = await this.prismaService.user.create({
            data: {
                name: 'teste teste',
                email: 'teste@teste.com',
            }
        })

        return teste
    }

    delete(id: string): boolean {
        return false
    }
}