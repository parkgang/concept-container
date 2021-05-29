import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Router1Module } from './router1/router1.module';

import { Router2Module } from './router2/router2.module';

import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [Router1Module, Router2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/*');
  }
}
