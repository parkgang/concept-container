import { Body, Controller, Get, Post } from '@nestjs/common';

interface Req {
  name: string;
  arg: number;
}

@Controller('router2')
export class Router2Controller {
  @Get()
  getPing() {
    return 'Ping: router2';
  }

  @Post()
  getTestPost(@Body() value: Req) {
    console.log(value);
    return 'router2: Post Sucessue';
  }
}
