import { Module } from '@nestjs/common';
import { Router1Controller } from './router1.controller';
import { Router1Service } from './router1.service';

@Module({
  controllers: [Router1Controller],
  providers: [Router1Service],
})
export class Router1Module {}
