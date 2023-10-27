import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';

@Controller('nodejs-teste/dummy')
export class DummyController {

    @Get()
    async teste() {
        return "chegou no dummy"
    }
}
