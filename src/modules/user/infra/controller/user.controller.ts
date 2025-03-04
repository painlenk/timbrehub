import { Controller, Post } from "@nestjs/common";

@Controller()
export class UserController {
    constructor() { }

    @Post('/create')
    async create() {
        return { ok: 'ok' }
    }
}