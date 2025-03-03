import { Controller, Get } from '@nestjs/common'
import { TimbreUseCase } from '../../uses-cases/timbre-use-case'

@Controller('/timbres')
export class TimbreController {
    constructor(private readonly timbreUseCase: TimbreUseCase) { }
    @Get()
    getTimbres() {
        return this.timbreUseCase.findAllTimbres()
    }
}