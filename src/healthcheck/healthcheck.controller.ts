import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';

@Controller('nodejs-teste/hc')
export class HealthcheckController {

    @Get()
    async health() {
        return "okay"
    }

    @Get('bd')
    async bd() {
        return "bd-okay"
    }

}
