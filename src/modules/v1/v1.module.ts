import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TerminusModule,
    ConfigModule.forRoot()
  ],
  controllers: []
})
export class V1Module {}[
  {
    "name": "teste"
  },
  {
    "name": "renan"
  }
]
