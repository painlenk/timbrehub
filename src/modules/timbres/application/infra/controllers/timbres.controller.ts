import { Controller, Get, Post } from '@nestjs/common'
import { TimbreUseCase } from '../../uses-cases/timbre-use-case'

@Controller('/timbres')
export class TimbreController {
    constructor(private readonly timbreUseCase: TimbreUseCase) { }
    @Get()
    getTimbres() {
        this.timbreUseCase.findAllTimbres()
        return { ok: 'ok' }
    }

    @Post('/create')
    create() {
        return this.timbreUseCase.create()
    }
}