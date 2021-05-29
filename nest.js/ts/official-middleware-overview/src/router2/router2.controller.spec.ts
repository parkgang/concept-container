import { Test, TestingModule } from '@nestjs/testing';
import { Router2Controller } from './router2.controller';

describe('Router2Controller', () => {
  let controller: Router2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Router2Controller],
    }).compile();

    controller = module.get<Router2Controller>(Router2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
