import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Router1Module } from './router1/router1.module';

@Module({
  imports: [Router1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
