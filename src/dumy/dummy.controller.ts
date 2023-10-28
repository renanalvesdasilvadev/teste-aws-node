import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';

@Controller('nodejs-teste/dummy')
export class DummyController {

    @Get()
    async teste() {
        return "chegou no dummy"
    }

    @Get('murilo')
    async murilo() {
        return "chegou no murilo"
    }

    async sleep(timeout) {
        return new Promise((resolve) => {
            setTimeout(resolve, timeout);
        })  
    }

    @Get('lais/:time')
    async lais(@Param('time') time) {
        await this.sleep(time);

        return "chegou na lais"
    }
}
