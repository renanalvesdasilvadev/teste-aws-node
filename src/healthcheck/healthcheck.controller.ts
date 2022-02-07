import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';

@Controller('hc')
export class HealthcheckController {

    @Get()
    async health(){
        return "okay"
    }

    @Get("bd")
    async bd(){
        return "bdOk"
    }

    @Get("sistema")
    async bd(){
        return "sistemaOk"
    }

}
