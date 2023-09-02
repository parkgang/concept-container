import { Body, Controller, Get, Post } from '@nestjs/common';

interface TestReq {
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
  getTestPost(@Body() payLoad: TestReq) {
    // type에 맞게 payLoad가 들어오지 않아도 정상적으로 값을 읽을 수 있습니다. 인텔리 센스와 같은 api TestReq 값을 유츄할 때 사용되는 거 같습니다.
    console.log(`router2 payload: ${JSON.stringify(payLoad)}`);
    return 'router2: Post Sucessue';
  }
}
