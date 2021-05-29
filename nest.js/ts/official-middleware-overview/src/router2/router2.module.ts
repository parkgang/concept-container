import { Module } from '@nestjs/common';
import { Router2Controller } from './router2.controller';
import { Router2Service } from './router2.service';

@Module({
  controllers: [Router2Controller],
  providers: [Router2Service],
})
export class Router2Module {}
