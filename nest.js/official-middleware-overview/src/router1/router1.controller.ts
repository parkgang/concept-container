import { Controller, Get } from '@nestjs/common';

@Controller('router1')
export class Router1Controller {
  @Get()
  getPing() {
    return 'Ping: router1';
  }
}
