import { Controller, Get, Post, Body } from '@nestjs/common'
import { TimbreUseCase } from '../../application/use-cases/timbre.use-case'
import { CreateTimbreDto } from '../../dto/create-timbre.dto'

@Controller('/timbres')
export class TimbreController {
    constructor(private readonly timbreUseCase: TimbreUseCase) { }
    @Get()
    getTimbres() {
        this.timbreUseCase.findAllTimbres()
        return { ok: 'ok' }
    }

    @Post('/create')
    create(@Body() createTimbreDto: CreateTimbreDto) {
        return this.timbreUseCase.create(createTimbreDto)
    }
}