import { Module } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import { V1Module } from './modules/v1/v1.module';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import * as path from 'path';
import { DummyController } from './dumy/dummy.controller';

@Module({
  imports: [V1Module,
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),    
  ],
  controllers: [HealthcheckController, DummyController]

})
export class AppModule {}
